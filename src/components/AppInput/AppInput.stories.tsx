import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import AppInput from "./AppInput";
import { AppButton } from "../AppButton";
import type { AppInputProps } from './AppInput';
import { useForm, FormProvider } from 'react-hook-form';

export default {
  title: "AppInput",
  component: AppInput,
} as Meta<typeof AppInput>;

const Template: StoryFn<AppInputProps> = (args) => {
  const { control, handleSubmit } = useForm();
  const methods = useForm();
  const onSubmit = (data: any) => {
    console.log('Form data:', data);
  };
  return (
    <FormProvider {...methods}>
       <form onSubmit={handleSubmit(onSubmit)}>
      <AppInput {...args} />
      <button type="submit">Submit</button>
    </form>
    </FormProvider>
  );
};

export const Text = Template.bind({});
Text.args = {
  name: "text",
  required: true,
  placeholder: "Placeholder",
};
// With error state
export const WithError = Template.bind({});
WithError.args = {
  name: "text",
  required: true,
  placeholder: "Placeholder",
 // required: true,
};