'use client';
import type { ButtonHTMLAttributes, FC, MouseEventHandler, ReactNode } from 'react';
import { ThreeDots } from 'react-loader-spinner';

import type { CommonTypes, Sizes } from '../../../types';
import { getClasses } from './styles/get-classes';

export type ButtonVariant = 'primary' | 'secondary';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>, CommonTypes {
  text: string;
  variant?: ButtonVariant;
  size?: Sizes;
  isLoading?: boolean;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  enabledDefaultIconColor?: boolean;
  isFullWidth?: boolean;
}

export const Button: FC<ButtonProps> = ({
  className,
  variant = 'primary',
  size = 'large',
  text,
  leftIcon,
  rightIcon,
  disabled,
  isLoading = false,
  isFullWidth = false,
  enabledDefaultIconColor = true,
  type = 'button',
  onClick,
  ...props
}) => {
  const { cnButton, cnContent, cnContentText, cnSpinner } = getClasses({
    className,
    variant,
    size,
    isLoading,
    enabledDefaultIconColor,
    isFullWidth,
  });

  const isDisabled = disabled || isLoading;

  const onClickHandler: MouseEventHandler<HTMLButtonElement> = (event) => {
    event.currentTarget.blur();
    onClick?.(event);
  };

  return (
    <button
      className={cnButton}
      disabled={isDisabled}
      onClick={onClickHandler}
      type={type}
      {...props}>
      <span className={cnContent}>
        {leftIcon ? <span>{leftIcon}</span> : null}

        {text ? <span className={cnContentText}>{text}</span> : null}

        {rightIcon ? <span>{rightIcon}</span> : null}
      </span>
      <ThreeDots
        ariaLabel="three-dots-loading"
        radius="4"
        visible={isLoading}
        wrapperClass={cnSpinner}
      />
    </button>
  );
};
