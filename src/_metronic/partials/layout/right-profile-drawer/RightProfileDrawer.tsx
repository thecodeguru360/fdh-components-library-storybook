import React, { Children, FC, ReactNode } from "react";
import { KTIcon } from "../../../helpers";
import { ChatInner } from "../../chat/ChatInner";
import { Accordion, Button, ListGroup, NavLink } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleQuestion } from "@fortawesome/pro-light-svg-icons";
import "./RightProfileDrawer.scss";

export type RightProfileDrawerProps = {
  appTitle: string;
  aboutPath?: string;
  handleLogoutClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  children?: ReactNode;
};

export const RightProfileDrawer: FC<RightProfileDrawerProps> = ({
  appTitle,
  aboutPath = "/about",
  handleLogoutClick,
  children,
}) => {
  return (
    <div
      id="kt_drawer_chat"
      className="nav-sidebar-menu"
      data-kt-drawer="true"
      data-kt-drawer-name="chat"
      data-kt-drawer-activate="true"
      data-kt-drawer-overlay="true"
      data-kt-drawer-width="{default:'275px', 'md': '275px'}"
      data-kt-drawer-direction="end"
      data-kt-drawer-toggle="#kt_drawer_chat_toggle"
      data-kt-drawer-close="#kt_drawer_chat_close"
    >
      <div className="card w-100 rounded-0" id="kt_drawer_chat_messenger">
        <div className="card-header pe-5" id="kt_drawer_chat_messenger_header">
          {/* <div className="card-title">
          <div className="d-flex justify-content-center flex-column me-3">
            <a
              href="#"
              className="fs-4 fw-bold text-gray-900 text-hover-primary me-1 mb-2 lh-1"
            >
              Brian Cox
            </a>

            <div className="mb-0 lh-1">
              <span className="badge badge-success badge-circle w-10px h-10px me-1"></span>
              <span className="fs-7 fw-semibold text-gray-500">Active</span>
            </div>
          </div>
        </div> */}

          <div className="card-toolbar">
            <div
              className="btn btn-sm btn-icon btn-active-light-primary"
              id="kt_drawer_chat_close"
            >
              <KTIcon iconName="cross" className="fs-2" />
            </div>
          </div>
        </div>
        <div className="card-body" id="kt_drawer_chat_messenger_body">
          {children}
          <ListGroup variant="flush">
            <NavLink href={aboutPath}>
              <ListGroup.Item className="nav-menu-list-item-group">
                <FontAwesomeIcon icon={faCircleQuestion} /> About {appTitle}
              </ListGroup.Item>
            </NavLink>
            <ListGroup.Item className="nav-menu-list-item-group">
              <Button onClick={() => handleLogoutClick} className="logout-btn">
                Logout
              </Button>
            </ListGroup.Item>
          </ListGroup>
        </div>
      </div>
    </div>
  );
};

export default { RightProfileDrawer };
