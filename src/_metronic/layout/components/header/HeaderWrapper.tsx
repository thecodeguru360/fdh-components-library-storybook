import clsx from "clsx";
import React from "react";
import { Link } from "react-router-dom";
import { KTIcon, ProfileMenuProps, toAbsoluteUrl } from "../../../helpers";
import { useLayout } from "../../core";
import { Header } from "./Header";
import { DefaultTitle } from "./page-title/DefaultTitle";
import { Topbar } from "./Topbar";

export interface HeaderWrapperProps {
  title: string;
  loginComponent: React.ReactNode;
  urlForMenuTitle: string;
}

export function HeaderWrapper(props: HeaderWrapperProps & ProfileMenuProps) {
  const {
    title,
    urlForMenuTitle,
    loginComponent,
    profileMenuAppTitle,
    profileMenuAboutPath,
    profileMenuItems,
    handleLogoutClick,
  } = props;
  const { config, classes, attributes } = useLayout();
  const { header, aside } = config;

  return (
    <div
      id="kt_header"
      className={clsx(
        "header",
        classes.header.join(" "),
        "align-items-stretch"
      )}
      data-kt-sticky="true"
      data-kt-sticky-name="header"
      data-kt-sticky-offset="{default: '65px', lg: '100px'}"
      {...attributes.headerMenu}
    >
      <div
        className={clsx(
          classes.headerContainer.join(" "),
          "container-fluid-header d-flex align-items-center"
        )}
      >
        {/* begin::Aside mobile toggle */}
        {aside.display && (
          <div
            className="d-flex align-items-center d-lg-none ms-n3 me-1"
            title="Show aside menu"
          >
            <div
              className="btn btn-icon btn-active-light-primary btn-custom w-30px h-30px w-md-40px h-md-40px"
              id="kt_aside_mobile_toggle"
            >
              <KTIcon iconName="abstract-14" className="fs-2x mt-1" />
            </div>
          </div>
        )}
        {/* end::Aside mobile toggle */}

        {/* <div
          className="d-flex topbar align-items-center d-lg-none ms-n2 me-3"
          title="Show aside menu"
        >
          <div
            className="btn btn-icon btn-active-light-primary btn-custom w-30px h-30px w-md-40px h-md-40px"
            id="kt_header_menu_mobile_toggle"
          >
            <KTIcon iconName="abstract-14" className="fs-2x" />
          </div>
        </div> */}

        <div className="header-logo me-5 me-md-20 flex-grow-1 flex-lg-grow-0">
          <a href={urlForMenuTitle}>
            <img
              alt="Logo"
              src={toAbsoluteUrl("media/logos/Florida_Health_Logo.png")}
              className="logo-default h-57px"
            />
            <img
              alt="Logo"
              src={toAbsoluteUrl("media/logos/Florida_Health_Logo.png")}
              className="logo-sticky h-57px"
            />
          </a>
        </div>

        {/* begin::Wrapper */}
        <div className="d-flex align-items-stretch justify-content-between flex-lg-grow-1">
          {/* begin::Navbar */}
          {header.left === "menu" && (
            <div className="d-flex align-items-stretch">
              <Header title={title} />
            </div>
          )}

          {header.left === "page-title" && (
            <div className="d-flex align-items-center">
              <DefaultTitle />
            </div>
          )}
        </div>
        {/* end::Wrapper */}
      </div>
      <div
        className="d-flex flex-row flex-column-fluid"
        style={{ backgroundColor: "#004E6A", borderLeft: "1px solid #157599" }}
      >
        <div className="d-flex flex-row-auto w-275px flex-center">
          <div className="d-flex align-items-stretch flex-shrink-0 user-info">
            <Topbar
              loginComponent={loginComponent}
              profileMenuAppTitle={profileMenuAppTitle}
              profileMenuAboutPath={profileMenuAboutPath}
              profileMenuItems={profileMenuItems}
              handleLogoutClick={handleLogoutClick}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
