import classNames from 'classnames/bind';

import type { CheckBoxProps } from '../checkbox';
import classes from './checkbox.module.scss';

const cn = classNames.bind(classes);

type PickeCheckboxProps = Pick<CheckBoxProps, 'checked' | 'disabled'>;

export const getClasses = ({ checked, disabled }: PickeCheckboxProps) => {
  let cnContainerTick = cn(classes.tick_mark_none);
  let cnContainerText = cn(classes.text);

  let cnFakeCheckBox = cn(classes.fakecheckbox, classes[`fakecheckbox--checked_${checked}`]);
  if (checked) {
    cnContainerTick = cn(classes.input_checkbox, classes[`fakecheckbox--checked_${checked}`]);
    cnContainerTick = cn(classes.tick_mark);
  }
  if(disabled){
    cnFakeCheckBox = cn(classes.fakecheckbox, classes[`fakecheckbox--checked_${checked}__disabled`]);
    cnContainerText = cn(classes.text_disabled);
  }

  return {
    cnFakeCheckBox,
    cnContainerTick,
    cnContainerText,
  };
};
