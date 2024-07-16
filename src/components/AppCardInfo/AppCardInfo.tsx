import { ReactNode } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./AppCardInfo.scss";
import {
  IconDefinition,
  IconStyle,
  SizeProp,
} from "@fortawesome/fontawesome-svg-core";

export type AppCardInfoProps = {
  title?: React.ReactNode;
  Description?: React.ReactNode;
  color?: string;
  menuIcon?: IconDefinition;
  iconStyle?: IconStyle;
  mainText?: string;
  actionButton?: React.ReactNode;
  actionIcon?: ReactNode;
  bodyContent?: React.ReactNode;
  menuIconSize?: SizeProp;
  menuIconColor?: string;
};

export const AppCardInfo = ({
  title,
  Description,
  color,
  menuIcon,
  iconStyle,
  mainText,
  actionButton,
  actionIcon,
  bodyContent,
  menuIconSize = "2x",
  menuIconColor,
}: AppCardInfoProps) => {
  return (
    <div
      className="cardinfo-portlet cardinfo-iconbox"
      style={{ backgroundColor: color }}
    >
      <div className="row mb-0">
        <div className="col">
          <div className="cardinfo-portlet__body">
            <div className="cardinfo-iconbox__body">
              {menuIcon && (
                <div className="cardinfo-iconbox__icon">
                  <FontAwesomeIcon
                    size={menuIconSize}
                    icon={menuIcon}
                    color={menuIconColor}
                  />
                </div>
              )}
              {mainText && (
                <div className="cardinfo-iconbox__maintext">{mainText}</div>
              )}
              <div className="cardinfo-iconbox__desc">
                <h3 className="cardinfo-iconbox__title">
                  <span className="cardinfo-link">{title}</span>
                </h3>
                <div className="cardinfo-iconbox__content">{Description}</div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-auto">
          {actionButton && (
            <div className="cardinfo-iconbox__actions__button">
              {actionButton}
            </div>
          )}
          {actionIcon && (
            <div className="cardinfo-iconbox__actions__icon">{actionIcon}</div>
          )}
        </div>
      </div>
      {bodyContent && (
        <div className="row mb-0">
          <div className="col-12 col-md-12">{bodyContent}</div>
        </div>
      )}
    </div>
  );
};

export default AppCardInfo;
