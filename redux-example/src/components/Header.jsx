import { useSelector } from "react-redux";

export default function Header() {
  const value = useSelector((state) => state.counter.value);
  const user = useSelector((state) => state.user);

  return (
    <nav>
      <ul>
        <li>Inicio</li>
        <li>Nosotros</li>
        <li>Contacto</li>
        <li>Proyectos</li>
      </ul>
      <div>
        <h2>El contador actual es {value}</h2>
        <p>
          {user.name} {user.lastName}
        </p>
      </div>
    </nav>
  );
}
