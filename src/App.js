import { Route, BrowserRouter, Routes, Navigate } from "react-router-dom";
import React from "react";
import Login from "./pages/LoginPage/Login";
import Write from "./pages/Write";
import Home from "./pages/Home";
import MyPage from "./pages/Mypage";
import Writings from "./pages/Writings";
import Join from "./pages/LoginPage/Join";
<<<<<<< HEAD
import Writing from "./pages/Writing";
=======
import Mywrite from "./pages/Mywrite";
import MywritePage from "./pages/MywritePage";

>>>>>>> 0d146cf448aeb23b040171c6c1a6e575b3d5c9d4

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

        <Route path="/*" element={<Navigate to="/" replace />}></Route>
      </Routes>
    </BrowserRouter>
  );
}
export default App;
