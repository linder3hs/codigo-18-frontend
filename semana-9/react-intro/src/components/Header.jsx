export function Header(props) {
  return (
    <div>
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Contact me</li>
      </ul>
      <div>
        Hola {props.name} {props.lastname}
      </div>
    </div>
  );
}
