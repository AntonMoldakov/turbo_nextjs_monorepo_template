import classNames from 'classnames/bind';

import type { BaseInputProps } from '../base-input';
import classes from './base-input.module.scss';

type PickedBaseProps = Pick<
  BaseInputProps,
  'className' | 'disabled' | 'contentLeft' | 'contentRight'
>;

interface ClassesProps extends PickedBaseProps {
  isError?: boolean;
  captionClass?: string;
  hasCaption?: boolean;
}

const cn = classNames.bind(classes);

export const getClasses = ({
  className,
  disabled,
  isError,
  hasCaption,
  captionClass,
  contentLeft,
  contentRight,
}: ClassesProps) => {
  const hasContentLeft = Boolean(contentLeft);
  const hasContentRight = Boolean(contentRight);

  const cnRoot = cn('input', className);

  const cnLabelWrapper = cn('input__label-wrapper');

  const cnAsterics = cn('input__label-asterics', {
    'input__label-asterics--disabled': disabled,
  });

  const cnLabel = cn('input__label', {
    'input__label--disabled': disabled,
  });

  const cnOuter = cn('input__outer', {
    'input__outer--disabled': disabled,
    [`input__outer--${captionClass}`]: isError || hasCaption,
  });

  const cnContentLeft = cn('input-content-left', {
    'input-content-left--disabled': disabled,
    'input-content-right--error': isError,
  });

  const cnField = cn('input__field', {
    [`input__field--${captionClass}`]: isError || hasCaption,
    'input__field--content-left': hasContentLeft,
    'input__field--content-right': hasContentRight,
  });

  const cnContentRight = cn('input-content-right', {
    'input-content-right--disabled': disabled,
    'input-content-right--error': isError,
  });

  const cnCaption = cn('input__caption', {
    [`input__caption--${captionClass}`]: hasCaption,
  });

  return {
    cnRoot,
    cnLabel,
    cnOuter,
    cnContentLeft,
    cnField,
    cnContentRight,
    cnCaption,
    cnLabelWrapper,
    cnAsterics,
  };
};
