import React from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}
