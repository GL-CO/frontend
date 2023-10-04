import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Edit from "./Edit"; // 로그인 컴포넌트 가져오기
import { createMemoryHistory } from "history";

test("renders Edit component via routing", () => {
  // Memory history를 사용하여 초기 URL을 설정
  const history = createMemoryHistory();
  history.push("/edit"); // 원하는 경로를 설정

  const { getByText } = render(
    <BrowserRouter>
      <Routes>
        <Route path="/edit/*" element={<Edit />}></Route>
      </Routes>
    </BrowserRouter>
  );
  // 로그인 페이지에서 원하는 요소를 테스트
  const loginButton = screen.getByText(/전송/i); // 예시로 "로그인" 텍스트를 찾음
  expect(loginButton).toBeInTheDocument();
});
