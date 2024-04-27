/* eslint-disable react/prop-types */
import TextField from "../TextField";
import Button from "../Button";

export default function SearchContainer(props) {
  const { handleInputValue, fetchPokemon } = props;

  return (
    <>
      <div className="mt-10 flex justify-center gap-5 items-center">
        <TextField handleInputValue={handleInputValue} />
        <Button fetchPokemon={fetchPokemon} />
      </div>
    </>
  );
}
