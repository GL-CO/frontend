// /login.js (프론트엔드 - React 컴포넌트)
import React, { useState } from "react";
import { useMutation } from "react-query";

async function loginUser({ username, password }) {
  const response = await fetch("/api/user/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ username, password }),
  });

  if (!response.ok) {
    throw new Error("로그인 실패");
  }

  return response.json();
}

function LoginForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const mutation = useMutation(loginUser, {
    onSuccess: (data) => {
      // 로그인 성공 처리
    },
    onError: (error) => {
      // 로그인 실패 처리
    },
  });

  const handleLogin = () => {
    mutation.mutate({ username, password });
  };

  return (
    <div>
      <label htmlFor="username">아이디:</label>
      <input
        type="text"
        id="username"
        name="username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <label htmlFor="password">비밀번호:</label>
      <input
        type="password"
        id="password"
        name="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type="button" onClick={handleLogin} disabled={mutation.isLoading}>
        {mutation.isLoading ? "로그인 중..." : "로그인"}
      </button>
    </div>
  );
}

export default LoginForm;
