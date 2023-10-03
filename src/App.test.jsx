import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App"; // 로그인 컴포넌트 가져오기

test('"App 렌더링', () => {
  const { getByText } = render(<App />);

  // 로그인 페이지에서 원하는 요소를 테스트
  const loginButton = screen.getByText(/learn react/i); // 예시로 "로그인" 텍스트를 찾음
  expect(loginButton).toBeInTheDocument();
});
