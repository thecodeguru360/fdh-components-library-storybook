import { Meta, StoryFn } from "@storybook/react";
import AppTag from "./AppTag";
import { faFlag } from "@fortawesome/pro-light-svg-icons";

export default {
  title: "AppTag",
  component: AppTag,
} as Meta<typeof AppTag>;

const Template: StoryFn<typeof AppTag> = (args) => <AppTag {...args} />;

export const Tag = Template.bind({});
Tag.args = {
  label: "Tag One",
  variant: "blush",
};
export const Closeable = Template.bind({});
Closeable.args = {
  label: "Tag One",
  variant: "blush",
  closeable: true,
  onClose: () => {},
};
export const ContactTag = Template.bind({});
ContactTag.args = {
  label: "Contact One",
  contactTag: true,
  onClose: () => {},
};
export const ContactAvatar = Template.bind({});
ContactAvatar.args = {
  label: "Contact One",
  contactTag: true,
  avatar: "https://placehold.co/12x12?text=A",
  onClose: () => {},
};
