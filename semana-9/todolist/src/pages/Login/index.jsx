import { useState } from "react";

export default function Login() {
  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(values);
  };

  return (
    <>
      <section className="max-w-md m-auto flex items-center justify-center h-[100vh]">
        <div className="bg-white p-6 rounded-md w-full md:w-md">
          <div className="my-5">
            <h2 className="text-center text-2xl font-bold">👋 Hola de nuevo</h2>
          </div>
          <form className="my-5" onSubmit={handleSubmit}>
            <div className="my-5">
              <input
                type="email"
                name="email"
                value={values.email}
                onChange={handleInputChange}
                placeholder="Ingrese su correo"
                className="px-3 py-2 rounded-md border outline-none w-full"
              />
            </div>
            <div className="my-5">
              <input
                type="password"
                name="password"
                value={values.password}
                onChange={handleInputChange}
                placeholder="Ingrese su password"
                className="px-3 py-2 rounded-md border outline-none w-full"
              />
            </div>
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
