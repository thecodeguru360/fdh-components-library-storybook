import { Meta, StoryFn } from "@storybook/react";
import AppActionButton from "./AppActionButton";
import { faFlag } from "@fortawesome/pro-light-svg-icons";

export default {
  title: "AppActionButton",
  component: AppActionButton,
} as Meta<typeof AppActionButton>;

const Template: StoryFn<typeof AppActionButton> = (args) => (
  <AppActionButton {...args} />
);

export const ActionButton = Template.bind({});
ActionButton.args = {
  actionsList: [
    {
      label: "Item 1",
      icon: faFlag,
      onCustomClick: () => {
        console.log("item 1");
      },
    },
    {
      label: "Item 2",
      icon: faFlag,
      onCustomClick: () => {
        console.log("item 2");
      },
    },
  ],
};
export const DisabledAction = Template.bind({});
DisabledAction.args = {
  actionsList: [
    {
      label: "Item 1",
      icon: faFlag,
      onCustomClick: () => {
        console.log("item 1");
      },
      disabled: true,
    },
    {
      label: "Item 2",
      icon: faFlag,
      onCustomClick: () => {
        console.log("item 2");
      },
    },
  ],
};
export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
  actionsList: [
    {
      label: "Item 1",
      icon: faFlag,
      onCustomClick: () => {
        console.log("item 1");
      },
    },
    {
      label: "Item 2",
      icon: faFlag,
      onCustomClick: () => {
        console.log("item 2");
      },
    },
  ],
};
