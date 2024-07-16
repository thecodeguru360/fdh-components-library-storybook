import React, { useRef, useState, useCallback } from "react";
import cn from "classnames";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { faCaretDown, faCaretUp } from "@fortawesome/pro-solid-svg-icons";
import { FontAwesomeIcons } from "../FontAwesomeIcons/FontAwesomeIcons";
import useOutsideClick from "./useOutSideClick";
import "./AppDropdown.scss";

export type LinkItem = {
  label: string;
  commandName: string;
  path?: string;
  externalLink?: string;
  icon?: IconProp;
};

export type AppDropdownProps = {
  title: string;
  variant: string;
  links: LinkItem[];
  icon?: IconProp;
  disabled?: true | false;
  onCustomChange?: (event: React.MouseEvent<HTMLButtonElement>) => void;
};

export const AppDropdown = ({
  title,
  variant,
  icon,
  links,
  disabled,
  onCustomChange,
  ...props
}: AppDropdownProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const inputRef = useRef(null);
  const containerRef = useRef<HTMLDivElement>(null);

  let marginClass = "mt-m";
  if (variant.includes("-lg")) {
    marginClass = "mt-lg";
  }
  if (variant.includes("-sm")) {
    marginClass = "mt-sm";
  }
  const classNames = cn({
    btn: true,
    primary: variant === "primary",
    "primary-lg": variant === "primary-lg",
    "primary-sm": variant === "primary-sm",
    secondary: variant === "secondary",
    "secondary-lg": variant === "secondary-lg",
    "secondary-sm": variant === "secondary-sm",
    tertiary: variant === "tertiary",
    "tertiary-lg": variant === "tertiary-lg",
    "tertiary-sm": variant === "tertiary-sm",
    icon: variant === "icon",
    text: variant === "text",
    "text-lg": variant === "text-lg",
    "text-sm": variant === "text-sm",
    disabled,
  });

  const handleClick = () => {
    setIsOpen(!isOpen);
  };
  const close = useCallback(() => {
    setIsOpen(false);
  }, []);

  useOutsideClick(containerRef, close, isOpen);

  return (
    <div className="AppDropdown">
      <button
        className={classNames}
        type="button"
        onClick={handleClick}
        disabled={disabled}
        data-kt-menu-trigger="click"
        data-kt-menu-attach="parent"
        data-kt-menu-placement="bottom-end"
      >
        <div className="button-content">
          {icon && (
            <span>
              <FontAwesomeIcons iconName={icon} />
            </span>
          )}
          {title}
          <span>
            {isOpen ? (
              <FontAwesomeIcons iconName={faCaretUp} />
            ) : (
              <FontAwesomeIcons iconName={faCaretDown} />
            )}
          </span>
        </div>
      </button>
      {isOpen && (
        <div
          className={cn("links-container", marginClass)}
          ref={containerRef}
          data-kt-menu="true"
        >
          {links.map((item: LinkItem, i: number) => {
            return (
              <div key={item.label + i} className="link-item">
                <a
                  onClick={(e: any) => {
                    e.preventDefault();
                    setIsOpen(false);
                    onCustomChange;
                  }}
                  href={item.externalLink}
                >
                  {item.icon && (
                    <span className="leading-icon">
                      <FontAwesomeIcons iconName={item.icon} />
                    </span>
                  )}
                  {item.label}
                </a>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};
export default AppDropdown;
