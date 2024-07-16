import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFlag } from "@fortawesome/pro-light-svg-icons";
import AppInputGroup from "./AppInputGroup";
import { useForm, FormProvider } from "react-hook-form";

export default {
  title: "AppInputGroup",
  component: AppInputGroup,
} as Meta<typeof AppInputGroup>;

const Template: StoryFn<typeof AppInputGroup> = (args) => {
  const methods = useForm();

  return (
    <FormProvider {...methods}>
      <form>
        <AppInputGroup {...args} />
      </form>
    </FormProvider>
  );
};

export const Basic = Template.bind({});
Basic.args = {
  placeholder: "Placeholder",
  actionText: "Action",
  name: "input-1",
};

export const Disabled = Template.bind({});
Disabled.args = {
  actionText: "Action",
  disabled: true,
};
export const WithIcon = () => {
  const methods = useForm();

  return (
    <FormProvider {...methods}>
      <div style={{ maxWidth: "400px" }}>
        <AppInputGroup
          actionText="Action"
          icon={<FontAwesomeIcon icon={faFlag} />}
          onClick={(v) => {}}
          name={"InputActionText"}
          type={"text"}
        />
      </div>
    </FormProvider>
  );
};
