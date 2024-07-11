import React from "react";
import imgProfile from "../../assets/imgProfile.jpg";
import "./styles.css";

export default function Header() {
  return (
    <header className="bg-gray-900 text-white py-8 px-4 md:px-6">
      <div className="container mx-auto flex flex-col items-center md:flex-row md:justify-between">
        <div className="flex items-center gap-4">
          <span className="relative flex shrink-0 overflow-hidden rounded-full h-16 w-16 md:h-20 md:w-20">
            <img
              className="aspect-square h-full w-full"
              src={imgProfile}
              alt="Foto del usuario"
            />
          </span>
          <div>
            <h1 className="text-2xl font-bold">Juan Lacruz</h1>
            <p className="subtitle text-gray-400">Full-Stack Developer</p>
          </div>
        </div>
        <div>
          <nav className="mt-4 md:mt-0">
            <ul className="flex gap-4">
              <li>
                <a href="#about" className="hover:underline md:a">
                  About
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:underline md:a">
                  Projects
                </a>
              </li>
              <li>
                <a href="#skills" className="hover:underline md:a">
                  Skills
                </a>
              </li>
              <li>
                <a href="#experience" className="hover:underline md:a">
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
