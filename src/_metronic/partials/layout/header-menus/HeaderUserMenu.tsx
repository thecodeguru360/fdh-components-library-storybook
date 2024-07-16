import { FC } from "react";
import { AsideMenuItemWithSub } from "../../../layout/components/aside/AsideMenuItemWithSub";
import { AsideMenuItem } from "../../../layout/components/aside/AsideMenuItem";
import { Button } from "react-bootstrap";
import { faCircleQuestion } from "@fortawesome/pro-light-svg-icons";
import { ProfileMenuProps } from "../../../helpers";

export const HeaderUserMenu: FC<ProfileMenuProps> = ({
  profileMenuAppTitle,
  profileMenuAboutPath = "/about",
  handleLogoutClick,
  profileMenuItems,
}) => {
  const aboutTitle = `About ${profileMenuAppTitle}`;
  return (
    <div
      className="menu menu-sub menu-sub-dropdown menu-column menu-rounded fw-semibold py-4 fs-6 w-275px user-menu-dropdown"
      data-kt-menu="true"
    >
      {profileMenuItems?.map((menuItems, outerIndex) => (
        <div key={outerIndex}>
          <AsideMenuItemWithSub to="" title={menuItems.menuTitle}>
            {menuItems.subMenus &&
              menuItems.subMenus.map((subMenuItem, subIndex) => (
                <AsideMenuItem
                  key={subIndex}
                  to={subMenuItem.url}
                  title={subMenuItem.subMenuTitle}
                  faIcon={subMenuItem.subMenuIcon}
                />
              ))}
          </AsideMenuItemWithSub>
          <div className="separator my-2"></div>
        </div>
      ))}
      <AsideMenuItem
        to={profileMenuAboutPath}
        title={aboutTitle}
        faIcon={faCircleQuestion}
      />
      <div className="py-2 text-center">
        <Button onClick={() => handleLogoutClick()} className="logout-btn">
          Log Out
        </Button>
      </div>
    </div>
  );
};

export default { HeaderUserMenu };
