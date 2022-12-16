import React from 'react';
import styles from './BaseButtonApp.module.scss';

interface Props {
  title?: string;
  size?: string;
  type?: string;
  disabled?: boolean;
  className?: string;
  style?: object;
  onClick?: (ev: React.MouseEvent<HTMLButtonElement>) => void;
}

const BaseButtonApp: React.FC<Props> = ({
  title = '',
  type = 'primary',
  size = '',
  disabled = false,
  className = '',
  style,
  onClick,
}) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`${className} ${styles.Button} ${styles['Button_' + type]} ${
        styles['Button_' + size]
      }`}
      style={style}
    >
      <div className={styles.Title}>{title}</div>
    </button>
  );
};

export default BaseButtonApp;
