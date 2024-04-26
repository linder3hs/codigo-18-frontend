import { useState } from "react";

export default function useInputValue() {
  const [inputValue, setInputValue] = useState("");

  const handleInputValue = (event) => {
    setInputValue(event.target.value);
  };

  return {
    inputValue,
    handleInputValue,
  };
}
