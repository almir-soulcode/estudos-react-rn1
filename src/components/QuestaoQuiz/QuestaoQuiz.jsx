import { useState } from "react";
import "./QuestaoQuiz.css";

const pergunta = {
  enunciado: "Qual é a capital de Brunei?",
  alternativas: ["Fortaleza", "Bandar Seri Begawan", "Jakarta", "Kuala Lumpur"],
  alternativaCorreta: "Bandar Seri Begawan",
};

export function QuestaoQuiz() {
  const [statusQuiz, setStatusQuiz] = useState("pendente");
  const [chances, setChances] = useState(2);
  // pendente = precisa marcar uma alternativa
  // acertou = marcou a alternativa correta
  // errou = marcou a alternativa errada

  function checarResposta(altMarcada) {
    if (altMarcada === pergunta.alternativaCorreta) {
      // A interface irá mostrar o feedback de que acertou
      setStatusQuiz("acertou");
    } else {
      setChances(chances - 1);
      setStatusQuiz("errou");
    }
  }

  function tentarNovamente() {
    // voltar para pendente, indica para a interface atualizar
    // e mostrar a pergunta novamente
    if (chances > 0) {
      setStatusQuiz("pendente");
    } else {
      setStatusQuiz("acabou");
    }
  }

  if (statusQuiz === "pendente") {
    return (
      <div>
        <h3>{pergunta.enunciado}</h3>
        <small>Tentativas restantes: {chances}</small>
        <ol type="A">
          {pergunta.alternativas.map((elemento) => (
            <li
              className="alternativa"
              onClick={() => checarResposta(elemento)}
            >
              {elemento}
            </li>
          ))}
        </ol>
      </div>
    );
  } else if (statusQuiz === "acertou") {
    return (
      <div>
        <h3>Parabéns, você acertou!</h3>
        <p>Mostrou que manja!</p>
      </div>
    );
  } else if (statusQuiz === "errou") {
    return (
      <div>
        <h3>Você errou. Mas pode tentar novamente.</h3>
        <button onClick={tentarNovamente}>Tentar novamente</button>
      </div>
    );
  } else if (statusQuiz === "acabou") {
    return (
      <div>
        <h3>Já era meu irmão!</h3>
        <p>Suas chances esgotaram.</p>
      </div>
    );
  }
}
