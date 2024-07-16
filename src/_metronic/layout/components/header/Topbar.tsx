import { FC } from "react";
import clsx from "clsx";
import { KTIcon, ProfileMenuProps, toAbsoluteUrl } from "../../../helpers";
import {
  HeaderNotificationsMenu,
  HeaderUserMenu,
  QuickLinks,
  Search,
  ThemeModeSwitcher,
} from "../../../partials";
import {
  faCircleUser,
  faUserGroup,
  faUsersRectangle,
  faMemoCircleInfo,
  faUserHeadset,
} from "@fortawesome/pro-light-svg-icons";

export const toolbarButtonMarginClass = "ms-1 ms-lg-3",
  toolbarButtonHeightClass =
    "btn-active-light-primary btn-custom w-30px h-30px w-md-40px h-md-40p",
  toolbarUserAvatarHeightClass = "symbol-30px symbol-md-40px",
  toolbarButtonIconSizeClass = "fs-1";

export interface TopbarProps {
  loginComponent: React.ReactNode;
}

export const Topbar: FC<TopbarProps & ProfileMenuProps> = ({
  loginComponent,
  profileMenuAppTitle,
  profileMenuAboutPath,
  profileMenuItems,
  handleLogoutClick,
}) => {
  return (
    <div
      className="d-flex align-items-stretch flex-shrink-0"
      style={{ backgroundColor: "#004E6A" }}
    >
      <div className="topbar d-flex align-items-stretch flex-shrink-0">
        {/* CHAT */}
        <div
          className={clsx(
            "d-flex align-items-center",
            toolbarButtonMarginClass
          )}
          id="kt_header_user_menu_toggle"
        >
          {/* begin::Menu wrapper */}

          <div
            className={clsx(
              "cursor-pointer symbol",
              toolbarUserAvatarHeightClass
            )}
            data-kt-menu-trigger="click"
            data-kt-menu-attach="parent"
            data-kt-menu-placement="bottom"
            data-kt-menu-flip="bottom"
          >
            {loginComponent}
          </div>
          <HeaderUserMenu
            profileMenuAppTitle={profileMenuAppTitle}
            profileMenuAboutPath={profileMenuAboutPath}
            profileMenuItems={profileMenuItems}
            handleLogoutClick={handleLogoutClick}
          />
          {/* end::Menu wrapper */}
        </div>

        {/* begin::User */}
        {/* <div
          className={clsx(
            "d-flex align-items-center",
            toolbarButtonMarginClass
          )}
          id="kt_header_user_menu_toggle"
        > */}
        {/* begin::Toggle */}
        {/* <div
            className={clsx(
              "cursor-pointer symbol",
              toolbarUserAvatarHeightClass
            )}
            data-kt-menu-trigger="click"
            data-kt-menu-attach="parent"
            data-kt-menu-placement="bottom-end"
            data-kt-menu-flip="bottom"
          >
            <img
              className="h-30px w-30px rounded"
              src={toAbsoluteUrl("media/avatars/300-2.jpg")}
              alt="metronic"
            />
          </div>
          <HeaderUserMenu /> */}
        {/* end::Toggle */}
        {/* </div> */}
        {/* end::User */}
      </div>
    </div>
  );
};

export default { Topbar };
