'use client';
import type { ButtonHTMLAttributes, FC, MouseEventHandler, ReactNode } from 'react';
import { ThreeDots } from 'react-loader-spinner';

import type { CommonTypes, Sizes } from '../../../types';
import { getClasses } from './styles/get-classes';

export type ButtonVariant = 'iconbutton' | 'iconbuttonwhite';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>, CommonTypes {
  IconNode: ReactNode;
  variant?: ButtonVariant;
  size?: Sizes;
  isLoading?: boolean;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  enabledDefaultIconColor?: boolean;
  isFullWidth?: boolean;
}

export const IconButton: FC<ButtonProps> = ({
  className,
  variant = 'iconbutton',
  size = 'large',
  IconNode,
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
  const { cnButton, cnContentText, cnIcon, cnSpinner } = getClasses({
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
      <span>
        {leftIcon ? <span className={cnIcon}>{leftIcon}</span> : null}

        {isLoading ? (
           <ThreeDots
           ariaLabel="three-dots-loading"
           radius="1"
           visible={isLoading}
           wrapperClass={cnSpinner}
         />
        ) : (
          <span className={cnContentText}>{IconNode}</span>
        )}

        {rightIcon ? <span>{rightIcon}</span> : null}
      </span>
    </button>
  );
};
