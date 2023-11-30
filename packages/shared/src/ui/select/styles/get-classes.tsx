import classNames from 'classnames/bind';

import classes from './selcets.module.scss';

interface ClassesProps {
  className?: string;
  disabled?: boolean;
}

const cn = classNames.bind(classes);

export const getClasses = ({ className, disabled }: ClassesProps) => {
  const cnRoot = cn('select', className);

  const cnLabel = cn('select__label', {
    'select__label--disabled': disabled,
  });

  const cnLabelWrapper = cn('select__label-wrapper');

  const cnAterisk = cn('select__asterisk', {
    'select__asterisk--disabled': disabled,
  });

  const cnErrorText = cn('select__error-text');

  return {
    cnRoot,
    cnLabel,
    cnLabelWrapper,
    cnAterisk,
    cnErrorText,
  };
};
