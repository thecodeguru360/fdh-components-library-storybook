import { Meta, StoryFn } from "@storybook/react";
import AppBottomMenu from "./AppBottomMenu";

export default {
  title: "AppBottomMenu",
  component: AppBottomMenu,
} as Meta<typeof AppBottomMenu>;

const Template: StoryFn<typeof AppBottomMenu> = (args) => (
  <AppBottomMenu {...args} />
);

export const BottomMenu = Template.bind({});
BottomMenu.args = {
  secondaryButtonText: "Secondary Button",
  primaryButtonText: "Primary Button",
  onBackClick: () => {},
  onSecondaryClick: () => {},
  onPrimaryClick: () => {},
};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
  onBackClick: () => {},
  onSecondaryClick: () => {},
  onPrimaryClick: () => {},
};
