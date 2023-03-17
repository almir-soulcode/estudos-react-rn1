import "./ListFruits.css";
import { frutas } from "../../data/frutas";
import { useState } from "react";


export function ListFruits() {

    const [resultados, setResultados] = useState([]);

    function filtrarFrutas(evento) {
        const valor = evento.target.value;
        let busca = [];
        for(let fruta of frutas) {
            // Procura o indice da substring dentro do nome da fruta (-1 se não existir)
            let nomeFrutaMinusculo = fruta.nome.toLowerCase();
            let valorMinusculo = valor.toLowerCase();
            let indice = nomeFrutaMinusculo.indexOf(valorMinusculo);
            // Verificar se a fruta faz parte dos resultados
            if(indice != -1) {
                busca.push(fruta);
            }
        }
        setResultados(busca);
    }

    return (
        <div className="frutas">
            <input type="text" placeholder="Digite o nome de uma fruta..." onChange={filtrarFrutas} />
            <br />

            <ul>
                {resultados.map(fruta => (
                    <li>
                        <img src={fruta.imagem} />
                    </li>
                ))}
            </ul>
        </div>
    );
}