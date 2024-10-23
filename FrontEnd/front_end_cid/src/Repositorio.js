import React, { useState } from 'react';
import { Search, ChevronRight, ChevronLeft, Lock, Unlock } from 'lucide-react';

const Repositorio = () => {
  const [currentPage, setCurrentPage] = useState(1);
  
  // Sample data
  const results = [
    { year: '2022', title: 'Lorem ipsum dolor sit amet, consectetur', author: 'Francisco, Juscelino Leite', type: 'Artigo', locked: true },
    { year: '2022', title: 'Lorem ipsum dolor sit amet, consectetur', author: 'Francisco, Juscelino Leite', type: 'Artigo', locked: true },
    { year: '2022', title: 'Lorem ipsum dolor sit amet, consectetur', author: 'Francisco, Juscelino Leite', type: 'Outro', locked: true },
    { year: '2022', title: 'Lorem ipsum dolor sit amet, consectetur', author: 'Francisco, Juscelino Leite', type: 'Dissertação', locked: false },
    { year: '2022', title: 'Lorem ipsum dolor sit amet, consectetur', author: 'Francisco, Juscelino Leite', type: 'Outro', locked: false },
    { year: '2022', title: 'Lorem ipsum dolor sit amet, consectetur', author: 'Francisco, Juscelino Leite', type: 'Artigo', locked: false }
  ];

  const authors = [
    { name: 'Francisco, Juscelino Leite', count: 0 },
    { name: 'Francisco, Jessy Milk', count: 0 },
    { name: 'Carvalho, Adilson', count: 6 },
    { name: 'Cristo, Elias Fernandes', count: 0 },
    { name: 'Luis, Délcia Luis', count: 2 },
    { name: 'Abaa, Jacobe Yusef', count: 7 },
    { name: 'Francis, Milenium Cardoso', count: 4 },
    { name: 'Alba, José', count: 3 },
    { name: 'Faustino, Neto Marques', count: 10 }
  ];

  const subjects = [
    { name: 'Carvalho, Adilson', count: 6 },
    { name: 'Cristo, Elias Fernandes', count: 0 },
    { name: 'Luis, Délcia Luis', count: 2 }
  ];

  return (
    <div className="max-w-6xl mx-auto p-4">
      <div className="bg-white shadow-md rounded-lg p-4">
        <h2 className="text-2xl font-bold">Pesquisa</h2>
        <div className="space-y-4">
          {/* Search Controls */}
          <div className="space-y-4">
            <select className="w-full p-2 border rounded-md bg-gray-100">
              <option>Tudo do Repository</option>
            </select>
            
            <div className="text-sm">Adicionar Filtros:</div>
            <div className="text-xs text-gray-600">Usar filtros para refinar a o resultado da pesquisa.</div>
            
            <div className="flex gap-2 items-center">
              <select className="p-2 border rounded-md w-24">
                <option>Título</option>
              </select>
              <select className="p-2 border rounded-md w-24">
                <option>Igual</option>
              </select>
              <input type="text" className="flex-1 p-2 border rounded-md" />
              <button className="px-4 py-2 bg-gray-200 rounded-md">Add</button>
            </div>
            
            <div className="flex gap-2 items-center text-sm">
              <div>Ordenar por</div>
              <select className="p-1 border rounded-md">
                <option>Título</option>
              </select>
              <div>Em ordem</div>
              <select className="p-1 border rounded-md">
                <option>Título</option>
              </select>
              <div>Autores/Record</div>
              <select className="p-1 border rounded-md">
                <option>Título</option>
              </select>
            </div>
          </div>

          {/* Results Table */}
          <div className="mt-8">
            <table className="w-full">
              <thead className="bg-gray-100">
                <tr>
                  <th className="p-2 text-left">Data de Emissão</th>
                  <th className="p-2 text-left">Título</th>
                  <th className="p-2 text-left">Autor/s</th>
                  <th className="p-2 text-left">Tipo</th>
                  <th className="p-2 text-left">Tipo de acesso</th>
                </tr>
              </thead>
              <tbody>
                {results.map((result, index) => (
                  <tr key={index} className="border-b">
                    <td className="p-2">{result.year}</td>
                    <td className="p-2">{result.title}</td>
                    <td className="p-2">{result.author}</td>
                    <td className="p-2">{result.type}</td>
                    <td className="p-2">
                      {result.locked ? (
                        <Lock className="w-4 h-4 text-red-800" />
                      ) : (
                        <Unlock className="w-4 h-4 text-green-500" />
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            {/* Pagination */}
            <div className="flex justify-center gap-2 mt-4">
              <button className="px-2 py-1 border rounded">Anterior</button>
              {[1, 2, 3, 4, 5, 6, 7, 8].map((page) => (
                <button
                  key={page}
                  className={`px-2 py-1 border rounded ${
                    currentPage === page ? 'bg-red-800 text-white' : ''
                  }`}
                  onClick={() => setCurrentPage(page)}
                >
                  {page}
                </button>
              ))}
              <button className="px-2 py-1 border rounded">Próximo</button>
            </div>
          </div>

          {/* Sidebar Filters */}
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Author Filter */}
            <div className="space-y-2">
              <h3 className="font-semibold bg-gray-100 p-2">Author</h3>
              <div className="space-y-1">
                {authors.map((author, index) => (
                  <div key={index} className="flex justify-between items-center text-sm">
                    <span>{author.name}</span>
                    <span className="bg-red-800 text-white px-2 rounded-sm">{author.count}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Subject Filter */}
            <div className="space-y-2">
              <h3 className="font-semibold bg-gray-100 p-2">Assunto</h3>
              <div className="space-y-1">
                {subjects.map((subject, index) => (
                  <div key={index} className="flex justify-between items-center text-sm">
                    <span>{subject.name}</span>
                    <span className="bg-red-800 text-white px-2 rounded-sm">{subject.count}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Language and Date Filters */}
            <div className="space-y-4">
              <div className="space-y-2">
                <h3 className="font-semibold bg-gray-100 p-2">Língua</h3>
                <div className="space-y-1">
                  <div className="flex justify-between items-center text-sm">
                    <span>Português</span>
                    <span className="bg-red-800 text-white px-2 rounded-sm">6</span>
                  </div>
                  <div className="flex justify-between items-center text-sm">
                    <span>English</span>
                    <span className="bg-red-800 text-white px-2 rounded-sm">0</span>
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <h3 className="font-semibold bg-gray-100 p-2">Data de emissão</h3>
                <div className="space-y-1">
                  <div className="flex justify-between items-center text-sm">
                    <span>2021-2024</span>
                    <span className="bg-red-800 text-white px-2 rounded-sm">6</span>
                  </div>
                  <div className="flex justify-between items-center text-sm">
                    <span>2024-2025</span>
                    <span className="bg-red-800 text-white px-2 rounded-sm">5</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Repositorio;







