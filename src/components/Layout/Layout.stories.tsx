import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import Layout from "./Layout";

export default {
  title: "Layout",
  component: Layout,
} as Meta<typeof Layout>;

const Template: StoryFn<typeof Layout> = (args) => <Layout {...args} />;

export const PrimaryLayout = Template.bind({});
PrimaryLayout.args = {
  title: "Application Title",
  menuItems: [
    {
      label: "Item 1",
      link: "#",
    },
    {
      label: "Item 2",
      subItems: [
        { label: "Sub Item 1", link: "#" },
        { label: "Sub Item 2", link: "#" },
      ],
    },
    {
      label: "Item 3",
      subItems: [{ label: "Sub Item 1", link: "#" }],
    },
  ],
};

export const SecondaryLayout = Template.bind({});
SecondaryLayout.args = {
  title: "Application Without Menu",
  hasNavigation: false,
};
