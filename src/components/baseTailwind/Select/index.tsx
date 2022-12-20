import { Select as SelectInitial } from "./Select";
import { SelectSimple } from "./SelectSimple";
import {SelectSmall} from "./SelectSmall";
import SelectMultiple from "@tw/components/Select/SelectMultiple";


const Select = Object.assign(SelectInitial, {
  Simple: SelectSimple,
  Small: SelectSmall,
  Multiple: SelectMultiple
});

export { Select };