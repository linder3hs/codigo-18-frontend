import { useState } from "react";
import {
  DeleteForm,
  InputTask,
  Modal,
  UpdateForm,
  CheckForm,
} from "./components";
import { createTask, updateTask, deleteTask } from "./services/httpAPI";
import useGetTasks from "./hooks/useGetTasks";

export default function App() {
  const { listTasks, setListTask } = useGetTasks();

  const [task, setTask] = useState("");
  const [currentTask, setCurrentTask] = useState(null);

  const [isOpen, setIsOpen] = useState({
    edit: false,
    delete: false,
    check: false,
  });

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

  const handleListTask = async (task) => {
    const newTask = await createTask(task);

    const newTasks = [...listTasks, newTask];
    setListTask(newTasks);
    setTask("");
  };

  const handleCurrentTask = (task, modalType) => {
    handleOpen(modalType);
    setCurrentTask(task);
  };

  const handleUpdateTask = async (task, newText) => {
    const searchTask = listTasks.find((element) => element.id === task.id);
    searchTask.text = newText;

    await updateTask(searchTask);

    handleOpen("edit");
  };

  const handleCheckTask = async (task) => {
    const searchTask = listTasks.find((element) => element.id === task.id);
    searchTask.status = 2;

    await updateTask(searchTask);

    handleOpen("check");
  };

  const handleDeleteTask = async (task) => {
    const filteredTasks = listTasks.filter((element) => element.id !== task.id);

    await deleteTask(task);

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
            >
              <p>{task.text}</p>
              {task.status === 1 && (
                <div className="flex gap-5">
                  <button onClick={() => handleCurrentTask(task, "check")}>
                    ✅
                  </button>
                  <button onClick={() => handleCurrentTask(task, "edit")}>✏️</button>
                  <button onClick={() => handleCurrentTask(task, "delete")}>🗑️</button>
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
