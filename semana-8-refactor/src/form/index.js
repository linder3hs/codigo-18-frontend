import { validateIfInputIsEmpty } from "../utils";
import { tasks, saveTasksInLocalStorage } from "../mock";
import { renderTasks } from "../render";

export function createTask(element, input, container) {
  element.onsubmit = function (event) {
    event.preventDefault();
    if (!validateIfInputIsEmpty(input)) return;

    const task = {
      id: tasks.length + 1,
      text: input.value,
      status: 1,
      created_at: new Date(),
    };

    tasks.push(task);

    input.value = "";
    saveTasksInLocalStorage();
    renderTasks(container);
  };
}
