import { ReactNode } from "react";
import { DrawerComponent, MenuComponent } from "../assets/ts/components";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

type WithChildren = {
  children?: ReactNode;
  title?: string;
  isAuthenticated?: React.ReactNode;
  loginComponent?: React.ReactNode;
  signinComponent?: React.ReactNode;
  userStatus?: string;
  horizontalMenuItems?: HorizontalMenuItem[];
  menuTitle?: string;
  urlForMenuTitle?: string;
  sessionTimeoutInMinutes?: number;
  sessionTimeoutWarnBeforeInSeconds?: number;
  apiServiceStatus?: any;
};

type ProfileSubMenuItem = {
  subMenuTitle: string;
  url: string;
  subMenuIcon?: IconProp;
};

type ProfileMenuItem = {
  menuTitle: string;
  subMenus: ProfileSubMenuItem[];
};

type ProfileMenuProps = {
  profileMenuAppTitle: string;
  profileMenuAboutPath: string;
  profileMenuItems?: ProfileMenuItem[];
  handleLogoutClick: Function;
};

type HorizontalMenuItem = {
  title: string;
  url: string;
  menuIcon?: IconProp;
  infoText?: string;
  subMenu?: HorizontalMenuItem[] | undefined;
};

type HorizontalMenuPorps = {
  menuTitle?: string;
  horizontalMenuItems?: HorizontalMenuItem[];
};

const reInitMenu = () => {
  setTimeout(() => {
    MenuComponent.reinitialization();
  }, 500);
};

const reInitDrawerComponent = () => {
  setTimeout(() => {
    DrawerComponent.reinitialization();
  }, 500);
};

export {
  type WithChildren,
  type ProfileMenuProps,
  type HorizontalMenuItem,
  type HorizontalMenuPorps,
  reInitMenu,
  reInitDrawerComponent,
};
