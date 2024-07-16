import { lazy, FC, Suspense } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import { MasterLayout } from "../../_metronic/layout/MasterLayout";
import TopBarProgress from "react-topbar-progress-indicator";
import { getCSSVariableValue } from "../../_metronic/assets/ts/_utils";
import { WithChildren } from "../../_metronic/helpers";

export const PrivateRoutes: FC<WithChildren> = ({
  title,
  children,
  loginComponent,
  isAuthenticated,
  signinComponent,
  userStatus,
  horizontalMenuItems,
  menuTitle,
  urlForMenuTitle,
}) => {
  const handleLogout = () => {
    console.log("handleLogout");
  };

  return (
    <Routes>
      <Route
        element={
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
            profileMenuAppTitle={""}
            profileMenuAboutPath={""}
            profileMenuItems={[]}
            handleLogoutClick={handleLogout}
          />
        }
      >
        {/* Application specific routes */}
        {/* {applicationRoutes &&
          applicationRoutes.map((route, index) => (
            <Route key={index} path={route.path} element={route.element} />
          ))} */}
        {/* Page Not Found */}
        <Route path="*" element={<Navigate to="/error/404" />} />
      </Route>
    </Routes>
  );
};

export const SuspensedView: FC<WithChildren> = ({ children }) => {
  const baseColor = getCSSVariableValue("--bs-primary");
  TopBarProgress.config({
    barColors: {
      "0": baseColor,
    },
    barThickness: 10,
    shadowBlur: 5,
  });
  return <Suspense fallback={<TopBarProgress />}>{children}</Suspense>;
};

export default { SuspensedView, PrivateRoutes };
