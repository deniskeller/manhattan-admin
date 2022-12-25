import React from 'react';
import styles from "./BaseStatus.module.scss";
import {TStatusFrom} from "../../pages/App/Forms/FormsList/FormsList";
type Props = {
  status: TStatusFrom
}

const BaseStatusForm:React.FC<Props> = ({status}) =>{

  const data =
    status === "INCOMING" ? {color: "rgba(26, 26, 26, 0.3)", text: "Incoming"} :
      status === "IN_PROGRESS" ? {color:"#8C97D9", text: "In progress"} :
        status === "COMPLETED" ? {color: "#1AC057", text: "Completed"} :
          {color: "rgba(26, 26, 26, 0.05)", text: "Unknown"};
  return(
    <span className={styles.Status}>
      <span className={`${styles.Circle}`} style={{backgroundColor: data.color}}/>
      <span className={styles.Text}>
           {data.text}
      </span>
    </span>
  )
}

export default BaseStatusForm;