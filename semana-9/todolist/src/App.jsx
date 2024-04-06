import { useState } from "react";
import { InputTask, Modal } from "./components";
import { tasks, saveTasksInLocalStorage } from "./utils";

export default function App() {
  // Es el estado de la lista de tareas
  const [listTasks, setListTask] = useState(tasks);
  // Es el estado del input
  const [task, setTask] = useState("");
  // Es para manejar el estado del modal
  const [isOpen, setIsOpen] = useState(false);
  // Creamos una variable para saber a que tarea le dimos click
  const [currentTask, setCurrentTask] = useState(null);

  // Funcion que se encarga de capturar el valor del input
  const handleInputTask = (event) => {
    setTask(event.target.value);
  };

  const handleListTask = (task) => {
    task.id = listTasks.length + 1;
    const newTasks = [...listTasks, task];
    setListTask(newTasks);
    saveTasksInLocalStorage(newTasks);
    setTask("");
  };

  const handleCurrentTask = (task) => {
    // Paso 1: abrir el modal
    setIsOpen(true);
    setCurrentTask(task);
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
                {/* <button onClick={function () {
                  handleCurrentTask(task)
                }}>✏️</button> */}
                <button onClick={() => handleCurrentTask(task)}>✏️</button>
                <button>🗑️</button>
              </div>
            </div>
          ))}
        </section>
        {currentTask && (
          <Modal
            open={isOpen}
            currentTask={currentTask}
            setIsOpen={setIsOpen}
          />
        )}
      </main>
    </>
  );
}
