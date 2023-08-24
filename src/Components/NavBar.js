import styled from "styled-components";
const NavbarContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 40px;
`;
const Logo = styled.div`
  font-size: 30px;
  font-weight: bold;
`;

const MenuContainer = styled.div`
  margin-right: 50px;
`;
const MenuItem = styled.div``;

const ButtonContainer = styled.div`
  width: 20%;
  display: flex;
`;
const SignInButton = styled.div``;
const SignUpButton = styled.div``;

export default function NavBar() {
  return (
    <NavbarContainer>
      <Logo>GL-CO</Logo>
      <MenuContainer>
        <MenuItem></MenuItem>
      </MenuContainer>
      <a href="#home">홈</a>
      <a href="#about">소개</a>
      <a href="#service">서비스</a>
      <a href="#contact">문의</a>
      <ButtonContainer>
        <SignInButton>Sign In</SignInButton>
        <SignUpButton>Sign Up</SignUpButton>
      </ButtonContainer>
    </NavbarContainer>
  );
}
