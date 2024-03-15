function validateInputIfNumber(element, type, container, input) {
  /**
   * Paso1: Es validar que unicamente podamos escribir numeros en el input
   * para ello primero vamos a capturar el valor actual del input
   * y vamos a evaluar lo siguiente
   */
  const inputValue = type === "event" ? element.target.value : element.value;

  /**
   * En este caso estamos usando la funcion `isNaN`
   * isNaN: is Not a Number ()
   * Si el valor del input is Not a Number vamos eliminar el ultimo caracter
   * que el usuariuo escribio, para ello uso la funcion slice con los valores
   * 0, -1, porque quiero inciar desde el ultimo caracter por ende uso el -1
   * para empezar a contar de derecha a izquierda
   */
  if (isNaN(inputValue)) {
    input.value = inputValue.slice(0, -1);
  }

  /**
   * Si la primera letra de la palabra es igual a 0 vamos a colocar un border
   * rojos en el input y NO vamos a des seleccionar el button, por ede uso
   * return para que si entra a la condicion la funcion termine
   */
  if (inputValue[0] === "0") {
    container.classList.add("border", "border-red-500");
    return false;
  } else {
    container.classList.remove("border", "border-red-500");
  }
}
