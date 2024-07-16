import { Meta, StoryFn } from "@storybook/react";
import AppButton from "./AppButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleArrowLeft } from "@fortawesome/pro-solid-svg-icons";

export default {
  title: "AppButton",
  component: AppButton,
} as Meta<typeof AppButton>;

const Template: StoryFn<typeof AppButton> = (args) => (
  <AppButton {...args} text="Button"></AppButton>
);

export const Primary = Template.bind({});
Primary.args = {
  variant: "primary",
  type: "button",
};

export const Secondary = Template.bind({});
Secondary.args = {
  variant: "secondary",
  type: "button",
  icon: <FontAwesomeIcon icon={faCircleArrowLeft} />,
};

export const PrimaryLarge = Template.bind({});
PrimaryLarge.args = {
  variant: "primary-lg",
  type: "button",
};

export const PrimarySmall = Template.bind({});
PrimarySmall.args = {
  variant: "primary-sm",
  type: "button",
};

export const Tertiary = Template.bind({});
Tertiary.args = {
  variant: "tertiary",
  type: "button",
  // icon: <FontAwesomeIcon icon={faCircleArrowLeft} />,
  customClasses: ["custom-class"],
};

export const WithIcon = () => (
  <AppButton
    text="Back"
    variant="icon"
    icon={<FontAwesomeIcon icon={faCircleArrowLeft} />}
  />
);
