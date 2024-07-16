import React, { ReactNode } from "react";
import "./Layout.scss";
import Logo from "../../assets/img/flh-logo-white.png";
import AppNavigation, { NavItem } from "../AppNavigation/AppNavigation";

export type LayoutProps = {
  title: string;
  menuItems?: NavItem[];
  hasNavigation?: true | false;
  children: React.ReactNode;
};

export const Layout: React.FC<LayoutProps> = ({
  title,
  hasNavigation = true,
  children,
  menuItems = [],
}) => {
  return (
    <div className="AppLayout">
      <div className="page-header">
        <div>
          <a href="#">
            <img
              src={Logo}
              alt="Florida Health Logo"
              className="page-header__logo"
            />
          </a>
        </div>
        <div className="ml-2">
          <div className="page-header__title">{title}</div>
        </div>
        {hasNavigation && (
          <div className="page-header__actions">
            <AppNavigation navItems={menuItems} />
          </div>
        )}
      </div>
      <div className="container-fluid">
        <div className="content">{children}</div>
      </div>
    </div>
  );
};

export default Layout;
