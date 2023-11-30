'use client';
import type { ButtonHTMLAttributes, FC, MouseEventHandler, ReactNode } from 'react';
import { ThreeDots } from 'react-loader-spinner';

import type { CommonTypes, Sizes } from '../../../types';
import { getClasses } from './styles/get-classes';

export type ButtonVariant = 'iconbuttonelongated';

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

export const IconButtonElongated: FC<ButtonProps> = ({
  className,
  variant = 'iconbuttonelongated',
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
  const { cnButton, cnContent, cnContentText, cnIcon, cnSpinner } = getClasses({
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
