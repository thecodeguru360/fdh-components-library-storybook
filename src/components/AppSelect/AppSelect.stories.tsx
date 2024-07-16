import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import AppSelect, { SelectOption, SelectProps } from "./AppSelect";
import { FormProvider, useForm, useFormContext } from "react-hook-form";

export default {
  title: "AppSelect",
  component: AppSelect,
} as Meta<typeof AppSelect>;

const Template: StoryFn<SelectProps> = (args) => {
  const methods = useForm();
 
  return (
    <FormProvider {...methods}>
      <form>
        <AppSelect {...args} />
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
export const Select = Template.bind({});

Select.args = {
  name: "MultiSelect",
  options: multiSelectOptions,
  onCustomBlur :handleOnBlur
 // initialSelectedOption: 
};


