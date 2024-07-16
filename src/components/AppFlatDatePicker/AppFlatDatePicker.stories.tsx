import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import AppFlatDatePicker, { AppFlatDatePickerProps } from "./AppFlatDatePicker";
import { FormProvider, useForm } from "react-hook-form";

export default {
  title: "AppFlatDatePicker",
  component: AppFlatDatePicker,
} as Meta<typeof AppFlatDatePicker>;

const Template: StoryFn<AppFlatDatePickerProps> = (args) => {
  const methods = useForm();
  return (
    <FormProvider {...methods}>
      <form>
        <AppFlatDatePicker {...args} />
      </form>
    </FormProvider>
  );
};

export const FlatDatePicker = Template.bind({});
FlatDatePicker.args = {
  name: "datePicker",
  placeholder: "Pick Date",
  dateFormat: "m/d/Y",
};
