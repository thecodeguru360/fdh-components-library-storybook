import React, { useState } from "react";
import { faChevronDown, faChevronUp } from "@fortawesome/pro-solid-svg-icons";
import { FontAwesomeIcons } from "../FontAwesomeIcons/FontAwesomeIcons";
import cn from "classnames";

import "./AppAccordion.scss";

export type AppAccordionProps = {
  title: string;
  variant: "simple" | "block";
  bgColor?: string;
  openDefault?: true | false;
  children?: React.ReactNode | React.ReactNode[];
  customClasses?: string[];
};

export const AppAccordion = ({
  title,
  variant,
  children,
  bgColor = "#fff",
  openDefault = true,
  customClasses,
}: AppAccordionProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(openDefault);

  const toggleShow = (e: any) => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={cn("AppAccordion")}>
      {variant === "simple" ? (
        <div className="simple">
          <div className="simple-header" onClick={toggleShow}>
            <span>
              {isOpen ? (
                <FontAwesomeIcons iconName={faChevronUp} />
              ) : (
                <FontAwesomeIcons iconName={faChevronDown} />
              )}
            </span>
            <div className={cn({ bold: isOpen })}>{title}</div>
          </div>
          {isOpen && <div className="simple-body">{children}</div>}
        </div>
      ) : (
        <div
          className={["block", ...(customClasses ?? "")].join(" ")}
          style={{ backgroundColor: bgColor }}
        >
          <div className="block-header" onClick={toggleShow}>
            <div className="title">{title}</div>
            <span className="icon">
              {isOpen ? (
                <FontAwesomeIcons iconName={faChevronUp} />
              ) : (
                <FontAwesomeIcons iconName={faChevronDown} />
              )}
            </span>
          </div>
          {isOpen && <div className="block-body">{children}</div>}
        </div>
      )}
    </div>
  );
};

export default AppAccordion;
