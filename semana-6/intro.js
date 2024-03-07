//Cuantas formas de crear una VARIABLE

// mutable = el valor o tipo puede cambiar
// inmutable = el valor o tipo no puede cambiar

// MUTABLE
/* var
   - La forma antigua de declarar variables
   - scope es mucho mayor
   - ocupa mas espacio en memoria
*/
var nombre = "Linder";
var nombre = 10;

console.log("usando var", nombre);
/*
  let
  - La forma moderna de declarar variales
  - El scope es en base al ambito donde se crear
  - tiene una mejor optimización en memoria
*/

// creamos la variable con valor 10
let edad = 10;
// verificar que la variable edad exista, le reasigna un nuevo valor y un nuevo tipo
edad = "Linder";

// cuando creamos una variable sin prefijo JS lo asume como si se usara var
direccion = "Av siempre viva";

// INMUTABLE
const pi = Math.PI;
const fechaDeNacimiento = "1900-01-01";
const dni = "88888888";
const tipoDeSangre = "O+";
console.log(pi);

// tipos de datos
/*
string
number
bool
undefined
object
null
symbol
BigInt
*/

// Listas (arrays) / Fechas /

// string
let apellido = "Hassinger";
console.log(typeof apellido);
// number
let altura = 1.78;
console.log(typeof altura);
// bool
let esMayorDeEdad = true; // false
let es_mayor_de_edad = true; // no recomendable
let esMDEdad = false; // mala practica
console.log(typeof esMayorDeEdad);

// undefined
let numeroDeCelular = undefined;
console.log(typeof numeroDeCelular);

// null // se olvidaron de null
let variable = null;
console.log(typeof variable);

let suma = 0;
console.log(null + 10);
console.log(0 + 10);

const alumnos = ["Pepe", "Maria", "Juan"];
const persona = {
  nombre: "Linder",
  apellido: "Hassinger",
};
console.log(typeof alumnos);
console.log(typeof persona);

const n1 = 10;
const n2 = 10;
console.log(n1 === n2);

const n3 = Symbol(10);
const n4 = Symbol(10);
console.log(n4 === n3);

const n5 = BigInt(999999999999999999999);
const n6 = 999999999999999999999;
console.log(typeof n5);
console.log(typeof n6);
console.log(n5 === n6);

