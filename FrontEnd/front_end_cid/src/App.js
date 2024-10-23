import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home_repositorio from './Home_repositorio'; // Importando o componente do repositório
import Login_repositorio from './Login_repositorio'; // Importando o componente de Login
import Criar_conta from './Criar_conta'; // Importando o componente d criação de conta
import Validar_Conta from './Validar_Conta'; // Importando o componente de confirmação de conta
import Home_logado from './Home_logado'; // Importando o componente do repositório de um user já logado
import Comunidade from './Comunidade'; // Importando o componente do repositório de um user já logado
import Repositorio from './Repositorio'; // Importando o componente do repositório de um user já logado
import Repo_auxiliar from './Repo_auxiliar';
import Depo_auxiliar from './Depo_auxiliar';
import Depositar from './Depositar';

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
        <Route path="/Comunidade" element={<Comunidade />} />{/* Definindo a rota para a comunidade*/}
        <Route path="/Repositorio" element={<Repositorio />} />{/* Definindo a rota para o Repositório principal*/}
        <Route path="/Repo_auxiliar" element={<Repo_auxiliar />} />{/* Definindo a rota para o Repositório auxiliar */}
        <Route path="/Depo_auxiliar" element={<Depo_auxiliar />} />{/* Definindo a rota para o Depositar auxiliar */}
        <Route path="/Depositar" element={<Depositar />} />{/* Definindo a rota para o Depositar principal*/}
      </Routes>
    </Router>
  );
};

export default App;
