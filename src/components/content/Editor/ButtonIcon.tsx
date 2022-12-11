import React, { ReactNode } from 'react';
import styles from './styles.module.scss';

interface Props {
  children?: ReactNode | ReactNode[];
  onClick?: (ev: React.MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
  className?: string;
  style?: object;
}

const ButtonIcon: React.FC<Props> = ({
                                       children,
                                       onClick,
                                       disabled = false,
                                       className = '',
                                       style,
                                     }) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`${className} ${styles.ButtonIcon} `}
      style={style}
    >
      {children}
    </button>
  );
};

export default ButtonIcon;
