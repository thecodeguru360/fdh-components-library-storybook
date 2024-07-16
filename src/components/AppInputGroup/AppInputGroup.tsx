import cn from "classnames";
import "./AppInputGroup.scss";
import { useFormContext } from "react-hook-form";

export type AppInputGroupProps = {
  id?: string;
  name: string;
  type?: string;
  value?: string;
  actionText?: string;
  placeholder?: string;
  required?: true | never;
  disabled?: true | false;
  isIconButton?: true | false;
  buttonColor?: string;
  icon?: React.ReactElement;
  onCustomChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onCustomBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
};

export const AppInputGroup: React.FC<AppInputGroupProps> = ({
  id,
  name,
  type = "text",
  actionText = "Action",
  required,
  value,
  placeholder,
  disabled,
  isIconButton,
  buttonColor = "#d9f5ff",
  icon,
  onCustomChange,
  onCustomBlur,
  onClick,
}) => {
  const {
    register,
    formState: { errors },
    setValue,
    clearErrors,
  } = useFormContext();

  // Determine if there's an error for this field
  let hasError = !!errors[name];
  const errorMessage = errors[name]?.message ? errors[name]?.message : "";
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setValue(name, value); // Update React Hook Form state
    if (hasError && value != null && value != undefined && value != "") {
      clearErrors(name);
      hasError = !!errors[name];
    }
    if (onCustomChange) onCustomChange(e); // Call custom onChange handler with the event
  };

  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setValue(name, value); // Update React Hook Form state

    if (onCustomBlur) onCustomBlur(e);
  };
  // Style for the input
  const inputStyle = {
    borderColor: hasError ? "red" : "", // Change border color if there's an error
    // Add other styling as needed
  };

  return (
    <div className="EHDAppInputGroup form-group">
      <div
        className={`${
          isIconButton
            ? "ehd-input-group"
            : "ehd-input-icon ehd-input-icon--right"
        }`}
      >
        <input
          {...register(name)}
          type={type}
          className="form-control"
          id={id}
          defaultValue={value}
          placeholder={placeholder}
          required={required}
          disabled={disabled}
          onChange={handleChange}
          onBlur={handleBlur}
          style={inputStyle}
        />

        {isIconButton ? (
          <div className="ehd-input-group-append">
            <button
              style={{ backgroundColor: buttonColor }}
              disabled={disabled}
              className="btn btn-action"
              onClick={onClick}
              type="button"
            >
              {icon}
              <span className={cn({ "ml-7": icon })}>{actionText}</span>
            </button>
          </div>
        ) : (
          <span className="ehd-input-icon__icon ehd-input-icon__icon--right">
            <span>{icon}</span>
          </span>
        )}
      </div>
      <div className="error">
        <>{errorMessage}</>
      </div>
    </div>
  );
};
export default AppInputGroup;
