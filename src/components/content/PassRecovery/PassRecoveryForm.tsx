import React, {useState} from "react";
import styles from "./style.module.scss";
import {Input} from "@tw/components/Input";
import {BaseButton, BaseLink} from "@base/index";
import {Checkbox} from "@tw/components/Checkbox";
import {useRouter} from "next/router";
import {validateEmail, validateNotEmpty} from "@utils/validation";
import {arrayClone} from "@utils/helper";
import {useLazyUserControllerResetPasswordQuery} from "@store/users/usersEndpoints";

export type FieldsAuth = {
  email: string;
  password: string;
  remember: boolean;
}


const PassRecoveryForm = ()=>{
  const router = useRouter();
  const [successSubmit, setSuccessSubmit] = useState(false);

  const [sendEmail] = useLazyUserControllerResetPasswordQuery();

  const [fields, setFields] = useState({
    email: "",
  })
  const [errors, setErrors] = useState({
    email: {isError: false, errorText: ""},
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
    const fieldNames = ["email"];
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
      sendEmail({email: fields.email}).unwrap().then((res)=>{
        console.log("resss", res);
        if (res?.result === true){
          setSuccessSubmit(true)
        }else{
          setErrors({email: {isError: true, errorText: "This email was not found"}})
        }

      }).catch((err)=>{
        console.error("CATCH err resetpass",err);
        setErrors({email: {isError: true, errorText: err?.data?.errorMessages?.[0]?.email ?? "Not success"}})
      })
    }
  }

  const onGoMain = ()=>{
    router.push("/")
  }

  return(
    <div className={styles.ContainerForm}>


      <div className={styles.Form}>
        {successSubmit ? <>
            <div className={styles.TitleForm}>Check your email</div>
            <div className={styles.SubtitleForm}>
              Please follow link we've send to {fields.email} to continue password reset procedure
            </div>
            <BaseButton variant={"dark"} title={"Back to main"} onClick={onGoMain} style={{width: "100%"}}/>
        </> :
        <>
          <div className={styles.TitleForm}>Enter your email</div>
          <div className={styles.SubtitleForm}>
            We will send a link to reset your password to your email
          </div>
          <Input.Email label="Email"
                       placeholder={"Enter your email"}
                       variant={errors["email"].isError ? "error" : "default"}
                       message={errors["email"].errorText}
                       value={fields.email}
                       onChange={(e:any)=>{handleChange(e?.target?.value,"email") }}
          />

          <div className={styles.spacer}/>
          <BaseButton variant={"dark"} title={"Continue"} onClick={onSubmit} style={{width: "100%"}}/>
        </>
        }
      </div>
    </div>)
}

export default PassRecoveryForm;