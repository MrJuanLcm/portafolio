import React from "react";
import "./styles.css";

export default function Footer() {
  return (
    <footer className="bg-gray-900 py-6">
      <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
        <p className="text-sm text-white">"Developed by" Juan Lacruz 2024</p>
        <div className="flex gap-4">
          <a
            href="https://www.linkedin.com/in/juan-luis-lacruz-moreno/"
            className="text-white">
            LinkedIn
          </a>
          <a href="https://github.com/MrJuanLcm" className="text-white">
            GitHub
          </a>
          <a href="https://twitter.com/MrJuanLcM" className="text-white">
            Twitter
          </a>
        </div>
      </div>
    </footer>
  );
}
