import { useState } from "react";

export function Counter() {
  const [counter, setCounter] = useState(0);

  const sumar = () => setCounter(counter + 1);
  const restar = () => setCounter(counter - 1);
  const reboot = () => setCounter(0);

  return (
    <div>
      <h1>Contador: {counter}</h1>
      <button onClick={sumar}>Sumar</button>
      <button onClick={reboot}>Reiniciar</button>
      <button onClick={restar}>Restar</button>
      <hr />
    </div>
  );
}
