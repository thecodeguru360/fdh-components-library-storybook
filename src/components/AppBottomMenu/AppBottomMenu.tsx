import { faCircleArrowLeft } from "@fortawesome/pro-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { AppButton } from "../AppButton";

import cn from "classnames";

import "./AppBottomMenu.scss";

export type AppBottomMenuProps = {
  backButtonText?: string;
  hideBackButton?: true | false;
  primaryButtonText?: string;
  hidePrimaryButton?: true | false;
  secondaryButtonText?: string;
  hideSecondaryButton: true | false;
  disabled: true | false;
  onBackClick: () => void;
  onPrimaryClick: () => void;
  onSecondaryClick: () => void;
};

export const AppBottomMenu = ({
  backButtonText = "Back",
  hideBackButton,
  primaryButtonText = "Next",
  hidePrimaryButton,
  secondaryButtonText = "Reset",
  hideSecondaryButton,
  disabled,
  onPrimaryClick,
  onBackClick,
  onSecondaryClick,
}: AppBottomMenuProps) => {
  return (
    <div className={cn("AppBottomMenu")}>
      <div className={cn("menu-container", { disabled: disabled })}>
        <div className="back-action">
          {!hideBackButton && (
            <AppButton
              text={backButtonText}
              variant="icon"
              icon={<FontAwesomeIcon icon={faCircleArrowLeft} />}
              onClick={onBackClick}
            />
          )}
        </div>
        {!hideSecondaryButton && (
          <AppButton variant="secondary" onClick={onSecondaryClick}>
            {secondaryButtonText}
          </AppButton>
        )}
        {!hidePrimaryButton && (
          <AppButton variant="primary" onClick={onPrimaryClick}>
            {primaryButtonText}
          </AppButton>
        )}
      </div>
    </div>
  );
};

export default AppBottomMenu;
