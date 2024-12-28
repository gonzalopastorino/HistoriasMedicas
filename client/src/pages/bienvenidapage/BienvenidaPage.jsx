import React, { useState } from "react";
import Carrusel from "./Carussel"; // Importa el componente Carrusel
import "./bienvenida.css";

const BienvenidaPage = () => {
  const [view, setView] = useState("inicio");

  return (
    <div className="content p-4">
      {/* Mostrar el carrusel solo cuando estamos en la vista de inicio */}
      {view === "inicio" && <Carrusel />}
    </div>
  );
};

export default BienvenidaPage;
