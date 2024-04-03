import { useState } from "react";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";

export default function App() {
  const [counter, setCounter] = useState(0);
  // const [today, setToday] = useState(new Date());
  const [name, setName] = useState("");
  // const [isOpen, setIsOpen] = useState(true);

  const sumar = () => setCounter(counter + 1);
  const restar = () => setCounter(counter - 1);
  const reboot = () => setCounter(0);

  const handleInputValue = (event) => {
    setName(event.target.value);
  };

  return (
    <div>
      <Header name="Linder" lastname="Hassinger" />
      <h1>Contador: {counter}</h1>
      <button onClick={sumar}>Sumar</button>
      <button onClick={reboot}>Reiniciar</button>
      <button onClick={restar}>Restar</button>
      <hr />
      <h2>Inputs</h2>
      <p>Name: {name}</p>
      <input type="text" value={name} onChange={handleInputValue} />
      {/* aumenten que el component Footer
      reciba un companyName */}
      <Footer companyName="Linder Tech" />
    </div>
  );
}
