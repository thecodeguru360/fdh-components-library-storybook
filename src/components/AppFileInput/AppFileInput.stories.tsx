import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import AppFileInput from "./AppFileInput";

export default {
  title: "AppFileInput",
  component: AppFileInput,
} as Meta<typeof AppFileInput>;

const Template: StoryFn<typeof AppFileInput> = (args) => (
  <AppFileInput {...args} />
);

export const SingleFileInput = Template.bind({});
SingleFileInput.args = {
  label: "Attach File",
  name: "singleFile",
  helpText: "Only image files accepted",
  accept: "image/*",
  onChange: (e) => {},
};

export const MultipleFileInput = Template.bind({});
MultipleFileInput.args = {
  multiple: true,
  label: "Attach Files",
  name: "multiFiles",
  helpText: "Only image files accepted",
  accept: "image/*",
  onChange: (e) => {},
};
