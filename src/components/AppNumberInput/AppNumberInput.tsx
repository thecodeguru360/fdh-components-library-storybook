import React from "react";
import { useFormContext } from 'react-hook-form';
import cn from "classnames";
import "./AppNumberInput.scss";

export type AppNumberInputProps = {
  name: string;
  placeholder?: string;
  id?: string;
  required?: true | false;
  disabled?: true | false;
  onCustomChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onCustomBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
};

export const AppNumberInput: React.FC<AppNumberInputProps> = ({ name,  id, required, placeholder, disabled,  onCustomChange, onCustomBlur }) => {
  const { register, formState: { errors }, setValue , clearErrors} = useFormContext();

  // Determine if there's an error for this field
  var hasError = !!errors[name];
  const errorMessage = errors[name]?.message ?  errors[name]?.message : ''
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setValue(name, value); // Update React Hook Form state
    if(hasError && value != null && value != undefined && value != "") {
      clearErrors(name);
      hasError = !!errors[name];
    }
    if (onCustomChange) onCustomChange(e); // Call custom onChange handler with the event
  };

  

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setValue(name, value); // Update React Hook Form state
    if (onCustomBlur) onCustomBlur(e);
  
  };
  // Style for the input
  const inputStyle = {
    borderColor: hasError ? 'red' : '', // Change border color if there's an error
    // Add other styling as needed
  };
  return (
    <div>
    <input className={cn(
    "form-control"
  )} {...register(name)}
    placeholder={placeholder}
    id={id}
    type="number"
    disabled={disabled}
    required={required}
    onChange={handleChange}
    onBlur={handleBlur}
    style={inputStyle}
  />
    <div className="error"><>{errorMessage}</></div>
  </div>
  
  )
};
export default AppNumberInput;
