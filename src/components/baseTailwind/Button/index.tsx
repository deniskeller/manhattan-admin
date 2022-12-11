import { Button as DefaultButton } from "./Button";
import { ButtonBack } from "./button-back";

const Button = Object.assign(DefaultButton, {
  Back: ButtonBack,
});

export { Button };
