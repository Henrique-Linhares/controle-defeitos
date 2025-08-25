import { useState } from "react";
import "../data/defeitos.js";
import "./CardDefeitos.css";

export default function CardDefeitos({ defeito }) {
  const [contador, setContador] = useState(0);

  const handleClick = () => {
    setContador(contador + 1);
  };

  let classeContador = "contador-verde";

  if (contador >= 7 && contador <= 15) {
    classeContador = "contador-amarelo";
  } else if (contador > 15) {
    classeContador = "contador-vermelho";
  }

  return (
    <div className="card">
      <h2 className="title">{defeito.nome}</h2>
      <p className="descricao">{defeito.descricao}</p>
      <p className={classeContador}>{contador}</p>
      <button className="buttonAdd" onClick={handleClick}>
        Adicionar
      </button>
    </div>
  );
}
