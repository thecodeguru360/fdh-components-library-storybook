// Axios
import axios from "axios";
import { Chart, registerables } from "chart.js";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
// Apps
import { MetronicI18nProvider } from "../../_metronic/i18n/Metronici18n";
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
// import { AuthProvider, setupAxios } from "./app/modules/auth";
import { AppRoutes } from "../../app/routing/AppRoutes";
import { WithChildren } from "../../_metronic/helpers";
import { FC } from "react";
/**
 * Creates `axios-mock-adapter` instance for provided `axios` instance, add
 * basic Metronic mocks and returns it.
 *
 * @see https://github.com/ctimmerm/axios-mock-adapter
 */
/**
 * Inject Metronic interceptors for axios.
 *
 * @see https://github.com/axios/axios#interceptors
 */
// setupAxios(axios);
Chart.register(...registerables);

export const queryClient = new QueryClient();
export const MainWrapper: FC<WithChildren> = ({
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
  return (
    <QueryClientProvider client={queryClient}>
      <MetronicI18nProvider>
        <AppRoutes
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
      </MetronicI18nProvider>
      {/* <ReactQueryDevtools initialIsOpen={false} /> */}
    </QueryClientProvider>
  );
};
export default MainWrapper;
