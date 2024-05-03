export default function Tasks() {
  return (
    <>
      <form action="">
        <input type="text" placeholder="Escribe tu tarea" />
        <button>Crear Tarea</button>
      </form>
      <div className="tasks">
        <p>Lista de tareas</p>
      </div>
    </>
  );
}
