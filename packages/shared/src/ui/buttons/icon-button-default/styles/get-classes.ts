import classNames from "classnames/bind";

import type { ButtonProps } from "../icon-button-default";
import classes from "./button.module.scss";

const cn = classNames.bind(classes);
type PickedButtonProps = Pick<
  ButtonProps,
  | "className"
  | "variant"
  | "size"
  | "isLoading"
  | "enabledDefaultIconColor"
  | "isFullWidth"
>;
export const getClasses = ({
  className,
  variant,
  size,
  isLoading,
}: PickedButtonProps) => {
  const cnButton = cn(
    "button",
    className,
    `button--${variant}`,
    `button--${size}`,
    {
      loading: isLoading,
    }
  );
  const cnContentText = cn("button__content-text");
  const cnSpinner = cn("button__loader");
  const cnIcon = cn("button__icon");
  return {
    cnButton,
    cnSpinner,
    cnContentText,
    cnIcon,
  };
};
