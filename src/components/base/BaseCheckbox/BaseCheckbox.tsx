import { ALL_ICONS } from '@constants/icons';
import React, { ReactNode } from 'react';
import { BaseIcon } from '..';
import styles from './BaseCheckbox.module.scss';

interface Props {
  id?: string;
  checked: boolean;
  disabled?: boolean;
  className?: string;
  error?: string | boolean;
  children?: ReactNode;
  onChange: (e: React.FormEvent) => void;
}

const BaseCheckbox: React.FC<Props> = ({
  id = '',
  disabled = false,
  className,
  error,
  children,
  checked,
  onChange,
}) => {
  const handler = !disabled ? onChange : undefined;

  return (
    <span
      className={`${className} ${styles.BaseCheckbox} ${
        disabled ? styles.isDisabled : ''
      }`}
      onClick={handler}
    >
      <input
        id={id}
        checked={checked}
        type="checkbox"
        className={styles.BaseCheckboxInput}
        disabled={disabled}
        onChange={handler}
      />
      <span
        className={` ${styles.BaseCheckboxCheck} ${
          checked ? styles.isActive : ''
        } ${error && !checked ? styles.isError : ''}`}
      >
        <svg
          viewBox="0 0 16 13"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={styles.BaseCheckboxTick}
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M13.3851 0.496566C13.9392 -0.119199 14.8877 -0.169117 15.5034 0.385072C16.1192 0.93926 16.1691 1.88769 15.6149 2.50346L6.61494 12.5035C6.04003 13.1422 5.04703 13.1684 4.43934 12.5607L0.43934 8.56067C-0.146447 7.97489 -0.146447 7.02514 0.43934 6.43935C1.02513 5.85357 1.97487 5.85357 2.56066 6.43935L5.44271 9.3214L13.3851 0.496566Z"
            fill="white"
          />
        </svg>
      </span>
      {children ? (
        <div
          className={`${styles.BaseCheckboxLabel} ${
            disabled ? styles.isDisabled : ''
          }
      `}
        >
          <span>{children}</span>
        </div>
      ) : null}
    </span>
  );
};

export default BaseCheckbox;
