import { useState } from "react";
import "./Desafio1.css";

export function Desafio1() {
  const [peso, setPeso] = useState(0);
  const [altura, setAltura] = useState(0);
  // -1 indica que não houve calculo
  const [imc, setImc] = useState(-1);

  function calcularImc() {
    const resultado = peso / (altura * altura);
    setImc(resultado);
  }

  function limpar() {
    setPeso(0);
    setAltura(0);
    setImc(-1);
  }

  return (
    <div>
      <h3>Calculadora de IMC</h3>
      <input
        type="number"
        placeholder="Digite o peso"
        onChange={(evento) => setPeso(evento.target.value)}
        value={peso}
      />
      <input
        type="number"
        placeholder="Digite a altura"
        onChange={(evento) => setAltura(evento.target.value)}
        value={altura}
      />
      <br />
      <button onClick={calcularImc}>Calcular</button>
      <button onClick={limpar}>Limpar</button>
      <hr />
      {imc > -1 && <p>O seu IMC é: {imc.toFixed(2)}</p>}
    </div>
  );
}

// Capturando dados do input

// - onChange
// - Função para coletar o valor
// - Estado pra armazenar
