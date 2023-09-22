import React from "react";
import dados from "../../data.json";

export default function Movies() {
  return (
    <div className="flex flex-col py-4 px-4 text-black">
      <div className="text-center">
        <h1 className="text-4xl underline">To Watch</h1>
      </div>
      <div className="py-5">
        <h2 className="underline">Movies:</h2>
        <ul>
          {dados.filmes.map((filme) => (
            <li key={filme.id}>
              Name: {filme.nome} | Release Year: {filme.ano_de_lancamento}
            </li>
          ))}
        </ul>
      </div>
      <div className="py-5">
        <h2 className="underline">Series:</h2>
        <ul>
          {dados.series.map((serie) => (
            <li key={serie.id}>
              Name: {serie.nome} | Release Year: {serie.ano_de_lancamento}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
