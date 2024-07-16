import React from "react";
import cn from "classnames";
import FontAwesomeIcons from "../FontAwesomeIcons/FontAwesomeIcons";
import { faXmark } from "@fortawesome/pro-solid-svg-icons";

import "./AppTag.scss";

export type AppTagProps = {
  label: string;
  variant:
    | "default"
    | "blush"
    | "mint"
    | "green"
    | "grey"
    | "yellow"
    | "pink"
    | "spearmint"
    | "periwinkle";
  contactTag?: true | false;
  avatar?: string;
  closeable?: true | false;
  onClose?: () => void;
};

export const AppTag = ({
  label,
  variant = "default",
  contactTag,
  avatar,
  closeable,
  onClose,
}: AppTagProps) => {
  let variantClass = `color-${variant}`;
  let showClose = closeable;
  const avatarBackground = {
    backgroundImage: `url('${avatar}')`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  };
  let showAvatar = false;

  if (contactTag) {
    variantClass = `color-default`;
  }

  if (contactTag && avatar) {
    showAvatar = true;
  }
  let firstChar = null;
  if (contactTag && !avatar) {
    firstChar = label.charAt(0).toUpperCase();
  }
  if (contactTag) {
    showClose = true;
  }
  return (
    <span className={cn("AppTag", variantClass)}>
      {showAvatar && <div className="avatar" style={avatarBackground}></div>}
      {firstChar && <div className="avatar">{firstChar}</div>}

      <div>{label}</div>
      {showClose && (
        <a
          className="close"
          onClick={(e: any) => {
            e.preventDefault();
            onClose!();
          }}
        >
          <FontAwesomeIcons iconName={faXmark} />
        </a>
      )}
    </span>
  );
};

export default AppTag;
