import React from 'react';
import styles from './BaseButtonApp.module.scss';

interface Props {
  title?: string;
  type?: string;
  disabled?: boolean;
  className?: string;
  style?: object;
  onClick?: (ev: React.MouseEvent<HTMLButtonElement>) => void;
}

const BaseButtonApp: React.FC<Props> = ({
  title = '',
  type = 'primary',
  disabled = false,
  className = '',
  style,
  onClick,
}) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`${className} ${styles.Button} ${styles['Button_' + type]}`}
      style={style}
    >
      <div className={styles.Title}>{title}</div>
    </button>
  );
};

export default BaseButtonApp;
