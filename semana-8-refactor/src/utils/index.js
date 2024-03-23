export function validateIfInputIsEmpty(input) {
  if (input.value === "") {
    input.classList.add("error");
    // error.textContent = "Debe completar este campo";
    return false;
  } else {
    input.classList.remove("error");
    // error.textContent = "";
    return true;
  }
}
