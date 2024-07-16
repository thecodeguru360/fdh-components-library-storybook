import clsx from "clsx";
import { useState } from "react";
import {
  HorizontalMenuPorps,
  KTIcon,
  reInitDrawerComponent,
} from "../../../helpers";
import { CreateAppModal } from "../../../partials";
import { useLayout } from "../../core";
import { DefaultTitle } from "../header/page-title/DefaultTitle";
import { MenuInner } from "../header/MenuInner";
import { FontAwesomeIcons } from "../../../../components/FontAwesomeIcons";
import { faHome, faBars } from "@fortawesome/pro-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Toolbar1: React.FC<HorizontalMenuPorps> = ({
  menuTitle,
  horizontalMenuItems,
}) => {
  const { classes } = useLayout();
  const [showCreateAppModal, setShowCreateAppModal] = useState<boolean>(false);
  reInitDrawerComponent();

  const menuItems = [
    {
      title: "Entities",
      url: "/about",
      // menuIcon: <FontAwesomeIcons iconName={faBriefcase}></FontAwesomeIcons>,
    },
    {
      title: "Permits",
      url: "/about",
      // menuIcon: <FontAwesomeIcons iconName={faAddressCard}></FontAwesomeIcons>,
    },
    {
      title: "Compliants",
      url: "/about",
      // menuIcon: (
      //   <FontAwesomeIcons iconName={faExclamationCircle}></FontAwesomeIcons>
      // ),
    },
    {
      title: "Contacts",
      url: "/about",
      // menuIcon: <FontAwesomeIcons iconName={faUsers}></FontAwesomeIcons>,
    },
    {
      title: "Scheduling",
      url: "/about",
      // menuIcon: <FontAwesomeIcons iconName={faCalendar}></FontAwesomeIcons>,
    },
    {
      title: "Billing",
      url: "/about",
      // menuIcon: <FontAwesomeIcons iconName={faCalendar}></FontAwesomeIcons>,
    },
  ];

  return (
    <>
      <div className="toolbar toolbar__bottomshadow py-4" id="kt_toolbar">
        {/* begin::Container */}
        <div
          id="kt_toolbar_container"
          className={clsx(
            classes.toolbarContainer.join(" "),
            "container-fluid-header d-flex flex-stack"
          )}
        >
          <div className="d-flex flex-column">
            <a className="lib_menu__homeicon" href="/">
              <div className="d-flex flex-row flex-column-fluid">
                <div className="d-flex flex-row-fluid flex-center me-3 me-md-3">
                  <FontAwesomeIcon size="lg" icon={faHome}></FontAwesomeIcon>
                </div>

                <div className="d-flex flex-row-fluid flex-center">
                  <span className="lib_menu__menu-Title">{menuTitle}</span>
                </div>
              </div>
            </a>
          </div>

          {/* begin::Actions */}
          <div className="d-flex align-items-center">
            <div className="d-flex align-items-stretch" id="kt_header_nav">
              <div
                id="kt_header_menu"
                className="d-flex align-items-stretch"
                data-kt-drawer="true"
                data-kt-drawer-name="header-menu"
                data-kt-drawer-activate="{default: true, lg: false}"
                data-kt-drawer-overlay="true"
                data-kt-drawer-width="{default:'200px', '300px': '250px'}"
                data-kt-drawer-direction="end"
                data-kt-drawer-toggle="#kt_header_menu_mobile_toggle"
                data-kt-swapper="true"
                data-kt-swapper-mode="prepend"
                data-kt-swapper-parent="{default: '#kt_body', lg: '#kt_header_nav'}"
              >
                <div
                  className="menu menu-lg-rounded menu-column menu-lg-row menu-arrow-gray-500 my-5 my-lg-0 align-items-stretch menu-gap20 menu_horizontal"
                  id="#kt_header_menu"
                  data-kt-menu="true"
                >
                  <MenuInner horizontalMenuItems={horizontalMenuItems} />
                </div>
              </div>
            </div>
            <div
              className="d-flex topbar align-items-center d-lg-none ms-n2 me-3"
              title="Show aside menu"
            >
              <div
                className="btn btn-icon btn-active-light-primary btn-custom w-30px h-30px w-md-40px h-md-40px"
                id="kt_header_menu_mobile_toggle"
              >
                <FontAwesomeIcons
                  iconName={faBars}
                  iconSize="lg"
                ></FontAwesomeIcons>
              </div>
            </div>
          </div>

          {/* end::Actions */}
        </div>
        {/* end::Container */}
      </div>
      <CreateAppModal
        show={showCreateAppModal}
        handleClose={() => setShowCreateAppModal(false)}
      />
    </>
  );
};

export { Toolbar1 };
