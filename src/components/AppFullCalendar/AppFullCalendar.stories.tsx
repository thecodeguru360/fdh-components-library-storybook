import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import { useForm, FormProvider } from "react-hook-form";
import AppFullCalendar from "./AppFullCalendar";

export default {
  title: "AppAppFullCalendar",
  component: AppFullCalendar,
} as Meta<typeof AppFullCalendar>;

const Template10: StoryFn = () => {
  const methods = useForm();
  return (
    <FormProvider {...methods}>
      <form>
        <AppFullCalendar />
      </form>
    </FormProvider>
  );
};

export const AppFullCalendar1 = Template10.bind({});
