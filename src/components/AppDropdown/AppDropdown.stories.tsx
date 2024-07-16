import { Meta, StoryFn } from "@storybook/react";
import AppDropdown, { LinkItem } from "./AppDropdown";

export default {
  title: "AppDropdown",
  component: AppDropdown,
} as Meta<typeof AppDropdown>;

const Template: StoryFn<typeof AppDropdown> = (args) => (
  <div className="row">
    <div className="col-6 ">
      <AppDropdown {...args} />
    </div>
    <div className="col-6">
      <AppDropdown variant="primary" title="Dropdown Button2" links={links2} />
    </div>
  </div>
);

const links = [
  {
    label: "Link A",
    externalLink: "#",
    commandName: "LinkA",
  },
  {
    label: "Link B",
    externalLink: "#",
    commandName: "LinkB",
  },
  {
    label: "Link C",
    externalLink: "#",
    commandName: "LinkC",
  },
];

const links2 = [
  {
    label: "Link D",
    externalLink: "#",
    commandName: "LinkA",
  },
  {
    label: "Link E",
    externalLink: "#",
    commandName: "LinkB",
  },
  {
    label: "Link F",
    externalLink: "#",
    commandName: "LinkC",
  },
];

const handleCustomChange = (
  link: LinkItem,
  event: React.MouseEvent<HTMLButtonElement>
) => {
  // Handle the custom change event based on the commandName
  alert(link.commandName);

  console.log(`Custom change event for commandName: ${link.commandName}`);
};

export const Primary = Template.bind({});
Primary.args = {
  variant: "primary",
  title: "Dropdown Button",
  links: links,
  // onCustomChange: handleCustomChange,
};

export const Secondary = Template.bind({});
Secondary.args = {
  variant: "tertiary-sm",
  title: "Dropdown Button",
  links: links,
};

export const PrimaryLarge = Template.bind({});
PrimaryLarge.args = {
  variant: "primary-lg",
  title: "Dropdown Button",
  links: links,
};

export const PrimarySmall = Template.bind({});
PrimarySmall.args = {
  variant: "primary-sm",
  title: "Dropdown Button",
  links: links,
};
