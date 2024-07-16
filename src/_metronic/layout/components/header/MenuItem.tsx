import React, { ReactNode } from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import clsx from "clsx";
import { checkIsActive, KTIcon } from "../../../helpers";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp, SizeProp } from "@fortawesome/fontawesome-svg-core";

type Props = {
  to: string;
  title: string;
  icon?: string;
  fontIcon?: string;
  hasArrow?: boolean;
  hasBullet?: boolean;
  faproIcon?: IconProp;
  iconSize?: SizeProp;
  infoText?: string;
};

const MenuItem: React.FC<Props> = ({
  to,
  title,
  icon,
  fontIcon,
  hasArrow = false,
  hasBullet = false,
  faproIcon,
  iconSize = "lg",
  infoText,
}) => {
  const { pathname } = useLocation();

  return (
    <div className="menu-item me-lg-1">
      <a
        className={clsx(
          "menu-link py-3 lib_menu__menu-item lib_menu__menu-item-text",
          {
            active: checkIsActive(pathname, to),
          }
        )}
        href={to}
      >
        {hasBullet && (
          <span className="menu-bullet">
            <span className="bullet bullet-dot"></span>
          </span>
        )}

        {faproIcon && (
          <span className="menu-icon">
            <FontAwesomeIcon icon={faproIcon} size={iconSize}></FontAwesomeIcon>
          </span>
        )}

        {icon && (
          <span className="menu-icon">
            <KTIcon iconName={icon} className="fs-2" />
          </span>
        )}

        {fontIcon && (
          <span className="menu-icon">
            <i className={clsx("bi fs-3", fontIcon)}></i>
          </span>
        )}

        {infoText ? (
          <div className="d-flex justify-content-start flex-column">
            <span className="menu-title">{title}</span>
            <span className="menu-title-info">{infoText}</span>
          </div>
        ) : (
          <span className="menu-title">{title}</span>
        )}

        {hasArrow && <span className="menu-arrow"></span>}
      </a>
    </div>
  );
};

export { MenuItem };
