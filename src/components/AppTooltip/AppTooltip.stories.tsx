import { Meta, StoryFn } from "@storybook/react";
import AppTooltip from "./AppTooltip";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleInfo } from "@fortawesome/pro-solid-svg-icons";

export default {
  title: "AppTooltip",
  component: AppTooltip,
} as Meta<typeof AppTooltip>;

const Template: StoryFn<typeof AppTooltip> = (args) => (
  <AppTooltip {...args}>
    <FontAwesomeIcon icon={faCircleInfo} />
  </AppTooltip>
);

export const Tooltip = Template.bind({});
Tooltip.args = {
  placement: "right",
  message: "Tooltip Message",
};
