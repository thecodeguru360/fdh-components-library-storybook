import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import AppDatePicker, { AppDatePickerProps } from "./AppDatePicker";
import { FormProvider, useForm } from "react-hook-form";

export default {
  title: "AppDatePicker",
  component: AppDatePicker,
} as Meta<typeof AppDatePicker>;

const Template: StoryFn<AppDatePickerProps> = (args) => {
  const methods = useForm();
  return (
    <FormProvider {...methods}>
      <form>
        <AppDatePicker {...args} />
      </form>
    </FormProvider>
  );
};

export const DatePicker = Template.bind({});
DatePicker.args = {
  name: "datePicker123",
  placeholder: "Choose Date",
  // setMaxDate: new Date("03/25/2024"),
  // setDate: new Date("1993/09/28"),
  setMinDate: new Date(),
  setMaxDate: new Date("06/21/2024"),
  clear: true,
};
