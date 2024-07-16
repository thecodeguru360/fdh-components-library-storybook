import React, { useState, useEffect } from "react";
import cn from "classnames";
import "./AppToggle.scss";

export type AppToggleProps = {
  label?: string;
  value?: true | false;
  disabled?: true | false;
  onChange: (v: true | false) => void;
};

export const AppToggle = ({
  label,
  value,
  disabled,
  onChange,
}: AppToggleProps) => {
  const [isToggled, setToggle] = useState<boolean>();

  useEffect(() => {
    setToggle(value!);
  }, [value]);

  const handleClick = () => {
    setToggle(!isToggled);
    onChange(!isToggled);
  };

  return (
    <div className="AppToggle">
      <span className={cn("label", { disabled: disabled })}>{label}</span>
      <label>
        <input
          type="checkbox"
          defaultChecked={isToggled}
          onClick={handleClick}
          disabled={disabled}
        />
        <i />
      </label>
    </div>
  );
};
export default AppToggle;
