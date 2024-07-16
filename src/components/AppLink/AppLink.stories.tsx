import { Meta, StoryFn } from "@storybook/react";
import AppLink from "./AppLink";
import { faFlag } from "@fortawesome/pro-light-svg-icons";

export default {
  title: "AppLink",
  component: AppLink,
} as Meta<typeof AppLink>;

const Template: StoryFn<typeof AppLink> = (args) => <AppLink {...args} />;

export const Basic = Template.bind({});
Basic.args = {
  href: "#",
  label: "Link 1",
};
export const WithIcon = Template.bind({});
WithIcon.args = {
  href: "#",
  label: "Link 1",
  icon: faFlag,
};
export const IconPosition = Template.bind({});
IconPosition.args = {
  href: "#",
  label: "Link 1",
  icon: faFlag,
  iconPosition: "right",
};
export const disabled = Template.bind({});
disabled.args = {
  href: "#",
  label: "Link 1",
  icon: faFlag,
  disabled: true,
};
