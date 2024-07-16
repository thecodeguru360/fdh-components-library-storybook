import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import AppNavbar from "./AppNavbar";
import { faFlag } from "@fortawesome/pro-light-svg-icons";

export default {
  title: "AppNavbar",
  component: AppNavbar,
} as Meta<typeof AppNavbar>;

// const Template: StoryFn<typeof AppNavbar> = (args) => <AppNavbar {...args} />;

const menuItems = [
  {
    label: "Item 1",
    path: "/",
    icon: faFlag,
  },
  {
    label: "Item 2",
    icon: faFlag,
    subItems: [
      { label: "Sub Item 1", externalLink: "#" },
      { label: "Sub Item 2", externalLink: "#" },
    ],
  },
  {
    label: "Item 3",
    subItems: [{ label: "Sub Item 1", path: "/" }],
  },
];

export const HorizontalNavbar = () => (
  <AppNavbar title="Section Title" menuItems={menuItems} />
);
