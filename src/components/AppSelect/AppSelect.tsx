import React, { ChangeEvent } from "react";
import Select from "react-select";
import { useFormContext } from "react-hook-form";
import cn from "classnames";
import "./AppSelect.scss";

export type SelectOption = {
  label: string;
  value: string | number;
};

export type SelectProps = {
  name: string;
  options: SelectOption[];
  placeholder?: string;
  id?: string;
  required?: true | false;
  disabled?: boolean;
  initialSelectedOption?: SelectOption | null;
  onCustomChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  onCustomBlur?: (e: React.FocusEvent<HTMLSelectElement>) => void;
}

export const AppSelect: React.FC<SelectProps> = ({
  name,
  options,
  placeholder,
  id,
  required,
  disabled,
  onCustomChange,
  onCustomBlur,
  initialSelectedOption
}) => {
  const { register , formState: {errors}, setValue, clearErrors } = useFormContext();
  let hasError = !!errors[name];
  const errorMessage = errors[name]?.message ?  errors[name]?.message : ''

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = parseInt(e.target.value);
    setValue(name, value);
    if(hasError && value != null && value != undefined && value != 0) {
      clearErrors(name);
      hasError = !!errors[name];
    }
    // Update React Hook Form state
    if (onCustomChange) onCustomChange(e); // Call custom onChange handler
  };
  const handleBlur = (e: React.FocusEvent<HTMLSelectElement>) => {
    const value = parseInt(e.target.value);
    setValue(name, value); // Update React Hook Form state
    if (onCustomBlur) onCustomBlur(e);
  };
  const inputStyle = {
    borderColor: hasError ? 'red' : '', 
  };

  const initialSelectedLabel =
  initialSelectedOption
    ? options.find(opt => opt.value === initialSelectedOption.value)?.label
    : '';
    return (
      <>
        <select
          className={cn("form-select")}
          {...register(name)}
          placeholder={placeholder}
          id={id}
          disabled={disabled} // Disable if no initialSelectedOption or disabled prop is true
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
        <div className="error"><>{errorMessage}</></div>
      </>
    );
  };
  

export default AppSelect;
