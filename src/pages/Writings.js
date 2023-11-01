import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import NavBar from "../Components/NavBar";
import { useRecoilState } from "recoil";
import { GC2_URL } from "../Components/atoms";
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const OptionContainer = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
  padding: 16px;
`;
const Tag = styled.div`
  align-items: center;
  width: 10%;
  background-color: #bbb;
  border: 1px solid #ccc;
  padding: 12px;
  border-radius: 20px;
  margin-right: auto;
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
const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr); /* 2열로 설정 */
  gap: 10px; /* 열 사이의 간격 조절 */
  justify-content: center;
`;
const PageNumbers = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 10px;
`;
const PageNumber = styled.button`
  background-color: ${(props) => (props.active ? "#007bff" : "transparent")};
  color: ${(props) => (props.active ? "#fff" : "#007bff")};
  border: 1px solid #007bff;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  margin: 0 5px;
  cursor: pointer;
`;

const Writing = styled.div``;
//모든 글 보기
export default function Writings() {
  const [writingsData, setWritingsData] = useState([]); //api data
  const itemsPerPage = 10; // 한 페이지에 표시할 아이템 수
  const [currentPage, setCurrentPage] = useState(1); // 현재 페이지
  const [visibleItems, setVisibleItems] = useState([]); //페이지에 보이는 데이터
  const [isSuccess, setIsSuccess] = useState(false);
  const GC2 = useRecoilState(GC2_URL);
  const addData = () => {
    // setWritingsData((prevData) => [...prevData, dummyData]);
  };
  //세션스토리지 토큰
  function getTokenFromSessionStorage() {
    return sessionStorage.getItem("authToken");
  }
  // API 함수
  const fetchWritings = () => {
    const pageSize = 10;
    const pageNumber = 0;
    const query = `?pageSize=${pageSize}&pageNumber=${pageNumber}`;
    const URL = `${GC2[0]}/v1/writing${query}`;
    console.log(URL);
    const authToken = getTokenFromSessionStorage();
    console.log("getToken : ", authToken);
    fetch(URL, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${authToken}`,
      },
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error(`Response Error : ${res.status}`);
        }
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setWritingsData(data);
        setIsSuccess(!isSuccess);
        console.log("fetch 성공", data);
      })
      .catch((err) => {
        console.error(err);
      });
  };
  //전체글목록 불러오기, 컴포넌트 처음 렌더링시에만 실행
  useEffect(() => {
    fetchWritings();
    addData();
  }, []);
  // 페이지 숫자 PageNumber
  useEffect(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const itemsToShow = writingsData.slice(startIndex, endIndex);
    setVisibleItems(itemsToShow);
  }, [currentPage]);
  const totalPages = Math.ceil(writingsData.length / itemsPerPage);

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
          {/* {visibleItems.map((story, i) => (
            <Box key={story.id}>
              <ProfileImage src={story.profileUrl} alt="loading" />
              <Link to={`/writing/${story.contents[i].writingId}`}>
                {story.contents[i].languageTag}
                <h2>{story.contents[i].title}</h2>
                <p>{story.contents[i].content}</p>
              </Link>
            </Box>
          ))} */}
        </Row>
        {/* <Row>
          {visibleItems.map((story) => (
            <Box key={story.id}>
              <ProfileImage src={story.profileUrl} alt="loading" />
              <Content>{story.content}</Content>
            </Box>
          ))}
        </Row> */}
        <PageNumbers>
          {Array.from({ length: totalPages }).map((_, index) => (
            <PageNumber
              key={index}
              active={index + 1 === currentPage}
              onClick={() => setCurrentPage(index + 1)}
            >
              {index + 1}
            </PageNumber>
          ))}
        </PageNumbers>
      </Container>
    </div>
  );
}
