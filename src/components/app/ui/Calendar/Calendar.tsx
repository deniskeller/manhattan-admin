import { forwardRef } from 'react';
import { ChevronLeft, ChevronRight } from 'react-feather';
import tw, { css } from 'twin.macro';
import {
  OnChangeDateCallback,
  CalendarProps,
  default as DefaultCalendar,
} from 'react-calendar';

type InputProps = {} & CalendarProps;

// eslint-disable-next-line react/display-name
export const Calendar = forwardRef<HTMLInputElement, InputProps>(
  ({ ...props }: InputProps, ref) => {
    const dayButtonStyle = tw`p-1 rounded-lg w-7 h-7 flex items-center justify-center border border-gray-light-300 shadow`;

    return (
      <div
        css={[
          tw`w-96 shadow-md rounded-lg`,
          css`
            & .react-calendar {
              &__tile {
                ${tw`relative block p-1`}

                &--active {
                  &.react-calendar__month-view__days__day::before {
                    content: '';
                    position: absolute;
                    top: 0;
                    left: 50%;
                    height: 100%;
                    ${tw`border border-blue-light-600 rounded-full aspect-square -translate-x-1/2`}
                  }
                }
              }

              &__month-view {
                ${tw`px-3 py-2`}

                &__days {
                  ${tw`grid! grid-cols-7 gap-1`}

                  &__day {
                    abbr {
                      ${tw`z-10 relative text-sm block`}
                    }

                    &:hover {
                      ${tw`text-white`}

                      &::before {
                        content: '';
                        position: absolute;
                        top: 0;
                        left: 50%;
                        height: 100%;
                        ${tw`bg-blue-light-600 rounded-full aspect-square -translate-x-1/2`}
                      }
                    }
                  }
                }

                &__weekdays {
                  ${tw`grid! grid-cols-7 gap-1`}
                }
              }

              &__navigation {
                ${tw`flex justify-between items-center`}
                ${tw`border-b border-gray-light-200 px-4 py-1`}

              &__label__labelText--from {
                  ${tw`text-base-light-900`}
                }

                &__next-button {
                  ${dayButtonStyle}
                }

                &__prev-button {
                  ${dayButtonStyle}
                }

                &__next2-button {
                  ${tw`hidden`}
                }

                &__prev2-button {
                  ${tw`hidden`}
                }
              }

              &__month-view__weekdays__weekday {
                ${tw`text-base-light-900 flex justify-center uppercase`}
                & > * {
                  ${tw`no-underline`}
                }
              }

              & .react-calendar__month-view__days__day--neighboringMonth {
                ${tw`text-base-light-500`}
                &:hover {
                  ${tw`text-white`}
                }
              }
            }
          `,
        ]}
      >
        <DefaultCalendar
          {...props}
          inputRef={ref || undefined}
          nextLabel={<ChevronRight />}
          prevLabel={<ChevronLeft />}
        />
        <div
          css={tw`flex justify-center text-sm text-blue-light-500 cursor-pointer py-2 border-t border-gray-light-200`}
          onClick={(e) => {
            if (props.onChange) {
              const onChange = props.onChange as OnChangeDateCallback;

              onChange(new Date(), e as any);
            }
          }}
        >
          Today
        </div>
      </div>
    );
  }
);
