import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import AppCardTabbed from "./AppCardTabbed";

export default {
  title: "AppCardTabbed",
  component: AppCardTabbed,
} as Meta<typeof AppCardTabbed>;

const Template: StoryFn<typeof AppCardTabbed> = (args) => (
  <AppCardTabbed {...args} />
);

export const BasicCardTabbed = Template.bind({});
BasicCardTabbed.args = {
  tabs: [
    "Details",
    "Inspections",
    "Billing",
    "Complaints",
    "Actions",
    "Contacts",
    "Samples",
    // "Documents",
    // "Notes",
    // "Recent Activity",
  ],
  children : [<div>first tab</div>,<div>second tab</div>,<div>Third tab</div>]
};


