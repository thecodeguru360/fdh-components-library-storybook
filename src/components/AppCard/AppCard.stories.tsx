import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import AppCard from "./AppCard";

export default {
  title: "AppCard",
  component: AppCard,
} as Meta<typeof AppCard>;

const Template: StoryFn<typeof AppCard> = (args) => (
  <AppCard {...args}>Card Body</AppCard>
);

export const BasicCard = Template.bind({});
BasicCard.args = {
  title: "Card Title",
  topMargin: true,
  bgColor: "#F4F7FD",
};

export const CardWithTooltip = Template.bind({});
CardWithTooltip.args = {
  title: "Card Title",
  topMargin: true,
  hasTooltip: false,
  tooltipMessage: "Message",
  bgColor: "#F4F7FD",
  hasAction: true,
  actionComponent: <a href="#">Action</a>,
};
