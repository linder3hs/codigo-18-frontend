import { tasks } from "../mock";

export function renderInnerTask(task) {
  const taskCreated = `
    <p>${task.text}</p>
    <div class="flex gap-5">
      <button onclick="checkTask(${task.id})">✅</button>
      <button onclick="editTaskWithModal(${task.id})">✏️</button>
      <button onclick="deleteTask(${task.id})">🗑️</button>
    </div>
  `;

  const taksDone = `
    <p class="line-through italic font-thin">${task.text}</p>
  `;
  return task.status === 1 ? taskCreated : taksDone;
}

export function renderTasks(element) {
  element.innerHTML = "";

  tasks.forEach((task) => {
    element.innerHTML += `
      <div class="flex justify-between px-4 mb-3 py-3 bg-white rounded-md" id="task-${
        task.id
      }">
        ${renderInnerTask(task)}
      </div>`;
  });
}
