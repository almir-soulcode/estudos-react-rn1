export function Contador() {
    let numero = 0;

    // Incrementar
    function inc() {
        numero = numero+1;
        setNumero()
    }

    // Decrementar
    function dec() {
        numero = numero-1;
        setNumero()
    }

    function setNumero() {
        const displayNumero = document.getElementById("displayNumero");
        displayNumero.innerHTML = numero;
    }

    return (
        <div>
            <h1 id="displayNumero">{numero}</h1>

            <button onClick={inc}>+1</button>
            <button onClick={dec}>-1</button>
        </div>
    );
}