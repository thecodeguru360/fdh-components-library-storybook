import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import { useForm } from "react-hook-form";
import AppLabel, { AppLabelProps } from "./AppLabel";

export default {
  title: "AppLabel",
  component: AppLabel,
} as Meta<typeof AppLabel>;

const Template: StoryFn<AppLabelProps> = (args) => {
  return <AppLabel {...args} />;
};

export const Label1 = Template.bind({});
Label1.args = {
  label: "Label",
  required: true,
  toolTipText: "My Text",
  disabled: true,
};
