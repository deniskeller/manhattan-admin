import React, { ReactNode } from 'react';
import styles from './BaseButton.module.scss';
import {ArrowRight, ArrowLeft} from "../../../assets/images/Arrow";

interface Props {
  children?: ReactNode | ReactNode[];
  title?: string;
  tooltip?: string;
  onClick?: (ev: React.MouseEvent<HTMLButtonElement>) => void;
  type?: string;
  error?: boolean;
  disabled?: boolean;
  className?: string;
  style?: object;
  styleTitle?: object;
  variant?: "dark" | "light";
  arrow?: "right" | "left";
  iconPosition?: "right" | "left";
  icon?: ReactNode;
  iconClassName?: string;
}

const BaseButton: React.FC<Props> = (props) => {
  const {
    title = '',
    children,
    onClick,
    type = 'default', //transparent
    error,
    disabled = false,
    className = '',
    style,
    styleTitle,
    tooltip = '',
    variant,
    arrow,
    iconPosition,
    icon,
    iconClassName
  } = props;
  return (
    <button
      title={tooltip}
      onClick={onClick}
      disabled={disabled}
      className={`
        ${className} 
        ${styles.Button} 
        ${styles['Button_' + type]} 
        ${styles['Button_' + variant]}
        ${error && styles.Button_Error}
      `}

      style={style}
    >

      <span className={styles.Title} style={styleTitle}>
         {iconPosition === "left" && <span className={iconClassName}>{icon}</span>}
        {arrow === "left" && <span className={`${styles.ArrowLeft} ${!(title?.length > 0) && styles.ArrowAlone}`}>
              <ArrowLeft color={variant === "dark" ? "white" : "#000000"}/>
        </span>}
        {title}
        {iconPosition === "right" && <span className={iconClassName}>{icon}</span>}
        {arrow === "right" && <span className={styles.ArrowRight}>
              <ArrowRight color={variant === "dark" ? "white" : "#000000"}/>
        </span>}
      </span>
    </button>
  );
};

export default BaseButton;
