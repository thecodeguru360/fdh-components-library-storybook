import React, { useState } from "react";
import { LogInButton } from "./LogInButton";
import "./appLayout.scss";
import { faCaretDown, faCaretUp } from "@fortawesome/pro-solid-svg-icons";
import { faCircleUser } from "@fortawesome/pro-regular-svg-icons";
import { FontAwesomeIcons } from "../FontAwesomeIcons";

interface Props {
  children: React.ReactNode;
}
const LayoutComponent: React.FC = () => {
  const isAuthenticated = true;

  const [showCaret, setShowCaret] = useState(true);
  const handleShow = () => setShowCaret(!showCaret);
  return (
    <div onClick={handleShow} className="d-flex flex-row flex-column-fluid">
      <div className="d-flex flex-row-fluid flex-center me-5 me-md-5">
        <FontAwesomeIcons iconName={faCircleUser} iconSize="2x" />
      </div>
      <div className="d-flex flex-row-fluid flex-center me-5 me-md-5">
        {isAuthenticated ? (
          <>
            <div className="user-info__name">{"Jane. Doe"}</div>
            {/* <LogOutButton /> */}
          </>
        ) : (
          <LogInButton />
        )}
      </div>
      <div className="d-flex flex-row-fluid flex-center me-5 me-md-5">
        <span className="marginGap">
          <FontAwesomeIcons iconName={showCaret ? faCaretUp : faCaretDown} />
        </span>
      </div>
    </div>
  );
};

export default LayoutComponent;
