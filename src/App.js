import { Route, BrowserRouter, Routes } from "react-router-dom";
import "./App.css";
import Header from "./Components/Header";
import LoginPage from "./Routes/Login";
function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="login" element={<LoginPage />}></Route>
      </Routes>
    </BrowserRouter>
  );
}
export default App;
