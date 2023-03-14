// Trazer de outro arquivo/biblioteca alguma função ou variável
import { createRoot } from "react-dom/client";
import { Blog } from "./components/Blog/Blog";
import { Footer } from "./components/Footer/Footer";
import { Mensagem } from "./components/Mensagem/Mensagem";
import { Postagem } from "./components/Postagem/Postagem";
import { Titulo } from "./components/Titulo/Titulo";
import { Musics } from "./components/Musics/Musics";
import { Task } from "./components/Task/Task";

// Linka o arquivo css ao projeto React
import "./styles.css";

// Selecionando a div na página
const rootElement = document.getElementById("root");

// A div root será a base da aplicação
const root = createRoot(rootElement);

// Inserimos o conteúdo da página
root.render(
  <div>
    {/* <Titulo></Titulo>
    <Mensagem></Mensagem>
    <hr />
    <Postagem></Postagem>
    <hr />
    <Blog></Blog>
    <hr/>
    <Footer></Footer> */}
    <Musics />
    <Task title="Beber água" status="Feito" deadline="14/03/2023 12:00" />
    <Task title="Marcar reunião" status="Pendente" deadline="31/03/2023 10:00" />
    <Task title="Correr" status="Atrasado" deadline="02/03/2023 6:00" />
  </div>
);

// let nome = "Almir";

// root.render(
//   <section>
//     <h1>React é top</h1>
//     <img src="https://picsum.photos/200" />
//     <p>
//       Olá, tudo bem? <br /> <b>{nome.toUpperCase()}</b>
//     </p>
//     <p>Soma: {1 + 1}</p>
//   </section>
// );

// JSX = Javascript Extension
// No fim o HTML é convertido para Javascript (por baixo dos panos)
// JSX = Açúcar Sintático

// Dentro das chaves podemos escrever expressões JS!
