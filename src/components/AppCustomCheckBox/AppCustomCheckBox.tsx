import React, { useState } from "react";
import { useFormContext } from "react-hook-form";
import "./AppCustomCheckBox.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus, faXmark } from "@fortawesome/pro-light-svg-icons";
import "../AppContactCard/AppContactCard.scss";

export interface AppCustomCheckBoxProps {
  name: string;
  label: string;
  id?: string;
  required?: true | false;
  disabled?: true | false;
  onCustomChange?: (e: boolean) => void;
  onCustomBlur?: () => void;
  bgColor?: string;
  bodyContent?: React.ReactNode;
}

export const AppCustomCheckBox: React.FC<AppCustomCheckBoxProps> = ({
  name,
  label,
  id,
  required,
  disabled,
  onCustomChange,
  onCustomBlur,
  bgColor = "#ffffff",
  bodyContent,
}) => {
  const {
    register,
    setValue,
    formState: { errors },
    clearErrors,
  } = useFormContext();
  const hasError = !!errors[name];
  const errorMessage = errors[name]?.message || "";

  const [checked, setChecked] = useState("");

  const handleChange = (value: boolean) => {
    setChecked(value ? "checked" : "unchecked");
    setValue(name, value); // Update React Hook Form state
    if (hasError) {
      clearErrors(name);
    }
    if (onCustomChange) {
      onCustomChange(value);
    }
  };

  const handleBlur = () => {
    if (onCustomBlur) onCustomBlur();
  };

  const inputStyle = {
    borderColor: hasError ? "red" : "",
  };

  return (
    <>
      <div
        className="contactcard-portlet customcheckbox"
        style={{ backgroundColor: bgColor }}
      >
        <div className="contactcard-portlet__head">
          <div className="contactcard-portlet__head-label">
            <div className="contactcard-portlet__head-title customcheckbox_title">
              {label}
            </div>
          </div>
          <div className="contactcard-portlet__head-toolbar">
            <div className="contactcard-portlet__head-actions">
              <span
                role="button"
                tabIndex={0}
                aria-disabled={disabled}
                onClick={!disabled ? () => handleChange(false) : undefined}
                onBlur={!disabled ? handleBlur : undefined}
                aria-label="Decrease" // Accessibility improvement
                className={`uncheck ${disabled ? "disabled" : ""} ${
                  checked === "unchecked" ? "clicked" : ""
                }`}
              >
                <FontAwesomeIcon size="sm" icon={faMinus} color="#495057" />
              </span>
              <span
                role="button"
                tabIndex={0}
                aria-disabled={disabled}
                onClick={!disabled ? () => handleChange(true) : undefined}
                onBlur={!disabled ? handleBlur : undefined}
                aria-label="Increase" // Accessibility improvement
                className={`check ${disabled ? "disabled" : ""} ${
                  checked === "checked" ? "clicked" : ""
                }`}
              >
                <FontAwesomeIcon size="sm" icon={faXmark} color="#495057" />
              </span>
            </div>
          </div>
        </div>
        {bodyContent && (
          <div className="contactcard-portlet__body">{bodyContent}</div>
        )}
      </div>
    </>
  );
};

export default AppCustomCheckBox;
