import { FC, useEffect } from "react";
import { MenuInner } from "./MenuInner";
import { SwapperComponent } from "../../../assets/ts/components";

export interface HeaderProps {
  title: string;
}

export const Header: FC<HeaderProps> = ({ title }) => {
  useEffect(() => {
    SwapperComponent.reinitialization();
  }, []);

  return (
    <div className="header-menu align-items-stretch">
      <div className="menu menu-lg-rounded menu-column menu-lg-row menu-state-bg menu-title-gray-700 menu-state-title-primary menu-state-icon-primary menu-state-bullet-primary menu-arrow-gray-500 fw-bold my-5 my-lg-0 align-items-stretch">
        {/* <MenuInner /> */}
        <div
          // data-kt-swapper="true"
          // data-kt-swapper-mode="prepend"
          // data-kt-swapper-parent="{default: '#kt_content_container', 'lg': '#kt_toolbar_container'}"
          className="d-flex align-items-center flex-wrap me-3"
        >
          {/* begin::Title */}
          <h1 className="d-flex align-items-center header-title">{title}</h1>
          {/* end::Title */}
        </div>
      </div>
    </div>
  );
};

export default { Header };
