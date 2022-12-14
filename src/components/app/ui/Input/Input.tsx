import { FormControl, InputBase, InputLabel } from '@mui/material';
import { inputBaseClasses } from '@mui/material/InputBase';
import { inputLabelClasses } from '@mui/material/InputLabel';
import {
  forwardRef,
  InputHTMLAttributes,
  ReactNode,
  useRef,
  useState,
} from 'react';
import { AlertTriangle, Check } from 'react-feather';
import tw, { css } from 'twin.macro';

type InputProps = {
  label?: ReactNode;
  variant?: 'default' | 'error' | 'success';
  message?: string;
  full?: boolean;
  left?: ReactNode;
  right?: ReactNode;
  bottom?: ReactNode;
} & InputHTMLAttributes<HTMLInputElement>;

// eslint-disable-next-line react/display-name
export default forwardRef<HTMLInputElement, InputProps>(
  ({ label, variant, message, full, left, right, bottom, ...props }, ref) => {
    const inputStyles = {
      default: tw`flex text-base-light-700 border-none outline-none rounded-lg h-full p-0 px-2 w-full text-ellipsis placeholder:text-base-light-700`,
      hover: tw`hover:placeholder:text-base-light-900 hover:text-base-light-900`,
      focus: tw`focus:text-base-light-900 focus:placeholder:text-base-light-900`,
    };
    const divStyles = {
      default: tw`border-base-light-200 border outline-none h-11`,
      hover: tw`hover:border-base-light-500`,
      focus: tw`focus-within:border-blue-light-600`,
    };
    const inputRef = useRef<HTMLInputElement | null>(null);
    const randomId =
      Math.random().toString(36).substring(2, 15) +
      Math.random().toString(36).substring(2, 15);
    const [focused, setFocused] = useState(false);
    const [leftRef, setLeftRef] = useState<HTMLDivElement | null>(null);

    return (
      <FormControl>
        <div css={[tw`flex flex-col h-11`, full ? tw`w-full` : tw`w-fit`]}>
          {label && (
            <InputLabel
              htmlFor={randomId}
              required={props.required}
              css={[
                tw`bg-white text-base-light-700 flex flex-row-reverse justify-end gap-1 -ml-1 pr-1 leading-4`,
                !props.required && tw`pl-1`,

                css`
                  &.${inputLabelClasses.root} {
                    ${tw`rounded-lg`}
                  }

                  &.Mui-focused {
                    ${tw`font-semibold text-blue-light-600 w-fit`}
                  }

                  &.MuiInputLabel-shrink {
                    ${tw`w-fit leading-6`}
                    ${tw`ml-0`}
                  }
                `,
                leftRef &&
                  css`
                    margin-left: ${leftRef.clientWidth}px;
                  `,
              ]}
            >
              {label}
            </InputLabel>
          )}

          <div
            css={[
              tw`flex items-center border rounded-lg gap-1`,
              tw`focus:border-gray-500`,
              divStyles.default,
              divStyles.hover,
              divStyles.focus,
              variant === 'error' && tw`border-red-500`,
              css`
                & .${inputBaseClasses.root} {
                  padding: 0;
                  height: 100%;
                  width: 100%;
                  & .${inputBaseClasses.input} {
                    ${inputStyles.default}
                    ${inputStyles.hover}
                    ${inputStyles.focus}
                  }
                }
              `,
            ]}
          >
            {left && (
              <div
                ref={setLeftRef}
                onClick={() => {
                  inputRef.current?.focus();
                }}
                css={tw`[&>*]:stroke-base-light-700 ml-2`}
              >
                {left}
              </div>
            )}
            <InputBase
              inputProps={{
                ...props,
                placeholder: label && !focused ? '' : props.placeholder,
              }}
              id={randomId}
              css={[
                tw`caret-blue-light-600`,
                css`
                  input[type='date']::-webkit-calendar-picker-indicator {
                    display: none;
                  }
                `,
              ]}
              onFocus={() => {
                setFocused(true);
              }}
              onBlur={() => {
                setFocused(false);
              }}
              ref={(node: HTMLInputElement) => {
                inputRef.current = node;

                if (typeof ref === 'function') {
                  ref(node);
                } else if (ref) {
                  ref.current = node;
                }
              }}
            />
            {right && (
              <div
                onClick={() => {
                  inputRef.current?.focus();
                }}
                css={tw`[&>*]:stroke-base-light-700 mr-2`}
              >
                {right}
              </div>
            )}
          </div>
          {bottom && (
            <div css={tw`flex mt-2 text-base-light-700 text-xs`}>{bottom}</div>
          )}
          {variant === 'error' && (
            <div css={tw`flex gap-1 items-center h-5 mt-2`}>
              <AlertTriangle fill={'red'} stroke={'white'} height={'100%'} />
              <div css={tw`text-left w-full text-base-light-700 text-sm`}>
                {message}
              </div>
            </div>
          )}
          {variant === 'success' && (
            <div css={tw`flex gap-1 items-center h-5 mt-2`}>
              <Check stroke={'green'} height={'100%'} />
              <div css={tw`text-left w-full text-base-light-700 text-sm`}>
                {message}
              </div>
            </div>
          )}
        </div>
      </FormControl>
    );
  }
);
