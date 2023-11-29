import type { FC, HTMLAttributes } from 'react';

import classes from './button.module.scss';

// const cn = classNames.bind(classes);

export const Button: FC<HTMLAttributes<HTMLButtonElement>> = (props) => {
  return <button {...props} className={classes.root} type="button" />;
};
