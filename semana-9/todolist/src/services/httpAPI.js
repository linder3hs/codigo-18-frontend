import { BASE_URL } from "./config";

export async function getTasks() {
  const response = await fetch(BASE_URL);
  const tasks = await response.json();

  return tasks;
}
