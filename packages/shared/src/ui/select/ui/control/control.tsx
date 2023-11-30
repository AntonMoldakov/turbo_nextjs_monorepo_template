import type { ControlProps, GroupBase } from 'react-select';
import { components } from 'react-select';

import SvgSort from '../../../icon/sort';

export const Control = <
  Option,
  IsMulti extends boolean = false,
  Group extends GroupBase<Option> = GroupBase<Option>,
>({
  children,
  ...props
}: ControlProps<Option, IsMulti, Group>) => (
  <components.Control {...props}>
    <SvgSort /> {children}
  </components.Control>
);


