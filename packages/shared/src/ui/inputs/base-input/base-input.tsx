import type { InputHTMLAttributes, ReactNode } from 'react';
import { forwardRef, useId } from 'react';

import { getCaptionOptions } from '../../../helpers/get-caption-options';
import type { CommonTypes, TypeWithoutClassName } from '../../../types';
import { getClasses } from './styles/get-classes';

export interface BaseInputProps
  extends TypeWithoutClassName<InputHTMLAttributes<HTMLInputElement>>,
    CommonTypes {
  label?: string;
  contentLeft?: ReactNode;
  contentRight?: ReactNode;
  errorMessage?: string;
  captionMessage?: string;
  hasError?: boolean;
  required?: boolean;
}

export const BaseInput = forwardRef<HTMLInputElement, BaseInputProps>(
  (
    {
      className,
      id,
      value,
      label,
      onChange,
      contentLeft,
      contentRight,
      type = 'text',
      disabled = false,
      errorMessage,
      captionMessage,
      hasError,
      required = false,
      ...props
    },
    ref,
  ) => {
    const ownId = useId();
    const inputId = id || ownId;

    const isError = Boolean(errorMessage) || hasError;

    const isShowContentRight = Boolean(contentRight);

    const { captionText, captionClass } = getCaptionOptions({
      isError,
      errorMessage,
      captionMessage,
    });

    const hasCaption = Boolean(captionText);

    const hasAsterics = Boolean(required);

    const {
      cnRoot,
      cnLabel,
      cnOuter,
      cnContentLeft,
      cnField,
      cnContentRight,
      cnCaption,
      cnLabelWrapper,
      cnAsterics,
    } = getClasses({
      className,
      disabled,
      isError,
      captionClass,
      hasCaption,
      contentLeft,
      contentRight,
    });

    return (
      <label className={cnRoot}>
        <div className={cnLabelWrapper}>
          {label ? <p className={cnLabel}>{label}</p> : null}
          {hasAsterics ? <p className={cnAsterics}>*</p> : null}
        </div>
        <div className={cnOuter}>
          <div className={cnContentLeft}>{contentLeft}</div>

          <input
            {...props}
            className={cnField}
            disabled={disabled}
            id={inputId}
            onChange={onChange}
            ref={ref}
            type={type}
            value={value}
          />

          {isShowContentRight ? <div className={cnContentRight}>{contentRight}</div> : null}
        </div>

        {hasCaption ? <p className={cnCaption}>{captionText}</p> : null}
      </label>
    );
  },
);

BaseInput.displayName = `BaseInput`;
