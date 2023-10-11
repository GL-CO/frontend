import React, { useState } from "react";
import NavBar from "../Components/NavBar";
import styled from 'styled-components';
import { Link } from "react-router-dom";

const Mywrite = () => {
  const initialDisplayCount = 5; // 초기에 표시할 항목 수
  const [displayCount, setDisplayCount] = useState(initialDisplayCount);

  const Testdata = [
    { id: 1, title: '첫 번째 글', author: '글쓴이 1', date: '2023-10-04' },
    { id: 2, title: '두 번째 글', author: '글쓴이 2', date: '2023-10-05' },
    { id: 3, title: '세 번째 글', author: '글쓴이 3', date: '2023-10-06' },
    { id: 4, title: '네 번째 글', author: '글쓴이 4', date: '2023-10-07' },
    { id: 5, title: '다섯 번째 글', author: '글쓴이 5', date: '2023-10-08' },
    { id: 6, title: '여섯 번째 글', author: '글쓴이 6', date: '2023-10-09' },
    // 추가 테스트 데이터
  ];

  const handleLoadMore = () => {
    // "더보기" 버튼 클릭 시 더 많은 항목 표시
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
            {(Testdata.slice(0, displayCount)).map((blog) => (
              <tr key={blog.id}>
                <MywriteTableCell>{blog.id}</MywriteTableCell>
                <MywriteTableCell>
                <Link to={"/MywritePage"}>{blog.title}</Link>
                </MywriteTableCell>
                <MywriteTableCell>{blog.author}</MywriteTableCell>
                <MywriteTableCell>{blog.date}</MywriteTableCell>
              </tr>
            ))}
          </tbody>
        </MywriteTable>
        {displayCount < Testdata.length && (
          <LoadMoreButton onClick={handleLoadMore}> 더보기 </LoadMoreButton>
        )}
      </MywriteContainer>
    </div>
  );
}

export default Mywrite;

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
