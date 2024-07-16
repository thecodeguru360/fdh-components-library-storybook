import React, { useState, useEffect } from "react";
import Select from "react-select";
import { Controller, useFormContext } from "react-hook-form";
import AsyncSelect from "react-select/async";

export type SelectAddressOption = {
  label: string;
  value: string | number;
  street?: string | undefined;
  street2?: string | undefined;
  city?: string | undefined;
  state?: string | undefined;
  county?: string | undefined;
  zipCode?: string | undefined;
  completeAddress?: string | undefined;
};

export type AppAddressProps = {
  name: string;
  loadOptions: (inputValue: string) => Promise<SelectAddressOption[]>;
  placeholder?: string;
  id?: string;
  required?: boolean;
  disabled?: boolean;
  onCustomChange?: (selectedOption: SelectAddressOption | null) => void;
  onBlur?: () => void;
  initialSelectedOption?: SelectAddressOption | null;
};

// ...

export const AppAddress: React.FC<AppAddressProps> = ({
  name,
  loadOptions,
  placeholder,
  id,
  required,
  disabled,
  onCustomChange,
  onBlur,
  initialSelectedOption,
}) => {
  const { control, register, setValue, watch, formState, clearErrors } =
    useFormContext();
  const { errors } = formState;
  const [options, setOptions] = useState<SelectAddressOption[]>([]);
  const selectedValue = watch(name);
  const [selectedOption, setSelectedOption] =
    useState<SelectAddressOption | null>(null);

  useEffect(() => {
    if (initialSelectedOption) {
      setSelectedOption(initialSelectedOption);
    }
  }, [initialSelectedOption]);

  useEffect(() => {
    register(name);
  }, [register, name]);

  const debounceLoadOptions = async (inputValue: string) => {
    try {
      const result = await loadOptions(inputValue);
      setOptions(result);
      return result;
    } catch (error) {
      console.error("Error loading options:", error);
      return [];
    }
  };

  const handleInputChange = async (inputValue: string) => {
    try {
      await debounceLoadOptions(inputValue);
    } catch (error) {
      console.error("Error handling input change:", error);
    }
  };

  const handleChange = (option: SelectAddressOption | null) => {
    setSelectedOption(option);
    setValue(name, option ? option.value : "");
    if (errors[name]) {
      clearErrors(name);
    }
    if (onCustomChange) {
      onCustomChange(option);
    }
  };

  const handleBlur = () => {
    if (onBlur) {
      onBlur();
    }
  };
  const handleMenuOpen = () => {
    if (!options.length && selectedValue) {
      debounceLoadOptions("");
    }
  };
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
    }
  };
  return (
    <>
      <Controller
        name={name}
        control={control}
        defaultValue={null}
        render={({ field }) => (
          <AsyncSelect
            {...field}
            loadOptions={(inputValue) => debounceLoadOptions(inputValue)}
            onInputChange={handleInputChange}
            onChange={handleChange}
            value={selectedOption}
            isSearchable={true}
            placeholder={placeholder}
            id={id}
            isDisabled={disabled}
            required={required}
            onBlur={handleBlur}
            onMenuOpen={handleMenuOpen}
            isClearable={true}
            onKeyDown={handleKeyDown}
          />
        )}
      />
      <div className="error">
        <>{errors[name]?.message}</>
      </div>
    </>
  );
};

export default AppAddress;
