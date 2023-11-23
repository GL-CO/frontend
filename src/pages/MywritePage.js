import NavBar from "../Components/NavBar";
import styled from "styled-components";
import React from "react";

export default function Read() { 
  
  return (
    <PageContainer>
      <NavBar />
      <ContentContainer>
        <Title>내가 쓴 글</Title>
        <subTitle>글 제목</subTitle>
        <Tag>태그</Tag>
        <Paragraph>
          글 내용
        </Paragraph>
      </ContentContainer>
    </PageContainer>
  );
}
const PageContainer = styled.div`
  background-color: #ffffff; 
`;

const ContentContainer = styled.div`
  background-color: #ffffff;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  width: 60%;
  margin: 0 auto;
  margin-top: 20px; 
`;

const Tag = styled.div`
  text-align: center;
  width: 20%;
  background-color: #bbb;
  border-radius: 20px;
  margin-bottom: 10px;
`;

const Title = styled.h2`
  font-size: 24px; 
`;

const Paragraph = styled.p`
  font-size: 15px;
`;

