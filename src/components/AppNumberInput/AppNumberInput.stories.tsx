import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import AppNumberInput from "./AppNumberInput";
import { AppButton } from "../AppButton";
import type { AppNumberInputProps } from './AppNumberInput';
import { useForm, FormProvider } from 'react-hook-form';

export default {
  title: "AppNumberInput",
  component: AppNumberInput,
} as Meta<typeof AppNumberInput>;

const Template: StoryFn<AppNumberInputProps> = (args) => {
  const methods = useForm();
  return (
    <FormProvider {...methods}>
      <form>
        <AppNumberInput {...args} />
      </form>
    </FormProvider>
  );
};

export const TextNumber = Template.bind({});
TextNumber.args = {
  name: "text",
  required: true,
  placeholder: "Placeholder",
};