import type { DropdownIndicatorProps, GroupBase } from 'react-select';

import SvgDown2 from '../../../icon/down2';
import { getClasses } from './styles/get-classes';

export const DropdownIndicator = <
  Option,
  IsMulti extends boolean = false,
  Group extends GroupBase<Option> = GroupBase<Option>,
>({
  ...props
}: DropdownIndicatorProps<Option, IsMulti, Group>) => {
  const {
    selectProps: { menuIsOpen },
  } = props;

  const { cnRoot, cnIcon } = getClasses({ isOpen: menuIsOpen });

  return (
    <div className={cnRoot}>
      <SvgDown2 className={cnIcon} />
    </div>
  );
};
