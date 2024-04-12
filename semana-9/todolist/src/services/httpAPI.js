import { BASE_URL } from "./config";

export async function getTasks() {
  const response = await fetch(BASE_URL);
  console.log("response", response);
  const tasks = await response.json();

  console.log("tasks", tasks);
}
