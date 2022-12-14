import { FormControl } from '@mui/material';
import { Button } from '../';
import { useState } from 'react';
import * as React from 'react';
import SelectUnstyled, {
  SelectUnstyledProps,
  SelectUnstyledRootSlotProps,
} from '@mui/base/SelectUnstyled';
import OptionUnstyled, {
  optionUnstyledClasses,
} from '@mui/base/OptionUnstyled';
import tw, { css } from 'twin.macro';
import { Play } from 'react-feather';
import PopperUnstyled from '@mui/base/PopperUnstyled';
import { useClickAway } from 'react-use';
import styled from '@emotion/styled';

const StyledListbox = styled('ul')([
  tw`border border-gray-100 rounded-lg overflow-y-auto h-full`,
]);

const StyledOption = styled(OptionUnstyled)(
  css`
    list-style: none;
    padding: 8px;
    cursor: default;

    &:last-of-type {
      border-bottom: none;
    }

    ${tw`text-base-light-900 font-medium`}

    &.${optionUnstyledClasses.selected} {
      ${tw`text-base-light-900 font-medium bg-gray-200`}
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
  required?: boolean;
  value?: T;
  options?: { value: T; label: React.ReactNode }[];
} & React.ComponentProps<typeof SelectUnstyled>;

export const Select = function <T>({
  value,
  required,
  onChange,
  options,
  ...props
}: SelectProps<T>) {
  const [isOpen, setIsOpen] = useState(false);
  const CustomSelect = React.forwardRef(function CustomSelect<
    TValue extends {}
  >(
    props: SelectUnstyledProps<TValue>,
    ref: React.ForwardedRef<HTMLButtonElement>
  ) {
    const components: SelectUnstyledProps<TValue>['components'] = {
      Root: SelectRoot,
      Listbox: StyledListbox,
      Popper: StyledPopper,
      ...props.components,
    };

    return (
      <SelectUnstyled
        {...props}
        ref={ref}
        components={components}
        renderValue={(option) => {
          if (props.renderValue) {
            const rendered = props.renderValue(option);
            if (rendered) {
              return rendered;
            }
          }

          return option
            ? option.label
            : required
            ? '* ' + (props.placeholder || '')
            : props.placeholder || '';
        }}
      />
    );
  });

  // eslint-disable-next-line react/display-name
  const SelectRoot = React.forwardRef(
    <TValue,>(
      props: SelectUnstyledRootSlotProps<TValue>,
      ref: React.ForwardedRef<HTMLButtonElement>
    ) => {
      const { ownerState, ...other } = props;

      return (
        <Button
          {...other}
          ref={ref}
          variant="secondary"
          after={
            <div css={tw`fill-base-light-300 rotate-90 w-4`}>
              {!ownerState.open ? (
                <Play fill={'inherit'} stroke={'inherit'} width={'100%'} />
              ) : (
                <Play
                  fill={'inherit'}
                  stroke={'inherit'}
                  width={'100%'}
                  style={{
                    transform: 'rotate(180deg)',
                  }}
                />
              )}
            </div>
          }
          css={[
            tw`font-normal overflow-hidden border-base-light-200`,
            isOpen &&
              tw`border-blue-light-600 outline outline-1 outline-blue-light-600`,
            !ownerState.value
              ? tw`text-base-light-300`
              : tw`text-base-light-700`,
          ]}
        >
          {other.children}
        </Button>
      );
    }
  );
  const StyledPopper = styled(PopperUnstyled)(
    tw`w-full z-10 min-w-fit max-h-96 overflow-auto !mt-2 rounded-lg shadow-md`
  );

  const buttonRef = React.useRef<HTMLDivElement>(null);
  useClickAway(buttonRef, () => {
    setIsOpen(false);
  });

  return (
    <>
      <FormControl>
        <CustomSelect
          {...props}
          onListboxOpenChange={(open) => {
            if (open) setIsOpen(open);
          }}
          listboxOpen={isOpen}
          value={value}
          onChange={(value) => {
            onChange && onChange(value);
            setIsOpen(false);
          }}
          componentsProps={{
            ...props.componentsProps,
            popper: {
              ...props.componentsProps?.popper,
              ref: buttonRef,
            },
          }}
        >
          {options?.map((option, i) => (
            <StyledOption key={i} value={option.value}>
              {option.label}
            </StyledOption>
          ))}
        </CustomSelect>
      </FormControl>
    </>
  );
};
