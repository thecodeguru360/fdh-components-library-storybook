import React from "react";
import { useFormContext } from "react-hook-form";
import "./AppCheckBox.scss";

export interface AppCheckBoxProps {
  name: string;
  label: string;
  placeholder?: string;
  id?: string;
  required?: true | false;
  disabled?: true | false;
  onCustomChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onCustomBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
  customNotChecked?: true | false;
}
export const AppCheckBox: React.FC<AppCheckBoxProps> = ({
  name,
  label,
  onCustomChange,
  id,
  required,
  disabled,
  onCustomBlur,
  customNotChecked = false,
}) => {
  const {
    register,
    setValue,
    formState: { errors },
    clearErrors,
  } = useFormContext();
  let isChecked;
  var hasError = !!errors[name];
  const errorMessage = errors[name]?.message ? errors[name]?.message : "";
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.checked;
    isChecked = value;
    setValue(name, value); // Update React Hook Form state
    if (hasError && value) {
      clearErrors(name);
      hasError = !!errors[name];
    }
    if (onCustomChange) {
      onCustomChange(e);
    }
  };
  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    const value = e.target.checked;
    setValue(name, value); // Update React Hook Form state
    if (onCustomBlur) onCustomBlur(e);
  };
  const inputStyle = {
    borderColor: hasError ? "red" : "", // Change border color if there's an error
    // Add other styling as needed
  };
  return (
    <>
      <div className="form-check form-check-custom form-check-solid AppCheckboxInput">
        <input
          {...register(name)}
          id={id}
          disabled={disabled}
          required={required}
          className="form-check-input h-15px w-15px"
          onChange={handleChange}
          onBlur={handleBlur}
          checked={customNotChecked ? false : isChecked}
          style={inputStyle}
          type="checkbox"
          value=""
        />
        <label className="form-check-label" htmlFor={id}>
          {label}
        </label>
      </div>
      <div className="error">
        <>{errorMessage}</>
      </div>
    </>
  );
};
export default AppCheckBox;
