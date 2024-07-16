import React, { AnchorHTMLAttributes } from "react";
import cn from "classnames";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import FontAwesomeIcons from "../FontAwesomeIcons/FontAwesomeIcons";
import "./AppLink.scss";

export type AppLinkProps = {
  label: string;
  href: string;
  icon?: IconProp;
  iconPosition?: "left" | "right";
  disabled?: true | false;
  small?: true | false;
} & AnchorHTMLAttributes<HTMLAnchorElement>;

export const AppLink = ({
  label,
  href,
  disabled,
  icon,
  iconPosition,
  small,
  ...props
}: AppLinkProps) => {
  return (
    <span
      className={cn("AppLink", {
        "icon-right": iconPosition === "right",
        small: small,
        disabled: disabled,
      })}
    >
      {icon && (
        <span>
          <FontAwesomeIcons iconName={icon} />
        </span>
      )}
      <a className="link" href={href} {...props}>
        <span>{label}</span>
      </a>
    </span>
  );
};
export default AppLink;
