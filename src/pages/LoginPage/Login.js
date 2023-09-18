import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import NavBar from "../../Components/NavBar";

const Login = () => {
  return (
    <div>
      <NavBar></NavBar>
      <LoginWrapper>
        <Container>
          <SignUpcontainer>
            <h1>반갑습니다!</h1>
            <p> 회원가입 하러 가기 </p>
            <JoinLink href="/Join"> Sign In </JoinLink>
          </SignUpcontainer>

          <FormContainer>
            <form action="#">
              <h1>Sign In</h1>
              <Label>
                <Input type="email" placeholder="Email" />
              </Label>

              <Label>
                <Input type="password" placeholder="Password" />
              </Label>

              <a href="#">Forgot your password?</a>
              <SubmitButton>Sign in</SubmitButton>
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
