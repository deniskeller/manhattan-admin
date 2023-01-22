import React from 'react';
import styles from "./BaseStatus.module.scss";
type Props = {
  status: 'SUBMITTED' | 'REJECTED' | "APROOVED" | "DECLINED" | "AWAITING";

}
const BaseStatus:React.FC<Props> = ({status}) =>{
  const isError = status === 'REJECTED' || status === 'DECLINED';
  const isSuccess = status === 'SUBMITTED' || status === 'APROOVED';
  const text = status.charAt(0).toUpperCase() + status.toLowerCase().slice(1);
  return(
    <span className={styles.Status}>
      <span className={`${styles.Circle} ${isError ? styles.Error : isSuccess ? styles.Success : ""}`}/>
      <span className={styles.Text}>
           {text}
      </span>
    </span>
  )
}

export default BaseStatus;