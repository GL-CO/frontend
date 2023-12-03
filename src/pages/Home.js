import NavBar from "../Components/NavBar";
import styled from "styled-components";
import React, { useEffect, useState } from "react";
import { LoginAuthToken } from "../Components/atoms";
import { useRecoilState, useRecoilValue } from "recoil";
import { Link } from "react-router-dom";
import { GC2_URL } from "../Components/atoms";
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
  justify-content: center;
  /* 아래의 width 속성을 조정하여 가로 길이를 지정하세요 */
  width: 10%;
  margin: 0 auto; 수평 가운데 정렬을 위해 추가
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
    width: 80%;
  }
  &:focus {
    width: 80%;
    &::placeholder {
      color: transparent;
    }
  }
`;
const SearchIcon = styled.svg`
  &:hover {
    cursor: pointer;
  }
`;
// const Container = styled.div`
//   display: grid;
//   grid-template-columns: repeat(2, 1fr);
//   gap: 10px;
//   width: 80%;
//   height: 600px;
//   flex-wrap: wrap;
//   background-color: #f0f0f0;
//   border: 1px solid #ccc;
//   margin: 50px auto;
// // `;
// const Grid = styled.div`
//   background-color: #7fffd4;
//   margin: 50px auto;
//   width: 300px;
//   height: 200px;
//   background-color: dodgerblue;
//   color: white;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   margin-bottom: 10px;
//   border-radius: 20px;
// `;
const StoryProfile = styled.div`
  width: 25px;
  background-color: #bbb;
  padding: 10px;
  border-radius: 20px;
  margin-right: auto;
  margin-left: 15px;
  white-space: nowrap;
  text-align: center;
`;
const StoryText = styled.div`
  margin-right: auto;
  width: 100px;
  overflow-wrap: break-word;
`;
const Container = styled.div`
  display: flex;
  justify-content: center;
`;
const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr); // 5열로 설정
  grid-template-rows: repeat(2, 1fr); // 2행으로 설정
  gap: 16px; // 박스 사이의 간격
`;
const Item = styled.div`
  width: 100%; // 박스의 너비
  height: 200px; // 박스의 높이
  background-color: #ddd; // 박스의 배경색
  display: flex;
  flex-direction: column; // 자식 요소들을 수직으로 정렬
  justify-content: center;
  align-items: center;
`;

//메인페이지
export default function Home() {
  const token = useRecoilValue(LoginAuthToken);
  console.log("token : ", token);
  const [writingsData, setWritingsData] = useState({
    totalPageCount: 0,
    currentPageNumber: 0,
    totalContentCount: 0,
    contents: [
      {
        writingId: 0,
        userId: 0,
        nickname: "",
        title: "",
        content: "",
        languageTag: "",
        createdAt: "",
        updatedAt: "",
      },
    ],
  });
  const pageSize = 4;
  const pageNumber = 0;
  useEffect(() => {
    fetchWritings(pageNumber);
  }, []);
  const GC2 = useRecoilState(GC2_URL);
  const fetchWritings = (pageNumber) => {
    const query = `?pageSize=${pageSize}&pageNumber=${pageNumber}`;
    const URL = `${GC2[0]}:8080/v1/writing${query}`;
    const authToken = getTokenFromSessionStorage();
    fetch(URL, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${authToken}`,
      },
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error(`writing Response Error : ${res.status}`);
        }
        return res.json();
      })
      .then((data) => {
        console.log("response : ", data);
        setWritingsData(data);
      })
      .catch((err) => {
        console.error(err);
      });
  };
  function getTokenFromSessionStorage() {
    return sessionStorage.getItem("authToken");
  }
  return (
    <div>
      <NavBar></NavBar>
      <BgImage>
        <Title>소개</Title>
        <SubTitle>추가 소개</SubTitle>
      </BgImage>
      <Link to="/writings">
        <Container>
          <Grid>
            {writingsData.contents.map((v, i) => (
              <Link to={`/${v.writingId}`}>
                <Item key={i}>
                  <h3>{v.title}</h3>
                  <p>{v.content}</p>
                </Item>
              </Link>
            ))}
          </Grid>
        </Container>
        <OptionContainer>
          <form>
            <Search type="text" placeholder="검색"></Search>
          </form>
          <SearchIcon
            xmlns="http://www.w3.org/2000/svg"
            x="03px"
            y="0px"
            width="24"
            height="24"
            viewBox="0 0 50 50"
          >
            <path d="M 21 3 C 11.654545 3 4 10.654545 4 20 C 4 29.345455 11.654545 37 21 37 C 24.701287 37 28.127393 35.786719 30.927734 33.755859 L 44.085938 46.914062 L 46.914062 44.085938 L 33.875 31.046875 C 36.43682 28.068316 38 24.210207 38 20 C 38 10.654545 30.345455 3 21 3 z M 21 5 C 29.254545 5 36 11.745455 36 20 C 36 28.254545 29.254545 35 21 35 C 12.745455 35 6 28.254545 6 20 C 6 11.745455 12.745455 5 21 5 z"></path>
          </SearchIcon>
        </OptionContainer>
      </Link>
    </div>
  );
}
