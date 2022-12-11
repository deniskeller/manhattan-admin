import React, {
  ButtonHTMLAttributes,
  ComponentProps,
  ComponentPropsWithRef,
  forwardRef,
  PropsWithChildren,
} from "react";
import { RotatingLines } from "react-loader-spinner";
import tw from "twin.macro";

type ButtonProps = {
  variant?:
    | "primary"
    | "secondary"
    | "destructive"
    | "ghost"
    | "icon"
    | "transparent";
  /**
   * What background color to use
   */
  backgroundColor?: string;
  /**
   * Shadow depth
   */
  shadow?: boolean;
  /**
   * After node
   */
  after?: React.ReactNode;
  /**
   * Before node
   */
  before?: React.ReactNode;
  /**
   * Center the button
   * @default false
   */
  centered?: boolean;
  /**
   * Fit the button to the container
   * @default false
   */
  full?: boolean;
  loading?: boolean;
};

/**
 * Primary UI component for user interaction
 */

export const Button = forwardRef<
  HTMLButtonElement,
  PropsWithChildren<ButtonProps & ButtonHTMLAttributes<HTMLButtonElement>>
  >(
  (
    {
      variant = "primary",
      backgroundColor,
      shadow = true,
      centered = false,
      after,
      children,
      before,
      full = false,
      loading = false,
      ...props
    },
    ref
  ) => {
    const styles = {
      variant: {
        primary: tw`shadow-sm border border-blue-light-700 bg-blue-light-600! text-white`,
        secondary: tw`shadow-sm border border-gray-light-200 bg-white!`,
        destructive: tw`shadow-sm bg-red-light-600! text-white`,
        ghost: tw`shadow-sm border border-blue-light-600`,
        icon: tw`shadow-sm border border-blue-light-700 bg-blue-light-600!`,
        transparent: tw`bg-transparent!`,
      },
      hover: {
        primary: tw`hover:bg-blue-light-500!`,
        secondary: tw`hover:bg-base-light-50! hover:border-gray-light-500 hover:text-base-light-900`,
        destructive: tw`hover:bg-red-light-500!`,
        ghost: tw`hover:border-blue-light-500`,
        icon: tw`hover:bg-blue-light-500!`,
        transparent: tw`hover:text-gray-600`,
      },
      active: {
        primary: tw`active:border-blue-light-300 active:bg-blue-light-300!`,
        secondary: tw`active:bg-gray-light-300! active:text-base-light-900`,
        destructive: tw`active:bg-red-light-700!`,
        ghost: tw`active:border-blue-light-300`,
        icon: tw`active:bg-blue-light-500!`,
        transparent: tw`active:text-gray-400`,
      },
      disabled: {
        primary: tw`bg-base-light-200! text-base-light-900 opacity-40`,
        secondary: tw`bg-base-light-200! text-base-light-900 opacity-40`,
        destructive: tw`bg-red-light-400! text-white opacity-40`,
        ghost: tw`border-blue-light-300 opacity-40`,
        icon: tw`bg-blue-light-300! opacity-40`,
        transparent: tw`text-gray-light-200 opacity-40`,
      },
    };

    return (
      <button
        type="button"
        ref={ref}
        css={[
          tw`bg-white py-2 px-5 rounded-lg flex font-semibold h-11 items-center relative`,
          styles.variant[variant],
          props.disabled && styles.disabled[variant],
          !props.disabled && styles.hover[variant],
          !props.disabled && styles.active[variant],
          full ? tw`w-full` : tw`w-fit`,
        ]}
        {...props}
      >
        <div
          css={tw`[*]:h-full h-full flex justify-center absolute left-0 p-1 w-full`}
        >
          <RotatingLines
            strokeColor="grey"
            strokeWidth="5"
            animationDuration="0.75"
            visible={loading}
          />
        </div>
        <div
          css={[tw`w-full justify-start flex`, centered && tw`justify-center`]}
        >
          {before && (
            <span css={[tw`mr-2`, loading && tw`invisible`]}>{before}</span>
          )}
          {children && (
            <div
              css={[
                tw`overflow-hidden w-full justify-start flex`,
                centered && tw`justify-center`,
                loading && tw`invisible`,
              ]}
            >
              {children}
            </div>
          )}
          {after && (
            <span
              css={[tw`ml-2 grow justify-end flex`, loading && tw`invisible`]}
            >
              {after}
            </span>
          )}
        </div>
      </button>
    );
  }
);

Button.displayName = "Button";