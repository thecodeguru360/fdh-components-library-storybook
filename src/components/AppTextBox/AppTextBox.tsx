import React from "react";
import cn from "classnames";
import "./AppTextBox.scss";

export type AppTextBoxProps = {
  name: string;
  placeholder?: string;
  value?: string | number;
  id?: string;
  required?: true | false;
  disabled?: true | false;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
};

export const AppTextBox: React.FC<AppTextBoxProps> = ({ name, value, id, required, placeholder, disabled,  onChange, onBlur, ...rest   }) => {

  return (
    <div  className={cn("AppInput")}>
    <input className={cn(
    "form-control"
  )} name= {name}
    placeholder={placeholder}
    id={id}
    disabled={disabled}
    required={required}
    onChange={onChange}
    onBlur={onBlur}
    value={value}
  />
  </div>
  )
};
export default AppTextBox;
