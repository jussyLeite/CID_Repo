import React from 'react';
import './Home_repositorio.css';
import { useNavigate } from 'react-router-dom'; // Importe useNavigate

const Home_repositorio= () => {

    const navigate = useNavigate(); // Use o hook para navegação

    const Login_repositorio = () => {
      navigate('/Login_repositorio'); // Navegue para a rota de criação de conta
    };

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
                      <li><a href="#" className="button">Início</a></li>
                      <li>
                          <a href="#">Navegar ▼</a>
                          <ul className="submenu">
                              <li><a href="#">Autores</a></li>
                              <li><a href="#">Assunto</a></li>
                              <li><a href="#">Data</a></li>
                              <li><a href="#">Título</a></li>
                              <li><a href="#">Tipo de Acesso</a></li>
                              <li><a href="#">Tipo de Documento</a></li>
                          </ul>
                      </li>
                      <li><a href="#">Comunidade & Coleções</a></li>
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
                      <li><a href="/Login_repositorio">Entrar</a></li>
                  </ul>
              </nav>
          </header>

          <div className="content-wrapper">
              <div className="logo-container-1">
                  <img src="images-removebg-preview.png" alt="Logo 1" className="logo" />
              </div>
              <div className="logo-container-2">
                  <img src="UCAN-LOGO_.png" alt="Logo 2" className="large-logo" />
              </div>
              <div className="logo-container-3">
                  <h2> <b>BEM-VINDO AO REPOSITÓRIO DO CENTRO DE <br />INVESTIGAÇÃO DO DIREITO - CID</b></h2>
                  <img src="Centro-de-Investigacao-do-Direito-da-UCAN-lanca-revista.jpeg" alt="Logo 3" className="largest-logo" />
              </div>
          </div>

          <div className="search-bar">
              <input type="text" placeholder="Pesquisar..." className="search-input" />
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

export default Home_repositorio;