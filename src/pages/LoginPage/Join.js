import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import NavBar from "../../Components/NavBar";
import { useRecoilState } from "recoil";
import { GC2_URL } from "../../Components/atoms";
//회원가입
const Join = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [username, setUsername] = useState("");
  const [nickname, setNickname] = useState("");
  const [userData, setUserData] = useState([]);
  const [isSuccess, setIsSuccess] = useState(false);
  const GC2 = useRecoilState(GC2_URL);

  const handleEmailChange = (event) => {
    setEmail(event.currentTarget.value);
  };
  const handlePasswordChange = (event) => {
    setPassword(event.currentTarget.value);
  };
  const handleConfirmPasswordChange = (event) => {
    setConfirmPassword(event.currentTarget.value);
  };
  const handleUsernameChange = (event) => {
    setUsername(event.currentTarget.value);
  };
  const handleNicknameChange = (event) => {
    setNickname(event.currentTarget.value);
  };
  const handleError = () => {
    if (password !== confirmPassword) {
      alert("비밀번호가 같지 않습니다.");
      return false;
    }
    return true;
  };
  const toggleBoxButton = () => {
    setIsSuccess(!isSuccess);
  };
  const handleSubmit = (e) => {
    // if(!) 로그인박스 화면떠서 로그인유도
    e.preventDefault();
    const userData = {
      email: email,
      password: password,
      name: username,
      nickname: nickname,
      usingLanguage: "한국어",
      learningLanguage: "English",
    };
    onClickSignUp(userData);
  };
  const onClickSignUp = (userData) => {
    const URL = `${GC2[0]}:8080/v1/user/signup`;
    // const URL = "8080/v1/user/signup";
    fetch(URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error(`Response Error : ${res.status}`);
        }
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setUserData(data);
        setIsSuccess(!isSuccess);
      })
      .catch((err) => {
        console.error(err);
      });
  };
  // console.log("userData : ", userData);
  return (
    <div>
      <NavBar></NavBar>
      <JoinWrapper>
        {isSuccess && (
          <Success>
            <p>회원가입이 완료되었습니다.</p>
            <br />
            <Link to="/login">
              <button>로그인</button>
            </Link>
          </Success>
        )}
        <button onClick={toggleBoxButton}>박스 치우기</button>

        <Container>
          <SignIncontainer>
            <h1> 환영합니다! </h1>
            <p> 로그인 하러 가기 </p>
            <LoginLink href="/Login"> Sign Up </LoginLink>
          </SignIncontainer>

          <FormContainer>
            <form action="/join" onSubmit={handleSubmit}>
              <h1>Sign Up</h1>
              <Label>
                <Input
                  type="email"
                  placeholder="email"
                  onChange={handleEmailChange}
                  required
                />
              </Label>

              <Label>
                <Input
                  type="password"
                  placeholder="password"
                  onChange={handlePasswordChange}
                  required
                />
              </Label>

              <Label>
                <Input
                  type="password"
                  placeholder="confirmPassword"
                  onChange={handleConfirmPasswordChange}
                  required
                />
              </Label>

              <Label>
                <Input
                  type="username"
                  placeholder="username"
                  onChange={handleUsernameChange}
                  required
                />
              </Label>

              <Label>
                <Input
                  type="username"
                  placeholder="nickname"
                  onChange={handleNicknameChange}
                  required
                />
              </Label>

              <SubmitButton>Sign Up</SubmitButton>
            </form>
          </FormContainer>
        </Container>
      </JoinWrapper>
    </div>
  );
};

export default Join;
const Success = styled.div`
  position: absolute; /* 절대 위치로 설정 */
  top: 30%; 화면 상단에 위치
  left: 50%; 화면 왼쪽에 위치
  transform: translate(50%, 50%);
  background-color: white; /* 배경색 설정 */
  z-index: 2; /* 화면 맨 앞에 오도록 높은 z-index 값 설정 */
  padding: 100px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2); /* 그림자 효과 추가 (선택 사항) */
`;
const JoinWrapper = styled.div`
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

const SignIncontainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
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
  border-bottom: 2px solid #800000; /* 밑줄 */
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

const LoginLink = styled.a`
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
//이메일 인증Form
// const FormContainer = styled.div`
//   background-color: #ffffff;
//   padding: 20px;
//   border-radius: 5px;
//   box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
//   width: 300px;
//   margin: 0 auto;
// `;

// const Label = styled.label`
//   display: block;
//   font-weight: bold;
// `;

// const Input = styled.input`
//   width: 100%;
//   padding: 10px;
//   border: 1px solid #ccc;
//   border-radius: 3px;
// `;

// const emailCertificationForm = () => {
//   return (
//     <FormContainer>
//       <form action="/join">
//         <h1>Sign Up</h1>
//         <Label>
//           <Input type="email" placeholder="email" required />
//         </Label>
//       </form>
//     </FormContainer>
//   );
// };

// export default emailCertificationForm;
