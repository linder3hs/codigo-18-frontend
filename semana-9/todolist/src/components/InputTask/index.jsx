/* eslint-disable react/prop-types */
export default function InputTask(props) {
  // dentro de un componente puedo crear funciones
  const handleFormSubmit = (event) => {
    event.preventDefault();

    const task = {
      text: props.task,
      status: 1,
      created_at: new Date(),
    };

    props.handleListTask(task);
  };

  return (
    <>
      <form
        onSubmit={handleFormSubmit}
        id="form"
        className="flex justify-between"
      >
        <input
          id="input-task"
          type="text"
          value={props.task}
          onChange={props.handleInputTask}
          className="w-full border py-2 px-4 rounded-l-md outline-none"
          placeholder="Escribe el titulo de tu tarea "
        />
        <span id="error" className="text-xs text-red-500 mt-1"></span>
        <button className="bg-green-400 px-4 rounded-r-md">Crear</button>
      </form>
    </>
  );
}
