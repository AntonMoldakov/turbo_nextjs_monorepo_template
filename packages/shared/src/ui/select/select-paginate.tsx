'use client';
import { useId } from 'react';
import type { GroupBase, Props } from 'react-select';
import ReactSelect from 'react-select';
import type { UseAsyncPaginateParams} from 'react-select-async-paginate';
import { withAsyncPaginate } from 'react-select-async-paginate';

import { getClasses } from './styles/get-classes';
import { getCustomStyles } from './styles/get-custom-styles';
import { Control, DropdownIndicator, Option } from './ui';


export type SelectPaginateProps<
  Option,
  IsMulti extends boolean = false,
  Group extends GroupBase<Option> = GroupBase<Option>,
  Additional = Record<string, any>,
> = Omit<
  Props<Option, IsMulti, Group>,
  'instanceId' | 'styles' | 'components' | 'minMenuHeight' | 'maxMenuHeight'
> &
  UseAsyncPaginateParams<Option, Group, Additional> & {
    isError?: boolean;
    errorText?: string;
    required?: boolean;
    label?: string;
    disabled?: boolean;
    className?: string;
    isDisabled?: boolean;
  };

const ReactSelectAsync = withAsyncPaginate(ReactSelect);

export const SelectPaginate = <
  Option,
  IsMulti extends boolean = false,
  Group extends GroupBase<Option> = GroupBase<Option>,
>({
  inputId,
  menuPlacement = 'auto',
  menuPosition = 'absolute',
  placeholder = '',
  debounceTimeout = 300,
  isError = false,
  errorText,
  label,
  required = false,
  disabled = false,
  className,
  ...props
}: SelectPaginateProps<Option, IsMulti, Group>) => {
  const ownFieldId = useId();
  const fieldId = inputId ?? ownFieldId;

  const instanceId = useId();

  const hasAsterisk = Boolean(required);

  const { cnRoot, cnLabel, cnLabelWrapper, cnAterisk, cnErrorText } = getClasses({
    className,
    disabled,
  });

  const { styles, maxMenuHeight, minMenuHeight } = getCustomStyles<Option, IsMulti, Group>({
    isError: isError || Boolean(errorText),
  });

  return (
    <div className={cnRoot}>
      <div className={cnLabelWrapper}>
        {label ? <p className={cnLabel}>{label}</p> : null}
        {hasAsterisk ? <p className={cnAterisk}>*</p> : null}
      </div>
      <ReactSelectAsync
        components={{
          Control,
          IndicatorSeparator: null,
          DropdownIndicator,
          Option,
        }}
        debounceTimeout={debounceTimeout}
        inputId={fieldId}
        instanceId={instanceId}
        isDisabled={disabled}
        loadingMessage={() => 'loading'}
        maxMenuHeight={maxMenuHeight}
        menuPlacement={menuPlacement}
        menuPosition={menuPosition}
        minMenuHeight={minMenuHeight}
        placeholder={placeholder}
        styles={styles}
        {...props}
      />
      {errorText ? <p className={cnErrorText}>{errorText}</p> : null}
    </div>
  );
};
