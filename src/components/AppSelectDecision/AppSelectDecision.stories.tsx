import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import type { AppSelectDecisionProps } from "./AppSelectDecision";
import { useForm, FormProvider } from "react-hook-form";
import AppSelectDecision from "./AppSelectDecision";
import { SelectOption } from "../AppSelect";
import { AppRadioButton, AppRadioButtonProps } from "../AppRadioButton";
import { AppLabel } from "../AppLabel";
import { AppTextArea } from "../AppTextArea";

export default {
  title: "AppSelectDecision",
  component: AppSelectDecision,
} as Meta<typeof AppSelectDecision>;

const multiSelectOptions: SelectOption[] = [
  { value: "option1", label: "In Compliance" },
  { value: "option2", label: "Out Of Compliance" },
  { value: "option3", label: "Not Applicable" },
  // ... more options
];

const Template10: StoryFn<AppSelectDecisionProps> = (args) => {
  const methods = useForm();
  return (
    <FormProvider {...methods}>
      <form>
        <AppSelectDecision {...args} />
      </form>
    </FormProvider>
  );
};

const radioOptions = [
  { value: "predefinedCommets", label: "Predefined Comments" },
  { value: "customCommets", label: "Custom Comments" },
];

// Define the onChange event handler
const handleRadioButtonChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  console.log("Selected value:", e.target.value);
};

export const AppSelectDecision1 = Template10.bind({});

AppSelectDecision1.args = {
  name: "SelectDecision",
  label: "Procedure Surfaces",
  options: multiSelectOptions,
  required: true,
  disabled: false,
  bgColor: "#FCFDFF",
  bodyContent: true && (
    <>
      <div className="d-flex">
        <AppRadioButton
          name={"predefinedComments3"}
          options={radioOptions} // label={"Predefined Comments"}
          onCustomChange={handleRadioButtonChange}
        ></AppRadioButton>
      </div>
      <div className="form-group">
        <AppLabel label={"Comments"} required />
        <AppTextArea name={"textarea1"} rows={4} />
      </div>
    </>
  ),
};
