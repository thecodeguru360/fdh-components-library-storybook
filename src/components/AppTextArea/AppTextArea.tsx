import React from "react";
import { useFormContext } from "react-hook-form";
import "./AppTextArea.scss";

export type AppTextAreaProps = {
  name: string;
  placeholder?: string;
  id?: string;
  required?: true | false;
  disabled?: true | false;
  rows?: number;
  onCustomChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  onCustomBlur?: (e: React.FocusEvent<HTMLTextAreaElement>) => void;
  maxLength?: number | undefined;
};

export const AppTextArea: React.FC<AppTextAreaProps> = ({
  name,
  id,
  required,
  disabled,
  placeholder,
  onCustomChange,
  onCustomBlur,
  rows,
  maxLength,
}) => {
  const {
    register,
    formState: { errors },
    clearErrors,
    setValue,
  } = useFormContext();
  const errorMessage = errors[name]?.message ? errors[name]?.message : "";
  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const value = e.target.value;
    var hasError = !!errors[name];
    setValue(name, value);
    if (hasError && value != null && value != undefined && value != "") {
      clearErrors(name);
      hasError = !!errors[name];
    }
    if (onCustomChange) {
      onCustomChange(e);
    }
  };
  const handleBlur = (e: React.FocusEvent<HTMLTextAreaElement>) => {
    const value = e.target.value;
    setValue(name, value);
    if (onCustomBlur) {
      onCustomBlur(e);
    }
  };
  const hasError = !!errors[name];

  const inputStyle = {
    borderColor: hasError ? "red" : "",
  };
  return (
    <div className="AppTextArea form-group">
      <textarea
        {...register(name)}
        className="form-control"
        id={id}
        rows={rows}
        name={name}
        placeholder={placeholder}
        disabled={disabled}
        onChange={handleChange}
        onBlur={handleBlur}
        style={inputStyle}
        maxLength={maxLength}
      />
      <div className="error">
        <>{errorMessage}</>
      </div>
    </div>
  );
};
export default AppTextArea;
