import React from 'react';
import styles from './styles.module.scss';

type Props = {
  label: string;
  value: string;
};
const SelectStatusItemInner: React.FC<Props> = ({ value }) => {
  const data =
    value === 'INCOMING'
      ? { color: 'rgba(26, 26, 26, 0.3)', text: 'Incoming' }
      : value === 'IN_PROGRESS'
      ? { color: '#8C97D9', text: 'In progress' }
      : value === 'COMPLETED'
      ? { color: '#1AC057', text: 'Completed' }
      : { color: 'rgba(26, 26, 26, 0.05)', text: 'Unknown' };
  return (
    <div className={styles.SelectStatusRow}>
      <div
        className={`${styles.SelectStatusRowStatus} SelectStatusRowStatusHidden`}
        style={{ backgroundColor: data.color }}
      />
      <div className={styles.SelectStatusRowText}>{data.text}</div>
    </div>
  );
};

export default SelectStatusItemInner;
