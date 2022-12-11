import React from "react";
import styles from "../FinancialDetails/style.module.scss";
import {BaseButton} from "@base/index";
import {useRouter} from "next/router";

export const SuccessStep = ()=>{
  const router = useRouter();
  return(
    <div>
      <div className={styles.TitleForm}>Application sent successfully</div>
      <div className={styles.SuccessText}>
        Thank you! We've just received received your application for join Manhattan VC. <br/>
        We will get back to you shortly.
      </div>
      <div className={styles.wrapBtn}>
       <BaseButton title={"Main page"} variant={"dark"} onClick={()=>{router.push("/")}}/>
      </div>
    </div>
  )
}