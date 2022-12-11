import React from 'react';
import styles from './styles.module.scss';
import { Logo } from '@content/index';

interface Props {}

const Sidebar: React.FC<Props> = ({}) => {
  return (
    <div className={styles.Sidebar}>
      <div className={styles.WrapLogo}>
        <Logo small={true} />
      </div>
    </div>
  );
};

export default Sidebar;
