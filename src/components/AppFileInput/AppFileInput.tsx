/* eslint-disable no-plusplus */
import React from "react";

import cn from "classnames";

import "./AppFileInput.scss";

export type AppFileInputProps = {
  id?: string;
  name?: string;
  label?: string;
  multiple?: true | false;
  helpText?: string;
  accept?: string;
  disabled?: true | false;
  onChange: (value: any) => void;
};

export const AppFileInput = ({
  id,
  name,
  label,
  onChange,
  helpText,
  multiple = false,
  ...props
}: AppFileInputProps) => {
  return (
    <div className="AppFileInput form-group">
      {label && (
        <label className="label" htmlFor={id}>
          {label}
        </label>
      )}
      <input
        className={cn("form-control")}
        id={id}
        type="file"
        name={name}
        onChange={onChange}
        multiple={multiple}
        {...props}
      />
      {helpText && <div className="form-text">{helpText}</div>}
    </div>
  );
};
export default AppFileInput;
