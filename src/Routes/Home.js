import NavBar from "../Components/NavBar";
import styled from "styled-components";
const BgImage = styled.div`
  justify-content: center;
  display: flex;
  width: 90%;
  height: 300px;
  background-color: #f0f0f0;
  border: 1px solid #ccc;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 50px auto;
`;
const Title = styled.h2`
  font-size: 20px;
  margin-bottom: 8px;
`;
const SubTitle = styled.p`
  font-size: 14px;
`;
const OptionContainer = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
  padding: 16px;
  margin-top: 200px;
  //위에 여백 추가로두기
  /* background-color: #f0f0f0; */
`;
const Tag = styled.div`
  align-items: center;
  width: 10%;
  background-color: #bbb;
  border: 1px solid #ccc;
  padding: 12px;
  border-radius: 20px;
  margin-right: auto;
  margin-left: 100px;
`;

const Search = styled.input`
  width: 10%;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 8px;
  margin-right: 10px;
  transition: width 0.2s ease;
  &:hover {
    width: 30%;
  }
  &:focus {
    width: 30%;
    &::placeholder {
      color: transparent;
    }
  }
`;
const SearchIcon = styled.svg`
  margin-right: auto;
  &:hover {
    cursor: pointer;
  }
`;
export default function Home() {
  return (
    <div>
      <NavBar></NavBar>
      <BgImage>
        <Title>소개</Title>
        <SubTitle>추가 소개</SubTitle>
      </BgImage>
      <OptionContainer>
        <Tag>I'm tag</Tag>
        <Search type="text" placeholder="검색"></Search>
        <SearchIcon
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          width="30"
          height="30"
          viewBox="0 0 50 50"
        >
          <path d="M 21 3 C 11.654545 3 4 10.654545 4 20 C 4 29.345455 11.654545 37 21 37 C 24.701287 37 28.127393 35.786719 30.927734 33.755859 L 44.085938 46.914062 L 46.914062 44.085938 L 33.875 31.046875 C 36.43682 28.068316 38 24.210207 38 20 C 38 10.654545 30.345455 3 21 3 z M 21 5 C 29.254545 5 36 11.745455 36 20 C 36 28.254545 29.254545 35 21 35 C 12.745455 35 6 28.254545 6 20 C 6 11.745455 12.745455 5 21 5 z"></path>
        </SearchIcon>
      </OptionContainer>
      <div className="밑에네모박스">
        <div className="작은박스">
          <div className="프로필"></div>
          <div className="텍스트">1</div>
        </div>
      </div>
    </div>
  );
}
