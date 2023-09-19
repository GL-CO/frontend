import { Route, BrowserRouter, Routes } from "react-router-dom";
import Login from "./pages/LoginPage/Login";
import Write from "./pages/Write";
import Home from "./pages/Home";
import Join from "./pages/LoginPage/Join";
import MyPage from "./pages/Mypage";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/join" element={<Join />}></Route>
        <Route path="/write" element={<Write />}></Route>
        <Route path="/mypage" element={<MyPage />}></Route>
        <Route path="/" element={<Home />}></Route>
      </Routes>
    </BrowserRouter>
  );
}
export default App;
