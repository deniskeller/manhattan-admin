export type TErrorField = {
  isError: boolean;
  errorText: string;
}
export const validateEmail = (email: string) => {
  return email.match(
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  );
};

export const validateNotEmpty = (value: string) => {
  console.log("value not empty", value);
  return value?.toString()?.length > 0
}


export const validatePassword = (password: string)=>{
  const isMoreThan8 = password.length >= 8;
  const haveNumber = /\d/.test(password);
  const haveLetter = /[a-zA-Z]/.test(password);
  return  isMoreThan8 && haveLetter && haveNumber
}