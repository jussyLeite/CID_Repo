import React, { useState } from 'react';
import { X, Upload } from 'lucide-react';

const Depositar = () => {
  const [showAlert, setShowAlert] = useState(true);
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
  };

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const handleDrop = (event) => {
    event.preventDefault();
    const file = event.dataTransfer.files[0];
    setSelectedFile(file);
  };

  return (
    <div className="max-w-4xl mx-auto p-4">
      {/* Card Substitute */}
      <div className="border rounded-md shadow-md p-6">
        <h2 className="text-xl font-bold mb-4">Depositar Artigo</h2>
        <div className="space-y-6">
          {/* Alert Message */}
          {showAlert && (
            <div className="bg-orange-100 border-l-4 border-orange-500 p-4 flex justify-between items-center">
              <span>
                O depósito do seu arquivo passará em uma análise, com algumas etapas. Caso passe em todas as etapas, será publicado na coleção selecionada.
              </span>
              <button
                onClick={() => setShowAlert(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Left Column */}
            <div className="space-y-4">
              <div>
                <label className="text-sm text-gray-600">Selecionar a coleção referência</label>
                <select className="w-full p-2 border rounded-md">
                  <option value="">Coleção</option>
                  <option value="colecao1">Coleção 1</option>
                  <option value="colecao2">Coleção 2</option>
                </select>
              </div>

              <div>
                <label className="text-sm text-gray-600">Digitar o título</label>
                <input
                  type="text"
                  placeholder="Título do trabalho"
                  className="w-full p-2 border rounded-md"
                />
              </div>

              <div>
                <label className="text-sm text-gray-600">Selecionar o autor</label>
                <select className="w-full p-2 border rounded-md">
                  <option value="">Autor(es)</option>
                  <option value="autor1">Autor 1</option>
                  <option value="autor2">Autor 2</option>
                </select>
              </div>

              <div>
                <label className="text-sm text-gray-600">Resumo</label>
                <textarea
                  placeholder="Digite o resumo do trabalho..."
                  className="w-full p-2 border rounded-md h-32"
                />
              </div>

              <div>
                <label className="text-sm text-gray-600">Palavras Chaves</label>
                <textarea
                  placeholder="Digite as palavras-chave do trabalho"
                  className="w-full p-2 border rounded-md h-24"
                />
              </div>
            </div>

            {/* Right Column */}
            <div className="space-y-4">
              <div>
                <label className="text-sm text-gray-600">Orientador(es)</label>
                <select className="w-full p-2 border rounded-md">
                  <option value="">Orientador(es)</option>
                  <option value="orientador1">Orientador 1</option>
                  <option value="orientador2">Orientador 2</option>
                </select>
              </div>

              <div>
                <label className="text-sm text-gray-600">Data de publicação</label>
                <input
                  type="date"
                  className="w-full p-2 border rounded-md"
                />
              </div>

              <div>
                <label className="text-sm text-gray-600">Tipo de documento</label>
                <select className="w-full p-2 border rounded-md">
                  <option value="">Tipo de Documento</option>
                  <option value="dissertacao">Dissertação</option>
                  <option value="tese">Tese</option>
                  <option value="artigo">Artigo</option>
                </select>
              </div>

              <div>
                <label className="text-sm text-gray-600">Área de Pesquisa</label>
                <select className="w-full p-2 border rounded-md">
                  <option value="">Nenhuma selecionada</option>
                  <option value="area1">Área 1</option>
                  <option value="area2">Área 2</option>
                </select>
              </div>

              <div>
                <label className="text-sm text-gray-600">Idioma</label>
                <select className="w-full p-2 border rounded-md">
                  <option value="">Nenhuma selecionada</option>
                  <option value="portugues">Português</option>
                  <option value="english">English</option>
                </select>
              </div>
            </div>
          </div>

          {/* File Upload Section */}
          <div className="mt-8">
            <div
              className="border-2 border-dashed rounded-lg p-8 text-center"
              onDragOver={handleDragOver}
              onDrop={handleDrop}
            >
              <input
                type="file"
                onChange={handleFileChange}
                className="hidden"
                id="fileInput"
              />
              <label
                htmlFor="fileInput"
                className="cursor-pointer flex flex-col items-center"
              >
                <Upload className="h-8 w-8 text-gray-400 mb-2" />
                <span className="text-lg font-medium">
                  Selecionar o ficheiro para upload
                </span>
                <span className="text-sm text-gray-500">
                  Ou arraste o ficheiro para aqui
                </span>
              </label>
              {selectedFile && (
                <div className="mt-4 text-sm text-gray-600">
                  Arquivo selecionado: {selectedFile.name}
                </div>
              )}
            </div>
          </div>

          {/* Submit Button */}
          <div className="mt-6">
            <button className="px-6 py-2 bg-green-700 text-white rounded-md hover:bg-green-800">
              Enviar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Depositar;







