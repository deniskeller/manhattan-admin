import React, {useState} from "react";
import styles from "./style.module.scss";
import {Input} from "@tw/components/Input";
import {BaseButton, BaseLink} from "@base/index";
import {Checkbox} from "@tw/components/Checkbox";
import {arrayClone} from "@utils/helper";
import {validateEmail, validateNotEmpty} from "@utils/validation";
import { useLazyUserControllerLoginQuery } from "@store/users/usersEndpoints"

export type FieldsAuth = {
  email: string;
  password: string;
  remember: boolean;
}


const AuthForm = ()=>{

  const [login] =  useLazyUserControllerLoginQuery();

  const [fields, setFields] = useState({
    email: "",
    password: "",
    remember: true
  })
  const [errors, setErrors] = useState({
    email: {isError: false, errorText: ""},
    password: {isError: false, errorText: ""},
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
    const fieldNames = ["email", "password"];
    let copyErrors = arrayClone(errors);
    let isAllValid = true;
    fieldNames.forEach((name)=>{
      let isValid = true;
      let errorText = "";
      if (name === "email") {
        isValid = validateNotEmpty(fields.email);
        if (isValid) {
          isValid = !!validateEmail(fields.email);
          errorText = "Enter correct email"
        }
      }
      if (name === "password") {
        isValid = validateNotEmpty(fields.password);
      }
      if (!isValid){
        isAllValid = false;
      }
      copyErrors[name] = {isError: !isValid, errorText: errorText}
    })
    setErrors(copyErrors);
    return isAllValid;
  }

  const onSubmit = async ()=>{
    const isAllValid = validateFields();
    if (isAllValid) {
        login({
          authDto: {
            username: fields.email,
            password: fields.password
          }}).unwrap().then((res)=>{
          console.log("res LOGIN", res);
          const accessToken = res?.accessToken ?? "";
          localStorage.setItem("accessToken", accessToken)
          alert("Success")
        }).catch((err)=>{
          console.error("CATCH err login",err);
          if (err?.status === 401){
            const message = err?.data?.errorMessages?.[0]?.common ?? "Wrong login or password";
            setErrors({email: {isError: true, errorText: ""}, password: {isError: true, errorText: message}})
          }else{
            setErrors({email: {isError: true, errorText: ""}, password: {isError: true, errorText: "Something went wrong, try again later"}})
          }

        })
    }
  }
  return(
    <div className={styles.ContainerForm}>
      <div className={styles.Form}>
        <div className={styles.TitleForm}>Log in</div>
        <div className={styles.SubtitleForm}>
          Log in with your email
        </div>
        <Input.Email label="Email"
                     placeholder={"Email"}
                     required
                     variant={errors["email"].isError ? "error" : "default"}
                     message={errors["email"].errorText}
                     value={fields.email}
                     onChange={(e:any)=>{handleChange(e?.target?.value,"email") }}
        />
        <div className={styles.spacer}/>
        <Input.Password label="Password"
                        placeholder="Password"
                        name={"password"}
                        variant={errors["password"].isError ? "error" : "default"}
                        message={errors["password"].errorText}
                        required
                        noBottom={true}
                        value={fields.password}
                        onChange={(e:any)=>{handleChange(e?.target?.value,"password") }}
        />
        <div className={styles.spacer}/>
        <div className={styles.RowRight}>
          {/*<Checkbox theme={"dark"} checked={fields.remember}
                    label={"Remember me"}
                    onChange={(e:any)=>{handleChange(e?.target?.checked,"remember") }}/>*/}
          <BaseLink href={"/pass_recovery"}> Forgot password? </BaseLink>
        </div>
        <div className={styles.spacer}/>
        <BaseButton variant={"dark"} title={"Continue"} onClick={onSubmit} style={{width: "100%"}}/>
        <div className={styles.spacer}/>
        <div className={styles.bottomForm}>
          Don't have an account yet?&nbsp;<BaseLink href={"/registration"}> Sign Up </BaseLink>
        </div>
      </div>
    </div>)
}

export default AuthForm;