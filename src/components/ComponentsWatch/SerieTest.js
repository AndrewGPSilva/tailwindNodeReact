import axios from "axios";
import React, { useEffect, useState } from "react";

export default function Serie() {
  const [dados, setDados] = useState([]);
  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/api/series")
      .then((response) => {
        setDados(response.data);
      })
      .catch((error) => {
        console.error("Erro na requisição:", error);
      });
  }, []);
  return (
    <div className="mb-20">
        {dados.map((dado) => (
          <li key={dado.id}>
            
            <p>Nome: {dado.name}</p> 
            <p>Descrição: {dado.descricao}</p>
            <p>Link: {dado.link}</p>
            <p>Status: {dado.items}</p>
            </li>
        ))}
    </div>
  );
}
