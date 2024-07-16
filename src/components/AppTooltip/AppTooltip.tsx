import React from "react";
import OverlayTrigger, {
  OverlayTriggerRenderProps,
} from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";

import cn from "classnames";

import "./AppTooltip.scss";

type Placement =
  | "auto-start"
  | "auto"
  | "auto-end"
  | "top-start"
  | "top"
  | "top-end"
  | "right-start"
  | "right"
  | "right-end"
  | "bottom-end"
  | "bottom"
  | "bottom-start"
  | "left-end"
  | "left"
  | "left-start";

export type AppTooltipProps = {
  message: string;
  placement?: Placement;

  children:
    | React.ReactElement
    | ((props: OverlayTriggerRenderProps) => React.ReactNode);
};

export const AppTooltip = ({
  message,
  placement = "top",
  children,
}: AppTooltipProps) => {
  return (
    <div className={cn("AppTooltip")}>
      <OverlayTrigger
        placement={placement}
        delay={{ show: 250, hide: 400 }}
        overlay={<Tooltip id="title-tooltip">{message}</Tooltip>}
      >
        {children}
      </OverlayTrigger>
    </div>
  );
};

export default AppTooltip;
