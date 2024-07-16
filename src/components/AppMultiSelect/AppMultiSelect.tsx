import React, { useEffect, useState } from "react";
import Select, { StylesConfig } from "react-select";
import { useFormContext } from "react-hook-form";
import { SelectOption } from "../AppSelect";

export type AppMultiSelectProps = {
  name: string;
  options: SelectOption[];
  placeholder?: string;
  id?: string;
  required?: true | false;
  disabled?: true | false;
  onCustomChange?: (selectedOptions: SelectOption[]) => void;
  onBlur?: () => void;
  initialSelectedOptions?: any;
};

export const AppMultiSelect: React.FC<AppMultiSelectProps> = ({
  name,
  options,
  placeholder,
  id,
  required,
  disabled,
  onCustomChange,
  onBlur,
  initialSelectedOptions,
}) => {
  const {
    register,
    setValue,
    formState: { errors },
    clearErrors,
  } = useFormContext();
  var hasError = !!errors[name];
  const errorMessage = errors[name]?.message ? errors[name]?.message : "";
  const handleChange = (selectedOptions: any) => {
    setValue(
      name,
      selectedOptions ? selectedOptions.map((option: any) => option.value) : []
    );
    setSelectedOptions(selectedOptions);
    if (
      hasError &&
      selectedOptions != null &&
      selectedOptions != undefined &&
      selectedOptions.length != 0
    ) {
      clearErrors(name);
      hasError = !!errors[name];
    }
    if (onCustomChange) {
      onCustomChange(selectedOptions || []);
    }
  };
  const [selectedOptions, setSelectedOptions] = useState<SelectOption[] | null>(
    null
  );

  useEffect(() => {
    if (initialSelectedOptions) {
      // setValue(name, initialSelectedOptions ? initialSelectedOptions.map((option: any) => option.value) : []);
      setSelectedOptions(initialSelectedOptions);
    }
  }, [initialSelectedOptions]);
  const handleBlur = () => {
    if (onBlur) {
      onBlur();
    }
  };
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
    }
  };
  return (
    <>
      <Select
        {...register(name)}
        isMulti
        options={options}
        onChange={handleChange}
        placeholder={placeholder}
        id={id}
        value={selectedOptions}
        isDisabled={disabled}
        required={required}
        onBlur={handleBlur}
        onKeyDown={handleKeyDown}
      />
      <div className="error">
        <>{errorMessage}</>
      </div>
    </>
  );
};
export default AppMultiSelect;
