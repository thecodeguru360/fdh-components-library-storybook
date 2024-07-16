import React from "react";
import { useFormContext } from "react-hook-form";
import cn from "classnames";
import "../AppContactCard/AppContactCard.scss";
// import "./AppSelectDecision.scss";
import "../AppCustomCheckBox/AppCustomCheckBox.scss";
import { SelectOption } from "../AppSelect";

export type AppSelectDecisionProps = {
  name: string;
  options: SelectOption[];
  label: string; // New label prop
  placeholder?: string;
  id?: string;
  required?: true | false;
  disabled?: boolean;
  initialSelectedOption?: SelectOption | null;
  onCustomChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  onCustomBlur?: (e: React.FocusEvent<HTMLSelectElement>) => void;
  bgColor?: string;
  bodyContent?: React.ReactNode;
};

export const AppSelectDecision: React.FC<AppSelectDecisionProps> = ({
  name,
  options,
  label,
  placeholder,
  id,
  required,
  disabled,
  onCustomChange,
  onCustomBlur,
  initialSelectedOption,
  bgColor = "#ffffff",
  bodyContent,
}) => {
  const {
    register,
    formState: { errors },
    setValue,
    clearErrors,
  } = useFormContext();
  let hasError = !!errors[name];
  const errorMessage = errors[name]?.message ? errors[name]?.message : "";

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = parseInt(e.target.value);
    setValue(name, value);
    if (hasError) {
      clearErrors(name);
      hasError = !!errors[name];
    }
    if (onCustomChange) onCustomChange(e);
  };

  const handleBlur = (e: React.FocusEvent<HTMLSelectElement>) => {
    const value = parseInt(e.target.value);
    setValue(name, value);
    if (onCustomBlur) onCustomBlur(e);
  };

  const inputStyle = {
    borderColor: hasError ? "red" : "",
    minHeight: "36px",
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
              <label htmlFor={id}>{label}</label>
            </div>
          </div>
          <div className="contactcard-portlet__head-toolbar">
            <div className="contactcard-portlet__head-actions">
              <select
                className="form-select-sm"
                {...register(name)}
                // placeholder={placeholder}
                id={id}
                disabled={disabled}
                required={required}
                defaultValue={initialSelectedOption?.value}
                onChange={handleChange}
                onBlur={handleBlur}
                style={inputStyle}
              >
                {options.map((opt) => (
                  <option key={opt.value} value={opt.value}>
                    {opt.label}
                  </option>
                ))}
              </select>
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

export default AppSelectDecision;
