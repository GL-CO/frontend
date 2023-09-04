import { Route, BrowserRouter, Routes } from "react-router-dom";
import "./App.css";
// import Header from "./Components/Header";
import LoginPage from "./Routes/Login";
import Write from "./Routes/Write";
import Home from "./Routes/Home";
function App() {
  return (
    <BrowserRouter>
      {/* <Header /> */}
      <Routes>
        <Route path="/login" element={<LoginPage />}></Route>
        <Route path="/write" element={<Write />}></Route>
        <Route path="/" element={<Home />}></Route>
      </Routes>
    </BrowserRouter>
  );
}
export default App;
