import React, { ReactNode } from 'react';
import styles from './BaseText.module.scss';

interface Props {
  children: ReactNode;
  className?: string;
  color?: string;
}

const BaseText: React.FC<Props> = ({
  children,
  className = '',
  color = '#ffffff',
}) => {
  return (
    <span className={className}>
      <p style={{ color: color }} className={`${styles.Text}`}>
        {children}
      </p>
    </span>
  );
};

export default BaseText;
