// Variables para form e input
const form = document.querySelector("#form");
const inputTask = document.querySelector("#input-task");
const error = document.querySelector("#error");

// Vamos a crear un array de objetos pero que por defecto este vacio
const tasks = []; //Array vacio

// Vamos a capturar el evento onsubmit de form
/**
 * Como recomendacion, es bueno usar el nombre event o e
 *
 * Estados
 * 1 = creado
 * 2 = terminado
 * 9 = eliminado
 */
form.onsubmit = (event) => {
  // evitar que se recargue la pagina
  event.preventDefault();
  // Primero vamos a validar que el input este lleno
  if (inputTask.value === "") {
    inputTask.classList.add("border", "border-red-500");
    error.textContent = "Debe completar este campo";
    return;
  }

  // Vamos a crear el objeto de tara
  const task = {
    id: tasks.length + 1,
    text: inputTask.value,
    status: 1,
    created_at: new Date(),
  };
  tasks.push(task);
};
