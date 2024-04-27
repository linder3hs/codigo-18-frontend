/* eslint-disable react/prop-types */
import pokeSearch from "../../assets/poke-search.svg";

export default function SearchContainer(props) {
  const { handleInputValue, fetchPokemon } = props;

  return (
    <>
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
    </>
  );
}
