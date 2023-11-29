import React, { useState, useEffect } from "react";
import NavBar from "../Components/NavBar";
import styled from 'styled-components';
import { Link } from "react-router-dom";
import { GC2_URL } from "../Components/atoms";
import { useRecoilState } from "recoil";

const MywritePage = () => {
  const initialDisplayCount = 5;
  const [displayCount, setDisplayCount] = useState(initialDisplayCount);
  const [userWritings, setUserWritings] = useState([]);
  const [token, setToken] = useState(""); // 토큰 상태 추가
  const [GC2] = useRecoilState(GC2_URL);


  // 세션 스토리지에서 토큰 가져오기
  useEffect(() => {
    const storedToken = sessionStorage.getItem("authToken");
    if (storedToken) {
      setToken(storedToken);
    }
  }, []);
  
  
  const fetchData = async () => {
    try {
      const response = await fetch(`${GC2}:8080/v1/user/writings/my`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });
  
      if (response.ok) {
        const data = await response.json();
        setUserWritings(data.contents);
        console.log(data.contents);
      } else {
        throw new Error('Failed to fetch data');
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };  
  
  useEffect(() => {
    fetchData();
  }, [token, GC2]);
  
  

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
              <MywriteTableHeader>번호</MywriteTableHeader>
              <MywriteTableHeader>제목</MywriteTableHeader>
              <MywriteTableHeader>글쓴이</MywriteTableHeader>
              <MywriteTableHeader>날짜</MywriteTableHeader>
            </tr>
          </thead>
          <tbody>
            {(userWritings.slice(0, displayCount)).map((blog) => (
              <tr key={blog.writingId}>
                <MywriteTableCell>{blog.writingId}</MywriteTableCell>
                <MywriteTableCell>
                  <Link to={`/writing/${blog.writingId}`}>{blog.title}</Link>
                </MywriteTableCell>
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
