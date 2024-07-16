import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import AppTextArea from "./AppTextArea";
import { FormProvider, useForm } from "react-hook-form";

export default {
  title: "AppTextArea",
  component: AppTextArea,
} as Meta<typeof AppTextArea>;

const Template: StoryFn<typeof AppTextArea> = (args) => {
  const methods = useForm();
  return (
    <FormProvider {...methods}>
      <form>
        <AppTextArea {...args} />
      </form>
    </FormProvider>
  );
};

export const TextArea = Template.bind({});
TextArea.args = {
  name: "textArea",
  required: true,
  rows: 4,
  maxLength: 5,
};
