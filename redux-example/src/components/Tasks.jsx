import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTask } from "../app/slices/tasksSlice";

export default function Tasks() {
  const [value, setValue] = useState("");

  const tasks = useSelector((state) => state.task.tasks);

  const distpatch = useDispatch();

  const handleInputChange = (event) => {
    setValue(event.target.value);
  };

  // Cuando hagamos click en el boton crear tarea debe imprimir en consola el valor de value
  const handleSubmit = (event) => {
    event.preventDefault();
    const task = {
      id: tasks.length + 1,
      text: value,
    };

    distpatch(addTask(task));
  };

  return (
    <>
      <form action="" onSubmit={handleSubmit}>
        <input
          value={value}
          onChange={handleInputChange}
          type="text"
          placeholder="Escribe tu tarea"
        />
        <button type="submit">Crear Tarea</button>
      </form>
      <div className="tasks">
        {tasks.map((task) => (
          <div key={task.id}>
            <p>{task.text}</p>
          </div>
        ))}
      </div>
    </>
  );
}
