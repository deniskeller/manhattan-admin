import React from 'react';
import styles from './HeaderApp.module.scss';

type Props = {};

const HeaderApp = () => {
  return (
    <div className={styles.HeaderApp}>
      <header className={styles.HeaderApp_Header}>Header</header>
    </div>
  );
};

export default HeaderApp;
