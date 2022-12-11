import React, { ReactNode } from 'react';
import styles from './Header.module.scss';

interface Props {
  children: ReactNode | ReactNode[];
  className?: string;
}

const Header: React.FC<Props> = ({ children, className = '' }) => {
  return (
    <>
      <div className={`${styles.Header} ${className}`}>{children}</div>
    </>
  );
};

export default Header;
