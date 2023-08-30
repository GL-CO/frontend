import styled from "styled-components";
const NavbarContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 50px 100px;
  overflow: hidden;
  white-space: nowrap;
`;
const Logo = styled.div`
  font-size: 30px;
  font-weight: bold;
`;

const MenuContainer = styled.div`
  display: flex;
  justify-content: space-around;
  margin-right: 50px;
  align-items: center;
`;
const MenuItem = styled.a`
  margin-right: 70px;
  text-decoration: none;
  padding: 10px;
  /* color: #fff; */
  &:hover {
    background-color: red;
  }
`;

const ButtonContainer = styled.div`
  width: 50%;
  display: flex;
  overflow: hidden;
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
        <MenuItem href="/home">홈</MenuItem>
        <MenuItem href="/home">소개</MenuItem>
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
