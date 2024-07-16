import React, { useState, useEffect } from "react";
import { useFormContext } from "react-hook-form";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./datepicker.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarDays } from "@fortawesome/pro-light-svg-icons";
import "../../_metronic/assets/sass/style.react.scss";
import "../../_metronic/assets/sass/style.scss";

export interface AppDatePickerProps {
  name: string;
  placeholder?: string;
  dateFormat?: string;
  onCustomChange?: (date: Date | null) => void;
  disabled?: true | false;
  clear?: true | false;
  setDate?: Date | null;
  setMinDate?: Date | null;
  setMaxDate?: Date | null;
}

export const AppDatePicker: React.FC<AppDatePickerProps> = ({
  name,
  onCustomChange,
  placeholder,
  dateFormat = "MM/dd/yyyy",
  disabled,
  clear,
  setDate,
  setMinDate,
  setMaxDate,
}) => {
  const {
    register,
    setValue,
    getValues,
    formState: { errors },
    clearErrors,
    setError,
  } = useFormContext();
  const [selectedDate, setSelectedDate] = useState(getValues(name) || setDate);
  const [rawInput, setRawInput] = useState("");
  var hasError = !!errors[name];
  const errorMessage = errors[name]?.message ? errors[name]?.message : "";
  useEffect(() => {
    register(name);
    if (setDate) setValue(name, setDate);
  }, [register, name]);

  useEffect(() => {
    setSelectedDate(setDate || null);
    setValue(name, setDate);
  }, [setDate]);

  const handleDateChange = (date: Date | null) => {
    setSelectedDate(date || null);
    setValue(name, date);
    if (hasError && date) {
      clearErrors(name);
      hasError = !!errors[name];
    }
    if (onCustomChange) {
      onCustomChange(date);
    }
  };
  const toggleCalendar = () => {
    const input = document.querySelector(
      `.${name} input[type="text"]`
    ) as HTMLInputElement | null;
    if (input) {
      input.focus();
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
    }
  };

  const handleRawDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const rawValue = e.target.value;

    if (rawValue != undefined && rawValue.length >= 8) {
      setRawInput(rawValue);
      const parsedDate = new Date(rawValue);

      if (
        setMinDate &&
        parsedDate.setHours(0, 0, 0, 0) < setMinDate.setHours(0, 0, 0, 0)
      ) {
        setSelectedDate(parsedDate || null);
        setValue(name, null);
        setError(name, {
          type: "manual",
          message: `The date must be on or after ${setMinDate.toLocaleDateString()}`,
        });

        return;
      }

      if (
        setMaxDate &&
        parsedDate.setHours(0, 0, 0, 0) > setMaxDate.setHours(0, 0, 0, 0)
      ) {
        setSelectedDate(parsedDate || null);
        setValue(name, null);
        setError(name, {
          type: "manual",
          message: `The date must be on or before ${setMaxDate.toLocaleDateString()}`,
        });

        return;
      }

      clearErrors(name);
      handleDateChange(parsedDate);
    }
  };

  return (
    <>
      <div className="custom-datepicker">
        <ReactDatePicker
          {...register(name)}
          wrapperClassName={name}
          selected={selectedDate ? new Date(selectedDate) : undefined}
          onChange={handleDateChange}
          onKeyDown={handleKeyDown}
          dateFormat={dateFormat}
          className={"form-control"}
          showIcon
          icon={
            <span onClick={toggleCalendar}>
              <FontAwesomeIcon icon={faCalendarDays} />
            </span>
          }
          placeholderText={placeholder}
          showMonthDropdown={true}
          showYearDropdown={true}
          dropdownMode="select"
          autoComplete="off"
          disabled={disabled}
          isClearable={clear}
          minDate={setMinDate}
          maxDate={setMaxDate}
          onChangeRaw={handleRawDateChange}
        />
        <div className="form-text text-muted date-format-mask">MM/DD/YYYY</div>
      </div>
      <div className="error">
        <>{errorMessage}</>
      </div>
    </>
  );
};
export default AppDatePicker;
