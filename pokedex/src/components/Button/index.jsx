/* eslint-disable react/prop-types */
export default function Button(props) {
  const { fetchPokemon } = props;
  return (
    <>
      <div>
        <button
          onClick={fetchPokemon}
          className="bg-white px-3 py-2 rounded-lg text-primary font-semibold"
        >
          Buscar
        </button>
      </div>
    </>
  );
}
