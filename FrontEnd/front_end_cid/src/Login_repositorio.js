import React from 'react';
import { Eye } from 'lucide-react';
import { useNavigate } from 'react-router-dom'; // Importe useNavigate

const Login_repositorio = () => {
  const navigate = useNavigate();

  const Criar_conta = () => {
    navigate('/Criar_conta'); // Navegue para a rota de criação de conta
  };
  const Home_logado = () => {
    navigate('/Home_logado'); // Navegue para a rota de início do repositório
  };

  return (
    <div className="flex flex-col lg:flex-row h-screen bg-white">
      {/* Lado esquerdo - Imagem de fundo e logotipos */}
      <div className="lg:flex-1 relative overflow-hidden hidden lg:block">
        <img 
          src="ucan.jpeg" 
          alt="Background" 
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black opacity-50"></div>
        
        <div className="relative z-10 h-full flex flex-col items-center justify-center">
          <div className="flex space-x-4 mb-8">
            <img src="images-removebg-preview.png" alt="Logo UCAM" className="w-16 h-16 lg:w-24 lg:h-24" />
            <img src="UCAN-LOGO_.png" alt="Logo Faculdade de Direito" className="w-16 h-16 lg:w-24 lg:h-24" />
          </div>
          <h1 
            className="text-lg lg:text-2xl font-bold text-center px-4"
            style={{ color: 'white' }} // Define a cor branca explicitamente
          >
            REPOSITORIO DE INVESTIGAÇÃO CIENTIFICA DO DIREITO CID
          </h1>
        </div>
      </div>

      {/* Lado direito - Formulário de login */}
      <div className="flex-1 flex items-center justify-center p-4 lg:p-8">
        <div className="w-full max-w-md">
          <h1 
            className="text-2xl lg:text-3xl font-bold mb-6 text-gray-800 text-center lg:text-left"
            style={{ textDecoration: 'none' }} // Remover sublinhado do título "Login"
          >
            Login
          </h1>
          <form>
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
              <input 
                type="email" 
                id="email" 
                className="w-full px-3 py-2 border border-red-800 rounded-full focus:outline-none focus:ring-2 focus:ring-red-800" 
                placeholder="exemplociducan@gmail.com" 
              />
            </div>
            <div className="mb-6">
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">Senha</label>
              <div className="relative">
                <input 
                  type="password" 
                  id="password" 
                  className="w-full px-3 py-2 border border-red-800 rounded-full focus:outline-none focus:ring-2 focus:ring-red-800" 
                  placeholder="Senha" 
                />
                <Eye className="absolute right-3 top-2.5 text-gray-400 cursor-pointer" size={20} />
              </div>
            </div>
            <button type="submit" className="w-full bg-red-800 text-white py-2 rounded-full hover:bg-red-900" onClick={Home_logado}>INICIAR SESSÃO</button>
          </form>
          <div className="mt-4 text-center">
            <a href="#" className="text-sm text-red-800 hover:underline" style={{ textDecoration: 'none' }}>Esqueceu a senha?</a>
          </div>
          <div className="mt-6 flex flex-col lg:flex-row justify-between">
            <button className="mb-2 lg:mb-0 flex-1 mr-0 lg:mr-2 border border-red-300 py-2 rounded-full flex items-center justify-center hover:bg-gray-50">
              Iniciar sessão com Google
            </button>
           
            <button 
              className="flex-1 ml-0 lg:ml-2 border border-red-300 py-2 rounded-full hover:bg-gray-50" 
              onClick={Criar_conta}>
              Criar conta
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login_repositorio;


