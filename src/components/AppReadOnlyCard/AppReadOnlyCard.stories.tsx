import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import type { AppReadOnlyCardProps } from "./AppReadOnlyCard";
import { useForm, FormProvider } from "react-hook-form";
import AppReadOnlyCard from "./AppReadOnlyCard";
import { SelectOption } from "../AppSelect";
import { AppRadioButton, AppRadioButtonProps } from "../AppRadioButton";
import { AppLabel } from "../AppLabel";
import { AppTextArea } from "../AppTextArea";

export default {
  title: "AppReadOnlyCard",
  component: AppReadOnlyCard,
} as Meta<typeof AppReadOnlyCard>;

const Template10: StoryFn<AppReadOnlyCardProps> = (args) => {
  return <AppReadOnlyCard {...args} />;
};
export const AppReadOnlyCard1 = Template10.bind({});

AppReadOnlyCard1.args = {
  itemLabel: "item Label",
  itemSubLabel: "Lorem ipsum",
  itemResult: "Out of Compliance",
  itemDescription:
    "Lorem ipsum dolor sit amet consectetur. Ultrices sed imperdiet viverra quis facilisis porttitor.",
  extraContent: <span>this is placeholder for extra content</span>,
  needBorder: true,
};
