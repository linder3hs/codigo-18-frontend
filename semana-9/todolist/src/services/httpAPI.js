import { BASE_URL } from "./config";

export async function getTasks() {
  const response = await fetch(BASE_URL);
  const tasks = await response.json();

  return tasks;
}

export async function createTask(task) {
  const response = await fetch(BASE_URL, {
    method: "POST",
    body: JSON.stringify(task),
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = response.json();
  return data;
}
