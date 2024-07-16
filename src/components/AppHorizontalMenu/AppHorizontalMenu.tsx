// src/AppLayout.tsx

import React, { ReactNode } from "react";
import { FontAwesomeIcons, IconProps } from "../FontAwesomeIcons";
import { faHome } from "@fortawesome/pro-solid-svg-icons";

export type HorizontalMenuItem = {
  title: string;
  url: string;
  menuIcon?: ReactNode;
};

export interface AppHorizonalMenuProps {
  horizontalMenuItems1?: HorizontalMenuItem[];
  children?: React.ReactNode;
  menuTitle?: string;
  urlForMenuTitle?: string;
}

const AppHorizontalMenu: React.FC<AppHorizonalMenuProps> = ({
  horizontalMenuItems1,
  children,
  menuTitle,
  urlForMenuTitle,
}) => {
  return (
    <div>
      <nav className="menu">
        <a className=" menu__menu-Title" href={urlForMenuTitle}>
          <FontAwesomeIcons iconSize="2xs" iconName={faHome}></FontAwesomeIcons>{" "}
          {menuTitle}{" "}
        </a>
        {horizontalMenuItems1?.map((item, index) => (
          <a
            key={index}
            href={item.url}
            target="_self"
            className="menu__menu-item menu__menu-item-text"
          >
            {item.menuIcon}
            &nbsp;
            {item.title}
          </a>
        ))}
      </nav>
      <div> {children} </div>
    </div>
  );
};

export default AppHorizontalMenu;
