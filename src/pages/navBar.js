import styled from "styled-components";
const NavbarContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 50px 200px;
`;
const Logo = styled.div`
  font-size: 30px;
  font-weight: bold;
  /* margin-right: -100px; */
`;

const MenuContainer = styled.div`
  margin-right: 50px;
  display: flex;
`;
const MenuItem = styled.a`
  margin-right: 70px;
`;

const ButtonContainer = styled.div`
  width: 20%;
  display: flex;
  /* justify-content: space-between; */
`;
const SignInButton = styled.div`
  margin-right: 30px;
  background-color: ;
`;
const SignUpButton = styled.div``;

export default function NavBar() {
  return (
    <NavbarContainer>
      <Logo>GL-CO</Logo>
      <MenuContainer>
        <MenuItem href="/">홈</MenuItem>
        <MenuItem href="/">소개</MenuItem>
        <MenuItem href="/home">서비스</MenuItem>
        <MenuItem href="/home">문의</MenuItem>
      </MenuContainer>
      <ButtonContainer>
        <SignInButton>Sign In</SignInButton>
        <SignUpButton>Sign Up</SignUpButton>
      </ButtonContainer>
    </NavbarContainer>
  );
}
