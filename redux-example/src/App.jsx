import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, setValue } from "./app/slices/counterSlice";
import Tasks from "./components/Tasks";

function App() {
  const counter = useSelector((state) => state.counter.value);
  const user = useSelector((state) => state.user);

  // Para poder una funcion creada en un slice debe importa a useDispatch (hook)
  // useDispatch: Permite realizar la ejecucion de una funcion:
  // Nota: siempre que queramos usar una funcion creada dentro de un slice debemos llamar a useDispatch
  const dispatch = useDispatch();

  return (
    <>
      <h1>
        Nombre: {user.name} {user.lastName}
      </h1>
      <div className="card">
        <button onClick={() => dispatch(increment())}>
          count is {counter}
        </button>
        <button onClick={() => dispatch(decrement())}>restar</button>
        <button
          onClick={() =>
            dispatch(
              setValue({
                newValue: 99,
              })
            )
          }
        >
          Boton con valor custom
        </button>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <Tasks />
    </>
  );
}

export default App;
