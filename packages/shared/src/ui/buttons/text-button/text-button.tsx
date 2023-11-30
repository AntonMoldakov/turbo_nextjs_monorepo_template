'use client';
import type { ButtonHTMLAttributes, FC, MouseEventHandler, ReactNode } from 'react';

import type { CommonTypes, Sizes } from '../../../types';
import { getClasses } from './styles/get-classes';

export type ButtonVariant = 'textbutton' | 'texticonbutton' | 'textwhitebutton';

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

export const TextButton: FC<ButtonProps> = ({
  className,
  variant = 'textbutton',
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
  const { cnButton, cnContent, cnContentText, cnIcon } = getClasses({
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
        {leftIcon ? <span className={cnIcon}>{leftIcon}</span> : null}

        {text ? <span className={cnContentText}>{isLoading ? 'Loading...' : text}</span> : null}

        {rightIcon ? <span>{rightIcon}</span> : null}
      </span>
    </button>
  );
};
