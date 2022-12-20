/* eslint-disable react/display-name */
import { FormControl, InputLabel } from '@mui/material';
import { Button } from '@tw/components/Button';
import { Input } from '@tw/components/index';
import { useEffect, useMemo, useState } from 'react';
import * as React from 'react';
import SelectUnstyled, {
  selectUnstyledClasses,
  SelectUnstyledProps,
  SelectUnstyledRootSlotProps,
} from '@mui/base/SelectUnstyled';
import OptionUnstyled, {
  optionUnstyledClasses,
} from '@mui/base/OptionUnstyled';
import tw, { css } from 'twin.macro';
import { AlertTriangle, Play, Search } from 'react-feather';
import PopperUnstyled from '@mui/base/PopperUnstyled';
import { useClickAway } from 'react-use';
import styled from '@emotion/styled';
import chevronIcon from '../../../assets/images/chevronWhite.svg';
import useId from '@accessible/use-id';
import { inputLabelClasses } from '@mui/material/InputLabel';
import { ListSubheader, InputAdornment, TextField } from '@mui/material';

const StyledListbox = styled('ul')([
  tw`border border-blue-dark-200 rounded-lg overflow-y-auto h-full`, //border to theme
  css`
    padding-top: 8px; 
   .MuiListSubheader-root{background: ${tw`bg-blue-dark-300`}`,
]);

const StyledOption = styled(OptionUnstyled)(
  css`
    list-style: none;
    cursor: pointer;
    color: white !important; //to theme
    ${tw`px-4 py-2`}

    &:last-of-type {
      border-bottom: none;
    }

    ${tw`text-base-light-900 font-medium`}

    &.${optionUnstyledClasses.selected} {
      ${tw`text-base-light-900 font-medium bg-blue-dark-100`}
    }

    &:hover {
      ${tw`text-base-light-900 font-medium bg-blue-dark-100`}
    }

    &.${optionUnstyledClasses.highlighted} {
      ${tw`text-base-light-900 font-medium`}
    }

    &.${optionUnstyledClasses.highlighted}.${optionUnstyledClasses.selected} {
      ${tw`text-base-light-900 font-medium`}
    }

    &.${optionUnstyledClasses.disabled} {
      ${tw`text-base-light-900 font-medium`}
    }

    &:hover:not(.${optionUnstyledClasses.disabled}) {
      ${tw`text-base-light-900 font-medium`}
    }
  `
);

type SelectProps<T> = {
  variant?: 'default' | 'error';
  message?: string;
  required?: boolean;
  value?: T;
  options?: { value: T; label: React.ReactNode; name: string }[];
  onChange?: (value: T) => void;
  bottom?: React.ReactNode;
  label?: React.ReactNode;
  readOnly?: boolean;
  fullWidth?: boolean;
} & React.ComponentProps<typeof SelectUnstyled>;

export const Select = function <T>({
  value,
  required,
  onChange,
  options,
  variant = 'default',
  message,
  bottom,
  label,
  readOnly = false,
  fullWidth,
  ...props
}: SelectProps<T>) {
  const [isOpen, setIsOpen] = useState(props.listboxOpen || false);
  console.log('select placeholder', props.placeholder);
  const CustomSelect = React.forwardRef(function CustomSelect<
    TValue extends {}
  >(
    props: SelectUnstyledProps<TValue>,
    ref: React.ForwardedRef<HTMLButtonElement>
  ) {
    const StyledPopper = styled(PopperUnstyled)([
      tw`z-10 min-w-fit w-fit max-h-96 overflow-auto shadow-md bg-blue-dark-300`, //bg to theme
      css`
        border-radius: 2px;
        & .MuiSelect-listbox,
        & .MuiSelect-listbox:active,
        & .MuiSelect-listbox:focus,
        & .MuiSelect-listbox:target,
        & .MuiSelect-listbox:focus-visible {
          border-color: transparent !important;
          outline: none !important;
        }
        &::-webkit-scrollbar {
          width: 6px;
          background-color: transparent;
        }
        &::-webkit-scrollbar-track {
          border-radius: 15px;
          margin-block: 10px !important;
        }

        &::-webkit-scrollbar-thumb {
          height: 50px;
          background: rgba(255, 255, 255, 0.1);
          border-radius: 100px;
        }

        border: 1px solid #474a5a !important;
        margin-top: 4px !important;
        width: 390px !important;
        min-width: 390px;
      `,
      fullWidth &&
        css`
          width: 100%;
        `,
    ]);

    const randomId = useId() as string;
    console.log('props.slots', props.slots);
    const components: SelectUnstyledProps<TValue>['slots'] = {
      root: SelectRoot,
      listbox: StyledListbox,
      popper: StyledPopper,
      ...props.slots,
    };
    return (
      <div style={{ position: 'relative' }}>
        {/* {label && (
          <div
            css={[tw`flex flex-row items-center gap-1 mb-2`, css`color: rgba(255, 255, 255, 0.5);`]}
          >
            <p>{label}</p>
          </div>
        )}*/}
        <InputLabel
          id={randomId}
          variant={'outlined'}
          css={[
            tw`flex flex-row-reverse justify-end gap-1 -ml-1.5 pr-1 leading-4 h-full`,
            !required && tw`pl-1`,

            css`
              &.${inputLabelClasses.root} {
                ${tw`rounded-lg`}
                font: inherit;
                color: rgba(255, 255, 255, 0.7); //лэйбл при пустом инпуте
                background: transparent;
                top: 0px;
              }

              &.Mui-focused {
                ${tw`w-fit`}
                color:  rgba(255, 255, 255, 0.5); //label focused (когда уже уехал)
                font-weight: 500;
              }

              &.MuiInputLabel-shrink {
                ${tw`w-fit leading-6 h-auto -top-0`}
                ${tw`ml-0 bg-white pl-1`}
                     background: transparent;
                color: rgba(
                  255,
                  255,
                  255,
                  0.5
                ); //цвет лэйбла при заполненном инпуте

                .${inputLabelClasses.asterisk} {
                  display: none;
                }
              }
            `,
          ]}
        >
          {label}
        </InputLabel>
        <SelectUnstyled
          {...props}
          id={randomId}
          css={[
            readOnly && tw`pointer-events-none`,
            tw`whitespace-nowrap  bg-blue-dark-200!  border-gray-dark-100! rounded-l rounded-r`,
            css`
              height: 53px;
              color: white !important;
              &:active,
              &:hover {
                color: white !important;
                background-color: ${tw`bg-blue-dark-200!`};
              }
              &:hover {
                ${tw`border-blue-light-900!`}
              }
              &:active,
              &:focus {
                ${tw`border-blue-light-550!`}
              }
            `, // to theme
            props.disabled &&
              tw`pointer-events-none bg-blue-dark-200 opacity-100 border-gray-dark-100`,
            variant === 'error' && tw`border-red-light-450!`,
          ]}
          ref={ref}
          slots={components}
          autoFocus={false}
          renderValue={(option) => {
            console.log(
              'props.renderValue',
              props.renderValue,
              'option',
              option
            );
            if (props.renderValue && option?.value) {
              const rendered = props.renderValue(option);
              if (rendered) {
                return rendered;
              }
            }
            console.log('option==', option);

            return option && option?.label ? (
              <p css={props.disabled && tw`text-base-light-300`}>
                <div style={{ color: 'white' }}> {option.label}</div>
              </p>
            ) : (
              <span style={{ color: 'rgba(255,255,255,0.5)' }}>
                {required ? '* ' + props.placeholder : props.placeholder}
              </span>
            );
          }}
        />
      </div>
    );
  });

  const SelectRoot = React.forwardRef(
    <TValue extends {}>(
      props: SelectUnstyledRootSlotProps<TValue>,
      ref: React.ForwardedRef<HTMLButtonElement>
    ) => {
      const { ownerState, ...other } = props;

      return (
        <>
          <Button
            {...other}
            full
            ref={ref}
            variant="secondary"
            css={[
              tw`px-2 mr-2 flex justify-between`,
              css`
                &.${selectUnstyledClasses.expanded} {
                  &::after {
                    ${tw`w-7 justify-center`}
                    content: url(${typeof chevronIcon === 'object'
                      ? chevronIcon.src
                      : chevronIcon});
                    transform: rotate(180deg);
                    margin-top: 4px;
                  }
                }

                &::after {
                  ${tw`w-7 flex justify-center`}
                  content: url(${typeof chevronIcon === 'object'
                    ? chevronIcon.src
                    : chevronIcon});
                  margin-top: -4px;
                }
              `,
              tw`font-normal overflow-hidden border-base-light-200`,
              isOpen && tw`border-blue-light-600 text-base-light-900!`,
              tw`text-base-light-700`,
              !isOpen && variant === 'error' && tw`border-red-light-450`,
            ]}
          >
            {other.children}
          </Button>
          {variant === 'error' && message && (
            <div css={tw`flex gap-1 items-center h-5 mt-2`}>
              <div css={tw`text-left w-full text-red-light-450 text-sm`}>
                {message}
              </div>
            </div>
          )}
        </>
      );
    }
  );

  const buttonRef = React.useRef<HTMLDivElement>(null);
  const inputRef = React.useRef<HTMLDivElement>(null);
  useClickAway(buttonRef, () => {
    setIsOpen(false);
  });

  const containsText = (text: string, searchText: string) =>
    text.toLowerCase().indexOf(searchText.toLowerCase()) > -1;

  const [searchText, setSearchText] = useState('');

  const displayedOptions = useMemo(
    () => options?.filter((option) => containsText(option.name, searchText)),
    [searchText]
  );

  return (
    <div>
      <CustomSelect
        {...props}
        onListboxOpenChange={(open) => {
          if (open) setIsOpen(open);
        }}
        listboxOpen={isOpen}
        value={value}
        onChange={(_e, value: unknown) => {
          onChange && onChange(value as T);
          setIsOpen(false);
        }}
        slotProps={{
          ...props.slotProps,
          popper: {
            ...props.slotProps?.popper,
            ref: buttonRef,
          },
        }}
      >
        <ListSubheader>
          <Input
            onChange={(e) => setSearchText(e.target.value)}
            value={searchText}
            noBorder={true}
            height={44}
            left={
              <Search
                color={'rgba(255, 255, 255, 0.5)'}
                width={18}
                height={18}
                style={{ marginRight: '5px' }}
              />
            }
            ref={(input) => {
              if (input != null) {
                console.log('hehehhehehehehe', input);
                setTimeout(() => {
                  input.focus();
                }, 0);
              }
            }}
          />
          {/* <TextField
            size="small"
            autoFocus={true}
            value={searchText}
            placeholder="Type to search..."
            fullWidth
            InputProps={{
              inputRef: (input) => {
                 if(input != null) {
                   setTimeout(()=>{input.focus();}, 0)
               }
            },
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              )
            }}

            onChange={(e) => setSearchText(e.target.value)}
            onKeyDown={(e) => {
              if (e.key !== "Escape") {
                e.stopPropagation();
              }
            }}
          />*/}
        </ListSubheader>
        {displayedOptions?.map((option, i) => (
          <StyledOption key={i} value={option.value}>
            {option.label}
          </StyledOption>
        ))}
      </CustomSelect>
      {bottom && (
        <div css={tw`flex mt-2 text-base-light-700 text-xs`}>{bottom}</div>
      )}
    </div>
  );
};

Select.displayName = 'Select';
