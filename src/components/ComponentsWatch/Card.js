export default function Card({imagem, nome, ano}) {
    return (
      <section className="flex flex-col align-items text-center justify-center m-3 rounded-md">
        <div className="flex justify-center">
          <img className="h-52 w-2/4 border border-gray-800 " src={imagem} alt="Imagem" />
        </div>
        <div className="py-3">
          <h2 className="font-bold">{nome}</h2>
          <h2>Ano de Lançamento: {ano}</h2>
        </div>
      </section>
    )
  }