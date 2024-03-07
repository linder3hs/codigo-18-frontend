/*
Revertir una cadena

Crea una función que tome una cadena como entrada y devuelva una nueva cadena con los caracteres en orden inverso.

Ejemplo
hola = aloh
mundo = odnum
*/

function invertirCadena(texto) {
  // primero validamos si el parametro texto es una cadena
  if (typeof texto !== "string") {
    return "Unicamente aceptamos textos";
  }

  return texto.split("").reverse().join("");
}

invertirCadena(100); // 001
invertirCadena(true);
invertirCadena("hola mundo");
