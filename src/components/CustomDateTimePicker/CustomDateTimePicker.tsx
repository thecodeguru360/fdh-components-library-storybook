import React, { useState, useEffect } from 'react';
import { useFormContext } from 'react-hook-form';
import ReactDatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import Select from 'react-select';

export interface CustomDateTimePickerProps {
  name: string;
  label?: string;
  placeholder?: string;
}
const createNumberOptions = (max : any) => {
  return Array.from({ length: max }, (_, i) => ({ value: i, label: `${i}`.padStart(2, '0') }));
};

const hourOptions = createNumberOptions(24);
const minuteSecondOptions = createNumberOptions(60);

export const CustomDateTimePicker: React.FC<CustomDateTimePickerProps> = ({ name, label,placeholder }) => {
  const { register, setValue } = useFormContext();
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [time, setTime] = useState({
    hours: hourOptions[selectedDate.getHours()],
    minutes: minuteSecondOptions[selectedDate.getMinutes()],
    seconds: minuteSecondOptions[selectedDate.getSeconds()],
  });

  useEffect(() => {
    register(name);
  }, [register, name]);

  const updateDateTime = (newDate : any, newTime = time) => {
    const updatedDate = new Date(newDate);
    updatedDate.setHours(newTime.hours.value);
    updatedDate.setMinutes(newTime.minutes.value);
    updatedDate.setSeconds(newTime.seconds.value);
    setValue(name, updatedDate);
    console.log(updatedDate);
  };

  const handleDateChange = (date: Date) => {
    setSelectedDate(date || new Date());
    updateDateTime(date || new Date());
  };

  const handleTimeChange = (selectedOption : any, unit: any) => {
    const newTime = { ...time, [unit]: selectedOption };
    setTime(newTime);
    updateDateTime(selectedDate, newTime);
 
  };

  return (
    <div>
      {label && <label htmlFor={name}>{label}</label>}
      <ReactDatePicker
        selected={selectedDate}
        onChange={handleDateChange}
        placeholderText= {placeholder}
        dateFormat="MMMM d, yyyy"
      />
      <Select
        options={hourOptions}
        value={time.hours}
        onChange={(option : any) => handleTimeChange(option, 'hours')}
        isSearchable
      />
      <Select
        options={minuteSecondOptions}
        value={time.minutes}
        onChange={(option : any) => handleTimeChange(option, 'minutes')}
        isSearchable
      />
      <Select
        options={minuteSecondOptions}
        value={time.seconds}
        onChange={(option : any) => handleTimeChange(option, 'seconds')}
        isSearchable
      />
    </div>
  );
};
export default CustomDateTimePicker;