import { Route, BrowserRouter, Routes } from "react-router-dom";
import Login from "./pages/LoginPage/Login";
import Write from "./pages/Write";
import Home from "./pages/Home";
import MyPage from "./pages/Mypage";
import Stories from "./pages/Stories";
import Join from "./pages/LoginPage/Join";
import Tmp from "./pages/Tmp";

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
        <Route path="/tmp" element={<Tmp />}></Route>
      </Routes>
    </BrowserRouter>
  );
}
export default App;
