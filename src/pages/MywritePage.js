import React, { useState, useEffect } from "react";
import NavBar from "../Components/NavBar";
import styled from 'styled-components';
import { Link } from "react-router-dom";
import { GC2_URL } from "../Components/atoms";
import { useRecoilState } from "recoil";

function MywritePage () {
  const pageSize = 5;
  const [pageNumber, setPageNumber] = useState(0);
  const initialDisplayCount = 5;
  const [displayCount, setDisplayCount] = useState(initialDisplayCount);
  const [userWritings, setUserWritings] = useState([]);
  const [GC2] = useRecoilState(GC2_URL);
  const [writepageData, setWritePageData] = useState({
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

  function getTokenFromSessionStorage() {
    return sessionStorage.getItem("authToken");
  }

  const fetchData = () => {
    const query = `?pageSize=${pageSize}&pageNumber=${pageNumber}`; // 쿼리 파라미터 생성
    const URL = `${GC2}:8080/v1/user/writings/my${query}`;
    const authToken = getTokenFromSessionStorage();

    fetch(URL, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${authToken}`,
        },
      })
      .then((response)=>{
        if (!response.ok) {
          throw new Error(`writing Response Error : ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        console.log ("response : ", data);
        setWritePageData(data);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleLoadMore = () => {
    setDisplayCount(displayCount + 5);
  };

  return (
    <div>
      <NavBar></NavBar>
      <MywriteContainer>
        <MywriteTitle>내가 쓴 글 목록</MywriteTitle>
        <MywriteTable>
          <thead>
            <tr>
              <MywriteTableHeader>번호:{writepageData.writingId}</MywriteTableHeader>
              <MywriteTableHeader>제목:{writepageData.title} </MywriteTableHeader>
              <MywriteTableHeader>글쓴이:{writepageData.nickname} </MywriteTableHeader>
              <MywriteTableHeader>날짜: {writepageData.createdAt}</MywriteTableHeader>
            </tr>
          </thead>
          <tbody>
            {writepageData.contents.map((blog, index) => (
              <tr key={index}>
                <MywriteTableCell>{blog.writingId}</MywriteTableCell>
                <MywriteTableCell>{blog.title}</MywriteTableCell>
                <MywriteTableCell>{blog.nickname}</MywriteTableCell>
                <MywriteTableCell>{blog.createdAt}</MywriteTableCell>
              </tr>
            ))}
          </tbody>
        </MywriteTable>
        {displayCount < userWritings.length && (
          <LoadMoreButton onClick={handleLoadMore}> 더보기 </LoadMoreButton>
        )}
      </MywriteContainer>
    </div>
  );
}

export default MywritePage;

const MywriteContainer = styled.div`
  padding: 20px;
  text-align: center; 
`;

const MywriteTitle = styled.h1`
  font-size: 24px;
  margin-bottom: 20px;
`;

const MywriteTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
`;

const MywriteTableHeader = styled.th`
  background-color: #f2f2f2;
  padding: 10px;
  border: 1px solid #ddd;
`;

const MywriteTableCell = styled.td`
  padding: 10px;
  border: 1px solid #ddd;
`;

const LoadMoreButton = styled.button`
  background-color: #007bff;
  color: #fff;
  padding: 10px 20px;
  border: none;
  cursor: pointer;
  margin-top: 20px;
  font-size: 16px;
  border-radius: 5px;
  
  &:hover {
    background-color: #0056b3;
  }
`;
