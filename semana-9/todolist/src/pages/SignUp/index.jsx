import { useState, useRef } from "react";
import { TextField } from "../../components";
import { createUser, updateUser } from "../../services/auth";
import { storeFile } from "../../services/storage";

export default function SignUp() {
  const [isLoading, setIsLoading] = useState(false);

  const [values, setValues] = useState({
    fullName: "",
    email: "",
    password: "",
    photoURL: "",
  });

  const imageInput = useRef(null);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    const url = await storeFile(event.target[4].files[0]);

    // create al usuario en firebase
    // recuerden que el usuario se crea solo con email y password
    await createUser(values.email, values.password);
    // actualizamos al usuario que hemos creado con su nombre y su foto de perfil
    await updateUser(values.fullName, url);
    setIsLoading(false);
  };

  return (
    <>
      <section className="max-w-md m-auto flex items-center justify-center h-[100vh]">
        <div className="bg-white p-6 rounded-md w-full md:w-md">
          <div className="my-5">
            <h2 className="text-center text-2xl font-bold">🤗 Bienvenido</h2>
          </div>
          <form className="my-5" onSubmit={handleSubmit}>
            <TextField
              type="text"
              name="fullName"
              value={values.fullName}
              onChange={handleInputChange}
              placeholder="Ingrese su nombre completo"
            />
            <TextField
              type="email"
              name="email"
              value={values.email}
              onChange={handleInputChange}
              placeholder="Ingrese su correo"
            />
            <TextField
              type="password"
              name="password"
              value={values.password}
              onChange={handleInputChange}
              placeholder="Ingrese su password"
            />
            <div className="my-5">
              <button
                type="button"
                onClick={() => imageInput.current.click()}
                className="border border-dashed border-green-400 text-black font-semibold w-full px-3 py-2 rounded-md
              hover:bg-green-400 hover:text-white transition-all ease-in-out duration-300"
              >
                Subir imagen 📸
              </button>
              <input
                ref={imageInput}
                name="photoURL"
                value={values.photoURL}
                onChange={handleInputChange}
                type="file"
                className="hidden"
              />
            </div>
            <div className="my-5">
              <button
                type="submit"
                className="border flex items-center justify-center border-green-400 text-black font-bold w-full px-3 py-2 rounded-md
              hover:bg-green-400 hover:text-white transition-all ease-in-out duration-300"
              >
                {isLoading && (
                  <svg
                    className="animate-spin -ml-1 mr-3 h-5 w-5 text-black"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                )}
                Registrarme
              </button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}
