import { useState } from "react";
import "../data/defeitos.js";
import "./CardDefeitos.css";

export default function CardDefeitos({ defeito }) {
  const [contador, setContador] = useState(0);

  // Cria a função que atualiza o contador
  const handleClick = () => {
    setContador(contador + 1);
  };

  let classeContador = "contador-verde";

  // Verifica se o contador é maior que 7 e menor que 15
  // e atribui uma cor amarela ao contador
  if (contador >= 7 && contador <= 15) {
    classeContador = "contador-amarelo";
  //Verifica se o contador é maior que 15 e atribui uma cor vermelha a ele
  } else if (contador > 15) {
    classeContador = "contador-vermelho";
  }

  // Se o contador estiver acima de 0 o texto será escondido
  const visibilidade = contador > 0 ? "ocultarParagrafo" : "pDefeito";

  return (
    <div className="card">
      <h2 className="title">{defeito.nome}</h2>
      <p className="descricao">{defeito.descricao}</p>
      <p className={classeContador}>{contador}</p>
      <button className="buttonAdd" onClick={handleClick}>
        Adicionar
      </button>
      <p className={visibilidade}>Nenhum defeito registrado.</p>
    </div>
  );
}
