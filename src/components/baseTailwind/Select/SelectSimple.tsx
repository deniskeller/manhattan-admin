import React, { useEffect, useRef } from 'react';
import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Box,
  ListSubheader,
  inputBaseClasses,
} from '@mui/material';
import tw, { css } from 'twin.macro';
import { SelectProps, InputLabelProps } from '@mui/material';
import { alpha, styled } from '@mui/material/styles';
import chevronIcon from '../../../assets/images/chevronWhite.svg';
import chevronIconGray from '../../../assets/images/chevronIconGray.svg';
import useId from '@accessible/use-id';
import styles from './styles.module.scss';

type TSelectProps<T> = {
  variant?: 'default' | 'error';
  required?: boolean;
  value?: T;
  options: { value: any; label: string }[];
  onChange?: (e: any) => void;
  label?: React.ReactNode;
  readOnly?: boolean;
  message?: string;
  height?: number;
  theme?: 'light' | 'dark';
  cssProps?: any;
  MenuItemInner?: any;
};

export const SelectSimple = function <T>({
  value,
  required,
  onChange,
  options,
  variant = 'default',
  message,
  label,
  height,
  theme = 'dark',
  readOnly = false,
  cssProps,
  MenuItemInner,
}: TSelectProps<T>) {
  console.log('variant select', variant);

  const SelectStyled = styled(Select)<SelectProps>(({ theme }) => ({
    //color: "#ff0000",
    '&': {
      alignItems: label ? 'flex-end' : 'center',
    },
    '& *': {
      fontSize: '14px!important',
      lineHeight: '20px!important',
    },
    '&.MuiInputBase-root': {
      borderRadius: '2px',
    },
    '& .MuiSelect-select': {
      paddingBottom: label ? '5px' : '0px',
      paddingTop: label ? '5px' : '0px',
    },
    '& .MuiSvgIcon-root ': {
      fill: 'rgba(255, 255, 255, 0.3)!important', //to theme
    },
  }));
  const InputLabelStyled = styled(InputLabel)<InputLabelProps>(() => ({
    color: 'rgba(255, 255, 255, 0.7)',
    '&.MuiInputLabel-shrink': {
      color:
        theme === 'dark' ? 'rgba(255, 255, 255, 0.5)' : 'rgba(26, 26, 26, 0.5)',
    },
  }));

  const randomId = useId();
  const Icon = (props: any) => {
    const className = props.className;
    return (
      <div
        className={`${styles.IconChevron} ${className} ${
          theme === 'dark' ? styles.DarkTheme : styles.LightTheme
        }`}
      >
        {
          <img
            alt="v"
            src={theme === 'light' ? chevronIconGray : chevronIcon}
          />
        }
      </div>
    );
  };

  useEffect(() => {
    setTimeout(() => {
      if (ref?.current) {
        ref?.current.classList.remove(inputBaseClasses.focused);
      }
    }, 500);
  }, [options]);

  const ref = useRef<HTMLDivElement>(null);
  console.log('cssProps', cssProps);
  return (
    <Box sx={{ minWidth: 120 }} css={themes[theme].common}>
      <FormControl fullWidth css={cssProps}>
        <InputLabelStyled id={randomId} variant={'filled'}>
          {label}
        </InputLabelStyled>
        <SelectStyled
          ref={ref}
          labelId={randomId}
          value={value}
          onChange={onChange}
          IconComponent={Icon}
          onOpen={() => {
            if (ref?.current) {
              ref?.current.classList.add(inputBaseClasses.focused);
            }
          }}
          MenuProps={{
            PaperProps: {
              sx: {
                marginTop: theme === 'light' ? '15px' : '4px',

                bgColor: themes[theme].MenuProps.bgColor.common,
                border: `1px solid ${themes[theme].MenuProps.borderColor}`,
                '& .MuiMenuItem-root': {
                  color: themes[theme].MenuProps.color,
                },
                '&.MuiPaper-root': {
                  borderRadius: '2px',
                  marginRight: '-1px',
                  marginLeft: '-1px',
                  backgroundColor: themes[theme].MenuProps.bgColor.common,
                  boxShadow: themes[theme].MenuProps.boxShadow,
                },
                '&.MuiPaper-root *': {
                  fontSize: '14px!important',
                },
                '& .MuiMenuItem-root:hover': {
                  backgroundColor: themes[theme].MenuProps.items.hover,
                },
                '& .MuiMenuItem-root.Mui-selected': {
                  backgroundColor: themes[theme].MenuProps.items.hover,
                },
                '&::-webkit-scrollbar': {
                  width: '6px',
                  backgroundColor: 'transparent',
                },
                '&::-webkit-scrollbar-track': {
                  borderRadius: '15px',
                  marginBlock: '10px!important',
                },
                '&::-webkit-scrollbar-thumb': {
                  height: '50px',
                  background: 'rgba(255, 255, 255, 0.1)',
                  borderRadius: '100px',
                },
              },
            },
          }} //to theme
          css={[
            readOnly && tw`pointer-events-none`,
            tw`whitespace-nowrap  rounded-l rounded-r`,
            ...themes[theme].input.common,
            themes[theme].input.hover,
            themes[theme].input.focus,
            variant === 'error' && tw`border-red-light-450!`,
            cssProps,
            css`
              height: ${height ? height : 53}px;
              border-style: solid;
              border-width: 1px;
              & .MuiOutlinedInput-notchedOutline {
                border: none !important;
              }
            `, // to theme
          ]}
        >
          {options.map((option) => {
            return (
              <MenuItem value={option.value} key={option.value}>
                {/*@ts-ignore*/}
                {MenuItemInner ? (
                  <MenuItemInner label={option.label} value={option.value} />
                ) : (
                  option.label
                )}
              </MenuItem>
            );
          })}
        </SelectStyled>
      </FormControl>
      {variant === 'error' && message && (
        <div css={tw`flex gap-1 items-center mt-2`}>
          <div css={tw`text-left w-full text-red-light-450 text-sm`}>
            {message}
          </div>
        </div>
      )}
    </Box>
  );
};

export const themes = {
  dark: {
    common: '',
    MenuProps: {
      borderColor: '#474A5A',
      boxShadow: 'none',
      color: 'white',
      bgColor: {
        common: tw`bg-blue-dark-200`,
      },
      items: {
        hover: tw`bg-blue-dark-100!`,
        selected: tw`bg-blue-dark-100!`,
      },
    },
    input: {
      common: [
        tw`border-gray-dark-100!`,
        tw`bg-blue-dark-200!`,
        css`
          color: white !important;
        `,
      ],
      hover: css`
        &:hover {
          color: white !important;
          background-color: ${tw`bg-blue-dark-200`};
          border: ${tw`border-blue-light-900!`};
        }
      `,
      active: [
        css`&:active{ 
          color: white!important; 
          background-color: ${tw`bg-blue-dark-200`}
          border: ${tw`border-blue-light-550!`} 
          }`,
      ],
      focus: css`
        &:focus {
          ${tw`border-blue-light-550!`}
        }
      `,
    },
  },
  light: {
    common: css`
      .MuiOutlinedInput-root.Mui-focused {
        border-color: ${tw`border-blue-light-550!`};
      }
    `,
    MenuProps: {
      borderColor: 'rgba(26, 26, 26, 0.1)',
      boxShadow:
        '0px 2px 4px -1px rgba(0, 0, 0, 0.06), 0px 4px 6px -1px rgba(0, 0, 0, 0.08)',
      color: '#1A1A1A',
      bgColor: {
        common: 'white',
      },
      items: {
        hover: tw`bg-blue-light-100!`,
        selected: tw`bg-blue-light-100!`,
      },
    },
    input: {
      common: [
        tw`border-gray-light-150!`,
        tw`bg-gray-light-50!`,
        css`
          color: #1a1a1a !important;
        `,
      ],
      hover: css`
        &:hover {
          color: #1a1a1a !important;
          background-color: ${tw`bg-gray-light-50`}
            ${tw`border-blue-light-400!`};
        }
      `,
      active: [
        css`&:active{ 
          color: #1A1A1A!important; 
          background-color: ${tw`bg-gray-light-50`}
          border: ${tw`border-blue-light-550!`} 
          }`,
      ],
      focus: css`
        &:focus-within {
          ${tw`border-blue-light-550!`}
        }
      `,
    },
  },
};
