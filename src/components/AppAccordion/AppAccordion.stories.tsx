import { Meta, StoryFn } from "@storybook/react";
import AppAccordion from "./AppAccordion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleArrowLeft } from "@fortawesome/pro-solid-svg-icons";

export default {
  title: "AppAccordion",
  component: AppAccordion,
} as Meta<typeof AppAccordion>;

const Template: StoryFn<typeof AppAccordion> = (args) => (
  <AppAccordion {...args}>
    <p>
      Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium
      doloremque laudantium.
    </p>
  </AppAccordion>
);

export const Simple = Template.bind({});
Simple.args = {
  title: "Simple Accordion",
  variant: "simple",
  openDefault: true,
};

export const Block = Template.bind({});
Block.args = {
  title: "Block Accordion",
  variant: "block",
  bgColor: "#F4F7FD",
  openDefault: false,
};
