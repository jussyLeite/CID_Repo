import React from 'react';
import { X } from 'lucide-react';

const Comunidade = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4 border-b pb-2">Comunidade</h1>
      
      <div className="mb-4">
        <div className="flex items-center justify-between bg-green-500 border border-green-600 rounded p-2"> {/* Verde mais carregado */}
          <span>
            Abaixo é mostrada uma lista de comunidades e as coleções e subcomunidades dentro delas. Clique em um nome para visualizar a página inicial da comunidade ou coleção.
          </span>
          <X className="cursor-pointer" />
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {Array.from({ length: 6 }).map((_, index) => (
          <div key={index} className="bg-gray-100 rounded-lg overflow-hidden shadow-md flex">
            <div className="relative h-60 w-full">
              <img 
                src="law1.jpg" 
                alt="Biblioteca da Universidade Fernando Pessoa" 
                className="w-full h-full object-cover" 
              />
            </div>
            <div className="p-4 flex flex-col justify-between">
              <h3 className="text-lg font-semibold mb-2">Biblioteca da Universidade Fernando Pessoa</h3>
              <p className="text-gray-600 text-sm mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, dolor sit amet, consectetur.
              </p>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-500">Coleções</span>
                <span className="bg-red-800 text-white px-2 py-1 rounded text-xs">3</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Comunidade;













