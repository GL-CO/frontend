import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import React, { useEffect, useState}from 'react';

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

const LogoutButton = styled.button`
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
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const storedLoggedIn = localStorage.getItem("isLoggedIn");
    if (storedLoggedIn === "true") {
      setIsLoggedIn(true);
    }
  }, []);

  const handleLogout = () => {
    localStorage.setItem("isLoggedIn", "false");
    setIsLoggedIn(false);
    navigate('/');
  };

  return (
    <Container>
      <Logo>GL-CO</Logo>
      <MenuContainer>
        <MenuItem href="/">홈</MenuItem>
        <MenuItem href="/stories">글 목록</MenuItem>
        <MenuItem href="/write">글쓰기</MenuItem>
        <MenuItem href="/mypage">마이페이지</MenuItem>
        {/* <MenuItem href="/">문의</MenuItem> */}
      </MenuContainer>
      <ButtonContainer>
        {isLoggedIn ? (
          <LogoutButton onClick= {handleLogout}> Logout </LogoutButton>
        ) : (
          <>
             <Link to="/login">
              <SignInButton>Sign In</SignInButton>
             </Link>

             <Link to="/join">
            <SignUpButton>Sign Up</SignUpButton>
            </Link>
          </>
        )}
      </ButtonContainer>
    </Container>
  );
}
