import React, {useState} from "react";
import styles from "./style.module.scss";
import {Input} from "@tw/components/Input";
import {BaseButton} from "@base/index";
import {arrayClone} from "@utils/helper";
import {validateNotEmpty, validatePassword} from "@utils/validation";
import {useLazyUserControllerChangePasswordQuery} from "@store/users/usersEndpoints"
import {useRouter} from "next/router";

export type FieldsAuth = {
  email: string;
  password: string;
  remember: boolean;
}
type Props = {
  id: string;
}

const ChangePasswordForm: React.FC<Props> = ({id})=>{
  console.log("id=", id);
  const router = useRouter();
  const [setPass] = useLazyUserControllerChangePasswordQuery();
  const [fields, setFields] = useState({
    passwordRepeat: "",
    password: "",
  })
  const [errors, setErrors] = useState({
    password: {isError: false, errorText: ""},
    passwordRepeat: {isError: false, errorText: ""},
  })
  const handleChange = (val: any, name: string) => {
    setFields((prev) => {
      return {
        ...prev,
        [name]: val
      }
    })
    setErrors({
      ...errors, [name]: {isError: false, errorText: ""}
    })
  };
  const validateFields = ()=>{
    const fieldNames = ["passwordRepeat", "password"];
    let copyErrors = arrayClone(errors);
    let isAllValid = true;
    fieldNames.forEach((name)=>{
      let isValid = true;
      let errorText = "";
      if (name === "password" || name === "passwordRepeat") {
        isValid = validateNotEmpty(fields[name]);
        if ( name === "passwordRepeat" ){
          if (isValid){
            isValid = fields.password === fields.passwordRepeat
          }
        }
        if ( name === "password" ){
          if (isValid){
            isValid = validatePassword(fields.password)
          }
        }
      }
      if (!isValid){
        isAllValid = false;
      }
      copyErrors[name] = {isError: !isValid, errorText: errorText}
    })
    setErrors(copyErrors);
    return isAllValid;
  }
  const onSubmit = ()=>{
    const isAllValid = validateFields();
    if (isAllValid) {
      setPass(
        {
          id: id,
          setNewPasswordDto:
          {
            password: fields.password,
            confirmPassword: fields.passwordRepeat
          }}).unwrap().then((res)=>{
        console.log("res setpass",res);
        router.push("/auth")
       }).catch((err)=>{
         console.error("CATCH SET PASS", err)
        const messages = err?.data?.errorMessages;
        let newErrors = {} as any;
         messages.forEach((obj: any)=>{
           const entries = Object.entries(obj);
           const name= entries[0][0];
           const value = entries[0][1];

           if (name === "password"){
             newErrors.password = {isError: true, errorText: value}
           }
           if (name === "confirmPassword" || name === "common"){
             newErrors.passwordRepeat = {isError: true, errorText: value}
           }

         })
        setErrors({...errors, ...newErrors});
      })
    }
  }
  return(
    <div className={styles.ContainerForm}>
      <div className={styles.Form}>
        <div className={styles.TitleForm}>Password change </div>
        <div className={styles.SubtitleForm}>
          Enter a new password
        </div>
        <Input.Password label="Password"
                        placeholder="Password"
                        name={"password"}
                        variant={errors["password"].isError ? "error" : "default"}
                        message={errors["password"].errorText}
                        required
                        value={fields.password}
                        onChange={(e:any)=>{handleChange(e?.target?.value,"password") }}
        />
        <div className={styles.spacer}/>
        <Input.Password label="Password"
                        placeholder="Repeat the password"
                        name={"passwordRepeat"}
                        variant={errors["passwordRepeat"].isError ? "error" : "default"}
                        message={errors["passwordRepeat"].errorText}
                        required
                        valueCompare={fields.password}
                        value={fields.passwordRepeat}
                        onChange={(e:any)=>{handleChange(e?.target?.value,"passwordRepeat") }}
        />
        <div className={styles.bigspacer}/>


        <BaseButton variant={"dark"} title={"Change password"} onClick={onSubmit} style={{width: "100%"}}/>


      </div>
    </div>)
}

export default ChangePasswordForm;