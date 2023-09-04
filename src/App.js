import { Route, BrowserRouter, Routes } from "react-router-dom";
import Login from "./pages/LoginPage/Login";
import Write from "./pages/Write";
import Home from "./pages/Home";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/write" element={<Write />}></Route>
        <Route path="/" element={<Home />}></Route>
      </Routes>
    </BrowserRouter>
  );
}
export default App;
