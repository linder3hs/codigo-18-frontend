import { TextField } from "../../components";

export default function SignUp() {
  return (
    <>
      <section className="max-w-md m-auto flex items-center justify-center h-[100vh]">
        <div className="bg-white p-6 rounded-md w-full md:w-md">
          <div className="my-5">
            <h2 className="text-center text-2xl font-bold">🤗 Bienvenido</h2>
          </div>
          <form className="my-5">
            <TextField
              type="text"
              name="fullName"
              placeholder="Ingrese su nombre completo"
            />
            <TextField
              type="email"
              name="email"
              placeholder="Ingrese su correo"
            />
            <TextField
              type="password"
              name="password"
              placeholder="Ingrese su password"
            />

            <div className="my-5">
              <button
                className="border border-green-400 text-black font-bold w-full px-3 py-2 rounded-md
              hover:bg-green-400 hover:text-white transition-all ease-in-out duration-300"
              >
                Iniciar sesión
              </button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}
