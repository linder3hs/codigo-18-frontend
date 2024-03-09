// map y forEach
const numbers = [10, 20, 34, 53];
/*
numbers.map(function (item, index, array) {

})

numbers.forEach(function (item, index, array) {

})

*/

// filter y find

// filter : retorna un array con la informacion filtrada
const number2 = numbers.filter(function (number) {
  return number > 20;
});

console.log("Number2", number2);

const books = [
  {
    id: 1,
    title: "1984",
    country: "UK",
    pages: 328,
    isbn: "9780451524935",
  },
  {
    id: 2,
    title: "hamlet",
    country: "Denmark",
    pages: 342,
    isbn: "9780743477123",
  },
];

const filterBooks = books.filter(function (book) {
  return book.pages > 330;
});

console.log(filterBooks);

console.log("Indice de un element dentro de un array", numbers.indexOf(34));
console.log("Indice de un element dentro de un array", numbers.indexOf(99));

/*
En la fábrica de juguetes del Polo Norte, cada juguete tiene un número de identificación único.

Sin embargo, debido a un error en la máquina de juguetes, algunos números se han asignado a más de un juguete.

¡Encuentra el primer número de identificación que se ha repetido, donde la segunda ocurrencia tenga el índice más pequeño!

En otras palabras, si hay más de un número repetido, debes devolver el número cuya segunda ocurrencia aparezca primero en la lista. Si 
*/

function findFirstRepeated(gifts) {
  const cleanNumbers = gifts.filter(function (gift, index) {
    return gifts.indexOf(gift) !== index;
  });

  return cleanNumbers[0] ?? -1;
}
// x
const giftIds = [2, 1, 3, 5, 3, 2];

const firstRepeatedId = findFirstRepeated(giftIds);
console.log("caso1", firstRepeatedId); // 3
const giftIds2 = [1, 2, 3, 4];
const firstRepeatedId2 = findFirstRepeated(giftIds2);
console.log("caso2", firstRepeatedId2); // -1
// Aunque el 2 y el 3 se repiten
// el 3 aparece primero por segunda vez

// const giftIds2 = [1, 2, 3, 4]
// const firstRepeatedId2 = findFirstRepeated(giftIds2)
// console.log(firstRepeatedId2) // -1

// Es -1 ya que no se repite ningún número

// const giftIds3 = [5, 1, 5, 1]
// const firstRepeatedId3 = findFirstRepeated(giftIds3)
// console.log(firstRepeatedId3) // 5
