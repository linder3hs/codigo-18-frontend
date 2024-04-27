/* eslint-disable react/prop-types */
import TextField from "../TextField";

export default function SearchContainer(props) {
  const { handleInputValue, fetchPokemon } = props;

  return (
    <>
      <div className="mt-10 flex justify-center gap-5 items-center">
        <TextField handleInputValue={handleInputValue} />
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
