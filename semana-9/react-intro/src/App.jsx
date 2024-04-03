import { useState } from "react";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Counter } from "./components/Counter";

export default function App() {
  // const [today, setToday] = useState(new Date());
  const [name, setName] = useState("");
  // const [isOpen, setIsOpen] = useState(true);

  const handleInputValue = (event) => {
    setName(event.target.value);
  };

  return (
    <div>
      <Header name="Linder" lastname="Hassinger" />
      <Counter />
      <h2>Inputs</h2>
      <p>Name: {name}</p>
      <input type="text" value={name} onChange={handleInputValue} />
      {/* aumenten que el component Footer
      reciba un companyName */}
      <Footer companyName="Linder Tech" />
    </div>
  );
}
