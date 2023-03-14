import "./Titulo.css";
// Titulo é o nome do componente
// Componente de função
export function Titulo(props) {
  // children -> Propriedade padrão do props. Representa o texto dentro da tag
  const textoTitulo = props.children;

  // Objeto de estilo CSS (as propriedades CSS em Camel Case)
  let objectStyle = {
    borderLeftColor: props.corBorda, // border-left-color
    backgroundColor: props.corFundo // background-color
  }
  
  // A parte "visual" do componente
  return (
    <h1 className="titulo" style={objectStyle}>
      {textoTitulo}
    </h1>
  );
}

// export function Titulo({borderLeftColor, backgroundColor, children}) {
//   return (
//     <h1 className="titulo" style={{borderLeftColor, backgroundColor}}>
//       {children}
//     </h1>
//   );
// }