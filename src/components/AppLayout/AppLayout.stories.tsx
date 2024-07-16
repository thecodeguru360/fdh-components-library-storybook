import { Meta, StoryFn } from "@storybook/react";
import AppLayout from "./AppLayout";
import LayoutComponent from "./LayoutComponent";
import SignInComponent from "./SignInComponent";
import { FontAwesomeIcons } from "../FontAwesomeIcons";
import {
  faAddressCard,
  faBriefcase,
  faCalendar,
  faExclamationCircle,
  faUsers,
  faMoneyCheckDollar,
  faCircleUser,
  faUserGroup,
  faWrench,
  faUsersRectangle,
  faUserHeadset,
  faMemoCircleInfo,
  faFiles,
  faFileInvoice,
  faMagnifyingGlass,
  faReceipt,
  faMoneyCheckPen,
  faFileChartPie,
  faSlidersUp,
  faUserGear,
  faUpFromBracket,
  faAddressBook,
  faBallotCheck,
  faClipboardUser,
  faSlidersH,
} from "@fortawesome/pro-light-svg-icons";

export default {
  title: "AppLayout",
  component: AppLayout,
} as Meta<typeof AppLayout>;

const Template: StoryFn<typeof AppLayout> = (args) => <AppLayout {...args} />;
export const PrimaryAppLayout = Template.bind({});
const menuItems = [
  {
    title: "Records & Requests",
    url: "#",
    menuIcon: faAddressCard,
    subMenu: [
      // Records Menu
      {
        title: "Records",
        url: "#",
        menuIcon: faFiles,
        infoText: "Manage Permits, Licenses, Certifications and Facilities",
        subMenu: [
          {
            title: "All Records",
            url: "/AllRecords/0/All",
            menuIcon: faBriefcase,
          },
          {
            title: "By Program",
            menuIcon: faBriefcase,
            url: "#",
            subMenu: [
              {
                title: "Biomedical Waste",
                url: "/AllRecords/0/BMW",
              },
              {
                title: "Body Piercing ",
                url: "/AllRecords/0/BP",
              },
              {
                title: "Food Hygiene",
                url: "/AllRecords/0/FH",
              },
              {
                title: "Group Care",
                url: "/AllRecords/0/GC",
              },
              {
                title: "Limited Use Water",
                url: "/AllRecords/0/LUW",
              },
              {
                title: "Migrant Labor Camp",
                url: "/AllRecords/0/MLC",
              },
              {
                title: "Mobile Home Parks",
                url: "/AllRecords/0/MHP",
              },
              {
                title: "Tanning",
                url: "/AllRecords/0/TAN",
              },
              {
                title: "Tattooing",
                url: "/AllRecords/0/TAT",
              },
              {
                title: "Swimming Pools",
                url: "/AllRecords/0/SP",
              },
            ],
          },
          {
            title: "By Type",
            url: "#",
            menuIcon: faBriefcase,
            subMenu: [
              {
                title: "Permits",
                url: "/AllRecords/4/All",
              },
              {
                title: "Licenses",
                url: "/AllRecords/1/All",
              },
              {
                title: "Certificates",
                url: "/AllRecords/2/All",
              },
              {
                title: "Facilities",
                url: "/AllRecords/3/All",
              },
            ],
          },
          {
            title: "Start New Application",
            url: "/application/newapplication",
            menuIcon: faBriefcase,
            // infoText: "Information text display testing2",
          },
        ],
      },

      // Requests Menu
      {
        title: "Requests",
        url: "#",
        menuIcon: faFileInvoice,
        infoText: "Investigations, Complaints and Assessments",
        subMenu: [
          {
            title: "All Requests",
            url: "/request-list/0/0/0/All",
          },
          {
            title: "Investigations",
            url: "#",

            subMenu: [
              {
                title: "All Investigations",
                url: "/request-list/1/0/0/All",
              },
              {
                title: "Add New Investigation",
                url: "/rabies/CreateRabies3",
              },
            ],
          },
          {
            title: "Complaints",
            url: "#",

            subMenu: [
              {
                title: "All Compliants",
                url: "/request-list/2/0/0/All",
              },
              {
                title: "Add New Complaint",
                url: "/complaint/addNewComplaint",
              },
            ],
          },
          {
            title: "Assessments",
            url: "#",

            subMenu: [
              {
                title: "All Assessments",
                url: "/request-list/3/0/0/All",
              },
              {
                title: "Add New Assessment",
                url: "/assessment/addAssessment",
              },
            ],
          },
        ],
      },
      // Entities Menu
      {
        title: "Entities",
        url: "#",
        menuIcon: faBriefcase,
        infoText: "Individuals and Organizations",
        subMenu: [
          {
            title: "All Entities",
            url: "/AllEntities",
          },
          {
            title: "Add New Entity",
            url: "/entity/create",
          },
        ],
      },
    ],
  },
  {
    title: "Inspections",
    url: "/inspection/newinspection",
    menuIcon: faBallotCheck,
  },

  {
    title: "Billings",
    url: "#",
    menuIcon: faMoneyCheckDollar,
    subMenu: [
      {
        title: "Search",
        url: "#",
        menuIcon: faMagnifyingGlass,
        infoText: "Single or On-Demand Invoices",
      },

      {
        title: "Generate",
        url: "#",
        menuIcon: faReceipt,
        infoText: "Single or On-Demand Invoices",
        subMenu: [
          {
            title: "Single Invoice",
            url: "/?openSingleInvoiceModal=true",
          },
          {
            title: "On-Demand Invoice",
            url: "/billing/ondemand-bill",
          },
        ],
      },
      {
        title: "Manage",
        url: "#",
        menuIcon: faMoneyCheckPen,
        infoText: "Charges and Billing Schemes",
        subMenu: [
          {
            title: "Charges",
            url: "/managing/managechargelist",
          },
          {
            title: "Billing Schemes",
            url: "#",
          },
        ],
      },

      {
        title: "Batch Billing",
        url: "#",
        menuIcon: faFileInvoice,
        infoText: "Run a Batch Billing Job or View Scheduled Jobs",
        subMenu: [
          {
            title: "Run Batch Billing Job",
            url: "/billing/batchbilling/batchBillingJobs",
          },
          {
            title: "Scheduled Batch Jobs",
            url: "/billing/batchbilling/batchBillingJobs",
          },
        ],
      },

      {
        title: "Instant Reports",
        url: "#",
        menuIcon: faFileChartPie,
        infoText: "Run a Batch Billing Job or View Scheduled Jobs",
        subMenu: [
          {
            title: "Cash Drawer Report",
            url: "#",
          },
          {
            title: "Outstanding Balance Report",
            url: "#",
          },
          {
            title: "Batch Billing Pre-report",
            url: "#",
          },
        ],
      },
    ],
  },

  {
    title: "My Dashboard",
    url: "/all-contacts",
    menuIcon: faClipboardUser,
  },

  {
    title: "Admin",
    url: "#",
    menuIcon: faSlidersH,
    // subMenu: [

    //
    //   {
    //     title: "Manage Counties",
    //     url: "#",
    //     menuIcon: faSlidersUp,
    //     infoText: "County and Site Manager, Fields and Letter Set Up",
    //     subMenu: [{
    //       title: "County Manager",
    //       url: "#",
    //     },
    //     {
    //       title: "County Site Manager",
    //       url: "#",
    //     },
    //     {
    //       title: "County Fields",
    //       url: "#",
    //     },
    //     {
    //       title: "County Letter Set Up",
    //       url: "#",
    //     }

    //     ],
    //   },

    //
    //   {
    //     title: "State Admin Functions",
    //     url: "#",
    //     menuIcon: faUserGear,
    //     infoText: "Edit, Cleanup and Tools",
    //     subMenu: [{
    //       title: "Editors",
    //       url: "#",
    //       menuIcon: faBriefcase,
    //       subMenu: [
    //         {
    //           title: "Reference Codes",
    //           url: "#",
    //         },
    //         {
    //           title: "Letter Parts",
    //           url: "#",
    //         },
    //         {
    //           title: "WaterLab Editor",
    //           url: "#",
    //         },
    //         {
    //           title: "Switch to User",
    //           url: "#",
    //         },
    //         {
    //           title: "Add Announcement to MyFloridaEHPermit.com",
    //           url: "#",
    //         },
    //         {
    //           title: "State Latter Header",
    //           url: "#",
    //         },
    //         {
    //           title: "Online Billing Reconciliation",
    //           url: "#",
    //         },

    //         {
    //           title: "OSTDS Tank Approval",
    //           url: "#",
    //         },
    //       ],
    //     },
    //     {
    //       title: "Data Cleanup",
    //       url: "#",
    //       menuIcon: faBriefcase,

    //       subMenu: [
    //         {
    //           title: "Duplicate People Report",
    //           url: "#",
    //         },
    //         {
    //           title: "Delete Duplicate People",
    //           url: "#",
    //         },
    //       ]
    //     },

    //     {
    //       title: "EHD Link Editor",
    //       url: "#",
    //       menuIcon: faBriefcase,
    //     },

    //     ],
    //   },
    //   {
    //     title: "Contacts",
    //     url: "#",
    //     menuIcon: faBriefcase,
    //     infoText: "View or create EHD Contacts",
    //     subMenu: [{
    //       title: "All Contacts",
    //       url: "#",
    //     },
    //     {
    //       title: "Create Contact",
    //       url: "#",
    //     },

    //     ],
    //   },
    //   {
    //     title: "Samples Bulk Upload",
    //     url: "#",
    //     menuIcon: faBriefcase,
    //     infoText: "Import multiple files at once to the system",
    //     subMenu: [{
    //       title: "Samples",
    //       url: "#",
    //     },

    //     ],
    //   },

    // ],
  },
];

const profilemenu = [
  {
    menuTitle: "User Settings",
    subMenus: [
      {
        subMenuTitle: "Profile",
        url: "/profile",
        subMenuIcon: faCircleUser,
      },
      {
        subMenuTitle: "User List",
        url: "/userlist",
        subMenuIcon: faUserGroup,
      },
      {
        subMenuTitle: "Roles",
        url: "/roles",
        subMenuIcon: faUsersRectangle,
      },
    ],
  },
  {
    menuTitle: "Support",
    subMenus: [
      {
        subMenuTitle: "User Support",
        url: "/profile",
        subMenuIcon: faUserHeadset,
      },
      {
        subMenuTitle: "Resources",
        url: "/userlist",
        subMenuIcon: faMemoCircleInfo,
      },
    ],
  },
];

const handleLogout = () => {
  console.log("handleLogout");
};

PrimaryAppLayout.args = {
  title: "Environmental Health Database",
  loginComponent: <LayoutComponent />,
  signinComponent: <SignInComponent />,
  isAuthenticated: true,
  userStatus: "UserAuthenticated",
  horizontalMenuItems: menuItems,
  menuTitle: "EHD",
  urlForMenuTitle: "/",
  profileMenuAppTitle: "EPHD",
  profileMenuAboutPath: "/about",
  profileMenuItems: profilemenu,
  handleLogoutClick: handleLogout,
  sessionTimeoutInMinutes: 30,
  // apiServiceStatus: { responseStatus: 405, responseMessage: "API Call error." },
};
