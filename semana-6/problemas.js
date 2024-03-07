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

/*
Contar la cantidad de vocales en una cadena:

Crea una función que tome una cadena(string) como entrada y devuelva la cantidad de vocales que contiene. Puedes considerar tanto las vocales en mayúsculas como en minúsculas.

hola => 2
celular => 3
telefono => 4
*/

function contarVocales(texto) {
  if (typeof texto !== "string") return "No es un texto";

  const vocales = "aeiou".split("");
  const textoEnMiniscula = texto.toLowerCase();
  let contador = 0;

  for (let i = 0; i < textoEnMiniscula.length; i++) {
    if (vocales.includes(textoEnMiniscula[i])) {
      contador++;
    }
  }
  // template string
  return `La cantidad de vocales son: ${contador}`;
}

contarVocales("telefono");
contarVocales("celular");
