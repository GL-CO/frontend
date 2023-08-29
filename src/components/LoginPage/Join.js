import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import axios from "axios";
import { useQuery } from "react-query";
import dummyData from "../../dummyData.json";
import { useMutation } from "react-query";
async function signUpUser({ username }) {
  const res = await fetch("/api/users/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ username }),
  });
  if (!res.ok) {
    const errorData = await res.json();
    throw new Error(errorData.error);
  }
  const data = await res.json();
  return data;
}
async function testSignUpUser() {
  const userData = { username: "user0" };
  try {
    const res = await signUpUser(userData);
    console.log("로그인성공", res);
  } catch (error) {
    console.error("로그인실패", error.message);
  }
}
const Join = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [username, setUsername] = useState("");
  const [nickname, setNickname] = useState("");

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

  const mutation = useMutation(signUpUser);
  const handleSignUp = (event) => {
    event.preventDefault();
    mutation.mutate({ username });
    console.log(mutation);
  };
  testSignUpUser();
  return (
    <JoinWrapper>
      <Container>
        <SignIncontainer>
          <h1> 환영합니다! </h1>
          <p> 로그인 하러 가기 </p>
          <LoginLink href="/Login"> Sign Up </LoginLink>
        </SignIncontainer>

        <FormContainer>
          <form action="/join">
            <h1>Sign Up</h1>
            <Label>
              <Input
                type="email"
                placeholder="email"
                onChange={handleEmailChange}
              />
            </Label>

            <Label>
              <Input
                type="password"
                placeholder="password"
                onChange={handlePasswordChange}
              />
            </Label>

            <Label>
              <Input
                type="password"
                placeholder="confirmPassword"
                onChange={handleConfirmPasswordChange}
              />
            </Label>

            <Label>
              <Input
                type="username"
                placeholder="username"
                onChange={handleUsernameChange}
              />
            </Label>

            <Label>
              <Input
                type="username"
                placeholder="nickname"
                onChange={handleNicknameChange}
              />
            </Label>

            <SubmitButton onClick={handleSignUp}>Sign Up</SubmitButton>
          </form>
        </FormContainer>
      </Container>
    </JoinWrapper>
  );
};

export default Join;

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
