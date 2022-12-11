import React from 'react';
import styles from './Form.module.scss';
import { BaseButton, BaseInput, BaseSelect, BaseTextarea } from '@base/index';
import { PhoneInput } from '@content/index';
import {IValueForm, IValueFormErrors} from '@constants/globals/types';
import { countries } from '@services/index';
import { useRouter } from 'next/router';
import { modalSlice } from '@store/modals/reducer';
import {useAppDispatch, useAppSelector} from '@hooks/redux';
import { setTimeout } from 'timers';
import {validateEmail} from "@utils/validation";
import { usePostFeedbackMutation } from "@store/forms/endpointsEnhansed"
import {selectInvestData} from "@store/forms/reducer";
import {IFeedbackPostData} from "@store/modals/types";
//onSubmit = (onSuccess, onError, values1)=>{
//  return (values2)=>{
//  submit({data: {...values1, values2} }).then(onSuccess())
//  .catch(){onError(errorsList)}  set errors from api local
//  }
type onSubmitArgs = {
  onSuccess: ()=>void;
  onError: (errors: any[])=>void;
  additionalValues?: any
}
type onSubmitFunc = (values: any)=>void;
type Props = {
  onSubmit: (args: onSubmitArgs)=>onSubmitFunc
}
const Form = () => {
  const [postForm] = usePostFeedbackMutation();
  const investData = useAppSelector(selectInvestData);
  const [value, setValue] = React.useState<IValueForm>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company_name: '',
    country: '',
    message: '',
  });
  const [errors, setErrors] = React.useState<IValueFormErrors>({
    firstName: false,
    lastName: false,
    email: false,
    phone: false,
    company_name: false,
    country: false,
    message: false,
  })

  const onSubmit = async ()=>{
    let data = {...value} as IFeedbackPostData;
    if (Object.values(investData)?.length > 0){
      data.companiesToInvest = investData.investmentAmount;
      data.investmentAmount = investData.investmentAmount;
    }

    postForm({values: data}).unwrap().then((result)=>{
      console.log("result", result);
      if (result?.id){
        onSuccess();
      }else{
        onError(result)
      }
    }).catch((err)=>{
      onError(err);
      console.log("err:", err)
    })
  }
  const onSuccess = () =>{
     router.push('/confirm');
     setTimeout(() => {
       dispatch(setPopup({ popup: '' }));
     }, 2000);
  }

  const onError = (errors: any)=>{
      console.log("onError", errors)
  }
  console.log("errors", errors);
  console.log("value", value);

  const setNewValue = (val: string | number | File[], key: string) => {
    setValue((prev) => ({ ...prev, [key]: val }));
    setErrors((prev)=>({...prev, [key]: false}))
  };

  const router = useRouter();
  const { setPopup } = modalSlice.actions;
  const dispatch = useAppDispatch();

  const submitFormHandler = () => {
    const isAllValid = validateFields();
    //const isAllValid = true;
    if (isAllValid){
      onSubmit();
    }

  };

  const validateFields = ()=>{
    const fields = Object.entries(value);
    let isAllValid = true;
    fields.forEach((obj)=>{
      const name = obj[0] as keyof IValueForm;
      const value = obj[1];
      const error = validateField({name, value});
      if (error || typeof error === "string" && error?.length > 0) {isAllValid = false}

    });
    console.log("Object.values(errors)?.find((value) => value !== false)", Object.values(errors)?.find((value) => value !== false));
    console.log("Object.values(errors)", Object.values(errors));
    return isAllValid;
  }
  type VProps = {
      name: keyof IValueForm;
      value: any;
  }
  const validateField = ({name, value} : VProps)=>{
    console.log("validateField", name, value);
    let error = false as string | boolean;
    switch (name){
      case "firstName":
      case "lastName":
      case "message":
      case "company_name":
      case "country":{
        if (value?.trim()?.length === 0){
          error = true;
        }
        break;
      }
      case "phone":{
        if (value?.trim()?.length <= 6){
          error = true;
        }
        break;
      }
      case "email":{
        if (value?.trim()?.length === 0){
          error = true;
          break;
        }
        const isValid = validateEmail(value);
        if (!isValid){
          error = "Enter correct email";
        }
        break;
      }
    }
    if (error || typeof error === "string" && error?.length > 0) {
      setErrors((prev) => {
        return {...prev, [name]: error}
      });
    }
    return error;
  }
  return (
    <>
      <div className={styles.Form}>
        <div>
          <div className={styles.Form_Row}>
            <BaseInput
              name="firstName"
              placeholder="Enter your First Name"
              label="First Name"
              value={value.firstName}
              error={errors.firstName}
              onChange={(val: string) => setNewValue(val, 'firstName')}
              className={styles.Form_Input}
            />

            <BaseInput
              name="lastName"
              placeholder="Enter your Last Name"
              label="Last Name"
              value={value.lastName}
              error={errors.lastName}
              onChange={(val: string) => setNewValue(val, 'lastName')}
              className={styles.Form_Input}
            />
          </div>

          <div className={styles.Form_Row}>
            <BaseInput
              name="email"
              label="Corporate email address"
              placeholder="Enter your Corporate email address"
              value={value.email}
              error={errors.email}
              onChange={(val: string) => setNewValue(val, 'email')}
              className={styles.Form_Input}
            />

            <PhoneInput
              label="Phone"
              placeholder="Enter your Phone"
              value={value.phone}
              error={errors.phone}
              onChange={(val: string) => setNewValue(val, 'phone')}
              className={styles.Form_Input}
            />
          </div>

          <div className={styles.Form_Row}>
            <BaseInput
              name="company_name"
              label="Company Name"
              placeholder="Enter your Company Name"
              value={value.company_name}
              error={errors.company_name}
              onChange={(val: string) => setNewValue(val, 'company_name')}
              className={styles.Form_Input}
            />

            <BaseSelect
              label="Country of residence"
              placeholder="Select Country"
              options={countries}
              onChange={(val: string) => setNewValue(val, 'country')}
              error={errors.country}
              className={styles.Form_Input}
            />
          </div>

          <BaseTextarea
            name="message"
            label="Welcome message"
            placeholder="Enter your Welcome message"
            type="text"
            value={value.message}
            error={errors.message}
            onChange={(val: string) => setNewValue(val, 'message')}
            className={styles.Form_Textarea}
          />

          <BaseButton
            title="Submit"
            tooltip="submit"
            className={styles.Form_Button}
            onClick={submitFormHandler}
            // onClick={() => router.push('/confirm')}
          />
        </div>
      </div>
    </>
  );
};

export default Form;
