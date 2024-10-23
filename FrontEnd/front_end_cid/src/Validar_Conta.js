
import React from 'react';
import { useNavigate } from 'react-router-dom'; // Importe useNavigate

const Validar_Conta = () => {

  const navigate = useNavigate();

  const Login_repositorio = () => {
    navigate('/Login_repositorio'); // Navegue para a rota de criação de conta
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
          <h1 className="text-lg lg:text-2xl font-bold text-white text-center px-4" style={{ color: 'white' }}>
            REPOSITORIO DE INVESTIGAÇÃO 
            CIENTIFICA DO DIREITO CID
          </h1>
        </div>
      </div>

      {/* Lado direito - Formulário de verificação */}
      <div className="flex-1 flex items-center justify-center p-4 lg:p-8">
        <div className="w-full max-w-md">
          <h1 className="text-2xl lg:text-3xl font-bold mb-6 text-gray-800 text-center lg:text-left" 
            style={{ textDecoration: 'none' }} // Remover sublinhado do título "Criar Conta"
          >Código de Confirmação de Conta</h1>
          <h3 className="text-center lg:text-left" >Digite o código enviado no seu email</h3>
          <br></br>
          <div className="flex justify-center lg:justify-between mb-6">
            {/* Inputs para códigos de validação */}
            <input
              type="text"
              className="w-10 h-10 lg:w-12 lg:h-12 border border-red-800 rounded-full text-center"
              maxLength="1"
            />
            <input
              type="text"
              className="w-10 h-10 lg:w-12 lg:h-12 border border-red-800 rounded-full text-center"
              maxLength="1"
            />
            <input
              type="text"
              className="w-10 h-10 lg:w-12 lg:h-12 border border-red-800 rounded-full text-center"
              maxLength="1"
            />
            <input
              type="text"
              className="w-10 h-10 lg:w-12 lg:h-12 border border-red-800 rounded-full text-center"
              maxLength="1"
            />
            <input
              type="text"
              className="w-10 h-10 lg:w-12 lg:h-12 border border-red-800 rounded-full text-center"
              maxLength="1"
            />
            <input
              type="text"
              className="w-10 h-10 lg:w-12 lg:h-12 border border-red-800 rounded-full text-center"
              maxLength="1"
            />
          </div>

          <button 
            type="submit" 
            className="w-full bg-red-800 text-white py-2 rounded-full hover:bg-red-900" 
            onClick={Login_repositorio}>
            Confirmar
          </button>

          <div className="mt-4 text-center">
            <a href="/Login_repositorio" className="text-sm text-red-800 hover:underline">Já tem uma Conta?</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Validar_Conta;



