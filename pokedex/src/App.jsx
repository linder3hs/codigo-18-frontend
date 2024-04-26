import { useState } from "react";
import logo from "./assets/logo.svg";
import pokeSearch from "./assets/poke-search.svg";

function App() {
  const [inputValue, setInputValue] = useState("");

  const [pokemon, setPokemon] = useState(null);

  const handleInputValue = (event) => {
    setInputValue(event.target.value);
  };

  const fetchPokemon = async () => {
    const url = `https://pokeapi.co/api/v2/pokemon/${inputValue}`;
    const response = await fetch(url);

    if (!response.ok) {
      alert("Hubo un error");
      return;
    }

    const data = await response.json();

    setPokemon(data);
  };

  return (
    <>
      <main className="p-6">
        <div className="flex items-center gap-1">
          <img src={logo} width={40} alt="" />
          <h1 className="text-white font-bold text-4xl">Pokédex</h1>
        </div>
        <div className="mt-10 flex justify-center gap-5 items-center">
          <div className="bg-white flex items-center gap-2 px-3 py-2 rounded-lg">
            <img src={pokeSearch} width={20} alt="" />
            <input
              type="text"
              placeholder="Search"
              onChange={handleInputValue}
              className="w-full outline-none"
            />
          </div>
          <div>
            <button
              onClick={fetchPokemon}
              className="bg-white px-3 py-2 rounded-lg text-primary font-semibold"
            >
              Buscar
            </button>
          </div>
        </div>
        <div className="mt-10 grid gap-5 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
          <div className="bg-white rounded-lg pt-4">
            <div className="flex items-center justify-center gap-5">
              <img
                width={150}
                src={pokemon?.sprites.other["official-artwork"].front_default}
                alt=""
              />
              <div>
                <ul>
                  <li>Grass</li>
                  <li>Poison</li>
                </ul>
              </div>
            </div>
            <div className="mt-3 bg-gray-200 flex justify-center items-center h-[60px] rounded-b-lg">
              <h2 className="text-center font-semibold text-2xl">
                {pokemon?.name}
              </h2>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
