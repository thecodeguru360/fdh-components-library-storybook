/**
 * High level router.
 *
 * Note: It's recommended to compose related routes in internal router
 * components (e.g: `src/app/modules/Auth/pages/AuthPage`, `src/app/BasePage`).
 */

import { FC } from "react";
import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";
import { PrivateRoutes } from "./PrivateRoutes";
import { ErrorsPage } from "../modules/errors/ErrorsPage";
import { Logout, AuthPage, useAuth } from "../modules/auth";
import { AppLayout } from "../../components/AppLayout";
import { AppInit } from "../../components/AppLayout/AppInit";
import { WithChildren } from "../../_metronic/helpers";

import { Chart, registerables } from "chart.js";
import "../../_metronic/assets/sass/style.react.scss";
import "../../_metronic/assets/fonticon/fonticon.css";
import "../../_metronic/assets/keenicons/duotone/style.css";
import "../../_metronic/assets/keenicons/outline/style.css";
import "../../_metronic/assets/keenicons/solid/style.css";
/**
 * TIP: Replace this style import with rtl styles to enable rtl mode
 *
 * import './_metronic/assets/css/style.rtl.css'
 **/
import "../../_metronic/assets/sass/style.scss";

/**
 * Base URL of the website.
 *
 * @see https://facebook.github.io/create-react-app/docs/using-the-public-folder
 */
Chart.register(...registerables);
const { BASE_URL } = import.meta.env;

export const AppRoutes: FC<WithChildren> = ({
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
  // const { currentUser } = useAuth();
  console.log(BASE_URL);
  return (
    // <BrowserRouter basename={BASE_URL}>
    <Routes>
      <Route element={<AppInit />}>
        {/* <Route path="error/*" element={<ErrorsPage />} />
          <Route path="logout" element={<Logout />} /> */}
        <Route
          path="/*"
          element={
            <PrivateRoutes
              title={title}
              loginComponent={loginComponent}
              urlForMenuTitle={urlForMenuTitle}
              horizontalMenuItems={horizontalMenuItems}
              isAuthenticated={isAuthenticated}
              signinComponent={signinComponent}
              userStatus={userStatus}
              menuTitle={menuTitle}
              children={children}
            />
          }
        />
        {/* {currentUser ? (
            <>
              <Route index element={<Navigate to="/dashboard" />} />
            </>
          ) : (
            <>
              <Route path="auth/*" element={<AuthPage />} />
              <Route path="*" element={<Navigate to="/auth" />} />
            </>
          )} */}
      </Route>
    </Routes>
    // </BrowserRouter>
  );
};

export default { AppRoutes };
