import React from "react";
import styles from "./style.module.scss";
import {Input} from "@tw/components/Input";
import {Select as SelectComponent} from "@tw/components/Select";
import {BaseButton, BaseLink} from "@base/index";
import {Checkbox} from "@tw/components/Checkbox";
import {calendarPropsBeforeToday, countriesListSelect} from "@tw/components/Input/inputHelper";
import {TErrorField} from "@utils/validation";
import {FieldsPersonal} from "../Personal/Personal";
export type FieldsAboutCompany = {
  countryIncorporation: string;
  companyName: string;
  tradeName: string;
  businessType: string;
  regNumber: string;
  dateReg: string;
  vatTaxNumber: string;
  businessSector: string;
  website: string;
  contactPerson: boolean;
  companyUSPerson: boolean;
  companyInstStatus: boolean;
}
export type FieldsAboutErrors = {
  countryIncorporation: TErrorField;
  companyName: TErrorField;
  tradeName: TErrorField;
  businessType: TErrorField;
  regNumber: TErrorField;
  dateReg: TErrorField;
  vatTaxNumber: TErrorField;
  businessSector: TErrorField;
  website: TErrorField;
}

type Props = {
  fields: FieldsAboutCompany;
  errors: FieldsAboutErrors;
  handleChange: (e: any, name: string)=>void;
  onNext: ()=>void;
  onBack: ()=>void;
}
export const AboutCompany: React.FC<Props> = ({fields, errors,
                                                handleChange, onNext, onBack})=>{
  return(<div>
    <div className={styles.TitleForm}>About company</div>
    <div className={styles.ContainerForm}>
      <div className={styles.Form}>
        <div className={styles.SubtitleForm}>
          Please, fill general company info
        </div>
        <Checkbox theme={"dark"} label={"I`m contact person"}
                  checked={fields.contactPerson}
                  onChange={(e:any)=>{handleChange(e?.target?.checked,"contactPerson") }}
        />
        <div className={styles.spacer}/>
        <SelectComponent.Simple
          options={countriesListSelect}
          label={"Country of incorporation"}
          value={fields.countryIncorporation}
          variant={errors["countryIncorporation"].isError ? "error" : "default"}
          message={errors["countryIncorporation"].errorText}
          onChange={(e:any)=>{handleChange(e?.target?.value,"countryIncorporation") }}
        />

        <div className={styles.spacer}/>

        <Input label="Company name"
               placeholder="Company name"
               variant={errors["companyName"].isError ? "error" : "default"}
               message={errors["companyName"].errorText}
               required
               value={fields.companyName}
               onChange={(e:any)=>{handleChange(e?.target?.value,"companyName") }}
        />
        <div className={styles.spacer}/>

        <Input label="Registered trade name"
               placeholder="Registered trade name"
               variant={errors["tradeName"].isError ? "error" : "default"}
               message={errors["tradeName"].errorText}
               required
               value={fields.tradeName}
               onChange={(e:any)=>{handleChange(e?.target?.value,"tradeName") }}
        />
        <div className={styles.spacer}/>

        <SelectComponent.Simple
          options={[
            {value: "Technical", label: "Technical"},
            {value: "Trade", label: "Trade"},
          ]}
          label={"Business type"}
          value={fields.businessType}
          variant={errors["businessType"].isError ? "error" : "default"}
          message={errors["businessType"].errorText}
          onChange={(e:any)=>{handleChange(e?.target?.value,"businessType") }}
        />
        <div className={styles.spacer}/>

        <Input label="Registration number"
               placeholder="Registration number"
               required
               value={fields.regNumber}
               variant={errors["regNumber"].isError ? "error" : "default"}
               message={errors["regNumber"].errorText}
               onChange={(e:any)=>{handleChange(e?.target?.value,"regNumber") }}
        />
        <div className={styles.spacer}/>

        <Input.Calendar
          label={"Date of registration"}
          calendarProps={calendarPropsBeforeToday}
          value={fields.dateReg}
          variant={errors["dateReg"].isError ? "error" : "default"}
          message={errors["dateReg"].errorText}
          onChange={(val:any)=>{handleChange(val,"dateReg") }}
        />
        <div className={styles.spacer}/>
        <Input label="VAT / Tax ID number"
               placeholder="VAT / Tax ID number"
               variant={errors["vatTaxNumber"].isError ? "error" : "default"}
               message={errors["vatTaxNumber"].errorText}
               required
               value={fields.vatTaxNumber}
               onChange={(e:any)=>{handleChange(e?.target?.value,"vatTaxNumber") }}
        />
        <div className={styles.spacer}/>

        <Input label="Business sector (SIC/NACE)"
               placeholder="Business sector (SIC/NACE)"
               variant={errors["businessSector"].isError ? "error" : "default"}
               message={errors["businessSector"].errorText}
               required
               value={fields.businessSector}
               onChange={(e:any)=>{handleChange(e?.target?.value,"businessSector") }}
        />
        <div className={styles.spacer}/>

        <Input label="Website"
               placeholder="Website"
               variant={errors["website"].isError ? "error" : "default"}
               message={errors["website"].errorText}
               right={"Optional"}
               value={fields.website}
               onChange={(e:any)=>{handleChange(e?.target?.value,"website") }}
        />
      </div>
      <div className={`${styles.Form} ${styles.FormSecond}`}>
        <Checkbox theme={"dark"} label={"Does your company have a U.S person?"}
                  checked={fields.companyUSPerson}
                  onChange={(e:any)=>{handleChange(e?.target?.checked,"companyUSPerson") }}
        />
        <div className={styles.spacer}/>
        <Checkbox theme={"dark"} label={"Does your company have the Financial institution status?"}
                  checked={fields.companyInstStatus}
                  onChange={(e:any)=>{handleChange(e?.target?.checked,"companyInstStatus") }}
        />
      </div>
      <div className={styles.bottomButtons}>
        <BaseButton variant={"dark"} type={"transparent"} arrow={"left"} title={"Step 1"} onClick={onBack}/>
        <BaseButton title={"Continue"} variant={"dark"} arrow={"right"} onClick={onNext}/>
      </div>
    </div>
  </div>)
}