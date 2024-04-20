import { Outlet } from "react-router-dom";

export default function AuthLayout() {
  return (
    <div>
      <h1>Probando layouts</h1>
      <Outlet />
    </div>
  );
}
