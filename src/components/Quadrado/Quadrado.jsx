import "./Quadrado.css";

function quandoClicar() {
    alert("CLICOOOOOOOOOU")
}

function quandoMouseEntrar(evento) {
    // target é o elemento que acionou o evento (DOM)
    const elemActive = evento.target;
    elemActive.style.backgroundColor = "red";
}

function quandoMouseSair(evento) {
    // target é o elemento que acionou o evento (DOM)
    const elemActive = evento.target;
    elemActive.style.backgroundColor = "blue";
}

function quandoClicarDuasVezes(evento) {
    const elemActive = evento.target;
    elemActive.style.backgroundColor = "orange";
}

export function Quadrado() {
    return (
        <div
            className="quadrado"
            // onClick={quandoClicar}
            onMouseEnter={quandoMouseEntrar}
            onMouseLeave={quandoMouseSair}
            onDoubleClick={quandoClicarDuasVezes}
        >
        </div>
    );
}

// Crie uma função chamada quandoClicarDuasVezes que será acionar com duplo clique no quadrado. A função deve mudar a cor do quadrado para laranja.