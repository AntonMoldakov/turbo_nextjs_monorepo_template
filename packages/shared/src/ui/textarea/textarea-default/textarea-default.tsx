'use client';
import { forwardRef } from 'react';

import type { BaseTextAreaProps } from '../base-textarea/base-textarea';
import { BaseTextArea } from '../base-textarea/base-textarea';

export type TextareaDefaultProps = BaseTextAreaProps;

export const TextareaDefault = forwardRef<HTMLTextAreaElement, TextareaDefaultProps>(
  (props, ref) => {
    return <BaseTextArea {...props} ref={ref} />;
  },
);

TextareaDefault.displayName = `TextareaDefault`;
