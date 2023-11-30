'use client';
import type { FC } from 'react';

import classes from './styles/checkbox.module.scss';
import { getClasses } from './styles/get-classes';

export interface CheckBoxProps {
  className?: string;
  text: string;
  disabled: boolean;
  checked: boolean;
  type: string;
}

export const Checkbox: FC<CheckBoxProps> = ({
  text,
  disabled,
  checked = true,
  type = 'checkbox',
}) => {
  const { cnFakeCheckBox, cnContainerTick, cnContainerText } = getClasses({
    checked,
    disabled
  });

  return (
    <label className={classes.label_checkbox}>
      <input checked={checked} className={classes.input_checkbox} disabled={disabled} type={type} />
      <span className={cnFakeCheckBox}>
        <span className={cnContainerTick} />
      </span>
      <span className={cnContainerText}>{text}</span>
    </label>
  );
};
