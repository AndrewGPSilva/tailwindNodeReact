import axios from "axios";
import React, { useEffect, useState } from "react";

export default function LivrosTest() {
  const [dados, setDados] = useState([]);
  useEffect(() => {
    axios
      .get("http://127.0.0.1:8080/livros")
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
              <li key={dado.id} className="list-none">
                <img
                  className="w-52 h-52"
                  src={dado.imagem}
                  alt="Capa do Livro"
                />
                <p className="text-orange-500">Nome: <span className="text-white">{dado.nome}</span></p>
                <p className="text-orange-500">Descrição: <span className="text-white">{dado.descricao}</span></p>
                <p className="text-orange-500">Autor: <span className="text-white">{dado.autor}</span></p>
              </li>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
