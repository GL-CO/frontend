import { Route, BrowserRouter, Routes } from "react-router-dom";
import React from "react";
import Login from "./pages/LoginPage/Login";
import Write from "./pages/Write";
import Home from "./pages/Home";
import MyPage from "./pages/Mypage";
import Writings from "./pages/Writings";
import Join from "./pages/LoginPage/Join";
import Writing from "./pages/Writing";

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
        <Route path="/Writings" element={<Writings />}></Route>
        <Route path="/join" element={<Join />}></Route>
        <Route path="/Writing" element={<Writing />}></Route>
        <Route path="/edit" element={<Edit />}></Route>
      </Routes>
    </BrowserRouter>
  );
}
export default App;
