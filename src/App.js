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
import { useQueryClient } from "react-query";

function App() {
  const queryClient = useQueryClient();
  queryClient.setQueryData(
    "GC2_URL",
    "http://ec2-3-34-237-26.ap-northeast-2.compute.amazonaws.com"
  );

  return (
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

        {/* <Route path="/*" element={<Navigate to="/" replace />}></Route> */}
      </Routes>
    </BrowserRouter>
  );
}
export default App;
