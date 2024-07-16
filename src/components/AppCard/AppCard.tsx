import React from "react";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleInfo } from "@fortawesome/pro-solid-svg-icons";
import cn from "classnames";
import "./AppCard.scss";

export type AppCardProps = {
  title?: string;
  hasTooltip?: true | false;
  hasAction?: true | false;
  topMargin?: true | false;
  bottomMargin?: true | false;
  tooltipMessage?: string;
  children?: React.ReactNode | React.ReactNode[];
  actionComponent?: React.ReactNode;
  bgColor?: string;
};

export const AppCard = ({
  title,
  hasTooltip,
  tooltipMessage,
  topMargin,
  bottomMargin,
  children,
  hasAction,
  actionComponent,
  bgColor = "#fff",
}: AppCardProps) => {
  const renderTooltip = (props: any) => (
    <Tooltip id="title-tooltip" {...props}>
      {tooltipMessage}
    </Tooltip>
  );
  return (
    <div
      className={cn("AppCard", {
        marginTop: topMargin,
        marginBottom: bottomMargin,
      })}
      style={{ backgroundColor: bgColor }}
    >
      <div className="cardHeader">
        <div className="title">{title}</div>

        {hasTooltip && (
          <div className="infoBox">
            <OverlayTrigger
              placement="right"
              delay={{ show: 250, hide: 400 }}
              overlay={renderTooltip}
            >
              <FontAwesomeIcon icon={faCircleInfo} />
            </OverlayTrigger>
          </div>
        )}

        {hasAction && <div className="action"> {actionComponent} </div>}
      </div>
      <div className="cardBody">{children}</div>
    </div>
  );
};

export default AppCard;
