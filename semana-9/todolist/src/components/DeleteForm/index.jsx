/* eslint-disable react/prop-types */
export default function DeleteForm(props) {
  return (
    <>
      <h2>Esta seguro de eliminar la tarea {props.currentTask?.text}</h2>
      <div className="flex justify-between my-7">
        <button className="bg-red-500 px-4 py-2 text-white rounded-md">
          No, estoy seguro
        </button>
        <button className="bg-green-500 px-4 py-2 text-white rounded-md">
          Si, estoy seguro
        </button>
      </div>
    </>
  );
}
