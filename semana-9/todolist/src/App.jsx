import { useState } from "react";
import { DeleteForm, InputTask, Modal, UpdateForm } from "./components";
import { tasks, saveTasksInLocalStorage } from "./utils";
import { v4 as uuidv4 } from "uuid";

export default function App() {
  // Es el estado de la lista de tareas
  const [listTasks, setListTask] = useState(tasks);
  // Es el estado del input
  const [task, setTask] = useState("");
  // Es para manejar el estado del modal
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenDelete, setIsOpenDelete] = useState(false);
  // Creamos una variable para saber a que tarea le dimos click
  const [currentTask, setCurrentTask] = useState(null);

  // Funcion que se encarga de capturar el valor del input
  const handleInputTask = (event) => {
    setTask(event.target.value);
  };

  const handleListTask = (task) => {
    task.id = uuidv4();
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

  const handleCurrentDeleteTask = (task) => {
    setCurrentTask(task);
    setIsOpenDelete(true);
  };

  const handleUpdateTask = (task, newText) => {
    // Paso1: Buscar la tarea en mi lista
    const searchTask = listTasks.find((element) => element.id === task.id);
    searchTask.text = newText;

    saveTasksInLocalStorage(listTasks);
    setIsOpen(false);
  };

  const handleDeleteTask = (task) => {
    const filteredTasks = listTasks.filter((element) => element.id !== task.id);
    saveTasksInLocalStorage(filteredTasks);
    setListTask(filteredTasks);
    setIsOpenDelete(false);
  };

  const handleDeleteCancel = () => setIsOpenDelete(false);

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
                <button onClick={() => handleCurrentDeleteTask(task)}>
                  🗑️
                </button>
              </div>
            </div>
          ))}
        </section>
        {currentTask && (
          <Modal open={isOpen} setIsOpen={setIsOpen} title="Editar tarea">
            <UpdateForm
              currentTask={currentTask}
              handleUpdateTask={handleUpdateTask}
            />
          </Modal>
        )}
        {currentTask && (
          <Modal
            open={isOpenDelete}
            setIsOpen={setIsOpenDelete}
            title="Eliminar tarea"
          >
            <DeleteForm
              currentTask={currentTask}
              handleDeleteTask={handleDeleteTask}
              handleDeleteCancel={handleDeleteCancel}
            />
          </Modal>
        )}
      </main>
    </>
  );
}
