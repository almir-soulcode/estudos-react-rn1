import { useEffect, useState } from "react";
import "./ConversorMetros.css";

export function ConversorMetros() {
  const [metros, setMetros] = useState(0);
  const [milimetros, setMilimetros] = useState(0);
  const [centimetros, setCentimetros] = useState(0);
  const [quilometros, setQuilometros] = useState(0);

  useEffect(() => {
    setMilimetros(Number(metros) * 1000);
    setCentimetros(Number(metros) * 100);
    setQuilometros(Number(metros) / 1000);
  }, [metros]);

  return (
    <div>
      <input
        type="range"
        max={1000}
        onChange={(evento) => setMetros(evento.target.value)}
        value={metros}
      />
      {metros} m
      <hr />
      <p>Valor em mm: {milimetros}</p>
      <p>Valor em cm: {centimetros}</p>
      <p>Valor em km: {quilometros}</p>
    </div>
  );
}
