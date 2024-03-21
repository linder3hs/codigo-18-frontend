// Variables para form e input
const form = document.querySelector("#form");
const inputTask = document.querySelector("#input-task");
const error = document.querySelector("#error");
const containerTasks = document.querySelector("#container-tasks");

// Si quiero obtener algo de localStorage y eso no existe este retorna null
// Pasa que esta variable puede un string o un null
const validateTasksFromLocalStorage = localStorage.getItem("tasks");

let tasks = validateTasksFromLocalStorage
  ? [...JSON.parse(validateTasksFromLocalStorage)]
  : [];

function validateIfInputIsEmpty() {
  if (inputTask.value === "") {
    inputTask.classList.add("border", "border-red-500");
    error.textContent = "Debe completar este campo";
    return false;
  } else {
    inputTask.classList.remove("border", "border-red-500");
    error.textContent = "";
    return true;
  }
}

function saveTasksInLocalStorage() {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

inputTask.onkeyup = () => validateIfInputIsEmpty();

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
  if (!validateIfInputIsEmpty()) return;

  // Vamos a crear el objeto de tara
  const task = {
    id: tasks.length + 1,
    text: inputTask.value,
    status: 1,
    created_at: new Date(),
  };
  tasks.push(task);
  // Limpiar el input
  inputTask.value = "";
  // guardar en localStorage
  saveTasksInLocalStorage();
  // vas a hacer el render de las tareas
  renderTasks();
};

function deleteTask(id) {
  tasks = tasks.filter((task) => task.id !== id);
  // guardar en localStorage
  saveTasksInLocalStorage();
  // render para que vuelva a pintar las tareas
  renderTasks();
}

function renderTasks() {
  // Paso 1: Limpiar el container
  containerTasks.innerHTML = "";
  // Que variable vamos a usar para lista las tareas
  // Paso 2: Iterar a tasks
  tasks.forEach((task) => {
    // Cuando estamos iterando queremos adicionar elemento a containerTasks
    // operador de adicion +=
    // `String: ${variable}` Template String
    containerTasks.innerHTML += `
      <div class="flex justify-between px-4 mb-3 py-3 bg-white rounded-md">
        <p>${task.text}</p>
        <div class="flex gap-5">
          <button>✅</button>
          <button>✏️</button>
          <button onclick="deleteTask(${task.id})">🗑️</button>
        </div>
      </div>`;
  });
}

renderTasks();
