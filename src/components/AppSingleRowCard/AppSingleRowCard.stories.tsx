import { Meta, StoryFn } from "@storybook/react";
import AppSingleRowCard from "./AppSingleRowCard";
import { faFlag, faPerson } from "@fortawesome/pro-light-svg-icons";

export default {
  title: "AppSingleRowCard",
  component: AppSingleRowCard,
} as Meta<typeof AppSingleRowCard>;

const Template: StoryFn<typeof AppSingleRowCard> = (args) => (
  <AppSingleRowCard {...args} />
);

export const SingleRowCard = Template.bind({});
SingleRowCard.args = {
  columns: [
    { label: "column one", icon: faFlag },
    { label: "column two" },
    { label: "column three" },
  ],
  actionsList: [
    {
      label: "Action 1",
      onCustomClick: () => {},
    },
    {
      label: "Action 2",
      onCustomClick: () => {},
    },
  ],
};
export const DisabledCard = Template.bind({});
DisabledCard.args = {
  columns: [
    { label: "column one" },
    { label: "column two" },
    { label: "column three" },
  ],
  actionsList: [],
  disabled: true,
};
