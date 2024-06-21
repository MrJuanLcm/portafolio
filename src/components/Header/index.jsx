import React from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
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
            <Router>
              <ul className="flex gap-4">
                <li>
                  <Link to="/about" className="text-white">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-white">
                    Projects
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-white">
                    Skills
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-white">
                    Experience
                  </Link>
                </li>
              </ul>
            </Router>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
