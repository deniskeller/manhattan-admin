import { forwardRef, ReactNode, useRef } from "react";
import tw, {css,  styled } from "twin.macro";
import {
  Tooltip as DefaultTooltip,
  TooltipProps,
  tooltipClasses,
} from "@mui/material";
import { Check, Info } from "react-feather";

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

export type CheckboxProps = {
  label?: string;
  variant?: "default" | "error";
  error?: string;
  tooltip?: ReactNode;
  tooltipProps?: Partial<TooltipProps>;
  theme: "light" | "dark"
};

export const Checkbox = forwardRef<
  HTMLInputElement,
  CheckboxProps & React.ComponentProps<"input">
  >(({ label,
              tooltip,
              tooltipProps,
              variant,
              error,
              theme,
               ...props },
     ref) => {
  const inputRef = useRef<HTMLInputElement | null>(null);
  type TThemes = {
    dark: {
      inputCss: {
        common: any[],
        disabled: any[],
      },
      labelCss: {
        common: any[],
        disabled: any[],
      },
    },
    light: {
      inputCss: {
        common: any[],
        disabled: any[],
      },
      labelCss: {
        common: any[],
        disabled: any[],
      },
    },
  }
  const themes = {
    dark:{
      inputCss: {
        common: [
          tw`
                  border-base-light-100
                  bg-base-light-11!`,
          css`                
                   border: 1px solid rgba(255, 255, 255, 0.2);`,
          tw`checked:bg-blue-light-900! checked:text-white! checked:border-blue-light-900`,
          tw`[&:not(:checked)]:hover:bg-base-light-11!`,
          css`
                   &:not(:checked):hover{
                     border-color:  #2E3C8D;
                   }`,


        ],
        disabled: [
          css` & {border: none!important;
           background:  rgba(255, 255, 255, 0.1)!important;
           }
           `

        ]

      },
      labelCss:{
        common: [
          css`color: white;`
        ],
        disabled: [
          css`color: rgba(255, 255, 255, 0.4);`
        ]
      }

    },
    light:{

    }
  } as TThemes;

  return (
    <div>
      <div
        css={[
          tw`w-fit flex items-center cursor-pointer gap-2`,
          props.disabled && tw`pointer-events-none opacity-40`,
        ]}
      >
        <div
          onClick={() => {
            inputRef.current?.click();
          }}
          css={[tw`w-fit flex items-start cursor-pointer gap-2`]}
        >
          <div css={tw`w-6 h-6 relative`}>
            <input
              ref={(node) => {
                inputRef.current = node;
                if (typeof ref === "function") {
                  ref(node);
                } else if (ref) {
                  ref.current = node;
                }
              }}
              onClick={(e) => {
                console.log("eeeeeeeee",e);
                props.onClick?.(e);
                e.stopPropagation();
              }}
              type="checkbox"
              className="peer"
              css={[
                tw`             
            appearance-none
            border
            rounded-md
            w-6
            h-6
            cursor-pointer
            aspect-square
            `,

                css`                                
                  border-radius: 2px;              
                `,
                ...themes[theme]?.inputCss.common,
                variant === "error" && tw`border-red-light-450`,
                 props.disabled &&  themes[theme].inputCss.disabled[0],

              ]
              }
              {...props}
            />
            <div
              css={[tw`invisible peer-checked:visible absolute top-0 left-0 text-white scale-95`,
                tw`w-6 h-6`,
                css`display: flex; align-items: center; justify-content: center;
                `
              ]}
            >
              <Check width={16}/>
            </div>
          </div>
          {label && <label css={[tw`cursor-pointer w-full`,
            ...themes[theme].labelCss.common,
            props.disabled && themes[theme].labelCss.disabled[0]
          ]}>{label}</label>}
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
        {error && <div css={tw`text-red-light-450`}>{error}</div>}
      </div>
    </div>
  );
});

Checkbox.displayName = "Checkbox";