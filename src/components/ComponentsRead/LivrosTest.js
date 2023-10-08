import axios from "axios";
import React, { useEffect, useState } from "react";

export default function LivrosTest() {
  const [dados, setDados] = useState([]);
  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/api/livros")
      .then((response) => {
        setDados(response.data);
      })
      .catch((error) => {
        console.error("Erro na requisição:", error);
      });
  }, []);
  return (
    <div className="bg-black text-white p-7 mb-6" id="containerLivros">
      <h1 className="text-5xl underline text-emerald-400 text-center">
        Read the best books
      </h1>
      <div className="flex flex-col">
        <h2 className="underline font-bold text-2xl text-emerald-400">
          Books:
        </h2>
        <div className="flex">
          {dados.map((dado) => (
            <div className="m-5 p-7">
              <li key={dado.id} className="list-none p-1">
                <img
                  className="w-52 h-52 mx-2"
                  src={dado.imagem}
                  alt="Capa do Livro"
                />
                <p className="text-orange-500 my-2">Nome: <span className="text-white flex">{dado.nome}</span></p>
                <p className="text-orange-500 my-2">Categoria: <span className="text-white flex">{dado.categoria}</span></p>
                <p className="text-orange-500 my-2">Autor: <span className="text-white flex">{dado.autor}</span></p>
              </li>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
