import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCaretDown,
  faCaretUp,
  faChevronDown,
  faChevronUp,
} from "@fortawesome/pro-solid-svg-icons";
import { faCircleUser } from "@fortawesome/pro-light-svg-icons";
import cn from "classnames";
import "./AppNavigation.scss";

export type NavItem = {
  label: string;
  link?: string;
  icon?: React.ReactElement;
  subItems?: { label: string; link?: string; icon?: React.ReactElement }[];
};

export type AppNavigationProps = {
  navItems: NavItem[];
  opened?: true | false;
};

const SubNavElement = (props: any) => {
  const { item } = props;
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const handleToggle = (e: any) => {
    e.preventDefault();
    setIsOpen(!isOpen);
  };
  return (
    <div className={cn({ "has-border": isOpen })}>
      <li className="nav-item-toggle" onClick={handleToggle}>
        <span>{item.label}</span>
        <span>
          {isOpen ? (
            <FontAwesomeIcon icon={faChevronUp} />
          ) : (
            <FontAwesomeIcon icon={faChevronDown} />
          )}
        </span>
      </li>
      {isOpen && (
        <div className="sub-nav-items">
          <ul>
            {item.subItems.map((v: any, key: number) => {
              return (
                <li key={v.label + key}>
                  <a href={v.link}>{v.label}</a>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
};

export const AppNavigation = (props: AppNavigationProps) => {
  const { navItems, opened = false } = props;
  const [isAuthenticated, setAuthenticated] = useState<boolean>(false);
  const [isOpen, setIsOpen] = useState<boolean>(opened);
  const handleClick = (e: any) => {
    e.preventDefault();
    setIsOpen(!isOpen);
  };
  const handleLogin = (e: any) => {
    e.preventDefault();
    setAuthenticated(true);
  };
  const handleLogout = (e: any) => {
    e.preventDefault();
    setAuthenticated(false);
    setIsOpen(false);
  };
  return (
    <div className="AppNavigation">
    
      {isOpen && (
        <div className="nav-container">
          <ul>
            {navItems.map((item: any, key: number) => {
              if (item.subItems) {
                return <SubNavElement key={key} item={item} />;
              }
              return (
                <li key={key}>
                  <a href={item.link}>{item.label}</a>
                </li>
              );
            })}
          </ul>
          {isAuthenticated && (
            <button
              type="button"
              onClick={handleLogout}
              className="btn logout-btn"
            >
              Logout
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export default AppNavigation;
