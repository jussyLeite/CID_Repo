import React from 'react';
import { X } from 'lucide-react';
import './Comunidade.css';
import { useNavigate } from 'react-router-dom'; // Importe useNavigate

const Comunidade = () => {
  const navigate = useNavigate();

  const Repo_auxiliar = () => {
    navigate('/Repo_auxiliar'); // Navegue para a rota do repositório
  };
  const Home_logado = () => {
    navigate('/Home_logado'); // Navegue para a rota do repositório
  };

  const communities = [
    {
      image: 'law1.jpg',
      title: 'Comunidade PYTHON',
      description: 'Bem-vindo à Comunidade Python! Um espaço para desenvolvedores e entusiastas se conectarem.',
      collectionsCount: 3
    },
    {
      image: 'Centro-de-Investigacao-do-Direito-da-UCAN-lanca-revista.jpeg',
      title: 'Comunidade JAVA',
      description: 'Bem-vindo à Comunidade Java! Um espaço dedicado a desenvolvedores e entusiastas da linguagem Java.',
      collectionsCount: 5
    },
    {
      image: 'ebradi_ebradi_image_467-1080x675.jpeg',
      title: 'Comunidade HTML',
      description: 'Bem-vindo à Comunidade HTML! Um espaço dedicado a desenvolvedores e entusiastas do HTML.',
      collectionsCount: 2
    },
    {
      image: 'istockphoto-538203075-612x612.jpg',
      title: 'Comunidade CSS',
      description: 'Bem-vindo à Comunidade CSS! Um espaço dedicado a desenvolvedores e entusiastas do design web.',
      collectionsCount: 10
    },
    {
      image: 'law1.jpg',
      title: 'Comunidade BASE DE DADOS',
      description: 'Bem-vindo à Comunidade de Banco de Dados! Um espaço dedicado a desenvolvedores e entusiastas do gerenciamento e análise de dados.',
      collectionsCount: 6
    },
    {
      image: 'Centro-de-Investigacao-do-Direito-da-UCAN-lanca-revista.jpeg',
      title: 'Comunidade JAVASCRIPT',
      description: 'Bem-vindo à Comunidade JavaScript! Um espaço dedicado a desenvolvedores e entusiastas da programação em JavaScript.',
      collectionsCount: 20
    }
    // Adicione mais comunidades conforme necessário
  ];

  return (
    <div className="body">
      <header>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <img src="UCAN-LOGO_.png" alt="Logo Faculdade de Direito" className="logo-menu" />
          <div className="menu-text">
            <p><b>REPOSITÓRIO DO CENTRO <br /> DE INVESTIGAÇÃO DO DIREITO - CID</b></p>
          </div>
        </div>
        <nav>
          <ul>
            <li><a href="#" className="button" onClick={Home_logado}>Início</a></li>
            <li>
              <a href="#">Navegar ▼</a>
              <ul className="submenu">
                <li><a href="/Repo_auxiliar">Autores</a></li>
                <li><a href="/Repo_auxiliar">Assunto</a></li>
                <li><a href="/Repo_auxiliar">Data</a></li>
                <li><a href="/Repo_auxiliar">Título</a></li>
                <li><a href="/Repo_auxiliar">Tipo de Acesso</a></li>
                <li><a href="/Repo_auxiliar">Tipo de Documento</a></li>
              </ul>
            </li>
            <li><a href="/Comunidade">Comunidade & Coleções</a></li>
            <li><a href="#">Ajuda</a></li>
            <li>
              <a href="#">Português-Pt</a>
              <ul className="submenu">
                <li><a href="#">Inglês</a></li>
                <li><a href="#">Francês</a></li>
                <li><a href="#">Japonês</a></li>
                <li><a href="#">Espanhol</a></li>
                <li><a href="#">Mandarim</a></li>
                <li><a href="#">Português Br</a></li>
              </ul>
            </li>
            <li className="user-info">
              <img src="adilson.jpeg" alt="User" className="user-avatar" />
              <span>Adilson</span>
            </li>
          </ul>
        </nav>
      </header>

      <div className="search-bar">
        <input type="text" placeholder="Pesquisar..." className="search-input" />
      </div>

      {/* Seção Comunidade */}
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold mb-2 border-b pb-2 underline-menu">Comunidade</h1>
        
        <div className="mb-4">
          <div className="flex items-center justify-between bg-green-700 border border-green-800 rounded p-2">
            <span>
              Abaixo é mostrada uma lista de comunidades e as coleções e subcomunidades dentro delas. Clique em um nome para visualizar a página inicial da comunidade ou coleção.
            </span>
            <X className="cursor-pointer" />
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {communities.map((community, index) => (
            <div key={index} className="community-card">
              <div className="image-container">
                <img 
                  src={community.image} 
                  alt={`Comunidade ${index + 1}`} 
                  className="community-image" 
                />
              </div>
              <div className="content-container">
                <h3 className="text-lg font-semibold mb-2">{community.title}</h3>
                <p className="text-gray-600 text-sm mb-4">
                  {community.description}
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-500">Coleções</span>
                  <span className="bg-red-800 text-white px-2 py-1 rounded text-xs">{community.collectionsCount}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <footer>
        <div className="footer-overlay"></div>
        <img src="UCAN-LOGO_.png" alt="Logo Faculdade de Direito" className="footer-logo" />
        
        <div className="footer-menu">
          <ul>
            <li><a href="#">Sobre</a></li>
            <li><a href="#">Comentário</a></li>
            <li><a href="https://www.ucan.ao">UCAN</a></li>
            <li><a href="#">CID</a></li>
            <li><a href="#">Estatística</a></li>
          </ul>
        </div>
        
        <div className="footer-text" style={{ textAlign: 'right' }}>
          <p>© 2024 Centro de Investigação do Direito. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  );
};

export default Comunidade;




















