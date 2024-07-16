import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import { AppCheckBox } from "./AppCheckBox";
import type { AppCheckBoxProps } from "./AppCheckBox";
import { useForm, FormProvider } from "react-hook-form";

export default {
  title: "AppCheckBox",
  component: AppCheckBox,
} as Meta<typeof AppCheckBox>;

const Template: StoryFn<AppCheckBoxProps> = (args) => {
  const methods = useForm();
  return (
    <FormProvider {...methods}>
      <form>
        <AppCheckBox {...args} />
      </form>
    </FormProvider>
  );
};

export const AppCheckBox1 = Template.bind({});
AppCheckBox1.args = {
  name: "text",
  label: "Label",
  required: true,
};
