import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "../LoginPage/Login"; // 로그인 컴포넌트 가져오기

test('"/login" 렌더링', () => {
  const { getByText } = render(
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );

  // 로그인 페이지에서 원하는 요소를 테스트
  const loginButton = screen.getByText("반갑습니다!"); // 예시로 "로그인" 텍스트를 찾음
  expect(loginButton).toBeInTheDocument();
});
