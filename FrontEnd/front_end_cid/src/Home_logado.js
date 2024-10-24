import React from 'react';
import './Home_logado.css';
import { useNavigate } from 'react-router-dom'; // Importe useNavigate

const Home_logado = () => {

    const navigate = useNavigate();

    const Comunidade = () => {
      navigate('/Comunidade'); // Navegue para a rota de Comunidade
    };
    const Repo_auxiliar = () => {
        navigate('/Repo_auxiliar'); // Navegue para a rota do repositório
    };
    const Depo_auxiliar = () => {
        navigate('/Depo_auxiliar'); // Navegue para a rota do repositório
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
                        <li><a href="/Home_logado" className="button">Início</a></li>
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
                <h2 className="welcome-text">Bem-vindo Adilson</h2>
                <input type="text" placeholder="Pesquisar..." className="search-input" />
                
                
                <div className="action-buttons">
                    <button className="green-button" onClick={Depo_auxiliar}>Iniciar Publicação</button>
                    <button className="menu-button" onClick={Repo_auxiliar}>Artigos Publicados</button>
                </div>
                
                <img src="law1.jpg" alt="Imagem Superior Direita" className="right-image" />
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

export default Home_logado;




