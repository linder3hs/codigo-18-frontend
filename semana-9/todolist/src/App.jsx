import { InputTask } from "./components";

export default function App() {
  return (
    <>
      <main className="max-w-md mx-auto p-6">
        <InputTask />
        <span id="error" className="text-xs text-red-500 mt-1"></span>
        <section id="container-tasks" className="mt-10"></section>
      </main>
      <div id="modal" className="relative z-50 w-full">
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
                  placeholder="Editar tarea"
                  className="w-full border py-2 px-4 rounded-md outline-none"
                />
                {/* <div class="mt-5">
                <div class="flex flex-col gap-5 mt-4">
                  <div>
                    <input id="input-edit-create" type="radio" name="status" />
                    Creado
                  </div>
                  <div>
                    <input id="input-edit-done" type="radio" name="status" />
                    Terminado
                  </div>
                </div>
              </div>  */}
                <div className="mt-5 flex justify-end gap-5">
                  <button
                    onClick="closeModal()"
                    type="button"
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
