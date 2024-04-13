/* eslint-disable react/prop-types */
export default function CheckForm(props) {
  return (
    <>
      <h2>
        Esta seguro de marcar como terminada la tarea{" "}
        <strong>{props.currentTask?.text}</strong>
      </h2>
      <div className="flex justify-between my-7">
        <button
          onClick={props.handleCheckCancel}
          className="bg-red-500 px-4 py-2 text-white rounded-md"
        >
          No, estoy seguro
        </button>
        <button
          onClick={async () => await props.handleCheckTask(props.currentTask)}
          className="bg-green-500 px-4 py-2 text-white rounded-md"
        >
          Si, estoy seguro
        </button>
      </div>
    </>
  );
}
