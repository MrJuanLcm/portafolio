import React from "react";
import "./styles.css";

function Header() {
  return (
    <header className="bg-gray-900 text-white py-8 px-4 md:px-6">
      <div className="container mx-auto flex flex-col items-center md:flex-row md:justify-between">
        <div className="flex items-center gap-4">
          <span className="relative flex shrink-0 overflow-hidden rounded-full h-16 w-16 md:h-20 md:w-20">
            <img
              className="aspect-square h-full w-full"
              src="/placeholder-user.jpg"
              alt="Foto del usuario"
            />
          </span>
          <div>
            <h1 className="text-2xl font-bold">Juan Lacruz</h1>
            <p className="text-gray-400">Full-Stack Developer</p>
          </div>
        </div>
        <div>
          <nav>
            <ul className="flex gap-4">
              <li>
                <a href="#about" className="text-white">
                  About
                </a>
              </li>
              <li>
                <a href="#projects" className="text-white">
                  Projects
                </a>
              </li>
              <li>
                <a href="#skills" className="text-white">
                  Skills
                </a>
              </li>
              <li>
                <a href="#experience" className="text-white">
                  Experience
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
