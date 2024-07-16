import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import CustomDateTimePicker, { CustomDateTimePickerProps } from "./CustomDateTimePicker";
import { FormProvider, useForm } from "react-hook-form";

export default {
  title: "CustomDateTimePicker",
  component: CustomDateTimePicker,
} as Meta<typeof CustomDateTimePicker>;

const Template: StoryFn<CustomDateTimePickerProps> = (args : any) => {
const methods = useForm();
return (
  <FormProvider {...methods}>
  <form>
    <CustomDateTimePicker {...args} />
  </form>
</FormProvider>
)
};

export const DateTimePicker = Template.bind({});
DateTimePicker.args = {
  name: "datePicker",
  label: "Select Date",
  placeholder: "Choose Date",
};
