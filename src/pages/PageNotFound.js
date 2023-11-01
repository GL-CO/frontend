import React, { useEffect } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const ErrorPageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const ErrorCode = styled.h1`
  font-size: 48px;
  margin-bottom: 20px;
`;

const ErrorMessage = styled.p`
  font-size: 24px;
`;

const ButtonsWrapper = styled.div`
  margin-top: 20px;
  display: flex;
  gap: 10px;
`;

const PageNotFound = () => {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1); // 이전 페이지로 이동
  };

  const goToHome = () => {
    navigate("/"); // "/" 경로로 이동
  };

  return (
    <ErrorPageWrapper>
      <ErrorCode>404</ErrorCode>
      <ErrorMessage>Page not found</ErrorMessage>
      <ButtonsWrapper>
        <button onClick={goBack}>Go Back</button>
        <button onClick={goToHome}>Go to Home</button>
      </ButtonsWrapper>
    </ErrorPageWrapper>
  );
};

export default PageNotFound;
