import React from "react";

const MenuHamburguesa = ({ toggleMenu }) => {
  return (
    <button className="btn-hamburguesa" onClick={toggleMenu}>
      <i className="bi bi-list"></i>
    </button>
  );
};

export default MenuHamburguesa;
