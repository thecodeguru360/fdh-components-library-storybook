import React from "react";
import cn from "classnames";
import "./AppLabel.scss";
import "../AppInput/AppInput.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleInfo } from "@fortawesome/pro-light-svg-icons";

export type AppLabelProps = {
  label: string;
  labelFor?: string;
  id?: string;
  required?: true | false;
  toolTipText?: string;
  disabled?: true | false;
};

export const AppLabel: React.FC<AppLabelProps> = ({
  label,
  id,
  labelFor,
  required,
  toolTipText,
  disabled = false,
}) => {
  return (
    <div className={cn("AppInput", disabled ? "label-disabled" : "")}>
      {label && (
        <label className={cn("label")} htmlFor={labelFor}>
          {label}
          {required && (
            <span
              className={cn(disabled ? "label-disabled" : "label-required")}
            >
              *
            </span>
          )}
        </label>
      )}
      {toolTipText && (
        <div className="tooltip">
          <FontAwesomeIcon icon={faCircleInfo} />
          <span className="tooltiptext">{toolTipText}</span>
        </div>
      )}
    </div>
  );
};
export default AppLabel;
