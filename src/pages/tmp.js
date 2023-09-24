import React from "react";
import styled from "styled-components";

const Box = styled.div`
  display: flex;
  border: 1px solid #ccc;
  padding: 10px;
  margin: 10px;
  align-items: center;
`;

const ProfileImage = styled.img`
  width: 50px; /* 프로필 사진 너비 조정 */
  height: 50px; /* 프로필 사진 높이 조정 */
  margin-right: 10px; /* 프로필 사진과 텍스트 사이 여백 */
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

const Tmp = () => {
  return (
    <Container>
      <Row>
        <Box>
          <ProfileImage src="URL" alt="loading" />
          <Content>111111111111111111111111111</Content>
        </Box>
        <Box>
          <ProfileImage src="URL" alt="loading" />
          <Content>222222222222222222222222222</Content>
        </Box>
      </Row>
      <Button>더 보기</Button>
    </Container>
  );
};

export default Tmp;
