import { forwardRef, useState, ComponentPropsWithRef, useRef } from 'react';
import { Calendar } from '../';
import { isValid, format } from 'date-fns';
import Input from './Input';
import { Calendar as CalendarIcon } from 'react-feather';
import { usePopper } from 'react-popper';
import tw from 'twin.macro';
import { useClickAway } from 'react-use';

type InputCalendarProps = {
  defaultValue?: string | Date;
  value?: string | Date;
  calendarProps?: ComponentPropsWithRef<typeof Calendar>;
} & ComponentPropsWithRef<typeof Input>;

export const InputCalendar = forwardRef<HTMLInputElement, InputCalendarProps>(
  ({ type = 'date', calendarProps, ...props }, ref) => {
    const [value, setValue] = useState<Date | null>(
      (typeof props.value === 'string' && isValid(new Date(props.value))
        ? new Date(props.value)
        : props.value instanceof Date && !isNaN(props.value.getTime())
        ? props.value
        : null) ??
        (typeof props.defaultValue === 'string' &&
        isValid(new Date(props.defaultValue))
          ? new Date(props.defaultValue)
          : props.defaultValue instanceof Date &&
            !isNaN(props.defaultValue.getTime())
          ? props.defaultValue
          : null)
    );
    const [isCalendarOpen, setIsCalendarOpen] = useState(false);
    const [referenceElement, setReferenceElement] =
      useState<HTMLInputElement | null>(null);
    const [popperElement, setPopperElement] = useState<HTMLDivElement | null>(
      null
    );
    const { styles, attributes } = usePopper(referenceElement, popperElement, {
      placement: 'bottom-end',
      modifiers: [
        {
          name: 'offset',
          options: {
            offset: [0, 8],
          },
        },
      ],
    });
    const calendarRef = useRef<HTMLInputElement>(null);
    useClickAway(calendarRef, () => {
      if (isCalendarOpen) setIsCalendarOpen(false);
    });

    return (
      <>
        {isCalendarOpen && (
          <div
            css={tw`bg-white z-10`}
            ref={setPopperElement}
            style={styles.popper}
            {...attributes.popper}
          >
            <div ref={calendarRef}>
              <Calendar
                {...calendarProps}
                value={value && !isNaN(value.getTime()) ? value : undefined}
                onChange={(date: unknown) => {
                  if (date && date instanceof Date && !isNaN(date.getTime())) {
                    setValue(new Date(format(date, 'yyyy-MM-dd')));
                  }
                  setIsCalendarOpen(false);
                }}
              />
            </div>
          </div>
        )}
        <Input
          {...props}
          ref={setReferenceElement}
          type="date"
          onChange={(e) => {
            setValue(new Date(e.target.value));
          }}
          value={value && isValid(value) ? format(value, 'yyyy-MM-dd') : ''}
          right={
            <CalendarIcon
              onClick={() => {
                setIsCalendarOpen(!isCalendarOpen);
              }}
              style={{
                pointerEvents: isCalendarOpen ? 'none' : 'auto',
                cursor: 'pointer',
              }}
            />
          }
        />
      </>
    );
  }
);

InputCalendar.displayName = 'Input.Calendar';
