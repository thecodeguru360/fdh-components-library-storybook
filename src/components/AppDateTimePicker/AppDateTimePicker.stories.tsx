import React, { useState } from "react";
import { Meta, StoryFn } from "@storybook/react";
import AppDateTimePicker, { AppDateTimePickerProps } from "./AppDateTimePicker";
import { FormProvider, useForm, useFormContext } from "react-hook-form";

export default {
  title: "AppDateTimePicker",
  component: AppDateTimePicker,
} as Meta<typeof AppDateTimePicker>;

const Template: StoryFn<AppDateTimePickerProps> = (args) => {
  const methods = useForm();
  return (
    <FormProvider {...methods}>
      <form>
        <AppDateTimePicker {...args} />
      </form>
    </FormProvider>
  );
};




export const TimePicker = Template.bind({});
TimePicker.args = {
  initialDate: new Date(),
  onDateChange: (date: Date | null) => console.log(date)
};


