import React from 'react';
import styles from "./BaseLabel.module.scss";
type Props = {
  type: 'new'  | 'success',
  children: React.ReactNode
}

const BaseLabel:React.FC<Props> = ({type, children})=>{
  return(
    <div className={`${styles.Label} ${styles[`Label_${type}`]}`}>
      {children}
    </div>
  )
}

export default BaseLabel;