import React from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Header /> {/* Muestra el componente Header */}
      <Main /> {/* Contenido de tu aplicación*/}
      <Footer /> {/* Muestra el componente Footer */}
    </div>
  );
}

export default App;
