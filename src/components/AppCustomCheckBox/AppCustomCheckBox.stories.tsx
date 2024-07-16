import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import type { AppCustomCheckBoxProps } from "./AppCustomCheckBox";
import { useForm, FormProvider } from "react-hook-form";
import AppCustomCheckBox from "./AppCustomCheckBox";
import { AppLabel } from "../AppLabel";
import { AppTextArea } from "../AppTextArea";
import { AppCheckBox } from "../AppCheckBox";

export default {
  title: "AppCustomCheckBox",
  component: AppCustomCheckBox,
} as Meta<typeof AppCustomCheckBox>;

const Template10: StoryFn<AppCustomCheckBoxProps> = (args) => {
  const methods = useForm();
  return (
    <FormProvider {...methods}>
      <form>
        <AppCustomCheckBox {...args} />
      </form>
    </FormProvider>
  );
};

export const AppCustomCheckBox1 = Template10.bind({});
AppCustomCheckBox1.args = {
  name: "text",
  label: "Procedure Surfaces",
  required: true,
  disabled: false,
  bgColor: "#FCFDFF",
  bodyContent: true && (
    <>
      <div className="d-flex">
        <AppCheckBox
          id={"predefinedComments3"}
          name={"predefinedComments3"}
          label={"Predefined Comments"}
          disabled
        ></AppCheckBox>

        <AppCheckBox
          id={"customComments2"}
          name={"customComments2"}
          label={"Custom Comments"}
        ></AppCheckBox>
      </div>
      <div className="form-group">
        <AppLabel label={"Comments"} required />
        <AppTextArea name={"textarea1"} rows={4} />
      </div>
    </>
  ),
};
