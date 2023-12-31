import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import NavBar from "../../Components/NavBar";
import { useRecoilState } from "recoil";
import { GC2_URL } from "../../Components/atoms";
import { LoginAuthToken } from "../../Components/atoms";
//로그인
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showEmailError, setShowEmailError] = useState(false);
  const [showPasswordError, setShowPasswordError] = useState(false);
  const navigate = useNavigate();
  const GC2 = useRecoilState(GC2_URL);
  const [token, setToken] = useRecoilState(LoginAuthToken);
  const [loggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    const isLoggedIn = localStorage.getItem("isLoggedIn");
    if (isLoggedIn === "true") {
      setLoggedIn(true);
    }
  }, []);

  const saveTokenToSessionStorage = (token) => {
    sessionStorage.setItem("authToken", token);
    console.log(token);
  };
  const setAuthToken = (newToken) => {
    setToken(newToken);
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    if (!email) {
      setShowEmailError(true);
      return;
    } else {
      setShowEmailError(false);
    }

    if (!password) {
      setShowPasswordError(true);
      return;
    } else {
      setShowPasswordError(false);
    }

    try {
      const URL = `${GC2[0]}:8080/v1/user/login`;
      const response = await axios.post(URL, {
        email,
        password,
      });
      if (response.status === 200) {
        console.log("로그인 성공", response.data);
        // navigate("/");
        setToken(response.data.accessToken);
        saveTokenToSessionStorage(response.data.accessToken);
        localStorage.setItem("isLoggedIn", "true");
        setLoggedIn(true);
        navigate("/");
      } else {
        console.error("로그인 실패", response.data);
      }
    } catch (error) {
      console.error("로그인 실패", error);
    }
  };

  const handleLogout = () => {
    localStorage.setItem("isLoggedIn", "false");
    setLoggedIn(false);
    navigate("/");
  };

  return (
    <div>
      <NavBar></NavBar>
      <LoginWrapper>
        <Container>
          <SignUpcontainer>
            <h1>반갑습니다!</h1>
            <p> 회원가입 하러 가기 </p>
            <JoinLink href="/Join"> Sign Up </JoinLink>
          </SignUpcontainer>

          <FormContainer>
            <form onSubmit={handleLogin}>
              <h1>Sign In</h1>
              <Label>
                <Input
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    setShowEmailError(false);
                  }}
                />
              </Label>

              {showEmailError && <ErrorText>Email을 입력해주세요.</ErrorText>}

              <Label>
                <Input
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                    setShowPasswordError(false);
                  }}
                />
              </Label>

              {showPasswordError && (
                <ErrorText>Password를 입력해주세요.</ErrorText>
              )}
              {loggedIn ? (
                <LogoutButton type="button" onClick={handleLogout}>
                  로그아웃
                </LogoutButton>
              ) : (
                <SubmitButton type="submit"> Sign in </SubmitButton>
              )}
              <a href="/">Forgot your password?</a>
              {/* <SubmitButton type="submit">Sign in</SubmitButton> */}
            </form>
          </FormContainer>
        </Container>
      </LoginWrapper>
    </div>
  );
};

export default Login;

const LoginWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: #fff;
  color: #000;
  overflow: hidden;
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

const SignUpcontainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px;
  background: #8f4646;
  width: 50%;
  text-align: center;

  h1 {
    font-size: 24px;
    margin-bottom: 20px;
    color: #fff;
  }

  p {
    color: #fff;
    margin-bottom: 20px;
  }
`;

const FormContainer = styled.div`
  background: #fff0f0;
  padding: 20px;
  width: 50%;

  h1 {
    font-size: 24px;
    margin-bottom: 20px;
    text-align: center;
  }

  a {
    text-align: center;
  }

  form {
    display: flex;
    flex-direction: column;

    a {
      color: #000;
      text-decoration: none;
      margin-bottom: 20px;
      font-size: 14px;

      &:hover {
        text-decoration: underline;
      }
    }
  }
`;
const Label = styled.label`
  display: block;
  text-align: center;
`;
const Input = styled.input`
  border: none;
  border-bottom: 2px solid #800000; /* 밑줄 추가 */
  padding: 10px;
  font-size: 16px;
  background: transparent; /* 입력란 배경을 투명하게 설정 */
  margin-bottom: 20px;
`;

const SubmitButton = styled.button`
  background: #800000;
  color: #fff;
  padding: 10px;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  transition: background 0.3s;

  &:hover {
    background: #945050;
  }
`;

const JoinLink = styled.a`
  background: transparent;
  border: 2px solid #fff;
  color: #fff;
  padding: 10px 20px;
  cursor: pointer;
  transition: background 0.3s, color 0.3s;
  font-size: 16px;

  &:hover {
    background: #fff;
    color: #ff416c;
  }
`;

const ErrorText = styled.div`
  color: red;
  font-size: 14px;
  margin-top: 5px;
  text-align: center;
`;

const LogoutButton = styled.button`
  background: #800000;
  color: #fff;
  padding: 10px;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  transition: background 0.3s;

  &:hover {
    background: #945050;
  }
`;
