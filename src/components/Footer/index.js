import React from "react";
import "./styles.css";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-6">
      <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
        <p className="text-sm">Developed by Juan Lacruz 2024</p>
        <div className="flex gap-4">
          <a
            href="https://www.linkedin.com/in/juan-luis-lacruz-moreno/"
            className="hover:underline">
            LinkedIn
          </a>
          <a href="https://github.com/MrJuanLcm" className="hover:underline">
            GitHub
          </a>
          <a href="https://twitter.com/MrJuanLcM" className="hover:underline">
            Twitter
          </a>
        </div>
      </div>
    </footer>
  );
}
