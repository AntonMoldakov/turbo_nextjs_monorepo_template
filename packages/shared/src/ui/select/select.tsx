'use client';
import { useId } from 'react';
import type { GroupBase, Props } from 'react-select';
import ReactSelect from 'react-select';

import { getClasses } from './styles/get-classes';
import { getCustomStyles } from './styles/get-custom-styles';
import { Control, DropdownIndicator, Option } from './ui';

export type SelectProps<
  Option,
  IsMulti extends boolean = false,
  Group extends GroupBase<Option> = GroupBase<Option>,
> = Omit<
  Props<Option, IsMulti, Group>,
  'instanceId' | 'styles' | 'components' | 'minMenuHeight' | 'maxMenuHeight'
> & {
  isError?: boolean;
  errorText?: string;
  required?: boolean;
  label?: string;
  disabled?: boolean;
  className?: string;
  isDisabled?: boolean;
};

export const Select = <
  Option,
  IsMulti extends boolean = false,
  Group extends GroupBase<Option> = GroupBase<Option>,
>({
  inputId,
  menuPlacement = 'auto',
  menuPosition = 'absolute',
  placeholder = '',
  isError = false,
  errorText,
  label,
  required = false,
  disabled = false,
  className,
  ...props
}: SelectProps<Option, IsMulti, Group>) => {
  const ownFieldId = useId();
  const fieldId = inputId ?? ownFieldId;

  const instanceId = useId();

  const hasAsterisk = Boolean(required);

  const { cnRoot, cnLabel, cnLabelWrapper, cnAterisk, cnErrorText } = getClasses({
    className,
    disabled,
  });

  const { styles, minMenuHeight, maxMenuHeight } = getCustomStyles<Option, IsMulti, Group>({
    isError: isError || Boolean(errorText),
  });

  return (
    <div className={cnRoot}>
      <div className={cnLabelWrapper}>
        {label ? <p className={cnLabel}>{label}</p> : null}
        {hasAsterisk ? <p className={cnAterisk}>*</p> : null}
      </div>
      <ReactSelect
        components={{
          Control,
          IndicatorSeparator: null,
          DropdownIndicator,
          Option,
        }}
        inputId={fieldId}
        instanceId={instanceId}
        isDisabled={disabled}
        loadingMessage={() => 'loading'}
        maxMenuHeight={maxMenuHeight}
        menuPlacement={menuPlacement}
        menuPosition={menuPosition}
        minMenuHeight={minMenuHeight}
        placeholder={placeholder}
        required={required}
        styles={styles}
        {...props}
      />
      {errorText ? <p className={cnErrorText}>{errorText}</p> : null}
    </div>
  );
};
