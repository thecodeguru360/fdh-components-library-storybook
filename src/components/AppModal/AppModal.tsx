import React from "react";
import Modal from "react-bootstrap/Modal";
import { AppButton } from "../AppButton";
import cn from "classnames";

import "./AppModal.scss";

export type AppModalProps = {
  title: string;
  show: true | false;
  primaryButtonText?: string;
  secondaryButtonText?: string;
  teritioryButtonText?: string;
  children?: React.ReactNode | React.ReactNode[];
  centered?: true | false;
  size?: "sm" | "lg" | "xl";
  backdrop?: "static" | true | false;
  hideSecondaryButton?: true | false;
  showPrimaryButton?: true | false;
  showTeritioryButton?: true | false;
  onHide?: () => void;
  onPrimaryClicked?: () => void;
  onSecondaryClicked?: () => void;
  onTeritioryClicked?: () => void;
};

export const AppModal = ({
  title,
  show,
  primaryButtonText = "Save Changes",
  secondaryButtonText = "Close",
  teritioryButtonText = "Cancel",
  children,
  onHide,
  centered,
  size,
  backdrop,
  hideSecondaryButton,
  showPrimaryButton = true,
  showTeritioryButton,
  onPrimaryClicked,
  onSecondaryClicked,
  onTeritioryClicked,
}: AppModalProps) => {
  return (
    <div>
      <Modal
        show={show}
        onHide={onHide}
        centered={centered}
        size={size}
        backdrop={backdrop}
      >
        <Modal.Header closeButton>
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{children}</Modal.Body>
        <Modal.Footer>
          {!hideSecondaryButton && (
            <AppButton variant="secondary" onClick={onSecondaryClicked}>
              {secondaryButtonText}
            </AppButton>
          )}
          {showTeritioryButton && (
            <AppButton variant="primary" onClick={onTeritioryClicked}>
              {teritioryButtonText}
            </AppButton>
          )}
          {showPrimaryButton && (
            <AppButton variant="primary" onClick={onPrimaryClicked}>
              {primaryButtonText}
            </AppButton>
          )}
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default AppModal;
