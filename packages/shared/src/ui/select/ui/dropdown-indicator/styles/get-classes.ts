import classNames from 'classnames/bind';

import classes from './dropdown-indicator.module.scss';

const cn = classNames.bind(classes);

interface GetClassesProps {
  isOpen: boolean;
}

export const getClasses = ({ isOpen }: GetClassesProps) => {
  const cnRoot = cn('dropdown-indicator');

  const cnIcon = cn('dropdown-indicator__icon', { open: isOpen });

  return {
    cnRoot,
    cnIcon,
  };
};
