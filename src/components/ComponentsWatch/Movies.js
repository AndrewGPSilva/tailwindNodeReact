import React from "react";
import dados from "../../data.json";
import Card from "../ComponentsWatch/Card.js"

export default function Movies() {
  return (
    <div className="flex flex-col py-5 px-5 text-white bg-black">
      <div className="text-center" id="containerTitle">
        <h1 className="text-5xl underline text-emerald-400">Your Entertainment Portal</h1>
      </div>
      <section>
        <div className="py-5">
          <h2 className="underline font-bold text-2xl text-emerald-400">Movies:</h2>
          <div className="flex justify-center">
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
          <h2 className="underline font-bold text-2xl text-emerald-400">Series:</h2>
          <div className="flex justify-center mb-5">
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
      </section>
    </div>
  );
}
