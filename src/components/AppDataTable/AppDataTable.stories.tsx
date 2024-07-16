import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import AppDataTable, { AppDataTableProps } from "./AppDataTable";
import TableActions from "../AppDataTableActions/AppDataTableActions";
import { useNavigate } from "react-router-dom";
import AppButton from "../AppButton/AppButton";

export default {
  title: "AppDataTable",
  component: AppDataTable,
} as Meta<typeof AppDataTable>;

const Template: StoryFn<AppDataTableProps> = (args) => (
  <AppDataTable {...args} />
);

const handleActions = (data: any, type: any) => {
  switch (type) {
    default:
      return;
  }
};

const tableHeaderActions = (
  <>
    <AppButton variant={"tertiary-sm"} text={"Action Button"}></AppButton>
    <AppButton variant={"tertiary-sm"} text={"Action Button2"}></AppButton>
  </>
);

const tableActions = (row: any) => {
  return ["edit", "view", "print"];
};
export const BasicDataTable = Template.bind({});
BasicDataTable.args = {
  data: [
    {
      Name: "Naresh",
      Email: "test@test.com",
      Status: "Active",
    },
    {
      Name: "Masood",
      Email: "test@test.com",
      Status: "Active",
    },
    {
      Name: "Deepak",
      Email: "test@test.com",
      Status: "Active",
    },
    {
      Name: "Naresh",
      Email: "test@test.com",
      Status: "Active",
    },
    {
      Name: "Masood",
      Email: "test@test.com",
      Status: "Active",
    },
    {
      Name: "Deepak",
      Email: "test@test.com",
      Status: "Active",
    },
    {
      Name: "Naresh",
      Email: "test@test.com",
      Status: "Active",
    },
    {
      Name: "Masood",
      Email: "test@test.com",
      Status: "Active",
    },
    {
      Name: "Deepak",
      Email: "test@test.com",
      Status: "Active",
    },
    {
      Name: "Naresh",
      Email: "test@test.com",
      Status: "Active",
    },
    {
      Name: "Masood",
      Email: "test@test.com",
      Status: "Active",
    },
    {
      Name: "Deepak",
      Email: "test@test.com",
      Status: "Active",
    },
    {
      Name: "Naresh",
      Email: "test@test.com",
      Status: "Active",
    },
    {
      Name: "Masood",
      Email: "test@test.com",
      Status: "Active",
    },
    {
      Name: "Deepak",
      Email: "test@test.com",
      Status: "Active",
    },
    {
      Name: "Naresh",
      Email: "test@test.com",
      Status: "Active",
    },
    {
      Name: "Masood",
      Email: "test@test.com",
      Status: "Active",
    },
    {
      Name: "Deepak",
      Email: "test@test.com",
      Status: "Active",
    },
    {
      Name: "Naresh",
      Email: "test@test.com",
      Status: "Active",
    },
    {
      Name: "Masood",
      Email: "test@test.com",
      Status: "Active",
    },
    {
      Name: "Deepak",
      Email: "test@test.com",
      Status: "Active",
    },
    {
      Name: "Naresh",
      Email: "test@test.com",
      Status: "Active",
    },
    {
      Name: "Masood",
      Email: "test@test.com",
      Status: "Active",
    },
    {
      Name: "Deepak",
      Email: "test@test.com",
      Status: "Active",
    },
    {
      Name: "Naresh",
      Email: "test@test.com",
      Status: "Active",
    },
    {
      Name: "Masood",
      Email: "test@test.com",
      Status: "Active",
    },
    {
      Name: "Deepak",
      Email: "test@test.com",
      Status: "Active",
    },
    {
      Name: "Naresh",
      Email: "test@test.com",
      Status: "Active",
    },
    {
      Name: "Masood",
      Email: "test@test.com",
      Status: "Active",
    },
    {
      Name: "Deepak",
      Email: "test@test.com",
      Status: "Active",
    },
    {
      Name: "Naresh",
      Email: "test@test.com",
      Status: "Active",
    },
    {
      Name: "Masood",
      Email: "test@test.com",
      Status: "Active",
    },
    {
      Name: "Deepak",
      Email: "test@test.com",
      Status: "Active",
    },
    {
      Name: "Naresh",
      Email: "test@test.com",
      Status: "Active",
    },
    {
      Name: "Masood",
      Email: "test@test.com",
      Status: "Active",
    },
    {
      Name: "Deepak",
      Email: "test@test.com",
      Status: "Active",
    },
    {
      Name: "Naresh",
      Email: "test@test.com",
      Status: "Active",
    },
    {
      Name: "Masood",
      Email: "test@test.com",
      Status: "Active",
    },
    {
      Name: "Deepak",
      Email: "test@test.com",
      Status: "Active",
    },
    {
      Name: "Naresh",
      Email: "test@test.com",
      Status: "Active",
    },
    {
      Name: "Masood",
      Email: "test@test.com",
      Status: "Active",
    },
    {
      Name: "Deepak",
      Email: "test@test.com",
      Status: "Active",
    },
    {
      Name: "Naresh",
      Email: "test@test.com",
      Status: "Active",
    },
    {
      Name: "Masood",
      Email: "test@test.com",
      Status: "Active",
    },
    {
      Name: "Deepak",
      Email: "test@test.com",
      Status: "Active",
    },
    {
      Name: "Naresh",
      Email: "test@test.com",
      Status: "Active",
    },
    {
      Name: "Masood",
      Email: "test@test.com",
      Status: "Active",
    },
    {
      Name: "Deepak",
      Email: "test@test.com",
      Status: "Active",
    },
    {
      Name: "Naresh",
      Email: "test@test.com",
      Status: "Active",
    },
    {
      Name: "Masood",
      Email: "test@test.com",
      Status: "Active",
    },
    {
      Name: "Deepak",
      Email: "test@test.com",
      Status: "Active",
    },
    {
      Name: "Naresh",
      Email: "test@test.com",
      Status: "Active",
    },
    {
      Name: "Masood",
      Email: "test@test.com",
      Status: "Active",
    },
    {
      Name: "Deepak",
      Email: "test@test.com",
      Status: "Active",
    },
    {
      Name: "Naresh",
      Email: "test@test.com",
      Status: "Active",
    },
    {
      Name: "Masood",
      Email: "test@test.com",
      Status: "Active",
    },
    {
      Name: "Deepak",
      Email: "test@test.com",
      Status: "Active",
    },
    {
      Name: "Naresh",
      Email: "test@test.com",
      Status: "Active",
    },
    {
      Name: "Masood",
      Email: "test@test.com",
      Status: "Active",
    },
    {
      Name: "Deepak",
      Email: "test@test.com",
      Status: "Active",
    },
    {
      Name: "Naresh",
      Email: "test@test.com",
      Status: "Active",
    },
    {
      Name: "Masood",
      Email: "test@test.com",
      Status: "Active",
    },
    {
      Name: "Deepak",
      Email: "test@test.com",
      Status: "Active",
    },
    {
      Name: "Naresh",
      Email: "test@test.com",
      Status: "Active",
    },
    {
      Name: "Masood",
      Email: "test@test.com",
      Status: "Active",
    },
    {
      Name: "Deepak",
      Email: "test@test.com",
      Status: "Active",
    },
    {
      Name: "Naresh",
      Email: "test@test.com",
      Status: "Active",
    },
    {
      Name: "Masood",
      Email: "test@test.com",
      Status: "Active",
    },
    {
      Name: "Deepak",
      Email: "test@test.com",
      Status: "Active",
    },
    {
      Name: "Naresh",
      Email: "test@test.com",
      Status: "Active",
    },
    {
      Name: "Masood",
      Email: "test@test.com",
      Status: "Active",
    },
    {
      Name: "Deepak",
      Email: "test@test.com",
      Status: "Active",
    },
    {
      Name: "Naresh",
      Email: "test@test.com",
      Status: "Active",
    },
    {
      Name: "Masood",
      Email: "test@test.com",
      Status: "Active",
    },
    {
      Name: "Deepak",
      Email: "test@test.com",
      Status: "Active",
    },
    {
      Name: "Naresh",
      Email: "test@test.com",
      Status: "Active",
    },
    {
      Name: "Masood",
      Email: "test@test.com",
      Status: "Active",
    },
    {
      Name: "Deepak",
      Email: "test@test.com",
      Status: "Active",
    },
    {
      Name: "Naresh",
      Email: "test@test.com",
      Status: "Active",
    },
    {
      Name: "Masood",
      Email: "test@test.com",
      Status: "Active",
    },
    {
      Name: "Deepak",
      Email: "test@test.com",
      Status: "Active",
    },
    {
      Name: "Naresh",
      Email: "test@test.com",
      Status: "Active",
    },
    {
      Name: "Masood",
      Email: "test@test.com",
      Status: "Active",
    },
    {
      Name: "Deepak",
      Email: "test@test.com",
      Status: "Active",
    },
    {
      Name: "Naresh",
      Email: "test@test.com",
      Status: "Active",
    },
    {
      Name: "Masood",
      Email: "test@test.com",
      Status: "Active",
    },
    {
      Name: "Deepak",
      Email: "test@test.com",
      Status: "Active",
    },
    {
      Name: "Naresh",
      Email: "test@test.com",
      Status: "Active",
    },
    {
      Name: "Masood",
      Email: "test@test.com",
      Status: "Active",
    },
    {
      Name: "Deepak",
      Email: "test@test.com",
      Status: "Active",
    },
    {
      Name: "Naresh",
      Email: "test@test.com",
      Status: "Active",
    },
    {
      Name: "Masood",
      Email: "test@test.com",
      Status: "Active",
    },
    {
      Name: "Deepak",
      Email: "test@test.com",
      Status: "Active",
    },
    {
      Name: "Naresh",
      Email: "test@test.com",
      Status: "Active",
    },
    {
      Name: "Masood",
      Email: "test@test.com",
      Status: "Active",
    },
    {
      Name: "Deepak",
      Email: "test@test.com",
      Status: "Active",
    },
    {
      Name: "Naresh",
      Email: "test@test.com",
      Status: "Active",
    },
    {
      Name: "Masood",
      Email: "test@test.com",
      Status: "Active",
    },
    {
      Name: "Deepak",
      Email: "test@test.com",
      Status: "Active",
    },
    {
      Name: "Naresh",
      Email: "test@test.com",
      Status: "Active",
    },
    {
      Name: "Masood",
      Email: "test@test.com",
      Status: "Active",
    },
    {
      Name: "Deepak",
      Email: "test@test.com",
      Status: "Active",
    },
    {
      Name: "Naresh",
      Email: "test@test.com",
      Status: "Active",
    },
    {
      Name: "Masood",
      Email: "test@test.com",
      Status: "Active",
    },
    {
      Name: "Deepak",
      Email: "test@test.com",
      Status: "Active",
    },
    {
      Name: "Naresh",
      Email: "test@test.com",
      Status: "Active",
    },
    {
      Name: "Masood",
      Email: "test@test.com",
      Status: "Active",
    },
    {
      Name: "Deepak",
      Email: "test@test.com",
      Status: "Active",
    },
  ],
  columns: [
    {
      name: "Name",
      selector: (row: any) => row.Name,
      sortable: true,
    },
    {
      name: "Email",
      selector: (row: any) => row.Email,
      sortable: true,
    },
    {
      name: "Status",
      selector: (row: any) => row.Status,
      sortable: true,
    },
    {
      name: "Actions",
      cell: (row: any) => (
        <>
          <TableActions
            actions={tableActions(row)} // actions={["edit", "view", "print"]}
            actionData={row}
            actionCallback={(data: any, type: string) =>
              handleActions(data, type)
            }
          />
        </>
      ),
    },
  ],
  filtersData: [
    {
      type: "SELECT",
      label: "Region",
      title: "Select Region",
      key: "region",
      values: [],
    },
    {
      type: "SELECT",
      label: "F.Y",
      title: "Select Fiscal Year",
      key: "fiscalYear",
      values: [],
    },
    {
      type: "SELECT",
      label: "Quarter",
      title: "Select Quarter",
      key: "reportingQuarter",
      values: [],
    },
    {
      type: "SELECT",
      label: "Status",
      title: "Select Status",
      key: "status",
      values: [],
    },
    {
      type: "SELECT",
      label: "Status",
      title: "Select Status",
      key: "status",
      values: [],
    },
    {
      type: "SELECT",
      label: "Status",
      title: "Select Status",
      key: "status",
      values: [],
    },
    {
      type: "SELECT",
      label: "Status",
      title: "Select Status",
      key: "status",
      values: [],
    },
    {
      type: "SELECT",
      label: "Status",
      title: "Select Status",
      key: "status",
      values: [],
    },
    {
      type: "SELECT",
      label: "Status",
      title: "Select Status",
      key: "status",
      values: [],
    },
    {
      type: "SELECT",
      label: "Status",
      title: "Select Status",
      key: "status",
      values: [],
    },
  ],
  pagination: true,
  search: true,
  tableHeading: "DataTable",
  filter: true,
  tableHeaderActions: tableHeaderActions,
};
