import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Login from "./pages/LoginPage/Login";
import Join from "./pages/LoginPage/Join";

function App() {
  return (
    <BrowserRouter>
      {/* <Header /> */}
      <Routes>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/join" element={<Join />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
