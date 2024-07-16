import { ReactNode } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./AppContactCard.scss";
import { IconDefinition, IconStyle } from "@fortawesome/fontawesome-svg-core";

export type HorizontalMenuItem = {
  title: string;
  url: string;
  menuIcon?: ReactNode;
};
export type AppContactCardProps = {
  title?: React.ReactNode;
  color?: string;
  contactIcon?: IconDefinition;
  iconStyle?: IconStyle;
  actionButtons?: React.ReactNode;
  bodyContent?: React.ReactNode;
  footerContent?: React.ReactNode;
  footerColor?: string;
};

export const AppContactCard = ({
  title,
  color,
  contactIcon,
  iconStyle,
  actionButtons,
  bodyContent,
  footerContent,
  footerColor,
}: AppContactCardProps) => {
  return (
    <div className="contactcard-portlet" style={{ backgroundColor: color }}>
      <div className="contactcard-portlet__head">
        <div className="contactcard-portlet__head-label">
          {contactIcon && (
            <span className="contactcard-portlet__head-icon">
              <FontAwesomeIcon size="2x" icon={contactIcon} />
            </span>
          )}
          <h4 className="contactcard-portlet__head-title">{title}</h4>
        </div>
        <div className="contactcard-portlet__head-toolbar">
          <div className="contactcard-portlet__head-actions">
            {actionButtons}
          </div>
        </div>
      </div>
      {bodyContent && (
        <div className="contactcard-portlet__body">{bodyContent}</div>
      )}
      {footerContent && (
        <div
          className="contactcard-portlet__foot contactcard-portlet__foot--sm"
          style={{ backgroundColor: footerColor }}
        >
          {footerContent}
        </div>
      )}
    </div>
  );
};

export default AppContactCard;
