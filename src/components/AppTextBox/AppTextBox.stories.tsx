import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import AppInput from "./AppTextBox";
import { AppButton } from "../AppButton";
import type { AppTextBoxProps } from './AppTextBox';
import { useForm, FormProvider } from 'react-hook-form';

export default {
  title: "AppInput",
  component: AppInput,
} as Meta<typeof AppInput>;

const Template: StoryFn<AppTextBoxProps> = (args) => {

  return (
    
        <AppInput {...args} />
  );
};

export const AppText = Template.bind({});
AppText.args = {
  name: "text",
  required: true,
  placeholder: "Placeholder",
};