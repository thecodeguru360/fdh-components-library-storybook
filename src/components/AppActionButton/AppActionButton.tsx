import { useRef, useState, useCallback } from "react";
import cn from "classnames";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { faEllipsisVertical } from "@fortawesome/pro-solid-svg-icons";
import { FontAwesomeIcons } from "../FontAwesomeIcons/FontAwesomeIcons";
import useOutsideClick from "./useOutSideClick";
import "./AppActionButton.scss";

export type ActionsListProps = {
  label: string;
  icon?: IconProp;
  disabled?: true | false;
  onCustomClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
};

export type AppActionButtonProps = {
  actionsList: ActionsListProps[];
  disabled?: true | false;
};

export const AppActionButton = ({
  actionsList,
  disabled,
}: AppActionButtonProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const inputRef = useRef(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };
  const close = useCallback(() => {
    setIsOpen(false);
  }, []);

  useOutsideClick(containerRef, close, isOpen);

  return (
    <div className="AppActionButton">
      <button
        className={cn({
          btn: true,
          icon: true,
          active: isOpen,
          disabled: disabled,
        })}
        type="button"
        onClick={handleClick}
        disabled={disabled}
      >
        <div className="button-content">
          <FontAwesomeIcons iconName={faEllipsisVertical} />
        </div>
      </button>
      {isOpen && (
        <div className={cn("actions-container")} ref={containerRef}>
          {actionsList!.map((item: ActionsListProps, i: number) => {
            return (
              <div className="action-item" key={item.label! + i}>
                <button
                  type="button"
                  onClick={item.onCustomClick}
                  disabled={item.disabled}
                >
                  {item.icon && (
                    <div className="leading-icon">
                      <FontAwesomeIcons iconName={item.icon} />
                    </div>
                  )}
                  <div>{item.label}</div>
                </button>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};
export default AppActionButton;
