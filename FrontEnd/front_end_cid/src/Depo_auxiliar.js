import React from 'react';
import './Repositorio.css'; // O CSS será atualizado abaixo
import { useNavigate } from 'react-router-dom'; // Importe useNavigate
import Depositar from './Depositar';

const Depo_auxiliar = () => {

    const navigate = useNavigate();

    const Home_logado = () => {
        navigate('/Home_logado'); // Navegue para a rota do repositório
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

            <main>
                <Depositar />
            </main>

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

export default Depo_auxiliar;






