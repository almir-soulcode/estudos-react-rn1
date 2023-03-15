import "./ListaCompras.css";

const compras = [
  "Batata palha 2kg",
  "Batata frita pronta",
  "Batata doce",
  "Batata chips",
  "Batata inglesa",
];

/*
    const elementosCompras = [
        <li key="0">Batata palha</li>,
        <li key="1">Batata frita pronta</li>,
        <li key="2">Batata doce</li>,
        <li key="3">Batata chips</li>,
        <li key="4">Batata inglesa</li>
    ]
 */

const produtos = [
  { cod: 1, nome: "Batata palha", quantidade: 5, precoUnitario: 5.5 },
  { cod: 2, nome: "Batata frita pronta", quantidade: 3, precoUnitario: 10.5 },
  { cod: 3, nome: "Batata doce", quantidade: 10, precoUnitario: 20 },
  { cod: 4, nome: "Batata chips", quantidade: 5, precoUnitario: 15 },
];

export function ListaCompras() {
  const elementosCompras = compras.map((nomeCompra, index) => {
    // 1º parametro = valor no array
    // 2º parametro = posicao desse valor
    // A key serve para controle interno do react
    return <li key={index}>{nomeCompra}</li>;
  });

  const elementosProdutos = produtos.map((produto) => {
    return (
      <div key={produto.cod} className="card-compra">
        <h2>{produto.nome}</h2>
        <p>QUANTIDADE: {produto.quantidade}</p>
        <p>SUBTOTAL: R$ {produto.quantidade * produto.precoUnitario}</p>
      </div>
    );
  });

  return (
    <>
      <h2>Lista de compras</h2>
      <ul>{elementosCompras}</ul>
      <hr />
      <h2>Lista de produtos</h2>
      <div>{elementosProdutos}</div>
    </>
  );
}
