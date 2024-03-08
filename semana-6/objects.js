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
