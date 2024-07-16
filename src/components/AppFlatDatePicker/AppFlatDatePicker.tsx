import React, { useState, useEffect } from "react";
import { useFormContext } from "react-hook-form";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarDays } from "@fortawesome/pro-light-svg-icons";
// import "../../../node_modules/.pnpm/react-flatpickr@3.10.13_react@18.2.0/node_modules/flatpickr/dist/flatpickr.css";
import Flatpickr from "react-flatpickr";
import "../../_metronic/assets/sass/style.react.scss";
import "../../_metronic/assets/sass/style.scss";
import "../../_metronic/assets/sass/core/components/_variables.scss";
// import "../../_metronic/assets/sass/core/vendors/plugins/_flatpickr.scss";

export interface AppFlatDatePickerProps {
  name: string;
  placeholder?: string;
  dateFormat?: string;
  onCustomChange?: (date: Date | null) => void;
  dateOnly?: true | false;
}

export const AppFlatDatePicker: React.FC<AppFlatDatePickerProps> = ({
  name,
  onCustomChange,
  placeholder,
  dateFormat = "m/d/Y",
  dateOnly = true,
}) => {
  const {
    register,
    setValue,
    getValues,
    formState: { errors },
    clearErrors,
  } = useFormContext();
  const [selectedDate, setSelectedDate] = useState(getValues(name) || null);
  var hasError = !!errors[name];
  const errorMessage = errors[name]?.message ? errors[name]?.message : "";
  useEffect(() => {
    register(name);
  }, [register, name]);

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

  const [dateState, setDateState] = useState<any>({
    date1: new Date(),
    date2: new Date(),
  });
  return (
    <>
      <Flatpickr
        {...register(name)}
        value={selectedDate}
        onChange={([date1]) => {
          setDateState({ date1 });
        }}
        className="form-control"
        placeholder={placeholder}
        options={{
          enableTime: !dateOnly,
          dateFormat: dateFormat,
        }}
      />
      <div className="error">
        <>{errorMessage}</>
      </div>
    </>
  );
};
export default AppFlatDatePicker;
