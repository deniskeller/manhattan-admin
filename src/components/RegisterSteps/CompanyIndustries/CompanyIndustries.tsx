import React from "react";
import styles from "./style.module.scss";
import {Checkbox} from "@tw/components/Checkbox";
import {BaseButton} from "@base/index";
export type FieldsCompanyIndustries = {
  manufacturers: boolean;
  entertainment: boolean;
  art: boolean;
  chemical: boolean;
  clientmoney: boolean;
  cryptocurrency: boolean;
  speculators: boolean;
  gambling: boolean;
  nonprofit: boolean;
  metals: boolean;
  cars: boolean;

}
type Props = {
  fields: FieldsCompanyIndustries;
  handleChange: (e: any, name: string)=>void;
  onNext: ()=>void;
  onBack: ()=>void;
}
export const CompanyIndustries: React.FC<Props> = ({fields, handleChange, onNext, onBack})=>{
  return(<div>
    <div className={styles.TitleForm}>Company industries</div>
    <div className={styles.ContainerForm}>
      <div className={styles.Form}>
        <div className={styles.SubtitleForm}>
          Please mark, if your company is doing business is in one of these industries:
        </div>
        <Checkbox theme={"dark"} label={"Armaments, weapons or defense manufacturers"}
                  checked={fields.manufacturers}
                  onChange={(e:any)=>{handleChange(e?.target?.checked,"manufacturers") }}
        />
        <div className={styles.spacer}/>
        <Checkbox theme={"dark"} label={"Adult entertainment or the sale or advertising of sexual services"}
                  checked={fields.entertainment}
                  onChange={(e:any)=>{handleChange(e?.target?.checked,"entertainment") }}
        />
        <div className={styles.spacer}/>
        <Checkbox theme={"dark"} label={"Art dealers and auction houses"}
                  checked={fields.art}
                  onChange={(e:any)=>{handleChange(e?.target?.checked,"art") }}
        />
        <div className={styles.spacer}/>
        <Checkbox theme={"dark"} label={"Industrial chemical or legal high companies"}
                  checked={fields.chemical}
                  onChange={(e:any)=>{handleChange(e?.target?.checked,"chemical") }}
        />
        <div className={styles.spacer}/>
        <Checkbox theme={"dark"} label={"Client money processing firms"}
                  checked={fields.clientmoney}
                  onChange={(e:any)=>{handleChange(e?.target?.checked,"clientmoney") }}
        />
        <div className={styles.spacer}/>
        <Checkbox theme={"dark"} label={"Cryptocurrency processing firms"}
                  checked={fields.cryptocurrency}
                  onChange={(e:any)=>{handleChange(e?.target?.checked,"cryptocurrency") }}
        />
        <div className={styles.spacer}/>
        <Checkbox theme={"dark"} label={"FX speculators"}
                  checked={fields.speculators}
                  onChange={(e:any)=>{handleChange(e?.target?.checked,"speculators") }}
        />
        <div className={styles.spacer}/>
        <Checkbox theme={"dark"} label={"Gambling firms or video game arcades"}
                  checked={fields.gambling}
                  onChange={(e:any)=>{handleChange(e?.target?.checked,"gambling") }}
        />
        <div className={styles.spacer}/>
        <Checkbox theme={"dark"} label={"Nonprofit, political and religious organizations"}
                  checked={fields.nonprofit}
                  onChange={(e:any)=>{handleChange(e?.target?.checked,"nonprofit") }}
        />
        <div className={styles.spacer}/>
        <Checkbox theme={"dark"} label={"Precious metals and stones firms"}
                  checked={fields.metals}
                  onChange={(e:any)=>{handleChange(e?.target?.checked,"metals") }}
        />
        <div className={styles.spacer}/>
        <Checkbox theme={"dark"} label={"Sale of used cars or heavy industry vehicles"}
                  checked={fields.cars}
                  onChange={(e:any)=>{handleChange(e?.target?.checked,"cars") }}
        />
      </div>
      <div className={styles.bottomButtons}>
        <BaseButton variant={"dark"} type={"transparent"} arrow={"left"} title={"Step 3"} onClick={onBack}/>
        <BaseButton title={"Continue"} variant={"dark"} arrow={"right"} onClick={onNext}/>
      </div>
    </div>
  </div>)
}