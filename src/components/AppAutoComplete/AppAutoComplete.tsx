import React, { useState, useEffect } from "react";
import Select, { ControlProps, components } from "react-select";
import { Controller, useFormContext } from "react-hook-form";
import AsyncSelect from "react-select/async";
import { SelectOption } from "../AppSelect";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/pro-regular-svg-icons";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

export type AppAutoCompleteProps = {
  name: string;
  loadOptions: (inputValue: string) => Promise<SelectOption[]>;
  placeholder?: string;
  id?: string;
  required?: boolean;
  disabled?: boolean;
  onCustomChange?: (selectedOption: SelectOption | null) => void;
  onBlur?: () => void;
  initialSelectedOption?: SelectOption | null;
  initialOptions?: SelectOption[] | [];
  showDropdownArrow?: boolean;
  showLeftIcon?: boolean;
  leftIconName?: IconProp;
};

// ...

export const AppAutoComplete: React.FC<AppAutoCompleteProps> = ({
  name,
  loadOptions,
  placeholder,
  id,
  required,
  disabled,
  onCustomChange,
  onBlur,
  initialSelectedOption,
  initialOptions,
  showDropdownArrow = false,
  showLeftIcon = false,
  leftIconName = faMagnifyingGlass,
}) => {
  const { control, register, setValue, watch, formState, clearErrors } =
    useFormContext();
  const { errors } = formState;
  const [options, setOptions] = useState<SelectOption[]>([]);
  const selectedValue = watch(name);
  const [selectedOption, setSelectedOption] = useState<SelectOption | null>(
    null
  );

  const Control = ({
    children,
    ...props
  }: ControlProps<SelectOption, false>) => {
    // @ts-ignore
    const style = { cursor: "pointer", marginLeft: "0.5rem", color: "#6C757D" };

    return (
      <components.Control {...props}>
        {showLeftIcon && <FontAwesomeIcon icon={leftIconName} style={style} />}
        {children}
      </components.Control>
    );
  };

  useEffect(() => {
    if (initialSelectedOption) {
      setSelectedOption(initialSelectedOption);
    }
  }, [initialSelectedOption]);
  const handleMenuOpen = () => {
    if (!options.length && selectedValue) {
      debounceLoadOptions("");
    }
  };
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

  const handleChange = (option: SelectOption | null) => {
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
            onKeyDown={handleKeyDown}
            defaultOptions={initialOptions} // Set default options
            // menuIsOpen={false} // Open the menu on click
            //filterOption={(input: any, option: any) => option.label.toLowerCase().includes(input.toLowerCase())}
            onMenuOpen={handleMenuOpen}
            isClearable={true}
            components={
              showDropdownArrow
                ? undefined
                : {
                    // Control,
                    DropdownIndicator: () => null,
                    IndicatorSeparator: () => null,
                  }
            }
          />
        )}
      />
      <div className="error">
        <>{errors[name]?.message}</>
      </div>
    </>
  );
};

export default AppAutoComplete;
