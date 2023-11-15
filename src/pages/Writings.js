import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";
import NavBar from "../Components/NavBar";
import { useRecoilState } from "recoil";
import { GC2_URL } from "../Components/atoms";
const WritingContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const OptionContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
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
  width: 300px;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 8px;
  margin-right: 10px;
`;
const SearchIcon = styled.svg`
  &:hover {
    cursor: pointer;
  }
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
`;
const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr); // 5열로 설정
  grid-template-rows: repeat(5, 1fr); // 2행으로 설정
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

const PageNumbersContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

const PageNumber = styled.div`
  cursor: pointer;
  margin: 5px;
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 5px;
  &:hover {
    background-color: #f0f0f0;
  }
  ${({ selected }) =>
    selected &&
    `
    background-color: #007bff;
    color: white;
  `}
`;
//모든 글 보기
export default function Writings() {
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
  const pageSize = 10;
  const [pageNumber, setPageNumber] = useState(0); //api로 요청할 페이지 숫자
  const [currentPage, setCurrentPage] = useState(0); // ?
  const [totalPageCount, setTotalPageCount] = useState(0);
  const location = useLocation();
  // let currentPageNumber; // 현재 페이지 번호
  // let totalContentCount; // 전체 글 수

  const GC2 = useRecoilState(GC2_URL);
  //세션스토리지 토큰
  function getTokenFromSessionStorage() {
    return sessionStorage.getItem("authToken");
  }
  // API 함수
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
        setTotalPageCount(data.totalPageCount);
      })
      .catch((err) => {
        console.error(err);
      });
  };
  //전체글목록 불러오기, 컴포넌트 처음 렌더링시에만 실행
  useEffect(() => {
    fetchWritings(pageNumber);
  }, []);
  // 페이지 번호 클릭 시 페이지 변경
  const handlePageClick = (page) => {
    setPageNumber(page);
    console.log(page);
    fetchWritings(page); // 페이지 번호에 해당하는 글 목록을 가져오도록 수정
  };

  const [searchData, setSearchData] = useState({
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
  const [searchQuery, setSearchQuery] = useState({
    languageTag: "English",
    keyword: "",
    pageNumber: 0,
    pageSize: pageSize,
  });
  const handleSearchSubmit = (e) => {
    e.preventDefault();
    fetchSearch(searchData);
    //이후 fetchSearch가 완료되서 searchData가 바뀌면 리렌더링or 새로고침
  };
  const handleSearchChange = (e) => {
    const word = e.target.value;
    setSearchQuery({ ...searchQuery, keyword: word });
  };
  const fetchSearch = () => {
    const query = `?languageTag=${searchQuery.languageTag}&keyword=${searchQuery.keyword}&pageNumber=${searchQuery.pageNumber}&pageSize=${pageSize}`;
    const URL = `${GC2[0]}:8080/v1/writing/search${query}`;
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
          throw new Error(`Response Error : ${res.status}`);
        }
        return res.json();
      })
      .then((data) => {
        console.log("search Response : ", data);
        setSearchData(data);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <div>
      <NavBar></NavBar>
      <Container>
        <Grid>
          {writingsData.contents.map((v, i) => (
            <Link to={`${location.pathname}/${v.writingId}`}>
              <Item key={i}>
                <h3>{v.title}</h3>
                <p>{v.content}</p>
              </Item>
            </Link>
          ))}
        </Grid>
      </Container>
      <PageNumbersContainer>
        {[...Array(totalPageCount)].map((_, index) => (
          <PageNumber
            key={index}
            onClick={() => handlePageClick(index)} //배열인덱스 오차로 +1
            selected={currentPage === index + 1}
          >
            {index + 1}
          </PageNumber>
        ))}
      </PageNumbersContainer>
      <OptionContainer>
        <form onSubmit={handleSearchSubmit}>
          <Search
            type="text"
            placeholder="검색"
            onChange={handleSearchChange}
          ></Search>
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
    </div>
  );
}
