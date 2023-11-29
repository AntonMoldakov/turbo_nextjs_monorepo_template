import type { TextareaHTMLAttributes } from 'react';
import { forwardRef } from 'react';

import { getCaptionOptions } from '../../../helpers/get-caption-options';
import type { CommonTypes, TypeWithoutClassName } from '../../../types';
import { getClasses } from './styles/get-classes';

export interface BaseTextAreaProps
  extends TypeWithoutClassName<TextareaHTMLAttributes<HTMLTextAreaElement>>,
    CommonTypes {
  label?: string;
  errorMessage?: string;
  captionMessage?: string;
  maxLength?: number;
  isResizable?: boolean;
  hasError?: boolean;
  required?: boolean;
}

export const BaseTextArea = forwardRef<HTMLTextAreaElement, BaseTextAreaProps>(
  (
    {
      className,
      label,
      disabled = false,
      errorMessage,
      captionMessage,
      isResizable,
      value,
      hasError,
      onChange,
      maxLength = 300,
      required = false,
      ...props
    },
    ref,
  ) => {
    const isError = Boolean(errorMessage) || hasError;

    const hasCounter = Boolean(maxLength);

    const isMaxLength = ((value as string) || '').length >= maxLength;

    const counterText = `${((value as string) || '').length}/${maxLength}`;

    const { captionText, captionClass } = getCaptionOptions({
      isError,
      errorMessage,
      captionMessage,
    });

    const hasCaption = Boolean(captionText);

    const hasAsterics = Boolean(required);

    const { cnRoot, cnLabel, cnBottom, cnField, cnCaption, cnCounter, cnLabelWrapper, cnAsterics } =
      getClasses({
        className,
        disabled,
        hasCaption,
        captionClass,
        isMaxLength,
        isResizable,
        isError,
      });

    return (
      <>
        <label className={cnRoot}>
          <div className={cnLabelWrapper}>
            {label ? <p className={cnLabel}>{label}</p> : null}
            {hasAsterics ? <p className={cnAsterics}>*</p> : null}
          </div>
          <textarea
            {...props}
            className={cnField}
            disabled={disabled}
            maxLength={maxLength}
            onChange={(event) => {
              onChange?.(event);
            }}
            ref={ref}
            required={required}
            value={value}
          />

          {hasCounter ? <span className={cnCounter}>{counterText}</span> : null}
        </label>
        {hasCaption ? (
          <div className={cnBottom}>
            <span className={cnCaption}>{captionText}</span>
          </div>
        ) : null}
      </>
    );
  },
);

BaseTextArea.displayName = `BaseTextArea`;
