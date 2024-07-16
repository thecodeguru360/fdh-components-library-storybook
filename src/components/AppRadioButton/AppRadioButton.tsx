import React, { useState } from "react";
import { useFormContext } from "react-hook-form";
import "../AppCheckBox/AppCheckBox.scss";

interface Option {
  value: string;
  label: string;
}

export type AppRadioButtonProps = {
  name: string;
  options: Option[];
  id?: string;
  onCustomChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  defaultValue?: string;
};

export const AppRadioButton: React.FC<AppRadioButtonProps> = ({
  name,
  options,
  id,
  onCustomChange,
  defaultValue,
}) => {
  const { register } = useFormContext();
  const [selectedValue, setSelectedValue] = useState(defaultValue);

  const handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setSelectedValue(value);
    if (onCustomChange) {
      onCustomChange(event);
    }
  };

  return (
    <div className="mb-10 d-flex">
      {options.map((option, index) => (
        <div
          key={index}
          className="AppCheckboxInput form-check form-check-custom form-check-solid"
        >
          <input
            className="form-check-input h-15px w-15px"
            type="radio"
            value={option.value}
            {...register(name)}
            id={option.value}
            onChange={handleRadioChange}
            checked={selectedValue === option.value}
          />
          <label className="form-check-label" htmlFor={option.value}>
            {option.label}
          </label>
        </div>
      ))}
    </div>
  );
};

export default AppRadioButton;
