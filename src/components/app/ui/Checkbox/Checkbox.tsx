import { Tooltip as DefaultTooltip } from '@mui/material';
import { forwardRef, ReactNode, useRef } from 'react';
import { Info } from 'react-feather';
import tw, { styled } from 'twin.macro';
import { TooltipProps, tooltipClasses } from '@mui/material/Tooltip';

const Tooltip = ({ className, ...props }: TooltipProps) => (
  <DefaultTooltip
    {...props}
    classes={{ popper: className }}
    css={`
      & .${tooltipClasses.tooltip} {
        ${tw`text-base-light-900 shadow-md bg-gray-50 text-xs font-medium`}
      }

      & .${tooltipClasses.arrow} {
        ${tw`text-gray-50`}
      }
    `}
  />
);

type CheckboxProps = {
  label?: string;
  variant?: 'default' | 'error';
  error?: string;
  tooltip?: ReactNode;
  tooltipProps?: Partial<TooltipProps>;
} & React.ComponentProps<'input'>;

// eslint-disable-next-line react/display-name
export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  ({ label, tooltip, tooltipProps, variant, error, ...props }, ref) => {
    const inputRef = useRef<HTMLInputElement | null>(null);

    return (
      <div>
        <div css={[tw`w-fit flex items-center cursor-pointer gap-2`]}>
          <div
            onClick={() => {
              inputRef.current?.click();
            }}
            css={[tw`w-fit flex items-center cursor-pointer gap-2`]}
          >
            <input
              ref={(node) => {
                inputRef.current = node;
                if (typeof ref === 'function') {
                  ref(node);
                } else if (ref) {
                  ref.current = node;
                }
              }}
              onClick={(e) => {
                e.stopPropagation();
              }}
              type="checkbox"
              css={[
                tw`
              border-base-light-100
            appearance-none
            border
            rounded-md
            w-6
            h-6
            p-1
            cursor-pointer
            relative
            `,
                variant === 'error' && tw`border-red-500`,
                tw`checked:bg-blue-light-600 checked:text-white`,
                tw`[&:not(:checked)]:hover:bg-base-light-100`,
                tw`checked:after:content-['✓'] after:absolute after:top-0 after:flex after:items-center after:h-full`,
              ]}
              {...props}
            />
            {label && <label css={tw`cursor-pointer`}>{label}</label>}
          </div>
          {tooltip && (
            <Tooltip
              {...tooltipProps}
              arrow
              title={tooltip}
              placement="top-start"
            >
              <div css={tw`[&>*]:stroke-base-light-500`}>
                <Info width={18} height={18} />
              </div>
            </Tooltip>
          )}
          {error && <div css={tw`text-red-500`}>{error}</div>}
        </div>
      </div>
    );
  }
);
