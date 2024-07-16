import { Meta, StoryFn } from "@storybook/react";
import AppFormProgressBar from "./AppFormProgressBar";

export default {
  title: "AppFormProgressBar",
  component: AppFormProgressBar,
} as Meta<typeof AppFormProgressBar>;

const progressSteps = [
  "First Step",
  "Second Step",
  "Third Step",
  "Fourth Step",
  "Fifth Step",
];

const Template: StoryFn<typeof AppFormProgressBar> = (args) => (
  <AppFormProgressBar {...args} />
);

export const ActiveState = Template.bind({});
ActiveState.args = {
  steps: progressSteps,
  currentStep: 2,
};

export const CompletedState = Template.bind({});
CompletedState.args = {
  steps: progressSteps,
  currentStep: 6,
};
