/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";

export default function UpdateForm(props) {
  const [editedTask, setEditedTask] = useState(props.currentTask?.text);

  const handleEditTask = (event) => {
    setEditedTask(event.target.value);
  };

  const handleFormEditSubmit = (event) => {
    event.preventDefault();

    props.handleUpdateTask(props.currentTask, editedTask);
  };

  useEffect(() => {
    setEditedTask(props.currentTask?.text);
    // Es una dependencia
  }, [props.currentTask?.text]);

  return (
    <>
      <form action="" id="form-edit" onSubmit={handleFormEditSubmit}>
        <input
          id="input-edit-task"
          type="text"
          value={editedTask}
          onChange={handleEditTask}
          placeholder="Editar tarea"
          className="w-full border py-2 px-4 rounded-md outline-none"
        />
        <div className="mt-5 flex justify-end gap-5">
          <button
            type="submit"
            className="bg-green-400 py-2 px-4 rounded-md text-white"
          >
            Actualizar
          </button>
        </div>
      </form>
    </>
  );
}
