import React from "react";
import dados from "../../data.json";

export default function Movies() {
  return (
    <div className="flex flex-col py-4 px-4 text-black bg-gray-300">
      <div className="text-center">
        <h1 className="text-4xl">Watch</h1>
      </div>
      <div className="py-5">
        <h2 className="underline">Movies:</h2>
        <ul>
          {dados.filmes.map((filme) => (
            <li key={filme.id}>
              Nome: {filme.nome} | Ano de Lançamento: {filme.ano_de_lancamento}
            </li>
          ))}
        </ul>
      </div>
      <div className="py-5">
        <h2 className="underline">Series:</h2>
        <ul>
          {dados.series.map((serie) => (
            <li key={serie.id}>
              Nome: {serie.nome} | Ano de Lançamento: {serie.ano_de_lancamento}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
