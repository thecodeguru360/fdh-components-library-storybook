// ReusableDateTimePicker.tsx

import React, { useState } from "react";
import DateTimePicker from "react-datetime-picker";
import "react-datetime-picker/dist/DateTimePicker.css";
import "react-calendar/dist/Calendar.css";
import "react-clock/dist/Clock.css";
import "./AppDateTimePicker.scss";
import { faCalendarDays } from "@fortawesome/pro-light-svg-icons";
import { FontAwesomeIcons } from "../FontAwesomeIcons/FontAwesomeIcons";

export interface AppDateTimePickerProps {
  initialDate?: Date | null;
  onDateChange: (date: Date | null) => void;
}

export const AppDateTimePicker: React.FC<AppDateTimePickerProps> = ({
  initialDate,
  onDateChange,
}) => {
  const [date, setDate] = useState<Date | null>(initialDate || null);

  const handleChange = (newDate: Date | null) => {
    setDate(newDate);
    onDateChange(newDate);
  };

  return (
    <div>
      <DateTimePicker
        className="form-control"
        calendarIcon={
          <FontAwesomeIcons
            iconName={faCalendarDays}
            iconSize="lg"
            iconClasses="calendar-color"
          />
        }
        amPmAriaLabel="Select AM/PM"
        calendarAriaLabel="Toggle calendar"
        clearAriaLabel="Clear value"
        dayAriaLabel="Day"
        hourAriaLabel="Hour"
        maxDetail="second"
        minuteAriaLabel="Minute"
        monthAriaLabel="Month"
        nativeInputAriaLabel="Date and time"
        onChange={handleChange}
        secondAriaLabel="Second"
        value={date}
        yearAriaLabel="Year"
        disableClock={true}
      />
    </div>
  );
};

export default AppDateTimePicker;
