import React from "react";
import { Link } from "react-scroll";

export default function Navbar() {
  return (
    <nav className="bg-[#0a192f] fixed w-full z-9">
      <div className="flex justify-between items-center p-4">
        <div className="logo p-2">
          <h1 className="text-red-500 text-3xl">
            port<span className="text-white">folio</span>
          </h1>
        </div>
        <div className="listitems">
          <ul className="flex justify-center items-center space-x-8 px-6 font-mono mr-9 text-lg text-white underline-offset-1">
            <li className="underline text-2xl text-red-600 cursor-pointer hover:text-red-800">
              <Link to="home" smooth={true} offset={50} duration={500}>
                Home
              </Link>
            </li>
            <li className="cursor-pointer hover:text-red-800">
              <Link to="about" smooth={true} spy={true} offset={50} duration={500}>
                About
              </Link>
            </li>
            <li className="cursor-pointer hover:text-red-800">
            <Link to="skills" smooth={true} offset={-20} duration={500}>
  Skills
</Link>

            </li>
            <li className="cursor-pointer hover:text-red-800">
              <Link to="contact" smooth={true} offset={50} duration={500}>
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
