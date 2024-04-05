const validateTasksFromLocalStorage = localStorage.getItem("tasks");

export let tasks = validateTasksFromLocalStorage
  ? [...JSON.parse(validateTasksFromLocalStorage)]
  : [];

export function saveTasksInLocalStorage(tasks) {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}
