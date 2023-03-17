import { useState } from "react";
import "./Abas.css";

// useState é um hook

export function Abas() {
  // home, perfil, ajuda
  // [estado, função para alterar estado] = estado inicial
  const [aba, setAba] = useState("home");

  function irParaHome() {
    // Definindo estado da aba ativa p/ home
    setAba("home");
  }

  function irParaPerfil() {
    // Definindo estado da aba ativa p/ perfil
    setAba("perfil");
  }

  function irParaAjuda() {
    // Definindo estado da aba ativa p/ ajuda
    setAba("ajuda");
  }

  let conteudoAba; // conter o layout da aba selecionada

  if (aba === "home") {
    conteudoAba = <div>HOME</div>;
  } else if (aba === "perfil") {
    conteudoAba = <div>PERFIL</div>;
  } else if (aba === "ajuda") {
    conteudoAba = <div>AJUDA</div>;
  }

  console.log("Componente reconstruiu!");

  return (
    <div>
      {/* Com arrow não precisamos definir as funções acima no componente */}
      <button onClick={() => setAba("home")}>Home</button>
      <button onClick={() => setAba("perfil")}>Perfil</button>
      <button onClick={() => setAba("ajuda")}>Ajuda</button>
      <hr />
      {conteudoAba}
    </div>
  );
}
