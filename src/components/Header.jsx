import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="w-full px-6 py-4 flex items-center justify-between fixed top-0 left-0 z-50 bg-opacity-70 backdrop-blur-md text-white">
      <Link to="/" className="text-2xl font-bold">Iñaki Mir</Link>

      <nav className="flex gap-6 text-lg font-medium">
        <Link to="/" className="hover:text-blue-400 transition">Inici</Link>
        <Link to="/aerodinamica" className="hover:text-blue-400 transition">Aerodinàmica</Link>
        <Link to="/forces-g" className="hover:text-blue-400 transition">Forces G</Link>
        <Link to="/alero" className="hover:text-blue-400 transition">Aleró</Link>
      </nav>
    </header>
  );
}

export default Header;
