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

/*
Comprobar si un número es primo:

Escribe una función que tome un número(number) como entrada y devuelva true si es primo y false si no lo es. Un número primo es aquel que solo es divisible por 1 y por sí mismo.

1 = NO
*/

function comprobarSiEsPrimo(numero) {
  if (typeof numero !== "number") return "Solo se aceptan numeros";

  if (numero === 1) return false;

  let contador = 0;

  for (let i = 0; i <= numero; i++) {
    if (numero % i === 0) contador++;
  }

  return contador === 2;
}

console.log(2 === 2);
console.log(1 === "1");

comprobarSiEsPrimo("hola");
comprobarSiEsPrimo(true);
comprobarSiEsPrimo(1);
comprobarSiEsPrimo(20);
comprobarSiEsPrimo(97);
comprobarSiEsPrimo(3);
comprobarSiEsPrimo(100);
comprobarSiEsPrimo(10.4);
comprobarSiEsPrimo(2.3);

/*
Suma de los elementos de un array:
Escribe una función que tome un array de números como entrada y devuelva la suma de todos sus elementos.

[1, 10, 5] = 16
[20, 43, 3] = 66
*/
function sumarArray(numeros) {
  // primero validamos si es un array
  if (typeof numeros !== "object" || numeros.length < 1) {
    return "Solo aceptamos arrays con información"
  }
  
  let suma = 0
  
  for (let i = 0; i < numeros.length; i++) {
    if (typeof numeros[i] !== "number") {
      return "Solo aceptamos arrays de numeros"
    }
    suma += numeros[i]
  }
  
  return suma
}

sumarArray([1, "10", 3])
sumarArray([1, 10, 3])
sumarArray([])
sumarArray(1)
