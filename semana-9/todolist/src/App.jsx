import { useState } from "react";
import {
  DeleteForm,
  InputTask,
  Modal,
  UpdateForm,
  CheckForm,
} from "./components";
import { tasks, saveTasksInLocalStorage } from "./utils";
import { v4 as uuidv4 } from "uuid";

export default function App() {
  // Es el estado de la lista de tareas
  const [listTasks, setListTask] = useState(tasks);
  // Es el estado del input
  const [task, setTask] = useState("");
  // Es para manejar el estado del modal
  const [isOpen, setIsOpen] = useState({
    edit: false,
    delete: false,
    check: false,
  });

  const [currentTask, setCurrentTask] = useState(null);

  const handleOpen = (modalType) => {
    setIsOpen({
      ...isOpen,
      [modalType]: !isOpen[modalType],
    });
  };

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
    handleOpen("edit");
    setCurrentTask(task);
  };

  const handleCurrentDeleteTask = (task) => {
    setCurrentTask(task);
    handleOpen("delete");
  };

  const handleCurrentCheckTask = (task) => {
    setCurrentTask(task);
    handleOpen("check");
  };

  const handleUpdateTask = (task, newText) => {
    // Paso1: Buscar la tarea en mi lista
    const searchTask = listTasks.find((element) => element.id === task.id);
    searchTask.text = newText;

    saveTasksInLocalStorage(listTasks);
    setIsOpen(false);
  };

  const handleCheckTask = (task) => {
    const searchTask = listTasks.find((element) => element.id === task.id);
    searchTask.status = 2;

    saveTasksInLocalStorage(listTasks);
    handleOpen("check");
  };

  const handleDeleteTask = (task) => {
    const filteredTasks = listTasks.filter((element) => element.id !== task.id);
    saveTasksInLocalStorage(filteredTasks);
    setListTask(filteredTasks);
    handleOpen("delete");
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
              {task.status === 1 && (
                <div className="flex gap-5">
                  <button onClick={() => handleCurrentCheckTask(task)}>
                    ✅
                  </button>
                  <button onClick={() => handleCurrentTask(task)}>✏️</button>
                  <button onClick={() => handleCurrentDeleteTask(task)}>
                    🗑️
                  </button>
                </div>
              )}
            </div>
          ))}
        </section>
        {currentTask && (
          <Modal
            open={isOpen.edit}
            handleClose={() => handleOpen("edit")}
            title="Editar tarea"
          >
            <UpdateForm
              currentTask={currentTask}
              handleUpdateTask={handleUpdateTask}
            />
          </Modal>
        )}
        {currentTask && (
          <Modal
            open={isOpen.delete}
            handleClose={() => handleOpen("delete")}
            title="Eliminar tarea"
          >
            <DeleteForm
              currentTask={currentTask}
              handleDeleteTask={handleDeleteTask}
              handleDeleteCancel={() => handleOpen("delete")}
            />
          </Modal>
        )}
        {currentTask && (
          <Modal
            open={isOpen.check}
            handleClose={() => handleOpen("check")}
            title="Ver tarea"
          >
            <CheckForm
              currentTask={currentTask}
              handleCheckTask={handleCheckTask}
              handleCheckCancel={() => handleOpen("check")}
            />
          </Modal>
        )}
      </main>
    </>
  );
}
