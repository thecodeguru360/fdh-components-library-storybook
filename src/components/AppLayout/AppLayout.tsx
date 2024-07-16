import React, { ReactNode, Suspense } from "react";
// import Logo from "../../assets/img/flh";
import UnAuthorized from "./UnAuthorized";
import AppHorizontalMenu, {
  HorizontalMenuItem,
} from "../AppHorizontalMenu/AppHorizontalMenu";
import PageLoadingModal from "./PageLoadingModal/PageLoadingModal";
import {
  LayoutProvider,
  LayoutSplashScreen,
  PageDataProvider,
  useLayout,
} from "../../_metronic/layout/core";
import "./AppLayout.scss";
import "../../_metronic/assets/sass/style.react.scss";
import "../../_metronic/assets/sass/style.scss";
import { MasterLayout } from "../../_metronic/layout/MasterLayout";
import { HashRouter as Router } from "react-router-dom";
import { MasterInit } from "../../_metronic/layout/MasterInit";
import { I18nProvider } from "../../_metronic/i18n/i18nProvider";
import { ThemeModeProvider } from "../../_metronic/partials/layout/theme-mode/ThemeModeProvider";
import MainWrapper from "./MainWrapper";
import { AppRoutes } from "../../app/routing/AppRoutes";
import { ProfileMenuProps, WithChildren } from "../../_metronic/helpers";

export const AppLayout: React.FC<WithChildren & ProfileMenuProps> = ({
  title,
  children,
  loginComponent,
  isAuthenticated,
  signinComponent,
  userStatus,
  horizontalMenuItems,
  menuTitle,
  urlForMenuTitle,
  profileMenuAppTitle,
  profileMenuAboutPath,
  profileMenuItems,
  handleLogoutClick,
  sessionTimeoutInMinutes,
  apiServiceStatus,
}) => {
  // const { config, classes, attributes } = useLayout();
  // const { header, aside } = config;
  // const { BASE_URL } = import.meta.env;

  return (
    <>
      <Router>
        <Suspense fallback={<LayoutSplashScreen />}>
          <I18nProvider>
            <LayoutProvider>
              <ThemeModeProvider>
                <MasterInit />
                <MasterLayout
                  title={title}
                  loginComponent={loginComponent}
                  urlForMenuTitle={urlForMenuTitle}
                  horizontalMenuItems={horizontalMenuItems}
                  isAuthenticated={isAuthenticated}
                  signinComponent={signinComponent}
                  userStatus={userStatus}
                  menuTitle={menuTitle}
                  children={children}
                  profileMenuAppTitle={profileMenuAppTitle}
                  profileMenuAboutPath={profileMenuAboutPath}
                  profileMenuItems={profileMenuItems}
                  handleLogoutClick={handleLogoutClick}
                  sessionTimeoutInMinutes={sessionTimeoutInMinutes}
                  apiServiceStatus={apiServiceStatus}
                />
              </ThemeModeProvider>
            </LayoutProvider>
          </I18nProvider>
        </Suspense>
      </Router>
    </>
  );
};

export default AppLayout;
