import { Route, BrowserRouter, Routes } from "react-router-dom";
import React from "react";
import Login from "./pages/LoginPage/Login";
import Write from "./pages/Write";
import Home from "./pages/Home";
import MyPage from "./pages/Mypage";
import Stories from "./pages/Stories";
import Join from "./pages/LoginPage/Join";
import Mywrite from "./pages/Mywrite";
import MywritePage from "./pages/MywritePage";


import Edit from "./pages/Edit";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/join" element={<Join />}></Route>
        <Route path="/write" element={<Write />}></Route>
        <Route path="/mypage" element={<MyPage />}></Route>
        <Route path="/" element={<Home />}></Route>
        <Route path="/stories" element={<Stories />}></Route>
        <Route path="/join" element={<Join />}></Route>
        <Route path="/mywrite" element={<Mywrite />}></Route>
        <Route path="/mywritepage" element={<MywritePage />}></Route>
        <Route path="/edit" element={<Edit />}></Route>
      </Routes>
    </BrowserRouter>
  );
}
export default App;
