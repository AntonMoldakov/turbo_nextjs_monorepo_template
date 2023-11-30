import type { GroupBase, OptionProps } from 'react-select';
import { components } from 'react-select';

export const Option = <
  Option,
  IsMulti extends boolean = false,
  Group extends GroupBase<Option> = GroupBase<Option>,
>({
  children,
  ...props
}: OptionProps<Option, IsMulti, Group>) => {
  return <components.Option {...props}>{children}</components.Option>;
};
