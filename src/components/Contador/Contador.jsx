import { useState } from "react"; // useState -> Uma função
import "./Contador.css";

export function Contador() {
    // useState é uma função que cria um estado
    // Um estado é uma variavel especial que sincroniza as mudanças na página
    // Retorna um array (tem apenas duas posições)
    // indice 0 -> estado
    // indece 1 -> função que muda o estado

    // const array = useState(10); 
    // let numero = array[0];
    // let setNumero = array[1];

    // destruct (desestruturação)
    const [numero, setNumero] = useState(0);

    // Incrementar
    function inc() {
        const novoNumero = numero + 1;
        setNumero(novoNumero);
    }

    // Decrementar
    function dec() {
        const novoNumero = numero - 1;
        setNumero(novoNumero);
    }

    function mais10() {
        const novoNumero = numero + 10;
        setNumero(novoNumero)
    }

    function mais100() {
        setNumero(numero + 100);
    }

    function vezes3() {
        setNumero(numero * 3);
    }

    function metade() {
        setNumero(numero / 2);
    }

    function menos50() {
        setNumero(numero - 50);
    }

    function menos5() {
        setNumero(numero - 5);
    }

    function zerar() {
        setNumero(0);
    }

    return (
        <div className="contador">
            <h1>{numero}</h1>

            <div>
                <button onClick={inc}>+1</button>
                <button onClick={dec}>-1</button>
                <button onClick={mais10}>+10</button>
                <button onClick={mais100}>+100</button>
                <button onClick={vezes3}>*3</button>
                <button onClick={metade}>/2</button>
                <button onClick={menos50}>-50</button>
                <button onClick={menos5}>-5</button>
                <button onClick={zerar}>0</button>
            </div>
        </div>
    );
}