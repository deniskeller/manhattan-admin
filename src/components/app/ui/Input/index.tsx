import { default as InputBase } from "./Input";
import { InputCalendar } from "./input-calendar";
import { InputEmail } from "./input-email";
import { InputPhone } from "./input-phone";

const Input = Object.assign(InputBase, {
  Calendar: InputCalendar,
  Email: InputEmail,
  Phone: InputPhone,
});

export { Input };
