import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
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

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const Content = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const Item = styled.div`
  width: 50%;
  padding: 10px;
  box-sizing: border-box;
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
  const [writingsData, setWritingsData] = useState([]); //api data
  const [currentPage, setCurrentPage] = useState(0); // 현재 페이지
  const pageSize = 10;
  const [pageNumber, setPageNumber] = useState(10);
  const [totalPageCount, setTotalPageCount] = useState(0);

  // let currentPageNumber; // 현재 페이지 번호
  // let totalContentCount; // 전체 글 수

  const GC2 = useRecoilState(GC2_URL);
  //세션스토리지 토큰
  function getTokenFromSessionStorage() {
    return sessionStorage.getItem("authToken");
  }
  // API 함수
  const fetchWritings = () => {
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
          throw new Error(`Response Error : ${res.status}`);
        }
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setWritingsData(data);
        setTotalPageCount(data.totalPageCount);
      })
      .catch((err) => {
        console.error(err);
      });
  };
  //전체글목록 불러오기, 컴포넌트 처음 렌더링시에만 실행
  useEffect(() => {
    fetchWritings();
  }, []);
  // 페이지 번호 클릭 시 페이지 변경
  const handlePageClick = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // 현재 페이지의 내용 계산
  const startIndex = (currentPage - 1) * pageNumber;
  const endIndex = startIndex + pageNumber;

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
      <div>
        <Container>
          <Content>
            {Array.from({ length: pageNumber }, (_, index) => (
              <Item key={index}>Content {startIndex + index + 1}</Item>
            ))}
          </Content>
        </Container>
        <PageNumbersContainer>
          {[...Array(totalPageCount)].map((_, index) => (
            <PageNumber
              key={index}
              onClick={() => handlePageClick(index + 1)}
              selected={currentPage === index + 1}
            >
              {index + 1}
            </PageNumber>
          ))}
        </PageNumbersContainer>
      </div>
    </div>
  );
}
