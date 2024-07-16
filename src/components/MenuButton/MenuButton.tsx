// src/Button.tsx

import React, { useState, useRef } from "react";
import "./MenuButton.scss";

export type MenuButtonProps = {
  label: string;
  menuItems: string[];
};

export const MenuButton: React.FC<MenuButtonProps> = ({ label, menuItems }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const buttonRef = useRef(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <div className="AppMenuButton">
      <button onClick={toggleMenu} ref={buttonRef}>
        {label}
      </button>
      {isMenuOpen && (
        <ul className="menu-dropdown" onClick={closeMenu}>
          {menuItems.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default MenuButton;
