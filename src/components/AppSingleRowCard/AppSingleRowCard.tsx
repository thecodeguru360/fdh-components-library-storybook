import React from "react";
import cn from "classnames";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import FontAwesomeIcons from "../FontAwesomeIcons/FontAwesomeIcons";
import {
  AppActionButton,
  ActionsListProps,
} from "../AppActionButton/AppActionButton";
import "./AppSingleRowCard.scss";

export type Column = {
  label: string;
  icon?: IconProp;
};
export type AppSingleRowCardProps = {
  disabled: true | false;
  columns: Column[];
  actionsList: ActionsListProps[];
};

export const AppSingleRowCard = ({
  disabled,
  columns,
  actionsList,
}: AppSingleRowCardProps) => {
  return (
    <div className={cn("AppSingleRowCard", { disabled: disabled })}>
      <div className="card-content">
        {columns.map((column, index) => {
          return (
            <div key={index + "_"} className="column-item">
              {column.icon && (
                <span>
                  <FontAwesomeIcons iconName={column.icon} />
                </span>
              )}
              <span>{column.label}</span>
            </div>
          );
        })}
      </div>
      <div className="card-action">
        <AppActionButton actionsList={actionsList} disabled={disabled} />
      </div>
    </div>
  );
};

export default AppSingleRowCard;
