import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faPencil } from "@fortawesome/pro-solid-svg-icons";
import "./AppFormProgressBar.scss";

export type AppFormProgressBarProps = {
  steps: string[];
  currentStep: number;
};

export const AppFormProgressBar = ({
  steps,
  currentStep,
}: AppFormProgressBarProps) => {
  const currentIndex = currentStep - 1;
  return (
    <div className="AppFormProgressBar">
      {steps.map((step, index) => {
        let stepStatus = "incomplete";
        const label = step;
        let icon = "tick";

        if (index < currentIndex) {
          stepStatus = "completed";
        } else if (index === currentIndex) {
          stepStatus = "active";
          icon = "pencil";
        }

        return (
          <div key={index} className={`progress-item ${stepStatus}`}>
            <div className={`progress-line ${stepStatus}`} />
            <div className={`progress-icon ${icon}`}>
              {stepStatus === "active" ? (
                <FontAwesomeIcon
                  icon={faPencil}
                  color="#fff"
                  className="icon-active"
                />
              ) : (
                <FontAwesomeIcon icon={faCheck} color="#fff" className="icon" />
              )}
            </div>
            <span className={`label-${stepStatus}`}>{label}</span>
          </div>
        );
      })}
    </div>
  );
};

export default AppFormProgressBar;
