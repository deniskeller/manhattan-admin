import { FormControl, InputBase, InputLabel } from '@mui/material';
import InputAdornment from '@mui/material/InputAdornment';
import AccountCircle from '@mui/icons-material/AccountCircle';
import { inputBaseClasses } from '@mui/material/InputBase';
import { inputLabelClasses } from '@mui/material/InputLabel';
import {
  forwardRef,
  Fragment,
  InputHTMLAttributes,
  ReactNode,
  useEffect,
  useRef,
  useState,
} from 'react';
import { AlertTriangle, Check } from 'react-feather';
import tw, { css } from 'twin.macro';
import useId from '@accessible/use-id';

type TThemes = 'light' | 'dark';

type InputProps = {
  label?: ReactNode;
  variant?: 'default' | 'error' | 'success';
  message?: string;
  left?: ReactNode;
  right?: ReactNode;
  bottom?: ReactNode;
  labelVariant?: 'default' | 'floating';
  readOnly?: boolean;
  theme?: TThemes;
  noBorder?: boolean;
  height?: number;
  noBottom?: boolean;
  valueCompare?: string; //for input.password
} & InputHTMLAttributes<HTMLInputElement>;

const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      label,
      variant,
      message,
      left,
      right,
      bottom,
      labelVariant = 'floating',
      readOnly = false,
      theme = 'dark',
      type,
      noBorder,
      height,
      ...props
    },
    ref
  ) => {
    const inputRef = useRef<HTMLInputElement | null>(null);
    const randomId = useId();
    const [focused, setFocused] = useState(false);
    const [leftRef, setLeftRef] = useState<HTMLDivElement | null>(null);
    type TStyles = {
      default: any[];
      light: any;
      dark: any;
    };
    const inputStyles = {
      default: [
        tw`flex items-end h-full border-none outline-none rounded-lg p-0 px-2 w-full text-ellipsis`,
        props.disabled && tw`bg-gray-light-100 text-base-light-300`,
      ],
      dark: {
        common: [
          tw`text-base-light-10 placeholder:text-base-light-10`,
          tw`caret-blue-light-550 w-full bg-blue-dark-200 rounded-l`,
          css`
            & .${inputBaseClasses.input} {
              background-color: #191d31;
            }

            &
              .${inputBaseClasses.input}:-webkit-autofill,
              &
              .${inputBaseClasses.input}:-webkit-autofill:hover,
              &
              .${inputBaseClasses.input}:-webkit-autofill:focus
              &
              .${inputBaseClasses.input}:-webkit-autofill {
              border: 0;
              -webkit-text-fill-color: #ffffff;
              -webkit-box-shadow: 0 0 0px 1000px #191d31 inset;
            }
          `,
        ],
        hover:
          !props.disabled &&
          tw`hover:placeholder:text-base-light-10 hover:text-base-light-10`,
        focus: tw`focus:text-base-light-10 focus:placeholder:text-base-light-10`,
      },
    } as TStyles;

    let heightClass = 'h-[53px]';
    if (height) {
      heightClass = `h-[${height}px]`;
    }

    const divStyles = {
      default: [
        tw`border outline-none h-[53px]`,
        css`
          border-radius: 2px !important;
        `,
        height
          ? css`
              height: ${height}px!important;
            `
          : '',
      ],
      dark: {
        common: [
          tw`bg-blue-dark-200`,
          !noBorder
            ? tw`border-gray-dark-100`
            : css`
                border-style: none !important;
              `,
          props.disabled && tw`border-gray-dark-100`,
        ],
        hover: !props.disabled && !noBorder && tw`hover:border-blue-light-900`,
        focus: !noBorder && tw`focus-within:border-blue-light-550`,
      },
      light: {},
    } as TStyles;

    const themes = {
      dark: {
        wrapperCss: [
          tw`flex items-end border rounded-l rounded-r gap-1`,
          divStyles.default,
          divStyles[theme].common,
          divStyles[theme].hover,
          divStyles[theme].focus,
          variant === 'error' && tw`border-red-light-450!`,
          css`
            & .${inputBaseClasses.root} {
              padding: 0;
              height: 100%;
              width: 100%;
              & .${inputBaseClasses.input} {
              }
            }
          `,
        ],
        inputBaseCss: [
          inputStyles.default,
          inputStyles[theme].common,
          inputStyles[theme].hover,
          inputStyles[theme].focus,
          css`
            input[type='date']::-webkit-calendar-picker-indicator {
              display: none;
            }
            &.${inputBaseClasses.root} {
              font: inherit;
              padding: 0 16px !important;
            }
          `,
        ],
        inputRightCss: [
          css`
            &,
            & * {
              color: rgba(255, 255, 255, 0.5);
            }
          `,
        ],
        inputLabelCss: [
          tw`flex flex-row-reverse justify-end gap-1 -ml-1.5 pr-1 leading-4 h-full`,
          !props.required && tw`pl-1`,

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
          leftRef &&
            css`
              margin-left: ${leftRef.clientWidth}px;
            `,
        ],
        iconLeftCss: css`
          align-self: center;
          padding-left: 10px;
        `,
      },

      light: {
        wrapperCss: [
          tw`flex items-end border rounded-l rounded-r gap-1`,
          tw`focus:border-gray-500`,
          divStyles.default,
          divStyles[theme].common,
          divStyles[theme].hover,
          divStyles[theme].focus,
          variant === 'error' && tw`border-red-light-450`,
          css`
            & .${inputBaseClasses.root} {
              padding: 0;
              height: 100%;
              width: 100%;
              & .${inputBaseClasses.input} {
              }
            }
          `,
        ],
        inputBaseCss: [
          tw`caret-blue-light-600 w-full bg-blue-dark-200 rounded-l`,
          tw`text-base-light-10 placeholder:text-base-light-10`,
          inputStyles.default,
          inputStyles[theme].common,
          inputStyles[theme].hover,
          inputStyles[theme].focus,
          css`
            input[type='date']::-webkit-calendar-picker-indicator {
              display: none;
            }
            &.${inputBaseClasses.root} {
              font: inherit;
              padding: 0 10px;
            }
          `,
        ],
        inputRightCss: [tw`text-base-light-300`],
        inputLabelCss: [
          tw`text-base-light-700 flex flex-row-reverse justify-end gap-1 -ml-1.5 pr-1 leading-4 h-full`,
          !props.required && tw`pl-1`,

          css`
            &.${inputLabelClasses.root} {
              ${tw`rounded-lg -top-1.5`}
              font: inherit;
            }

            &.Mui-focused {
              ${tw`font-semibold text-blue-light-600 w-fit`}
            }

            &.MuiInputLabel-shrink {
              ${tw`w-fit leading-6 h-auto -top-0`}
              ${tw`ml-0 bg-white pl-1`}

                    .${inputLabelClasses.asterisk} {
                display: none;
              }
            }
          `,
          leftRef &&
            css`
              margin-left: ${leftRef.clientWidth}px;
            `,
        ],
        iconLeftCss: '',
      },
    };

    //191D31
    return (
      <FormControl fullWidth css={[readOnly && tw`[*]:pointer-events-none!`]}>
        <div css={[tw`flex flex-col rounded-lg`]}>
          {labelVariant === 'floating' && label && (
            <InputLabel
              htmlFor={randomId}
              required={props.required}
              variant={'filled'}
              css={themes[theme].inputLabelCss}
            >
              {label}
            </InputLabel>
          )}
          {labelVariant === 'default' && label && (
            <div
              css={tw`flex flex-row items-center gap-1 text-base-light-500 mb-2`}
            >
              <p>{label}</p>
              {props.required && <p> *</p>}
            </div>
          )}

          <div //wrapperCss
            css={themes[theme].wrapperCss}
          >
            {left && (
              <div
                ref={setLeftRef}
                onClick={() => {
                  inputRef.current?.focus();
                }}
                css={themes[theme].iconLeftCss}
                /* css={tw`[&>*]:stroke-base-light-700 ml-2`}*/
              >
                {left}
              </div>
            )}
            <InputBase
              inputProps={{
                ...props,

                placeholder:
                  labelVariant === 'floating' && label && !focused
                    ? ''
                    : props.placeholder,
                ref: (node: HTMLInputElement) => {
                  if (typeof ref === 'function') {
                    /* console.log("funcccccc", node); */
                    ref(node);
                  }
                },
              }}
              id={randomId}
              css={[
                ...themes[theme].inputBaseCss,
                !label &&
                  css`
                    &.${inputBaseClasses.root} {
                      align-items: center;
                    }
                  `,
              ]}
              onFocus={() => {
                setFocused(true);
              }}
              type={type}
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
                css={[
                  css`
                    align-self: center;
                    padding-right: 16px;
                  `,
                  ...themes[theme].inputRightCss,
                ]}
              >
                {right}
              </div>
            )}
          </div>
        </div>
        {bottom && (
          <div
            css={[
              tw`flex mt-2 text-xs`,
              css`
                color: rgba(255, 255, 255, 0.7);
              `,
            ]}
          >
            {bottom}
          </div>
        )}
        {variant === 'error' && message && (
          <div css={tw`flex gap-1 items-center mt-2`}>
            <div css={tw`text-left w-full text-red-light-450 text-sm`}>
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
      </FormControl>
    );
  }
);

export default Input;
Input.displayName = 'InputTw';
