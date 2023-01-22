import React from 'react';
import styles from './InfoRow.module.scss';

type Props = {
  left: string;
  right: React.ReactNode;
  className?: string;
};
const InfoRow: React.FC<Props> = ({ left, right, className = '' }) => {
  return (
    <div className={`${styles.InfoRow} ${className}`}>
      <div className={styles.Left}>
        <span>{left}</span>
      </div>
      <div className={styles.Right}>
        <span>{right}</span>
      </div>
    </div>
  );
};

export default InfoRow;
