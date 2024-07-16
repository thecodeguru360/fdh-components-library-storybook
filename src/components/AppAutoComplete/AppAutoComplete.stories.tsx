import React from "react";
import { Meta, StoryFn } from "@storybook/react";

import { FormProvider, useForm, useFormContext } from "react-hook-form";
import { SelectOption } from "../AppSelect";
import AppAutoComplete, { AppAutoCompleteProps } from "./AppAutoComplete";
import { faBuilding } from "@fortawesome/pro-regular-svg-icons";

export default {
  title: "AppAutoComplete",
  component: AppAutoComplete,
} as Meta<typeof AppAutoComplete>;

const Template: StoryFn<AppAutoCompleteProps> = (args) => {
  const methods = useForm();

  return (
    <FormProvider {...methods}>
      <form>
        <AppAutoComplete {...args} />
      </form>
    </FormProvider>
  );
};
const multiSelectOptions: SelectOption[] = [
  { value: "option1", label: "Option 1" },
  { value: "option2", label: "Option 2" },
  { value: "option3", label: "Option 3" },
  // ... more options
];

const handleCustomChange = (selectedOptions: any) => {
  console.log("Selected option:", selectedOptions);
  // Additional actions can be performed here
};

const handleOnBlur = () => {
  console.log(" Lost Focus");
};
export const appAutoComplete = Template.bind({});
const loadCompanyOptions = async (
  inputValue: string
): Promise<SelectOption[]> => {
  // Simulated data fetch - replace with actual API call
  const allCompanies = [
    { value: "optn1", label: "Sr Dev" },
    { value: "opton2", label: "Team Lead" },
    { value: "opton3", label: "Jr. Dev" },
    { value: "company1", label: "Company 1" },
    { value: "company2", label: "Company 2" },
    { value: "hr", label: "Human Resources" },
    { value: "it", label: "Information Technology" },
    { value: "marketing", label: "Marketing" },
    // ... more options
  ];

  return allCompanies.filter((company) =>
    company.label.toLowerCase().includes(inputValue.toLowerCase())
  );
};
appAutoComplete.args = {
  name: "AutoComplete",
  loadOptions: loadCompanyOptions,
  onBlur: handleOnBlur,
  showDropdownArrow: true,
  showLeftIcon: true,
};
