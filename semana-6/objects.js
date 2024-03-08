const person = {
  id: 1,
  name: "Pepe",
  lastname: "Perez",
  hasCar: true,
};

console.log(person.name);
console.log(person["name"]);
// si no existe la propiedad retorna undefined
console.log(person.hasPhone);

// arrays (arreglos)
const alumnos = ["Pepe", "Maria", "Juan", "Luisa"];
const anyData = [1, true, { id: 1 }, "Hola", Symbol("foo")];

console.log(typeof anyData);
console.log(typeof person);
