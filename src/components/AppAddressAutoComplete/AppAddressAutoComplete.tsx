import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { faMagnifyingGlass } from "@fortawesome/pro-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState, useEffect } from "react";
import { Controller, useFormContext } from "react-hook-form";
import { ControlProps, components } from "react-select";
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

export type AppAddressAutoCompleteProps = {
  name: string;
  loadOptions: (inputValue: string) => Promise<SelectAddressOption[]>;
  placeholder?: string;
  id?: string;
  required?: boolean;
  disabled?: boolean;
  onCustomChange?: (selectedOption: SelectAddressOption | null) => void;
  onBlur?: () => void;
  initialSelectedOption?: SelectAddressOption | null;
  showDropdownArrow?: boolean;
  showLeftIcon?: boolean;
  leftIconName?: IconProp;
};

// ...

export const AppAddressAutoComplete: React.FC<AppAddressAutoCompleteProps> = ({
  name,
  loadOptions,
  placeholder,
  id,
  required,
  disabled,
  onCustomChange,
  onBlur,
  initialSelectedOption,
  showDropdownArrow = false,
  showLeftIcon = false,
  leftIconName = faMagnifyingGlass,
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

  const Control = ({ ...props }: ControlProps<SelectAddressOption, false>) => {
    // @ts-ignore
    const { onIconClick } = props.selectProps;
    const style = { cursor: "pointer", marginLeft: "0.5rem", color: "#6C757D" };

    return (
      <components.Control {...props}>
        {showLeftIcon && <FontAwesomeIcon icon={leftIconName} style={style} />}
      </components.Control>
    );
  };

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
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
    }
  };
  const customStyles = {
    dropdownIndicator: (provided: any) => ({
      ...provided,
      display: "none", // Hide the dropdown indicator
    }),
    indicatorSeparator: (provided: any) => ({
      ...provided,
      display: "none", // Hide the separator between indicators
    }),
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
            isClearable={true}
            isDisabled={disabled}
            required={required}
            onBlur={handleBlur}
            onKeyDown={handleKeyDown}
            styles={customStyles} // Apply custom styles
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

export default AppAddressAutoComplete;
