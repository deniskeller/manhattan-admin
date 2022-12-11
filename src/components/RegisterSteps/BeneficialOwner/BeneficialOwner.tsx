import React, {useState} from "react";
import styles from "./style.module.scss";
import {Input} from "@tw/components/Input";
import {FileDrop, Select as SelectComponent, Tooltip} from "@tw/components/index";
import {BaseButton, BaseLink} from "@base/index";
import {Checkbox} from "@tw/components/Checkbox";
import {calendarProps18, calendarPropsBeforeToday, countriesListSelect} from "@tw/components/Input/inputHelper";
import {Trash2} from 'react-feather';
import {SelectSimple} from "@tw/components/Select/SelectSimple";
import {SelectSmall} from "@tw/components/Select/SelectSmall";
export type FieldsBeneficialowner = {
  ownStake: boolean;
  beneficialOwner: boolean;
  ubosList: uboType[],
  shareholdersList: shareholderType[]
}
export type uboType = {
  firstName: string;
  lastName: string;
  phone: string;
  code: string;
  email: string;
  birthDate: string;
  ownStake: string;
  taxId: string;
  criminalRecords: boolean;
  usPerson: boolean;
  politicallyEsposed: boolean;
  otherBusiness: string;
  filesPassport: any[]
}
export type shareholderType = {
  shareholderType: "PERSON" | "COMPANY";

  firstName: string;
  lastName: string;
  phone: string;
  code: string;
  email: string;
  birthDate: string;
  ownStake: string;
  taxId: string;
  criminalRecords: boolean;
  usPerson: boolean;
  politicallyEsposed: boolean;
  otherBusiness: string;
  filesPassport: any[];

  companyCountry: string;
  companyName: string;
  companyRegdate: string;
  companyRegNumber: string;
  companyOwnStake: string;
  companyTaxId: string;
  filesBeneficiary: any[];
  companyPhone: string;
  companyCode: string;
  companyEmail: string;
  companyOtherBusiness: string;
}
type Props = {
  fields: FieldsBeneficialowner,
  handleChange: (e: any, name: string, listName?: 'ubosList' | 'shareholdersList', index?: number)=>void;
  onNext: ()=>void;
  onBack: ()=>void;
  addUbo: ()=>void,
  deleteUbo: (number: number)=>void,
  addShareholder: ()=>void,
  deleteShareholder: (number: number)=>void,
  errors: any
}
export const BeneficialOwner: React.FC<Props> = ({
                                                   fields,
                                                   errors,
                                                   handleChange,
                                                   addUbo,
                                                   deleteUbo,
                                                   addShareholder,
                                                   deleteShareholder,
                                                   onNext, onBack})=>{

  return(<div>
    <div className={styles.TitleForm}>Ultimate Beneficial Owner</div>
    <div className={styles.ContainerForm}>
      <div className={styles.Form}>
        <div className={styles.SubtitleForm}>
          Please, write in information about beneficial owners and shareholders
        </div>
        <Checkbox theme={"dark"} label={"1 Ultimate Beneficial Owner added"}
                  checked={fields.beneficialOwner}
                  onChange={(e:any)=>{handleChange(e?.target?.checked,"beneficialOwner") }}
        />
        <div className={styles.spacerBig}/>
        <Checkbox theme={"dark"} label={"Shareholders ownership stake ≥ 99% "}
                  checked={fields.ownStake}
                  onChange={(e:any)=>{handleChange(e?.target?.checked,"ownStake") }}
        />



{/*-----------------------UBO------------------------------------------------------------------------------------------------*/}
        {fields.ubosList.map((ubo, index, arr)=>{
          return(
            <>
              <div className={styles.spacer}/>
              <div className={`${styles.RowTooltip} ${index > 0 && styles.RowTooltip_Between}`}>
                <div className={`${styles.RowTooltip_LeftText} ${index > 0 && styles.RowTooltip_LeftText_Noborder}`}>
                  UBO{arr.length > 1 ? ` (${index+1})` : ``}&nbsp;&nbsp;
                  <Tooltip tooltip={"tooltip"}/>
                </div>
                {index === 0 &&
                <div className={styles.RowTooltip_RightText}>
                  Maximum 4 <span className={styles.RowTooltip_RightTextLight}> (Ownership stake ≥ 25%)</span>
                </div>
                }
                {index > 0 && <BaseButton variant={"dark"}
                              type={"transparent"}
                              title={"Delete UBO"}
                              error={true}
                              iconPosition={"right"}
                              icon={<Trash2 strokeWidth={1} color={"#FD6B6B"}/>}
                              iconClassName={styles.iconTrash}
                              onClick={()=>{deleteUbo(index)}}/>
               }
              </div>
              <div className={styles.Line}/>
              <div className={styles.TextLight}>
                Add new Ultimate Beneficial Owner
              </div>
              <div className={styles.InputsRow}>
                <Input label="First name"
                       placeholder="Enter First name"
                       variant={errors.ubosList[index]["firstName"].isError ? "error" : "default"}
                       message={errors.ubosList[index]["firstName"].errorText}
                       required
                       value={ubo.firstName}
                       onChange={(e:any)=>{handleChange(e?.target?.value,"firstName", "ubosList", index) }}
                />
                <Input label="Last name"
                       placeholder="Enter Last name"
                       variant={errors.ubosList[index]["lastName"].isError ? "error" : "default"}
                       message={errors.ubosList[index]["lastName"].errorText}
                       required
                       value={ubo.lastName}
                       onChange={(e:any)=>{handleChange(e?.target?.value,"lastName", "ubosList", index) }}
                />
              </div>
              <div className={styles.spacer}/>
              <Input.Calendar
                label={"Select Date of birth"}
                calendarProps={calendarProps18}
                value={ubo.birthDate}
                variant={errors.ubosList[index]["birthDate"].isError ? "error" : "default"}
                message={errors.ubosList[index]["birthDate"].errorText}
                onChange={(e:any)=>{handleChange(e,"birthDate", "ubosList", index) }}
              />
              <div className={styles.spacer}/>
              <div className={styles.InputsRow}>
                <Input label="Ownership stake, %"
                       placeholder="Ownership stake, %"
                       required
                       variant={errors.ubosList[index]["ownStake"].isError ? "error" : "default"}
                       message={errors.ubosList[index]["ownStake"].errorText}
                       value={ubo.ownStake}
                       onChange={(e:any)=>{handleChange(e?.target?.value,"ownStake", "ubosList", index) }}
                />
                <Input label="Tax ID number"
                       placeholder="Tax ID number"
                       variant={errors.ubosList[index]["taxId"].isError ? "error" : "default"}
                       message={errors.ubosList[index]["taxId"].errorText}
                       required
                       value={ubo.taxId}
                       onChange={(e:any)=>{handleChange(e?.target?.value,"taxId", "ubosList", index) }}
                />
              </div>
              <div className={styles.spacer}/>
              <Checkbox theme={"dark"} label={"Existence of criminal records"}
                        checked={ubo.criminalRecords}
                        onChange={(e:any)=>{handleChange(e?.target?.checked,"criminalRecords", "ubosList", index) }}
              />
              <div className={styles.spacer}/>
              <Checkbox theme={"dark"} label={"US person"}
                        checked={ubo.usPerson}
                        onChange={(e:any)=>{handleChange(e?.target?.checked,"usPerson", "ubosList", index) }}
              />
              <div className={styles.spacer}/>
              <Checkbox theme={"dark"} label={"Politically esposed"}
                        checked={ubo.politicallyEsposed}
                        onChange={(e:any)=>{handleChange(e?.target?.checked,"politicallyEsposed", "ubosList", index) }}
              />
              <div className={styles.spacer}/>

              <div className={styles.TextLight}>
                Passport details (upload photo or scan)
              </div>

              <FileDrop onDrop={async (files)=>{await handleChange(files, "filesPassport", "ubosList", index)}}
                        files={ubo.filesPassport}
                        maxFiles={1}
                        maxSize={3}
                        variant={errors.ubosList[index]["filesPassport"].isError ? "error" : "default"}
                        message={errors.ubosList[index]["filesPassport"].errorText}
                        types={["txt", "jpg", "pdf", "png", "docx", "odt", "doc", "jpeg", "ppt", "odp", "pptx"]}/>
              <div className={styles.spacer}/>

              <Input.Phone label={"Phone"}
                           value={ubo.phone}
                           valueCodeInitial={ubo.code}
                           variant={errors.ubosList[index]["phone"].isError ? "error" : "default"}
                           message={errors.ubosList[index]["phone"].errorText}

                           messageCode={errors.ubosList[index]["code"].errorText}
                           isErrorPhone={errors.ubosList[index]["phone"].isError}
                           isErrorCode={errors.ubosList[index]["code"].isError}

                           onChange={(val:any)=>{handleChange(val,"phone", "ubosList", index) }}
                           onChangeCode={(val:any)=>{
                             console.log("onChangeCode==", val);
                             handleChange(val,"code", "ubosList", index) }}
              />
              <div className={styles.spacer}/>

              <Input.Email label="Email"
                           placeholder={"Email"}
                           variant={errors.ubosList[index]["email"].isError ? "error" : "default"}
                           message={errors.ubosList[index]["email"].errorText}
                           required
                           value={ubo.email}
                           onChange={(e:any)=>{handleChange(e?.target?.value,"email", "ubosList", index) }}
              />
              <div className={styles.spacer}/>
              <Input label="Participation in other businesses"
                     placeholder="Participation in other businesses"
                     variant={"default"}
                     bottom={"Business Name and Shares in %"}
                     value={ubo.otherBusiness}
                     onChange={(e:any)=>{handleChange(e?.target?.value,"otherBusiness", "ubosList", index) }}
              />

            </>
          )
        })}

        <div className={styles.AddButton}>
          <BaseButton variant={"dark"} type={"outlined"} title={"Add UBO"} onClick={addUbo}/>
        </div>


{/*-----------------------------------------------------------------------------------------------------------------------*/}




{/*-----SHAREHOLDER---------------------------------------------------------------------------------------------------------*/}
        {fields.shareholdersList.map((holder, index, arr)=>{
          return(
            <>
              <div className={styles.spacer}/>
              <div className={`${styles.RowTooltip} ${index > 0 && styles.RowTooltip_Between}`}>
                <div className={`${styles.RowTooltip_LeftText} ${index > 0 && styles.RowTooltip_LeftText_Noborder}`}>
                  Shareholder{arr.length > 1 ? ` (${index+1})` : ``}&nbsp;&nbsp;
                  <Tooltip tooltip={"tooltip"}/>
                </div>
                {index === 0 &&
                  <div className={styles.RowTooltip_RightText}>
                    Maximum 10 <br/> <span className={styles.RowTooltip_RightTextLight}> (Ownership stake ≥ 25%)</span>
                  </div>
                }
                {index > 0 && <BaseButton variant={"dark"}
                                          type={"transparent"}
                                          title={"Delete Shareholder"}
                                          error={true}
                                          iconPosition={"right"}
                                          icon={<Trash2 strokeWidth={1} color={"#FD6B6B"}/>}
                                          iconClassName={styles.iconTrash}
                                          onClick={()=>{deleteShareholder(index)}}/>
                }
              </div>
              <div className={styles.Line}/>
              <div className={styles.TextLight}>
                Add new Ultimate Beneficial Owner
              </div>

              <div className={styles.TextLightRow}>
                Add new Ultimate Beneficial Owner <SelectSmall
                value={holder.shareholderType}
                onChange={(e:any)=>{handleChange(e?.target?.value as "PERSON" | "COMPANY","shareholderType", "shareholdersList", index) }}
                options={[{label: "Person", value: "PERSON"}, {label: "Company", value: "COMPANY"}]} />
              </div>
              <div className={styles.spacer}/>

              {holder.shareholderType === "PERSON" && <>
                <div className={styles.InputsRow}>
                  <Input label="First name"
                         placeholder="Enter First name"
                         variant={errors.shareholdersList[index]["firstName"].isError ? "error" : "default"}
                         message={errors.shareholdersList[index]["firstName"].errorText}
                         required
                         value={holder.firstName}
                         onChange={(e:any)=>{handleChange(e?.target?.value,"firstName", "shareholdersList", index) }}
                  />
                  <Input label="Last name"
                         placeholder="Enter Last name"
                         variant={errors.shareholdersList[index]["lastName"].isError ? "error" : "default"}
                         message={errors.shareholdersList[index]["lastName"].errorText}
                         required
                         value={holder.lastName}
                         onChange={(e:any)=>{handleChange(e?.target?.value,"lastName", "shareholdersList", index) }}
                  />
                </div>
                <div className={styles.spacer}/>
                <Input.Calendar
                  label={"Select Date of birth"}
                  calendarProps={calendarProps18}
                  value={holder.birthDate}
                  variant={errors.shareholdersList[index]["birthDate"].isError ? "error" : "default"}
                  message={errors.shareholdersList[index]["birthDate"].errorText}
                  onChange={(e:any)=>{handleChange(e,"birthDate", "shareholdersList", index) }}
                />
                <div className={styles.spacer}/>
                <div className={styles.InputsRow}>
                  <Input label="Ownership stake, %"
                         placeholder="Ownership stake, %"
                         variant={errors.shareholdersList[index]["ownStake"].isError ? "error" : "default"}
                         message={errors.shareholdersList[index]["ownStake"].errorText}
                         required
                         value={holder.ownStake}
                         onChange={(e:any)=>{handleChange(e?.target?.value,"ownStake", "shareholdersList", index) }}
                  />
                  <Input label="Tax ID number"
                         placeholder="Tax ID number"
                         variant={errors.shareholdersList[index]["taxId"].isError ? "error" : "default"}
                         message={errors.shareholdersList[index]["taxId"].errorText}
                         required
                         value={holder.taxId}
                         onChange={(e:any)=>{handleChange(e?.target?.value,"taxId", "shareholdersList", index) }}
                  />
                </div>
                <div className={styles.spacer}/>
                <Checkbox theme={"dark"} label={"Existence of criminal records"}
                          checked={holder.criminalRecords}
                          onChange={(e:any)=>{handleChange(e?.target?.checked,"criminalRecords", "shareholdersList", index) }}
                />
                <div className={styles.spacer}/>
                <Checkbox theme={"dark"} label={"US person"}
                          checked={holder.usPerson}
                          onChange={(e:any)=>{handleChange(e?.target?.checked,"usPerson", "shareholdersList", index) }}
                />
                <div className={styles.spacer}/>
                <Checkbox theme={"dark"} label={"Politically esposed"}
                          checked={holder.politicallyEsposed}
                          onChange={(e:any)=>{handleChange(e?.target?.checked,"politicallyEsposed", "shareholdersList", index) }}
                />
                <div className={styles.spacer}/>

                <div className={styles.TextLight}>
                  Passport details (upload photo or scan)
                </div>

                <FileDrop
                  onDrop={(files)=>{handleChange(files, "filesPassport", "shareholdersList", index)}}
                  files={holder.filesPassport}
                  types={["txt", "jpg", "pdf", "png", "docx", "odt", "doc", "jpeg", "ppt", "odp", "pptx" ]}
                  maxFiles={1}
                  maxSize={3}
                  variant={errors.shareholdersList[index]["filesPassport"].isError ? "error" : "default"}
                  message={errors.shareholdersList[index]["filesPassport"].errorText}
                />
                <div className={styles.spacer}/>

                <Input.Phone label={"Phone"}
                             value={holder.phone}
                             valueCodeInitial={holder.code}
                             variant={errors.shareholdersList[index]["phone"].isError ? "error" : "default"}
                             message={errors.shareholdersList[index]["phone"].errorText}

                             messageCode={errors.shareholdersList[index]["code"].errorText}
                             isErrorPhone={errors.shareholdersList[index]["phone"].isError}
                             isErrorCode={errors.shareholdersList[index]["code"].isError}

                             onChange={(val:any)=>{handleChange(val,"phone", "shareholdersList", index) }}
                             onChangeCode={(val:any)=>{handleChange(val,"code", "shareholdersList", index) }}
                />
                <div className={styles.spacer}/>

                <Input.Email label="Email"
                             placeholder={"Email"}
                             required
                             variant={errors.shareholdersList[index]["email"].isError ? "error" : "default"}
                             message={errors.shareholdersList[index]["email"].errorText}
                             value={holder.email}
                             onChange={(e:any)=>{handleChange(e?.target?.value,"email", "shareholdersList", index) }}
                />
                <div className={styles.spacer}/>
                <Input label="Participation in other businesses"
                       placeholder="Participation in other businesses"
                       variant={"default"}
                       bottom={"Business Name and Shares in %"}
                       value={holder.otherBusiness}
                       onChange={(e:any)=>{handleChange(e?.target?.value,"otherBusiness", "shareholdersList", index) }}
                />
              </>}

              {holder.shareholderType === "COMPANY" && <>
                <div className={styles.InputsRow}>
                  <SelectComponent.Simple
                    options={countriesListSelect}
                    label={"Country"}
                    value={holder.companyCountry}
                    variant={errors.shareholdersList[index]["companyCountry"].isError ? "error" : "default"}
                    message={errors.shareholdersList[index]["companyCountry"].errorText}
                    onChange={(e:any)=>{handleChange(e?.target?.value,"companyCountry", "shareholdersList", index) }}
                  />
                  <Input label="Company name"
                         variant={errors.shareholdersList[index]["lastName"].companyName ? "error" : "default"}
                         message={errors.shareholdersList[index]["lastName"].companyName}
                         required
                         value={holder.companyName}
                         onChange={(e:any)=>{handleChange(e?.target?.value,"companyName", "shareholdersList", index) }}
                  />
                </div>
                <div className={styles.spacer}/>

                <div className={styles.InputsRow}>
                  <Input.Calendar
                    label={"Registration date"}
                    calendarProps={calendarPropsBeforeToday}
                    value={holder.companyRegdate}
                    variant={errors.shareholdersList[index]["companyRegdate"].isError ? "error" : "default"}
                    message={errors.shareholdersList[index]["companyRegdate"].errorText}
                    onChange={(e:any)=>{handleChange(e,"companyRegdate", "shareholdersList", index) }}
                  />
                  <Input label="Reg.number"
                         placeholder="Reg.number"
                         variant={errors.shareholdersList[index]["companyRegNumber"].isError ? "error" : "default"}
                         message={errors.shareholdersList[index]["companyRegNumber"].errorText}
                         required
                         value={holder.companyRegNumber}
                         onChange={(e:any)=>{handleChange(e?.target?.value,"companyRegNumber", "shareholdersList", index) }}
                  />
                </div>

                <div className={styles.spacer}/>

                <div className={styles.InputsRow}>
                  <Input label="Ownership stake, %"
                         placeholder="Ownership stake, %"
                         variant={errors.shareholdersList[index]["companyOwnStake"].isError ? "error" : "default"}
                         message={errors.shareholdersList[index]["companyOwnStake"].errorText}
                         required
                         value={holder.companyOwnStake}
                         onChange={(e:any)=>{handleChange(e?.target?.value,"companyOwnStake", "shareholdersList", index) }}
                  />
                  <Input label="Tax ID number"
                         placeholder="Tax ID number"
                         variant={errors.shareholdersList[index]["companyTaxId"].isError ? "error" : "default"}
                         message={errors.shareholdersList[index]["companyTaxId"].errorText}
                         required
                         value={holder.companyTaxId}
                         onChange={(e:any)=>{handleChange(e?.target?.value,"companyTaxId", "shareholdersList", index) }}
                  />
                </div>

                <div className={styles.spacer}/>

                <div className={styles.TextLight}>
                  Beneficiary details (upload photo or scan)
                </div>

                <FileDrop
                  onDrop={(files)=>{handleChange(files, "filesBeneficiary", "shareholdersList", index)}}
                  files={holder.filesBeneficiary}
                  types={["txt", "jpg", "pdf", "png", "docx", "odt", "doc", "jpeg", "ppt", "odp", "pptx" ]}
                  maxFiles={1}
                  maxSize={3}
                  variant={errors.shareholdersList[index]["filesBeneficiary"].isError ? "error" : "default"}
                  message={errors.shareholdersList[index]["filesBeneficiary"].errorText}
                />
                <div className={styles.spacer}/>

                <Input.Phone label={"Phone"}
                             value={holder.companyPhone}
                             valueCodeInitial={holder.companyCode}
                             variant={errors.shareholdersList[index]["companyPhone"].isError ? "error" : "default"}
                             message={errors.shareholdersList[index]["companyPhone"].errorText}

                             messageCode={errors.shareholdersList[index]["companyCode"].errorText}
                             isErrorPhone={errors.shareholdersList[index]["companyPhone"].isError}
                             isErrorCode={errors.shareholdersList[index]["companyCode"].isError}

                             onChange={(val:any)=>{handleChange(val,"companyPhone", "shareholdersList", index) }}
                             onChangeCode={(val:any)=>{handleChange(val,"companyCode", "shareholdersList", index) }}
                />
                <div className={styles.spacer}/>

                <Input.Email label="Email"
                             placeholder={"Email"}
                             required
                             variant={errors.shareholdersList[index]["companyEmail"].isError ? "error" : "default"}
                             message={errors.shareholdersList[index]["companyEmail"].errorText}
                             value={holder.companyEmail}
                             onChange={(e:any)=>{handleChange(e?.target?.value,"companyEmail", "shareholdersList", index) }}
                />
                <div className={styles.spacer}/>
                <Input label="Participation in other businesses"
                       placeholder="Participation in other businesses"
                       variant={"default"}
                       bottom={"Business Name and Shares in %"}
                       value={holder.companyOtherBusiness}
                       onChange={(e:any)=>{handleChange(e?.target?.value,"companyOtherBusiness", "shareholdersList", index) }}
                />
              </>}


            </>
          )
        })}
{/*-----SHAREHOLDER---------------------------------------------------------------------------------------------------------*/}
        <div className={styles.AddButton}>
          <BaseButton variant={"dark"} type={"outlined"} title={"Add shareholder"} onClick={addShareholder}/>
        </div>
      </div>

      <div className={styles.bottomButtons}>
        <BaseButton variant={"dark"} type={"transparent"} arrow={"left"} title={"Step 4"} onClick={onBack}/>
        <BaseButton title={"Continue"} variant={"dark"} arrow={"right"} onClick={onNext}/>
      </div>
    </div>
  </div>)
}

