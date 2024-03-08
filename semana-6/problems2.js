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

/*
En la fábrica de juguetes del Polo Norte, cada juguete tiene un número de identificación único.

Sin embargo, debido a un error en la máquina de juguetes, algunos números se han asignado a más de un juguete.

¡Encuentra el primer número de identificación que se ha repetido, donde la segunda ocurrencia tenga el índice más pequeño!

En otras palabras, si hay más de un número repetido, debes devolver el número cuya segunda ocurrencia aparezca primero en la lista. Si 
*/

function findFirstRepeated(gifts) {
  const cleanNumbers = new Set(gifts)
  
  // Si son iguales no hay numeros repetidos
  if (gifts.length === cleanNumbers.size) return -1
    
  const result = {}
  
  gifts.forEach(function (gift, index) {
    if (result[gift]) {
      result[gift]["repeat"] += 1
      result[gift]["index"] -= index
    } else {
      result[gift] = {
        repeat: 1,
        index
      }
    }
  })
  const filterNumbers = Object.entries(result).filter(function ([key, value]) {
    if (value.repeat > 1) {
      return {
        "number": 1 
      }
    }
  }).map(function ([key, value]) {
    return {
      [key]: Math.abs(value.index)
    }
  })
  
  console.log(filterNumbers)
  
  let menor = 0
}

const giftIds = [2, 1, 3, 5, 3, 2]
          
const firstRepeatedId = findFirstRepeated(giftIds)
console.log(firstRepeatedId) // 3
// Aunque el 2 y el 3 se repiten
// el 3 aparece primero por segunda vez

// const giftIds2 = [1, 2, 3, 4]
// const firstRepeatedId2 = findFirstRepeated(giftIds2)
// console.log(firstRepeatedId2) // -1




// Es -1 ya que no se repite ningún número

// const giftIds3 = [5, 1, 5, 1]
// const firstRepeatedId3 = findFirstRepeated(giftIds3)
// console.log(firstRepeatedId3) // 5
