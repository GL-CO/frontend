import { Route, BrowserRouter, Routes } from "react-router-dom";
import Login from "./pages/LoginPage/Login";
import Write from "./pages/Write";
import Home from "./pages/Home";
import Challenge from "./pages/Challenge";
import Join from "./pages/LoginPage/Join";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/write" element={<Write />}></Route>
        <Route path="/" element={<Home />}></Route>
        <Route path="/challenge" element={<Challenge />}></Route>
        <Route path="/Join" element={<Join />}></Route>
      </Routes>
    </BrowserRouter>
  );
}
export default App;
