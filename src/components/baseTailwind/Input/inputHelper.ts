import country from "country-list-js";

const countriesListSelect = country.names().sort().map(el=>{return {value: el, label: el}})


function getAge(date: any) {
  const today = new Date();
  const birthDate = date;
  let age = today.getFullYear() - birthDate.getFullYear();
  const m = today.getMonth() - birthDate.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }
  return age;
}

const isOlder18 = (date: Date | any)=>{
  console.log("date isOlder18", date, "getAfe", getAge(date));
  return getAge(date) >=18
}
const isBeforeToday = (date: Date)=>{
  const today = new Date();
  today.setHours(23, 59, 59, 999);
  return date <= today;
}

const getStartDate18 = ()=>{
  const date = new Date();
  const year = date.getFullYear();
  const month = date.getMonth();
  const day = date.getDate();
  return new Date(year - 18, month, day)
}

const calendarProps18 = {
  maxDate: getStartDate18(),
  defaultActiveStartDate: getStartDate18()
}

const calendarPropsBeforeToday = {
  maxDate: new Date()
}
const calendarPropsAfterToday = {
  minDate: new Date()
}

const isURL = (str: string) => {
  const urlPattern = new RegExp('(https|http)\:\/{2}.{2,}\\..{2,}'); // [https or http] [://] [>2 any symbols] [.] [>2 any symbols]
  return urlPattern.test(str);
}

const isNumberStr = (str: string | number) => {
  return (typeof +str === "number" && !isNaN(+str))
}

export {getAge, isOlder18, isBeforeToday, isURL, isNumberStr,
  calendarPropsAfterToday, calendarPropsBeforeToday,
  calendarProps18, getStartDate18, countriesListSelect}