import React from "react";
import styles from "./style.module.scss";
import {Input} from "@tw/components/Input";
import {Select as SelectComponent} from "@tw/components/Select";
import {BaseButton} from "@base/index";
import {countriesListSelect} from "@tw/components/Input/inputHelper";
import {TErrorField} from "@utils/validation";
import {Checkbox} from "@tw/components/Checkbox";
export type FieldsCompanyAddress = {
  countryBusinessReg: string;
  cityBusinessReg: string;
  postCodeBusinessReg: string;
  addressBusinessReg1: string;
  addressBusinessReg2: string;

  countryBusinessActual: string;
  cityBusinessActual: string;
  postCodeBusinessActual: string;
  addressBusinessActual1: string;
  addressBusinessActual2: string;

  companySameAddr: boolean;
}
export type FieldsCompanyAddressErrors = {
  countryIncorporation: TErrorField;
  countryBusinessReg: TErrorField;
  cityBusinessReg: TErrorField;
  postCodeBusinessReg: TErrorField;
  addressBusinessReg1: TErrorField;
  addressBusinessReg2: TErrorField;

  countryBusinessActual: TErrorField;
  cityBusinessActual: TErrorField;
  postCodeBusinessActual: TErrorField;
  addressBusinessActual1: TErrorField;
  addressBusinessActual2: TErrorField;
}
type Props = {
  fields: FieldsCompanyAddress;
  handleChange: (e: any, name: string)=>void;
  onNext: ()=>void;
  onBack: ()=>void;
  errors: FieldsCompanyAddressErrors
}
export const CompanyAddress: React.FC<Props> = ({fields, errors,
                                                  handleChange, onNext, onBack})=>{
  return(<div>
    <div className={styles.TitleForm}>Company address</div>
    <div className={styles.ContainerForm}>
      <div className={styles.Form}>

        <div className={styles.SubtitleForm}>
          Registration address
        </div>
        <div className={styles.SubtitleBlock}>
          Where your business was registered
        </div>

        <div className={styles.spacer}/>
        <SelectComponent.Simple
          options={countriesListSelect}
          label={"County"}
          value={fields.countryBusinessReg}
          onChange={(e:any)=>{handleChange(e?.target?.value,"countryBusinessReg") }}
          variant={errors["countryBusinessReg"].isError ? "error" : "default"}
          message={errors["countryBusinessReg"].errorText}
        />
        <div className={styles.spacer}/>

        <div className={styles.Row}>
          <Input label="City"
                 placeholder="City"
                 variant={errors["cityBusinessReg"].isError ? "error" : "default"}
                 message={errors["cityBusinessReg"].errorText}
                 required
                 value={fields.cityBusinessReg}
                 onChange={(e:any)=>{handleChange(e?.target?.value,"cityBusinessReg") }}
          />
          <Input label="Post Code"
                 placeholder="Post Code"
                 variant={errors["postCodeBusinessReg"].isError ? "error" : "default"}
                 message={errors["postCodeBusinessReg"].errorText}
                 required
                 value={fields.postCodeBusinessReg}
                 onChange={(e:any)=>{handleChange(e?.target?.value,"postCodeBusinessReg") }}
          />
        </div>

        <div className={styles.spacer}/>

        <Input label="Address line 1"
               placeholder="Address line 1"
               variant={errors["addressBusinessReg1"].isError ? "error" : "default"}
               message={errors["addressBusinessReg1"].errorText}
               required
               value={fields.addressBusinessReg1}
               onChange={(e:any)=>{handleChange(e?.target?.value,"addressBusinessReg1") }}
        />
        <div className={styles.spacer}/>

        <Input label="Address line 2"
               placeholder="Address line 2"
               variant={errors["addressBusinessReg2"].isError ? "error" : "default"}
               message={errors["addressBusinessReg2"].errorText}
               value={fields.addressBusinessReg2}
               onChange={(e:any)=>{handleChange(e?.target?.value,"addressBusinessReg2") }}
        />

        <div className={styles.spacer}/>
        <Checkbox theme={"dark"} label={"Company actual address is the same as registered"}
                  checked={fields.companySameAddr}
                  onChange={(e:any)=>{handleChange(e?.target?.checked,"companySameAddr") }}
        />

        {!fields.companySameAddr && (
          <>
            <div className={styles.spacerBig}/>
            <div className={styles.SubtitleForm}>
              Actual address
            </div>
            <div className={styles.SubtitleBlock}>
              Where your actually operates from
            </div>

            <div className={styles.spacer}/>
            <SelectComponent.Simple
              options={countriesListSelect}
              label={"County"}
              value={fields.countryBusinessActual}
              variant={errors["countryBusinessActual"].isError ? "error" : "default"}
              message={errors["countryBusinessActual"].errorText}
              onChange={(e:any)=>{handleChange(e?.target?.value,"countryBusinessActual") }}
            />
            <div className={styles.spacer}/>

            <div className={styles.Row}>
              <Input label="City"
                     placeholder="City"
                     variant={errors["cityBusinessActual"].isError ? "error" : "default"}
                     message={errors["cityBusinessActual"].errorText}
                     required
                     value={fields.cityBusinessActual}
                     onChange={(e:any)=>{handleChange(e?.target?.value,"cityBusinessActual") }}
              />
              <Input label="Post Code"
                     placeholder="Post Code"
                     variant={errors["postCodeBusinessActual"].isError ? "error" : "default"}
                     message={errors["postCodeBusinessActual"].errorText}
                     required
                     value={fields.postCodeBusinessActual}
                     onChange={(e:any)=>{handleChange(e?.target?.value,"postCodeBusinessActual") }}
              />
            </div>

            <div className={styles.spacer}/>

            <Input label="Address line 1"
                   placeholder="Address line 1"
                   variant={errors["addressBusinessActual1"].isError ? "error" : "default"}
                   message={errors["addressBusinessActual1"].errorText}
                   required
                   value={fields.addressBusinessActual1}
                   onChange={(e:any)=>{handleChange(e?.target?.value,"addressBusinessActual1") }}
            />
            <div className={styles.spacer}/>

            <Input label="Address line 2"
                   placeholder="Address line 2"
                   variant={errors["addressBusinessActual2"].isError ? "error" : "default"}
                   message={errors["addressBusinessActual2"].errorText}
                   value={fields.addressBusinessActual2}
                   onChange={(e:any)=>{handleChange(e?.target?.value,"addressBusinessActual2") }}
            />
          </>


        )}


      </div>
      <div className={styles.bottomButtons}>
        <BaseButton variant={"dark"} type={"transparent"} arrow={"left"} title={"Step 2"} onClick={onBack}/>
        <BaseButton title={"Continue"} variant={"dark"} arrow={"right"} onClick={onNext}/>
      </div>
    </div>
  </div>)
}