import { useState } from "react";
import "./Sorteio.css";

export function Sorteio() {
  // Estado = memória do componente
  const [numero, setNumero] = useState(0);

  function gerarNumero() {
    // event handler
    let numeroSorteado = Math.floor(Math.random() * 100);
    // chama uma atualização do componente
    // re-renderização = Sorteio será reconstruido
    setNumero(numeroSorteado);
  }

  //   console.log("Componente reconstruiu " + new Date().toTimeString());
  //   console.log("Valor do estado " + numero);

  //   let h3Class;

  //   if (numero % 2 === 0) {
  //     h3Class = "par";
  //   } else {
  //     h3Class = "impar";
  //   }

  return (
    <div>
      <h3 className={numero % 2 === 0 ? "par" : "impar"}>{numero}</h3>
      <button onClick={gerarNumero}>Gerar</button>
    </div>
  );
}
