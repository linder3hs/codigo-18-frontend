/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";

export default function Modal(props) {
  const [editedTask, setEditedTask] = useState(props.currentTask?.text);

  const handleEditTask = (event) => {
    setEditedTask(event.target.value);
  };

  useEffect(() => {
    setEditedTask(props.currentTask?.text);
    // Es una dependencia
  }, [props.currentTask?.text]);

  return (
    <>
      <div
        id="modal"
        className={`relative z-50 w-full ${props.open ? "" : "hidden"}`}
      >
        <div className="fixed inset-0 bg-black/30"></div>
        <div className="fixed inset-0 w-full p-6 flex justify-center items-center rounded-md">
          <div className="bg-white p-5 mx-auto w-full max-w-md border rounded-md">
            <div id="modal-title" className="mb-5">
              <h2 className="text-2xl font-semibold">Editar tarea</h2>
            </div>
            <div id="modal-content">
              <form action="" id="form-edit">
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
                    type="button"
                    onClick={() => props.setIsOpen(false)}
                    className="py-2 px-4 border border-red-400 rounded-md"
                  >
                    Cerrar
                  </button>
                  <button
                    type="submit"
                    className="bg-green-400 py-2 px-4 rounded-md text-white"
                  >
                    Actualizar
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
