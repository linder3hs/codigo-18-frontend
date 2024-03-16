/**
 * Como podemos acceder a una variable que esta en localStorage?
 */

const user = localStorage.getItem("user");
// OJO cuando buscamos un elemento que no existe en localStorage, este retorna
// NULL
console.log(user);
// Primero vamos a validar que user exista
if (!user) {
  location.href = "http://127.0.0.1:5500/semana-7/login/";
}

const fullName = document.querySelector("#name");
const email = document.querySelector("#email");

// Para covertir un string a un objeto JSON.parse()
const userObj = JSON.parse(user);
fullName.textContent = `${userObj.name} ${userObj.lastname}`;
email.textContent = userObj.email;
