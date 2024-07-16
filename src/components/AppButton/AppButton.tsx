/* eslint-disable react/button-has-type */
import React from "react";
import cn from "classnames";

import "./AppButton.scss";

export type AppButtonProps = {
  variant: string;
  disabled?: true | false;
  fullWidth?: true | never;
  icon?: React.ReactElement;
  text?: string;
  type?: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  children?: React.ReactNode;
  buttonColor?: string;
  buttonTextColor?: string;
  customClasses?: string[];
};
export const AppButton = (props: AppButtonProps) => {
  const {
    variant,
    disabled,
    fullWidth,
    icon,
    text,
    type,
    onClick,
    children,
    buttonColor,
    buttonTextColor,
    customClasses,
    ...rest
  } = props;

  const classNames = cn({
    AppButton: true,
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
    "w-100": fullWidth,
    disabled,
  });

  return (
    <button
      className={[classNames, ...(customClasses ?? "")].join(" ")}
      {...rest}
      onClick={onClick}
      style={{ backgroundColor: buttonColor, color: buttonTextColor }}
    >
      {icon}
      {text && (
        <span className={cn({ "ml-7": icon !== undefined })}>{text}</span>
      )}
      {children}
    </button>
  );
};

export default AppButton;
