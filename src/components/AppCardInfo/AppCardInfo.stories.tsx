import { Meta, StoryFn } from "@storybook/react";
import AppCardInfo from "./AppCardInfo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleArrowLeft } from "@fortawesome/pro-solid-svg-icons";

export default {
  title: "AppCardInfo",
  component: AppCardInfo,
} as Meta<typeof AppCardInfo>;

const Template: StoryFn<typeof AppCardInfo> = (args) => (
  <AppCardInfo {...args}></AppCardInfo>
);

export const Example = Template.bind({});
Example.args = {
  title: "AppCardInfo Example",
  mainText: "123",
};
