import { Link } from "react-router-dom";

export function Header() {
  return (
    <header className="bg-sky-800 flex flex-col justify-center items-center gap-1.5 p-4">
      <h1 className="font-bold text-white text-2xl md:text-4xl">Checkpoint : frontend</h1>
      <Link className="text-xl md:text-2xl text-white cursor-pointer" to="/countries">Countries</Link>
    </header>
  );
}
