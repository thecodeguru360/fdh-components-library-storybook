import { FC } from "react";
import clsx from "clsx";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { OverlayTrigger, Tooltip } from "react-bootstrap";
import { checkIsActive, KTIcon, WithChildren } from "../../../helpers";
import { useLayout } from "../../core";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type Props = {
  to: string;
  title: string;
  icon?: string;
  fontIcon?: string;
  className?: string;
  hasBullet?: boolean;
  bsTitle?: string;
  outside?: boolean;
  faIcon?: IconProp;
};

const AsideMenuItem: FC<Props & WithChildren> = ({
  children,
  to,
  title,
  icon,
  fontIcon,
  className,
  bsTitle,
  outside = false,
  hasBullet = false,
  faIcon,
}) => {
  const { pathname } = useLocation();
  const isActive = checkIsActive(pathname, to);
  const { config } = useLayout();
  const { aside } = config;

  return (
    <div className={clsx("menu-item", isActive && "here show", className)}>
      {outside ? (
        <a
          href={to}
          target="_blank"
          className={clsx("menu-link menu-center", { active: isActive })}
        >
          {fontIcon && aside.menuIcon === "font" && (
            <span className="menu-icon me-0">
              <i className={clsx("bi", fontIcon, "fs-2")}></i>
            </span>
          )}
        </a>
      ) : (
        <>
          <a
            className={clsx("menu-link menu-center menu-link-white", {
              active: isActive,
            })}
            href={to}
            data-bs-toggle="tooltip"
            data-bs-trigger="hover"
            data-bs-dismiss="click"
            data-bs-placement="right"
            data-bs-original-title={bsTitle}
          >
            {hasBullet && (
              <span className="menu-bullet">
                <span className="bullet bullet-dot"></span>
              </span>
            )}
            {icon && aside.menuIcon === "svg" && (
              <span className="menu-icon">
                <KTIcon iconName={icon} className="fs-2" />
              </span>
            )}
            {faIcon && (
              <span className="menu-icon me-4">
                <FontAwesomeIcon icon={faIcon} size="lg" className="fs-2" />
              </span>
            )}
            {/* <span className="menu-icon me-4">
                <FontAwesomeIcon
                  icon={faCircleUser}
                  size="xl"
                  className="fs-2"
                />
              </span> */}
            {fontIcon && aside.menuIcon === "font" ? (
              <span className="menu-icon me-0">
                <i className={clsx("bi", fontIcon, "fs-2")}></i>
              </span>
            ) : (
              <span className="menu-title">{title}</span>
            )}
          </a>
          {children}
        </>
      )}
    </div>
  );
};

export { AsideMenuItem };
