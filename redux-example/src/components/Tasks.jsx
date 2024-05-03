import { useSelector } from "react-redux";

export default function Tasks() {
  const tasks = useSelector((state) => state.task.tasks);

  return (
    <>
      <form action="">
        <input type="text" placeholder="Escribe tu tarea" />
        <button>Crear Tarea</button>
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
