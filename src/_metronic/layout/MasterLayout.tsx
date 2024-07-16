import { FC, useEffect, useMemo, useState } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { Footer } from "./components/Footer";
import { HeaderWrapper } from "./components/header/HeaderWrapper";
import { ScrollTop } from "./components/ScrollTop";
import { PageDataProvider, useLayout } from "./core";
import {
  ActivityDrawer,
  DrawerMessenger,
  RightProfileDrawer,
  InviteUsers,
  RightToolbar,
  UpgradePlan,
} from "../partials";
import {
  themeModeSwitchHelper,
  useThemeMode,
} from "../partials/layout/theme-mode/ThemeModeProvider";
import { MenuComponent } from "../assets/ts/components";
import clsx from "clsx";
import { ProfileMenuProps, WithChildren } from "../helpers";
import { AsideDefault } from "./components/aside/AsideDefault";
import { Toolbar } from "./components/toolbar/Toolbar";
import { Content } from "./components/Content";
import UnAuthorized from "../../components/AppLayout/UnAuthorized";
import { AppModal } from "../../components/AppModal";
import useSessionTimeout from "../../hooks/useSessionTimeout";

export const MasterLayout: FC<WithChildren & ProfileMenuProps> = ({
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
  sessionTimeoutWarnBeforeInSeconds,
  apiServiceStatus,
}) => {
  const { classes } = useLayout();
  const { mode } = useThemeMode();
  const location = useLocation();

  useEffect(() => {
    setTimeout(() => {
      MenuComponent.reinitialization();
    }, 500);
  }, [location.key]);

  useEffect(() => {
    themeModeSwitchHelper(mode);
  }, [mode]);

  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);
  const [remainingTime, setRemainingTime] = useState<number>(0);

  const handleIdle = () => {
    setShowModal(true); //show modal
    // let warnTime = (sessionTimeoutInMinutes ?? 30) * 0.05;
    // if (Math.ceil(warnTime * 60) < 5) {
    //   warnTime = 5;
    // } else {
    //   warnTime = Math.ceil(warnTime * 60);
    // }
    setRemainingTime(sessionTimeoutWarnBeforeInSeconds ?? 90); //set 90 seconds as time remaining
  };

  //Session Timeout
  const { isIdle } = useSessionTimeout({
    onIdle: handleIdle,
    idleTime: sessionTimeoutInMinutes ?? 30,
  }); //30 minutes

  useEffect(() => {
    let interval: NodeJS.Timeout;

    if (isIdle && showModal) {
      interval = setInterval(() => {
        setRemainingTime(
          (prevRemainingTime) =>
            prevRemainingTime > 0 ? prevRemainingTime - 1 : 0 //reduces the second by 1
        );
      }, 1000);
    }

    return () => {
      clearInterval(interval);
    };
  }, [isIdle, showModal]);

  useEffect(() => {
    if (remainingTime === 0 && showModal) {
      // alert("Time out!");
      setShowModal(false);
      if (handleLogoutClick) handleLogoutClick();
      else alert("Please implement logout functionality!");
    }
  }, [remainingTime, showModal, navigate]); // this is responsible for logging user out after the timer is down to zero and they have not clicked anything

  // const formattedTime = useMemo(
  //   () => millisToMinutesAndSeconds(remainingTime * 1000),
  //   [remainingTime]
  // );

  function millisToMinutesAndSeconds(millis: number) {
    const minutes = Math.floor(millis / 60000);
    const seconds = ((millis % 60000) / 1000).toFixed(0);
    return minutes + ":" + (parseInt(seconds) < 10 ? "0" : "") + seconds;
  }
  //End:: Session Timeout

  let content = null;
  if (!isAuthenticated) {
    content = <Content>{signinComponent}</Content>;
  } else {
    if (apiServiceStatus) {
      content = (
        <Content>
          <UnAuthorized
            statusCode={apiServiceStatus.responseStatus}
            statusText="Error"
            title={apiServiceStatus.responseMessage}
            errorMessage="API call error. Please try again!"
          />
        </Content>
      );
    } else {
      switch (userStatus) {
        case "UserAuthenticated":
          content = (
            <>
              <Toolbar
                menuTitle={menuTitle}
                horizontalMenuItems={horizontalMenuItems}
              />
              <Content>{children}</Content>
            </>
          );
          break;
        case "ClaimsObjectIDFailed":
          content = (
            <Content>
              <UnAuthorized
                title="Authentication failed!"
                errorMessage="User is active, but the authentication failed on Claims Object Id."
              />
            </Content>
          );
          break;
        case "UserDisabled":
          content = (
            <Content>
              <UnAuthorized
                title="User Inactive!"
                errorMessage="User is not active in the system."
              />
            </Content>
          );
          break;
        case "UserNotFound":
          content = (
            <Content>
              <UnAuthorized
                title="User not found!"
                errorMessage="No account found for the user."
              />
            </Content>
          );
          break;
        case "APIConnectionRefused":
          content = (
            <Content>
              <UnAuthorized
                title="Connection Refused!"
                errorMessage="Error authenticating the user."
              />
            </Content>
          );
          break;
        case "APICallError":
          content = (
            <Content>
              <UnAuthorized
                title="API Call Error!"
                errorMessage="Error authenticating the user."
              />
            </Content>
          );
          break;
        case "Error":
          content = (
            <Content>
              <UnAuthorized
                title="Error!"
                errorMessage="Error authenticating the user."
              />
            </Content>
          );
          break;
        case "SystemError":
          content = (
            <Content>
              <UnAuthorized
                title="Error!"
                errorMessage="Oops! Something went wrong. Please try again!"
              />
            </Content>
          );
          break;
        default:
          content = null;
      }
    }
  }

  return (
    <PageDataProvider>
      <div className="page d-flex flex-row flex-column-fluid">
        <div
          className="wrapper d-flex flex-column flex-row-fluid"
          id="kt_wrapper"
        >
          <HeaderWrapper
            title={title ?? ""}
            loginComponent={loginComponent}
            urlForMenuTitle={urlForMenuTitle ?? ""}
            profileMenuAppTitle={profileMenuAppTitle}
            profileMenuAboutPath={profileMenuAboutPath}
            profileMenuItems={profileMenuItems}
            handleLogoutClick={handleLogoutClick}
          />
          {content}
          {/* <AsideDefault /> */}
          {/* <Outlet /> */}
          {/* <Footer /> */}
        </div>
      </div>

      {/* <RightToolbar /> */}
      {/* <RightProfileDrawer appTitle="EHD" /> */}
      {/* end:: Drawers */}

      <AppModal
        title="Inactivity Warning!"
        show={showModal}
        primaryButtonText="Logout"
        secondaryButtonText="Continue Working"
        onHide={() => setShowModal(false)}
        onSecondaryClicked={() => setShowModal(false)}
        onPrimaryClicked={() => handleLogoutClick()}
        centered={true}
        backdrop={"static"}
      >
        <div className="text-center mt-4">
          <p>You are about to be logged out due to inactivity.</p>
          Time remaining:
          <strong className="px-2">
            {millisToMinutesAndSeconds(remainingTime * 1000)}
          </strong>
        </div>
      </AppModal>

      <ScrollTop />
    </PageDataProvider>
  );
};

export default { MasterLayout };
