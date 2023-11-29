import classNames from 'classnames/bind';

import type { BaseTextAreaProps } from '../base-textarea';
import classes from './base-textarea.module.scss';

type PickedBaseProps = Pick<BaseTextAreaProps, 'className' | 'disabled'>;

interface ClassesProps extends PickedBaseProps {
  captionClass?: string;
  hasCaption?: boolean;
  isMaxLength?: boolean;
  isResizable?: boolean;
  isError?: boolean;
}

const cn = classNames.bind(classes);

export const getClasses = ({
  className,
  disabled,
  hasCaption,
  captionClass,
  isResizable,
  isError,
}: ClassesProps) => {
  const cnRoot = cn('textarea', className);

  const cnLabel = cn('textarea__label', {
    'textarea__label--disabled': disabled,
  });

  const cnLabelWrapper = cn('input__label-wrapper');

  const cnAsterics = cn('input__label-asterics', {
    'input__label-asterics--disabled': disabled,
  });

  const cnBottom = cn('textarea__bottom');

  const cnField = cn('textarea__field', {
    [`textarea__field--${captionClass}`]: isError || hasCaption,
    'textarea__field--resizable': isResizable,
  });

  const cnCaption = cn('textarea__caption', {
    [`textarea__caption--${captionClass}`]: hasCaption,
    'textarea__caption--disabled': disabled,
  });

  const cnCounter = cn('textarea__counter', {
    'textarea__counter--error': isError,
    'textarea__counter--disabled': disabled,
  });

  return {
    cnRoot,
    cnLabel,
    cnBottom,
    cnField,
    cnCaption,
    cnCounter,
    cnLabelWrapper,
    cnAsterics,
  };
};
