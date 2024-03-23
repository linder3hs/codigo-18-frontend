export function validateIfInputIsEmpty(input) {
  if (input.value === "") {
    input.classList.add("border-red-500");
    // error.textContent = "Debe completar este campo";
    return false;
  } else {
    input.classList.remove("border", "border-red-500");
    // error.textContent = "";
    return true;
  }
}
