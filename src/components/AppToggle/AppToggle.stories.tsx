import { Meta, StoryFn } from "@storybook/react";
import AppToggle from "./AppToggle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleArrowLeft } from "@fortawesome/pro-solid-svg-icons";

export default {
  title: "AppToggle",
  component: AppToggle,
} as Meta<typeof AppToggle>;

const Template: StoryFn<typeof AppToggle> = (args) => <AppToggle {...args} />;

export const Toggle = Template.bind({});
Toggle.args = {
  label: "Label",
  onChange: (v: boolean) => {},
};

export const Disabled = Template.bind({});
Disabled.args = {
  label: "Label",
  disabled: true,
  onChange: (v: boolean) => {},
};
