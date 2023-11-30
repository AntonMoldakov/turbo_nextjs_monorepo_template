import type { GroupBase, StylesConfig } from 'react-select';

interface Args {
  isError?: boolean;
}

export const getCustomStyles = <
  Option,
  IsMulti extends boolean = false,
  Group extends GroupBase<Option> = GroupBase<Option>,
>({
  isError,
}: Args) => {
  const styles: StylesConfig<Option, IsMulti, Group> = {
    control: (base, { isFocused, isDisabled }) => {
      const defaultBorderColor = () => {
        if (isError) {
          return 'var(--additional_red)';
        }
        if (isFocused) {
          return 'var(--primary_90)';
        }
        return 'var(--grayscale_60)';
      };

      const hoverStyles = () => {
        if (isError) {
          return {
            borderColor: 'var(--additional_red)',
            backgroundColor: 'var(--grayscale_00)',
          };
        }
        if (isFocused) {
          return {
            borderColor: 'var(--primary_90)',
          };
        }

        if (isDisabled) {
          return {
            borderColor: 'var(--grayscale_60)',
            backgroundColor: 'var(--grayscale_00)',
          };
        }

        return {
          borderColor: 'var(--grayscale_70)',
          backgroundColor: 'var(--grayscale_00)',
        };
      };

      return {
        ...base,
        borderWidth: '1px',
        borderStyle: 'solid',
        borderColor: defaultBorderColor(),
        borderRadius: '30px',
        minHeight: '36px',
        maxHeight: '36px',
        backgroundColor: 'var(--grayscale_00)',
        padding: '0 0 0 12px',
        boxShadow: 'none',
        ':hover': {
          ...hoverStyles(),
        },
        ...(isDisabled && {
          pointerEvents: 'auto',
          cursor: 'not-allowed',
          svg: {
            path: {
              stroke: '#CACED9',
            },
          },
        }),
      };
    },
    indicatorsContainer: (base) => ({
      ...base,
      paddingRight: '12px',
      div: {
        padding: '0px',
      },
    }),
    valueContainer: (base) => ({
      ...base,
      padding: '2px 4px',
      fontSize: '14px',
      fontStyle: 'normal',
      fontWeight: 500,
      lineHeight: '22px',
      color: 'var(--grayscale_100)',
    }),
    singleValue: (base) => ({
      ...base,
      margin: 0,
    }),
    placeholder: (base, { isDisabled }) => ({
      ...base,
      color: 'var(--grayscale_80)',
      fontSize: '14px',
      fontWeight: '400',
      lineHeight: '22px',
      letterSpacing: '0.14px',
      ...(isDisabled && {
        color: 'var(--grayscale_70)',
      }),
    }),
    input: (base) => ({
      ...base,
      margin: 0,
      padding: 0,
    }),
    clearIndicator: (base) => ({
      ...base,
      padding: '7px 12px',
    }),
    menu: (base) => ({
      ...base,
      overflow: 'hidden',
      borderRadius: '16px',
      borderColor: 'var(--grayscale_50)',
      backgroundColor: 'var(--grayscale_00)',
      boxShadow: '3px 4px 22px 0px rgba(11, 22, 64, 0.05)',
      zIndex: '10',
    }),
    menuList: (base) => ({
      ...base,
      padding: '0',
      maxHeight: '144px',
    }),
    option: (base, { isFocused, isDisabled }) => {
      const defaultStyles = () => {
        if (isFocused) {
          return {
            backgroundColor: 'var(--grayscale_50)',
            padding: '7.5px 12px',
            color: 'var(--grayscale_100)',
          };
        }

        if (isDisabled) {
          return {
            color: 'var(--additional_red)',
            backgroundColor: 'var(--grayscale_90)',
          };
        }

        return {
          color: 'var(--grayscale_100)',
          backgroundColor: 'transparent',
          padding: '7.5px 12px',
        };
      };

      return {
        ...base,
        display: 'grid',
        gridTemplateColumns: 'auto',
        gridAutoFlow: 'column',
        gridAutoColumns: '1fr',
        columnGap: '8px',
        alignItems: 'center',
        borderBottom: '1px solid var(--grayscale_50)',
        padding: '8px 12px',
        fontSize: '14px',
        fontStyle: 'normal',
        fontWeight: 500,
        lineHeight: '22px',
        ...defaultStyles(),
        ':active': {
          backgroundColor: 'var(--grayscale_50)',
          color: 'var(--grayscale_100)',
        },
      };
    },
    noOptionsMessage: (base) => ({
      ...base,
      padding: '8px 12px',
      fontSize: '14px',
      fontStyle: 'normal',
      fontWeight: 500,
      lineHeight: '22px',
      color: 'var(--grayscale_100)',
    }),
    loadingMessage: (base) => ({
      ...base,
      padding: '8px 12px',
      fontSize: '14px',
      fontStyle: 'normal',
      fontWeight: 500,
      lineHeight: '22px',
      color: 'var(--grayscale_100)',
    }),
  };

  const minMenuHeight = 36 * 4 + 13;
  const maxMenuHeight = 36 * 4 + 13;

  return {
    styles,
    minMenuHeight,
    maxMenuHeight,
  };
};
