import React from 'react';
import { MenuItem, TextField } from '@mui/material';
import tw from 'twin.macro';
import { BaseIcon } from '@base/index';
import { ALL_ICONS } from '@constants/icons';
type Props = {
  label: string;
  placeholder: string;
  required: boolean;
  error: boolean;
};

const SelectMultiple: React.FC<Props> = (args) => {
  const [value, setValue] = React.useState(['USD']);
  return (
    <div css={tw`w-5/12 min-w-[300px]`}>
      <TextField
        {...args}
        select
        SelectProps={{
          sx: {
            [`*`]: {
              border: 'none !important',
            },
          },
          renderValue: (value) => {
            if (Array.isArray(value)) {
              if (value.length === 1 && value[0] === '')
                return args.placeholder;
              return value.join(', ');
            } else {
              return value;
            }
          },
          IconComponent: (props) => {
            return (
              <div
                {...props}
                css={tw`flex items-center justify-center h-full top-0! transform-none!`}
              >
                <BaseIcon
                  viewBox="0 0 20 20"
                  icon={ALL_ICONS.TICK_ICON_LIGHT}
                  onClick={() => {}}
                />
              </div>
            );
          },
          multiple: true,
          displayEmpty: true,
          onChange: (event) => {
            const value = event.target.value as Array<any>;
            if (value.length === 0) {
              setValue(['']);
            } else {
              setValue(value.filter((item) => item !== ''));
            }
          },
        }}
        value={value}
      >
        <MenuItem
          disabled
          value=""
          css={{
            display: 'none',
          }}
        >
          {args.placeholder}
        </MenuItem>
        <MenuItem value="USD">
          <div css={tw`flex items-center gap-1`}>USD</div>
        </MenuItem>
        <MenuItem value="EUR">
          <div css={tw`flex items-center gap-1`}>EUR</div>
        </MenuItem>
        <MenuItem value="GBP">
          <div css={tw`flex items-center gap-1`}>GBP</div>
        </MenuItem>
      </TextField>
    </div>
  );
};

export default SelectMultiple;
