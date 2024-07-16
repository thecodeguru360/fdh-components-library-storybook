import React from "react";
import { Meta, StoryFn } from "@storybook/react";

import { FormProvider, useForm, useFormContext } from "react-hook-form";
import AppMultiSelect, { AppMultiSelectProps } from "./AppMultiSelect";
import { SelectOption } from "../AppSelect";

export default {
  title: "AppMultiSelect",
  component: AppMultiSelect,
} as Meta<typeof AppMultiSelect>;

const Template: StoryFn<AppMultiSelectProps> = (args) => {
  const methods = useForm();
 
  return (
    <FormProvider {...methods}>
      <form>
        <AppMultiSelect {...args} />
      </form>
    </FormProvider>
  );
};
const multiSelectOptions : SelectOption[] = [
  { value: 'option1', label: 'Option 1' },
  { value: 'option2', label: 'Option 2' },
  { value: 'option3', label: 'Option 3' },
  // ... more options
];

const handleCustomChange = (selectedOptions : any) => {
  console.log('Selected option:', selectedOptions);
  // Additional actions can be performed here
};

const handleOnBlur = () => {
console.log(" Lost Focus");
}
export const MultiSelect = Template.bind({});

MultiSelect.args = {
  name: "MultiSelect1",
  options: multiSelectOptions,
  onBlur :handleOnBlur
};


