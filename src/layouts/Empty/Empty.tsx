import React from 'react';
import styles from './Empty.module.scss';

interface Props {
  children: JSX.Element;
}

const Empty: React.FC<Props> = ({ children }) => {
  return (
    <>
      <div className={styles.Content}>{children}</div>
    </>
  );
};

export default Empty;
