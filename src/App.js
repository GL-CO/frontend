import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/LoginPage/Login';
import Join from './components/LoginPage/Join';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/join" element={<Join />} />
      </Routes>
    </Router>
  );
}

export default App;

