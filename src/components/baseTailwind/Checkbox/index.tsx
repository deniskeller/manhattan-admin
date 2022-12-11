import { Checkbox as DefaultCheckbox } from "./Checkbox";
import { CheckboxCollapsed } from "./checkbox-collapsed";

const Checkbox = Object.assign(DefaultCheckbox, {
  Collapsed: CheckboxCollapsed,
});

export { Checkbox };
