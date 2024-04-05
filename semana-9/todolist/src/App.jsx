import { useState } from "react";
import { InputTask, Modal } from "./components";
import { tasks } from "./utils";

export default function App() {
  // Es el estado de la lista de tareas
  const [listTasks, setListTask] = useState(tasks);
  // Es el estado del input
  const [task, setTask] = useState("");

  // Funcion que se encarga de capturar el valor del input
  const handleInputTask = (event) => {
    setTask(event.target.value);
  };

  const handleListTask = (task) => {
    task.id = listTasks.length + 1;
    setListTask([...listTasks, task]);
  };

  return (
    <>
      <main className="max-w-md mx-auto p-6">
        <InputTask
          task={task}
          handleInputTask={handleInputTask}
          handleListTask={handleListTask}
        />
        <section id="container-tasks" className="mt-10">
          {listTasks.map((task) => (
            <div
              key={task.id}
              className="flex justify-between px-4 mb-3 py-3 bg-white rounded-md"
              id="task-$"
            >
              <p>{task.text}</p>
              <div className="flex gap-5">
                <button>✅</button>
                <button>✏️</button>
                <button>🗑️</button>
              </div>
            </div>
          ))}
        </section>
        <Modal open={false} />
      </main>
    </>
  );
}
