import logo from "../../assets/logo.svg"

export default function Header() {
  return (
    <>
      <div className="flex items-center gap-1">
        <img src={logo} width={40} alt="" />
        <h1 className="text-white font-bold text-4xl">Pokédex</h1>
      </div>
    </>
  );
}
