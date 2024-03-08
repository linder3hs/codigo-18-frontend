const person = {
  id: 1,
  name: "Pepe",
  lastname: "Perez",
  hasCar: true,
  car: {
    brand: "Astor Martin",
    price: 9999.0,
    color: {
      variant: "neutro",
      hex: "#0000",
    },
  },
};
// agregando una propiedad
person.address = "av mi casa siempre viva 123";
person["age"] = 99;

console.log("color", person.car.color.hex);
console.log("color", person["car"]["color"]["hex"]);

console.log(person.name);
console.log(person["name"]);
// si no existe la propiedad retorna undefined
console.log(person.hasPhone);

// arrays (arreglos)
const alumnos = ["Pepe", "Maria", "Juan", "Luisa"];
const anyData = [1, true, { id: 1 }, "Hola", Symbol("foo")];

console.log(typeof anyData);
console.log(typeof person);

const person2 = {
  id: 1,
  name: "Pepe",
  lastname: "Perez",
  hasCar: true,
  car: {
    brand: "Astor Martin",
    price: 9999.0,
    color: {
      variant: "neutro",
      hex: "#0000",
    },
  },
};

Object.keys(person2.car);
Object.keys(person2.car.color);
Object.values(person2).length;
Object.entries(person2).length;

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

// for (let i=0; i < 12;i++)

/*
Formas de iterar un arreglo

for of
for in
*/

const numbers = [100, 20, 23, 54, 57, 12];

// for (let i=0; i<numbers.length;i++) {
//   console.log(numbers[i])
// }

function forOfExample() {
  for (let number of numbers) {
    console.log(number);
  }
}

function forInExample() {
  for (let number in numbers) {
    console.log(number);
  }
}

// Quiero una funcion que me retorne el cuadrado de cada numero del arreglo numbers
function powSquareNumbers() {
  const newNumbers = [];

  for (let number of numbers) {
    const result = number * number;
    newNumbers.push(result);
  }

  return newNumbers;
}

powSquareNumbers();

// map lo que hacer es iterar y retornar un arreglo
function powSquareNumbersMap() {
  const newNumber = numbers.map(function (number) {
    return number * number;
  });

  return newNumber;
}

powSquareNumbersMap();

// queremos agregar la propiedad imagen a books
// books: es la lista que esta arriba
const newBooks = books.map(function (book) {
  return {
    id: book.id,
    title: book.title,
    country: book.country,
    isbn10: book.isbn,
    image: "https://img....",
  };
});

console.log(newBooks);

// tengo un arreglo de precios y quiero otro arreglo pero de los precio + el igv 18% (0.18)

const prices = [100.3, 2000.45, 125, 305];

const pricesIGV = prices.map(function (price) {
  return Number((price * 1.18).toFixed(2));
});

console.log(pricesIGV);

// map -> []
// forEach -> nada

function countVowels(names) {
  const vowels = "aeiou".split("");

  const result = [];

  names.forEach(function (name) {
    // paso 1: covierto name a minuscula
    const nameInLowerCase = name.toLowerCase();
    let count = 0;
    nameInLowerCase.split("").forEach(function (letter) {
      if (vowels.includes(letter)) {
        count++;
      }
    });

    result.push({
      originalName: name,
      vowels: count,
    });
  });

  return result;
}

countVowels(["Pepe", "Juan", "Maria", "Pedro"]);
