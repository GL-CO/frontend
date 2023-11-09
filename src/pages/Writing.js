import React from "react";
import styled from "styled-components";
import NavBar from "../Components/NavBar";

// 박스 스타일
const ContentBox = styled.div`
  background-color: #ffffff;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  width: 60%;
  margin: 0 auto;
`;

// 태그 스타일
const TagSelect = styled.select`
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 3px;
  margin-bottom: 15px;
`;

// 글 제목 스타일
const TitleHeading = styled.h2`
  margin-bottom: 10px;
  font-size: 24px;
  font-weight: bold;
`;

// 글 내용 스타일
const ContentParagraph = styled.p`
  white-space: pre-line;
  font-size: 16px;
  line-height: 1.5;
`;

function ReadingPage() {
  return (
    <div>
      <NavBar></NavBar>
      <ContentBox>
        <TagSelect>
          {/* 태그 옵션들 */}
          <option value="태그1">태그1</option>
          <option value="태그2">태그2</option>
          {/* 필요한 태그 옵션들을 추가하세요 */}
        </TagSelect>
        <TitleHeading>글 제목</TitleHeading>
        <ContentParagraph>
          {/* 글 내용 */}
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ac nunc
          at dolor euismod aliquam et sit amet justo. Sed at odio ac massa
          auctor posuere. Vivamus ut dictum turpis, id pharetra velit. Sed in
          quam id tellus condimentum euismod.
        </ContentParagraph>
      </ContentBox>
    </div>
  );
}

export default ReadingPage;
