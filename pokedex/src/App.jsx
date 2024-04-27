import pokeSearch from "./assets/poke-search.svg";
import useGetPokemon from "./hooks/useGetPokemon";
import useInputValue from "./hooks/useInputValue";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Header from "./components/Header";
import SearchContainer from "./components/SearchContainer";

function App() {
  const { inputValue, handleInputValue } = useInputValue();

  const { pokemon, fetchPokemon } = useGetPokemon(inputValue);

  return (
    <>
      <ToastContainer />
      <main className="p-6">
        <Header />
        <SearchContainer
          handleInputValue={handleInputValue}
          fetchPokemon={fetchPokemon}
        />
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
                  {pokemon?.types.map((type) => (
                    <li key={type.slot}>{type.type.name}</li>
                  ))}
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
