import React from "react";
import dados from "../../data.json";
import Card from "../ComponentsWatch/Card.js"

export default function Movies() {
  return (
    <div className="flex flex-col py-4 px-4 text-white  bg-black">
      <div className="text-center">
        <h1 className="text-4xl">To Watch</h1>
      </div>
      <div className="py-5">
        <h2 className="underline font-bold">Movies:</h2>
        <div>
          {dados.filmes.map((movie) => (
            <Card
              key={movie.id}
              imagem={movie.imagem_capa}
              nome={movie.nome}
              ano={movie.ano_de_lancamento}
            />
          ))}
        </div>
      </div>
      <div className="py-5">
        <h2 className="underline font-bold">Series:</h2>
        <div>
          {dados.series.map((serie) => (
            <Card
              key={serie.id}
              imagem={serie.imagem_capa}
              nome={serie.nome}
              ano={serie.ano_de_lancamento}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
