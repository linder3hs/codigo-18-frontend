/* eslint-disable react/prop-types */
import pokeSearch from "../../assets/poke-search.svg";

export default function TextField(props) {
  const { handleInputValue } = props;

  return (
    <>
      <div className="bg-white flex items-center gap-2 px-3 py-2 rounded-lg">
        <img src={pokeSearch} width={20} alt="" />
        <input
          type="text"
          placeholder="Search"
          onChange={handleInputValue}
          className="w-full outline-none"
        />
      </div>
    </>
  );
}
