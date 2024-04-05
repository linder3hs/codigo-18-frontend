import { InputTask, Modal } from "./components";

export default function App() {
  return (
    <>
      <main className="max-w-md mx-auto p-6">
        <InputTask />
        <span id="error" className="text-xs text-red-500 mt-1"></span>
        <section id="container-tasks" className="mt-10"></section>
        <Modal open={false} />
      </main>
    </>
  );
}
