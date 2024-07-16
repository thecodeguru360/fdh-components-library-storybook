import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import AppRadioButton from "./AppRadioButton";
import { AppButton } from "../AppButton";
import type { AppRadioButtonProps } from "./AppRadioButton";
import { useForm, FormProvider } from "react-hook-form";

export default {
  title: "AppRadioButton",
  component: AppRadioButton,
} as Meta<typeof AppRadioButton>;

const Template: StoryFn<AppRadioButtonProps> = (args) => {
  const methods = useForm();
  return (
    <FormProvider {...methods}>
      <form>
        <AppRadioButton {...args} />
      </form>
    </FormProvider>
  );
};

const handleRadioButtonChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  console.log("Selected value:", e.target.value);
};

export const RadioButton = Template.bind({});
RadioButton.args = {
  name: "radioButton",
  options: [
    { value: "male", label: "Male" },
    { value: "female", label: "Female" },
    { value: "other", label: "Other" },
  ],
  onCustomChange: handleRadioButtonChange,
  defaultValue: "female",
};
