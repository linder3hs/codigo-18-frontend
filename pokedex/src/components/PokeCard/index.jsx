/* eslint-disable react/prop-types */
export default function PokeCard(props) {
  const { pokemon } = props;

  return (
    <>
      {/* if (pokemon) {
          // haz algo
    } */}
      {pokemon && (
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
      )}
    </>
  );
}
