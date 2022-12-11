import {
  forwardRef,
  useState,
  ComponentPropsWithRef,
  useRef,
  useEffect,
} from "react";
import { Calendar } from "@tw/components/index";
import { isValid, format } from "date-fns";
import Input from "./Input";
import { Calendar as CalendarIcon } from "react-feather";
import { usePopper } from "react-popper";
import tw, {css} from "twin.macro";
import { useClickAway } from "react-use";

type InputCalendarProps = {
  defaultValue?: string | Date;
  value?: string | Date;
  calendarProps?: ComponentPropsWithRef<typeof Calendar>;
  onChange?: (date?: Date) => void;
} & ComponentPropsWithRef<typeof Input>;

export const InputCalendar = forwardRef<HTMLInputElement, InputCalendarProps>(
  ({ type = "date", calendarProps, ...props }, ref) => {
    const [value, setValue] = useState<Date | null>(
      (typeof props.value === "string" && isValid(new Date(props.value))
        ? new Date(props.value)
        : props.value instanceof Date && !isNaN(props.value.getTime())
          ? props.value
          : null) ??
      (typeof props.defaultValue === "string" &&
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
    const [popperElement, setPopperElement] =
      useState<HTMLDivElement | null>(null);
    const { styles, attributes } = usePopper(referenceElement, popperElement, {
      placement: "bottom-end",
      modifiers: [
        {
          name: "offset",
          options: {
            offset: [38, 8],
          },
        },
      ],
    });
    const calendarRef = useRef<HTMLInputElement>(null);
    useClickAway(calendarRef, () => {
      if (isCalendarOpen) setIsCalendarOpen(false);
    });
    useEffect(() => {
      props.onChange?.(value ? value : undefined);
    }, [value]);
    const [focused, setFocused] = useState(false);

    return (
      <>
        {isCalendarOpen && (
          <div
            css={[
              tw`bg-blue-dark-300 z-10`,
              css`border: 1px solid rgba(255, 255, 255, 0.2); border-radius: 2px;`,
              css` 
                & .react-calendar__navigation__arrow{
                  border: none;
                  & svg {
                    stroke: white;
                  }
                  &:disabled{
                     & svg {
                      stroke: rgba(255, 255, 255, 0.5); // to theme
                    }
                  }
                }    
                & .react-calendar + div{
                   color:  #6575CD!important
                }
                & *, & .react-calendar__navigation{
                 color: white!important;
                 border-color: rgba(255, 255, 255, 0.05)!important;
                }   
                & .react-calendar__navigation__label__labelText {
                  color: white!important;
                }
                & .react-calendar .react-calendar__month-view__days__day--neighboringMonth *{
                  color: rgba(255, 255, 255, 0.5)!important;
                }
                & .react-calendar__month-view__weekdays__weekday *{
                color: rgba(255, 255, 255, 0.3)!important;
                }
                & .react-calendar__tile--now::before{
                  display: none!important;
                } 
                & .react-calendar__tile--now abbr{
                  background: #2E3C8D;                                          
                  background: rgba(255, 255, 255, 0.1);                                          
                }
                & .react-calendar__tile--active::before{
                  display: none!important;
                }
                & .react-calendar__tile--active abbr{
                  background: #2E3C8D;                                                                                                  
                }
                & .react-calendar__tile abbr{                              
                  width: 24px;
                  height: 24px;
                  margin: 0 auto;
                  padding-top: 1px;
                }
                 & .react-calendar__tile abbr{
                    border: 1px solid transparent!important;
                 }
                & .react-calendar__tile:hover abbr{                              
                   border: 1px solid #2E3C8D!important;
                  border-radius: 2px;  
                }
                & .react-calendar__tile:hover abbr{                              
                   border: 1px solid #2E3C8D!important;
                  border-radius: 2px;  
                }
                & .react-calendar__tile:hover::before{
                    display: none!important
                }
                & .react-calendar__decade-view__years__year:hover,
                & .react-calendar__year-view__months__month:hover abbr,
                {
                  color: #6575CD!important;
                  border-color: transparent!important;
                }
              `
            ]}
            ref={setPopperElement}
            style={styles.popper}
            {...attributes.popper}
          >
            <div ref={calendarRef}>
              <Calendar
                {...calendarProps}
                onActiveStartDateChange={(d)=>{
                  console.log("onActiveStartDateChange",d);}}
                haveTodayButton={true}
                value={value && !isNaN(value.getTime()) ? value : undefined}
                onChange={(date: unknown) => {
                  if (date && date instanceof Date && !isNaN(date.getTime())) {
                    setValue(new Date(format(date, "yyyy-MM-dd")));
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
          type={focused ? "date" : "text"}
          onChange={(e) => {
            setValue(new Date(e.target.value));
          }}
          onFocus={() => {
            setFocused(true);
          }}
          onBlur={() => {
            setFocused(false);
          }}
          value={
            value && isValid(value)
              ? focused
              ? format(value, "yyyy-MM-dd")
              : value.toLocaleDateString()
              : ""
          }
          right={
            <CalendarIcon
              color={"rgba(255, 255, 255, 0.5)"}
              onClick={() => {
                setIsCalendarOpen(!isCalendarOpen);
              }}
              style={{
                pointerEvents: isCalendarOpen ? "none" : "auto",
                cursor: "pointer",
              }}
            />
          }
        />
      </>
    );
  }
);

InputCalendar.displayName = "Input.Calendar";
