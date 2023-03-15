import "./ListaAlunos.css";

const alunos = [
  {
    matricula: 202315,
    nome: "José Almir",
    dataNascimento: "26/06/1999",
    telefone: "(88) 9-9999-9999",
    media: 3.5,
  },
  {
    matricula: 202316,
    nome: "Eduardo Aragão",
    dataNascimento: "02/01/1997",
    telefone: "(88) 9-9999-9999",
    media: 7.5,
  },
  {
    matricula: 202317,
    nome: "Pedro Vieira",
    dataNascimento: "04/05/1993",
    telefone: "(88) 9-9999-9999",
    media: 9.5,
  },
  {
    matricula: 202318,
    nome: "Maria Souza",
    dataNascimento: "02/12/2001",
    telefone: "(88) 9-9999-9999",
    media: 8.75,
  },
];

export function ListaAlunos() {
  const alunosCards = alunos.map((elemento) => {
    // Operador ternário
    let classCard =
      elemento.media >= 7 ? "aluno-card aprovado" : "aluno-card reprovado";

    return (
      <div key={elemento.matricula} className={classCard}>
        <small>Nº {elemento.matricula}</small>
        <h3>{elemento.nome}</h3>
        <p>{elemento.dataNascimento}</p>
        <p>{elemento.telefone}</p>
        {/* {elemento.media >= 7 && <p>Média: {elemento.media}</p>}
        {elemento.media < 7 && <p>Continue se esforçando!</p>} */}
        {elemento.media >= 7 ? <p>Média: {elemento.media}</p> : <p>Continue se esforçando!</p>}
      </div>
    );
  });

  return <div>{alunosCards}</div>;
}
