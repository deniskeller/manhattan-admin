import React from 'react';
import styles from './Admin.module.scss';
import { Sidebar } from '@admin/index';

interface Props {
  children: JSX.Element;
}

const Admin: React.FC<Props> = ({ children }) => {
  return (
    <>
      <div className={styles.Layout}>
        <div className={styles.SidebarContainer}>
          <Sidebar />
        </div>
        <div className={`${styles.Common}`}>
          <div className={styles.Header}></div>
          <div className={`${styles.Content}`}>{children}</div>
        </div>
      </div>
    </>
  );
};

export default Admin;
