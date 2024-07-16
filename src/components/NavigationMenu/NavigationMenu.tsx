// components/Navigation.tsx

import React, { useState } from "react";
import "./NavigationMenu.scss";
export type MenuItem = {
  label: string;
  subMenuItems?: string[];
};

export type NavigationProps = {
  menuItems: MenuItem[];
};

export const NavigationMenu: React.FC<NavigationProps> = ({ menuItems }) => {
  const [openSubMenuIndex, setOpenSubMenuIndex] = useState<number | null>(null);

  const toggleSubMenu = (index: number) => {
    setOpenSubMenuIndex(openSubMenuIndex === index ? null : index);
  };

  return (
    <div className="AppNavigationMenu progress-bar">
      {menuItems.map((menuItem, index) => (
        <>
          <div className="category-dropdown">
            <div className="title">
              <button
                className="btn btn-primary menu-button"
                onClick={() => toggleSubMenu(index)}
              >
                {menuItem.label}
              </button>
            </div>

            {openSubMenuIndex === index && menuItem.subMenuItems && (
              <div className="list">
                {menuItem.subMenuItems.map((subMenuItem, subIndex) => (
                  <div>{subMenuItem}</div>
                ))}
              </div>
            )}
          </div>
        </>
      ))}
    </div>
  );
};

export default NavigationMenu;
