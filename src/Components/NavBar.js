// import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import React from "react";
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
  color: inherit;
  padding: 10px;
  &:hover {
    background-color: #bbb;
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
    background-color: #bbb;
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
    background-color: #bbb;
  }
`;

export default function NavBar() {
  return (
    <Container>
      <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
        <Logo>GL-CO</Logo>
      </Link>

      <MenuContainer>
        <MenuItem href="/">홈</MenuItem>
        <MenuItem href="/writings">글 목록</MenuItem>
        <MenuItem href="/write">글쓰기</MenuItem>
        {/* <MenuItem href="/">문의</MenuItem> */}
      </MenuContainer>
      <ButtonContainer>
        <Link to="/join">
          <SignUpButton>Sign Up</SignUpButton>
        </Link>
        <Link to="/login">
          <SignInButton>Sign In</SignInButton>
        </Link>
      </ButtonContainer>
    </Container>
  );
}
