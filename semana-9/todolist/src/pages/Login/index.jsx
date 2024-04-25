import { useState } from "react";
import { signIn } from "../../services/auth";
import { Link } from "react-router-dom";
import { TextField } from "../../components";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

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

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await signIn(values.email, values.password);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <section className="max-w-md m-auto flex flex-col items-center justify-center h-[100vh]">
        <div className="bg-white p-6 rounded-md w-full md:w-md">
          <div className="my-5">
            <h2 className="text-center text-2xl font-bold">👋 Hola de nuevo</h2>
          </div>
          <form className="my-5" onSubmit={handleSubmit}>
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
                className="border border-green-400 text-black font-bold w-full px-3 py-2 rounded-md
              hover:bg-green-400 hover:text-white transition-all ease-in-out duration-300"
              >
                Iniciar sesión
              </button>
            </div>
          </form>
        </div>
        <div className="text-center mt-5">
          <p className="text-sm">
            ¿No tienes una cuenta?{" "}
            <Link className="underline" to={"/sign-up"}>
              Regístrate
            </Link>
          </p>
        </div>
      </section>
    </>
  );
}
