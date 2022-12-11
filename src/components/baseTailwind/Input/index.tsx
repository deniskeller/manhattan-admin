import { default as InputBase } from "./Input";
import { InputEmail } from "./InputEmail";
import { InputPhone } from "./InputPhone";
import { InputCalendar } from "./InputCalendar";
import { InputPassword } from "./InputPassword";

const Input = Object.assign(InputBase, {
  Calendar: InputCalendar,
  Email: InputEmail,
  Phone: InputPhone,
  Password: InputPassword,
});

export { Input };
