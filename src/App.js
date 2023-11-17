import { Route, BrowserRouter, Routes, Navigate } from "react-router-dom";
import React from "react";
import Login from "./pages/LoginPage/Login";
import Write from "./pages/Write";
import Home from "./pages/Home";
import MyPage from "./pages/Mypage";
import Writings from "./pages/Writings";
import Join from "./pages/LoginPage/Join";
import Writing from "./pages/Writing";
import Edit from "./pages/Edit";
import PageNotFound from "./pages/PageNotFound";
import { RecoilRoot } from "recoil";
import Read from "./pages/MywritePage";
function App() {
  return (
    <RecoilRoot>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/join" element={<Join />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/write" element={<Write />}></Route>
          <Route path="/mypage" element={<MyPage />}></Route>
          <Route path="/writings" element={<Writings />}></Route>
          <Route path="/writing" element={<Writing />}></Route>
          <Route path="/edit" element={<Edit />}></Route>
          <Route path="/writings/:writingId" element={<Writing />}></Route>
          <Route path="/mywritepage" element={<Read />}></Route>
          <Route path="/*" element={<PageNotFound />}></Route>
        </Routes>
      </BrowserRouter>
    </RecoilRoot>
  );
}
export default App;
