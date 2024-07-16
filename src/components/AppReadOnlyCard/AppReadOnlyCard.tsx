import React, { ReactNode, useState } from "react";
import { useFormContext } from "react-hook-form";
import "./AppReadOnlyCard.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus, faXmark } from "@fortawesome/pro-light-svg-icons";
import "../AppContactCard/AppContactCard.scss";
import { faFlag, faFlagSwallowtail } from "@fortawesome/pro-solid-svg-icons";
import { Icon, IconProp } from "@fortawesome/fontawesome-svg-core";

export interface AppReadOnlyCardProps {
  itemLabel: string;
  itemSubLabel?: string;
  itemResult: string;
  itemResultColor?: string;
  resultIcon?: IconProp;
  itemDescription?: string;
  bgColor?: string;
  needBorder?: true | false;
  extraContent?: ReactNode;
}

export const AppReadOnlyCard: React.FC<AppReadOnlyCardProps> = ({
  itemLabel,
  itemSubLabel,
  itemResult,
  itemResultColor = "#5113ad",
  itemDescription,
  bgColor = "#ffffff",
  resultIcon = faFlagSwallowtail,
  needBorder = false,
  extraContent,
}) => {
  return (
    <>
      <div
        className="contactcard-portlet readonlycard"
        style={{
          backgroundColor: bgColor,
          border: needBorder ? "" : "none",
          boxShadow: needBorder ? "" : "none",
        }}
      >
        <div className="contactcard-portlet__head">
          <div className="contactcard-portlet__head-label d-flex">
            <div className="contactcard-portlet__head-title d-flex">
              <div className="readonlycard_title">
                {itemLabel}
                <span className="readonlycard_sub_title">{itemSubLabel}</span>
              </div>
            </div>
          </div>
          <div className="contactcard-portlet__head-toolbar">
            <div className="contactcard-portlet__head-actions">
              {resultIcon && (
                <FontAwesomeIcon
                  size="sm"
                  icon={resultIcon}
                  color={itemResultColor}
                />
              )}
              <span
                className="readonlycard_result"
                style={{ color: itemResultColor }}
              >
                {itemResult}
              </span>
            </div>
          </div>
        </div>
        {(itemDescription || extraContent) && (
          <div className="contactcard-portlet__body">
            {extraContent && (
              <div className="readonlycard_extracontent">{extraContent}</div>
            )}
            {itemDescription && (
              <div className="readonlycard_desc">{itemDescription}</div>
            )}
          </div>
        )}
      </div>
    </>
  );
};

export default AppReadOnlyCard;
