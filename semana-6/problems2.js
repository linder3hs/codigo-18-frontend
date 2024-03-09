/*
 * Reto #1
 * EL FAMOSO "FIZZ BUZZ"
 * Dificultad: FÁCIL
 *
 * Enunciado: Escribe un programa que muestre por consola (con un console.log)
 * los números de 1 a 100 (ambos incluidos y con un salto de línea entre cada impresión),
 * sustituyendo los siguientes:
 * - Múltiplos de 3 por la palabra "fizz".
 * - Múltiplos de 5 por la palabra "buzz".
 * - Múltiplos de 3 y de 5 a la vez por la palabra "fizzbuzz".
 *
 */
// 1,2,"fizz",4,"buzz","fizz",7,8,"fizz",10,11,"fizz",13,14,"fizzbuzz"...100
function fizzBuzz(number) {
  if (number % 15 === 0) return "fizzbuzz";
  if (number % 3 === 0) return "fizz";
  if (number % 5 === 0) return "buzz";
  return number;
}

for (let i = 1; i <= 100; i++) {
  console.log(fizzBuzz(i));
}
