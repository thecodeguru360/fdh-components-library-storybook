import React from "react";
import "./AppNavbar.scss";
import { AppDropdown } from "../AppDropdown/AppDropdown";
import FontAwesomeIcons from "../FontAwesomeIcons/FontAwesomeIcons";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
type MenuItem = {
  label: string;
  path?: string;
  externalLink?: string;
  icon?: IconProp;
  subItems?: {
    label: string;
    path?: string;
    externalLink?: string;
    icon?: IconProp;
  }[];
};

export type AppNavbarProps = {
  title: string;
  menuItems: MenuItem[];
  onClick?: (path: any) => void;
};

export const AppNavbar = ({
  title,
  menuItems,
  onClick,
  ...props
}: AppNavbarProps) => {
  const handleClick = (e: any, path: string) => {
    e.preventDefault();
    onClick!(path);
  };
  return (
    <div className="AppNavbar">
      <div className="section-title">{title}</div>
      <div className="menu-items">
        {menuItems.map((item: any, key: number) => {
          if (item.subItems) {
            return (
              <AppDropdown
                variant="text"
                title={item.label}
                links={item.subItems}
                icon={item.icon}
              />
            );
          }
          return (
            <div className="menu-item" key={key}>
              {item.externalLink ? (
                <a href={item.externalLink}>
                  {item.icon && (
                    <span className="leading-icon">
                      <FontAwesomeIcons iconName={item.icon} />
                    </span>
                  )}
                  {item.label}
                </a>
              ) : (
                <a onClick={(e: any) => handleClick(e, item.path)}>
                  {item.icon && (
                    <span className="leading-icon">
                      <FontAwesomeIcons iconName={item.icon} />
                    </span>
                  )}
                  {item.label}
                </a>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AppNavbar;
