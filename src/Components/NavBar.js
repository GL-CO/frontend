// import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 50px;
  white-space: nowrap;
`;
const Logo = styled.div`
  margin-left: 10%;
  font-size: 30px;
  font-weight: bold;
`;

const MenuContainer = styled.div``;
const MenuItem = styled.a`
  margin-right: 70px;
  text-decoration: none;
  &:hover {
    background-color: red;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  margin-right: 10%;
`;
const SignUpButton = styled.button`
  border: none;
  padding: 10px;
  cursor: pointer;
  font-size: 15px;
  background-color: white;
  &:hover {
    background-color: red;
  }
`;
const SignInButton = styled.button`
  margin-right: 30px;
  border: none;
  padding: 10px;
  cursor: pointer;
  font-size: 15px;
  margin-left: 20px;
  background-color: white;
  &:hover {
    background-color: red;
  }
`;

export default function NavBar() {
  return (
    <Container>
      <Logo>GL-CO</Logo>
      <MenuContainer>
        <MenuItem href="/">홈</MenuItem>
        <MenuItem href="/">게시판</MenuItem>
        <MenuItem href="/write">글쓰기</MenuItem>
        {/* <MenuItem href="/">문의</MenuItem> */}
      </MenuContainer>
      <ButtonContainer>
        <Link to="login">
          <SignUpButton>Sign Up</SignUpButton>
        </Link>
        <Link to="join">
          <SignInButton>Sign In</SignInButton>
        </Link>
      </ButtonContainer>
    </Container>
  );
}
