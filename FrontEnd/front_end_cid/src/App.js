import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home_repositorio from './Home_repositorio'; // Importando o componente do repositório
import Login_repositorio from './Login_repositorio'; // Importando o componente de Login
import Criar_conta from './Criar_conta'; // Importando o componente d criação de conta
import Validar_Conta from './Validar_Conta'; // Importando o componente de confirmação de conta
import Home_logado from './Home_logado'; // Importando o componente do repositório de um user já logado

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home_repositorio/>} />{/* Definindo a rota para o repositório */}
        <Route path="/Home_repositorio" element={<Home_repositorio/>} />{/* Definindo a rota para o repositório */}
        <Route path="/Login_repositorio" element={<Login_repositorio />} />{/* Definindo a rota para o repositório */}
        <Route path="/Home_logado" element={<Home_logado />} />{/* Definindo a rota para o repositório de um user já logadp*/}
        <Route path="/Criar_conta" element={<Criar_conta />} />{/* Definindo a rota para o criar conta no repositorio*/}
        <Route path="/Validar_Conta" element={<Validar_Conta />} />{/* Definindo a rota para a confrimação de conta*/}
      </Routes>
    </Router>
  );
};

export default App;
