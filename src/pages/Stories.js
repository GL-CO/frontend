import NavBar from "../Components/NavBar";
import styled from "styled-components";
import React from "react";

const OptionContainer = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
  padding: 16px;
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
const Box = styled.div`
  display: flex;
  border: 1px solid #ccc;
  padding: 10px;
  margin: 10px;
  align-items: center;
`;

const ProfileImage = styled.img`
  width: 50px;
  height: 50px;
  margin-right: 10px;
`;

const Content = styled.div``;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const Button = styled.button`
  background-color: #007bff;
  color: #fff;
  border: none;
  padding: 10px 20px;
  margin-top: 10px;
  cursor: pointer;
`;

export default function Stories() {
  const storiesData = [
    {
      id: 1,
      profileUrl: "URL_프로필_이미지_주소_1",
      content: "111111111111111111111111111",
    },
    {
      id: 2,
      profileUrl: "URL_프로필_이미지_주소_2",
      content: "222222222222222222222222222",
    },
    {
      id: 3,
      profileUrl: "URL_프로필_이미지_주소_2",
      content: "222222222222222222222222222",
    },
    {
      id: 4,
      profileUrl: "URL_프로필_이미지_주소_2",
      content: "222222222222222222222222222",
    },
    // 여기에 더 많은 데이터를 추가할 수 있습니다.
  ];
  return (
    <div>
      <NavBar></NavBar>
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
      <Container>
        <Row>
          {storiesData.map((story) => (
            <Box key={story.id}>
              <ProfileImage src={story.profileUrl} alt="loading" />
              <Content>{story.content}</Content>
            </Box>
          ))}
        </Row>
        <Button>더 보기</Button>
      </Container>
    </div>
  );
}
