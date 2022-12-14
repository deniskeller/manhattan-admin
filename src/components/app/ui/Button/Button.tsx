import React, { ComponentProps, forwardRef, PropsWithChildren } from 'react';
import tw from 'twin.macro';

type ButtonProps = {
  variant?: 'primary' | 'secondary' | 'destructive' | 'ghost' | 'icon';
  /**
   * What background color to use
   */
  backgroundColor?: string;
  /**
   * How large should the button be?
   */
  size?: 'small' | 'medium' | 'large';
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
} & ComponentProps<'button'>;

/**
 * Primary UI component for user interaction
 */

// eslint-disable-next-line react/display-name
export const Button = forwardRef<
  HTMLButtonElement,
  PropsWithChildren<ButtonProps>
>(
  (
    {
      variant = 'primary',
      size = 'medium',
      backgroundColor,
      shadow = true,
      centered = false,
      after,
      children,
      before,
      full = false,
      ...props
    }: PropsWithChildren<ButtonProps>,
    ref
  ) => {
    const styles = {
      variant: {
        primary: tw`shadow-sm border border-blue-light-700 bg-blue-light-600 text-white`,
        secondary: tw`shadow-sm border border-gray-light-200 bg-white`,
        destructive: tw`shadow-sm bg-red-light-600 text-white`,
        ghost: tw`shadow-sm border-2 border-blue-light-600`,
        icon: tw`shadow-sm border border-blue-light-700 bg-blue-light-600`,
      },
      hover: {
        primary: tw`hover:bg-blue-light-500`,
        secondary: tw`hover:bg-base-light-50 hover:border-gray-light-500 hover:text-base-light-900`,
        destructive: tw`hover:bg-red-light-500`,
        ghost: tw`hover:border-blue-light-500`,
        icon: tw`hover:bg-blue-light-500`,
      },
      active: {
        primary: tw`active:border-blue-light-300 active:bg-blue-light-300`,
        secondary: tw`active:bg-gray-light-300 active:text-base-light-900`,
        destructive: tw`active:bg-red-light-700`,
        ghost: tw`active:border-blue-light-300`,
        icon: tw`active:bg-blue-light-500`,
      },
    };

    return (
      <button
        type="button"
        ref={ref}
        css={[
          tw`bg-white py-2 px-5 rounded-lg flex font-semibold h-11 items-center`,
          styles.variant[variant],
          styles.hover[variant],
          styles.active[variant],
          full ? tw`w-full` : tw`w-auto`,
          centered && tw`items-center justify-center`,
        ]}
        {...props}
      >
        {before && <span css={tw`mr-2`}>{before}</span>}
        <span
          css={[
            centered && tw`items-center justify-center`,
            tw`overflow-hidden w-full justify-start flex`,
          ]}
        >
          {children}
        </span>
        {after && <span css={tw`ml-2 grow justify-end flex`}>{after}</span>}
      </button>
    );
  }
);
