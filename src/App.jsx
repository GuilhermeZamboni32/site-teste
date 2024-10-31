import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import TelaInicial from './Components/TelaInicial';
import TelaCadastro from './Components/TelaCadastro';
import TelaLogin from './Components/TelaLogin';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<TelaInicial />} />
        <Route path="/login" element={<TelaLogin />} />
        <Route path="/cadastro" element={<TelaCadastro />} />
      </Routes>
    </Router>
  );
}

export default App;
