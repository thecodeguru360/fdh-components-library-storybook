import React from "react";

import { UnAuthorizedProps } from "./UnAuthorized.types";
import { AppButton } from "../AppButton";
import { NavLink } from "react-router-dom";

export const UnAuthorized = (props: UnAuthorizedProps) => {
  const {
    title,
    errorMessage,
    statusCode = 401,
    statusText = "Unauthorized",
  } = props;

  const statusTitle = `${statusText}: ${title}`;
  return (
    <div className="flex-fill d-flex align-items-center justify-content-center">
      <div className="container-tight py-6">
        <div className="empty">
          <div className="empty-icon">
            <div className="display-4">{statusCode}</div>
          </div>
          <p className="empty-title h3">{statusTitle}</p>
          <p className="empty-subtitle text-muted">{errorMessage}</p>
          <div className="empty-action">
            <a href="/">
              <AppButton variant="primary" text="Return to Homepage" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default UnAuthorized;
