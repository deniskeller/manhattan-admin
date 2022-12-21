import { ALL_ICONS } from '@constants/icons';
import React from 'react';
import { BaseIcon } from '..';
import styles from './BaseInputApp.module.scss';

interface Props {
  type?: string;
  name: string;
  label?: string;
  prefix?: string;
  min?: number;
  max?: number;
  placeholder?: string;
  required?: boolean;
  disabled?: boolean;
  className?: string;
  autocomplete?: string;
  error?: string | boolean;
  value: string | number;
  onChange(value: string | number): void;
  onKeyDown?: React.KeyboardEventHandler;
}

const BaseInputApp: React.FC<Props> = ({
  value,
  label,
  type = 'text',
  error,
  name,
  min,
  max,
  required = false,
  disabled = false,
  prefix = '',
  placeholder,
  className = '',
  autocomplete = 'off',
  onChange,
  onKeyDown,
}) => {
  return (
    <div className={`${styles.BaseInput} ${className}`}>
      {prefix ? (
        <>
          <div className={styles.Prefix}>
            <BaseIcon
              viewBox="0 0 20 20"
              icon={ALL_ICONS.PREFIX_DOLLAR}
              className={styles.Prefix_Icon}
            />
          </div>
        </>
      ) : null}

      <input
        value={value}
        type={type}
        className={`${styles.Input} ${error ? styles.Error : ''} ${
          prefix ? styles.WithPrefix : ''
        }`}
        name={name}
        min={min}
        max={max}
        placeholder={placeholder}
        required={required}
        autoComplete={autocomplete}
        disabled={disabled}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          onChange(e.target.value)
        }
        onKeyDown={onKeyDown}
      />

      {label ? (
        <label
          className={`${styles.Label} ${value ? styles.NoEmpty : ''} ${
            prefix ? styles.Label_WithPrefix : styles.Label_Default
          }`}
        >
          {label}
        </label>
      ) : null}

      {error ? <div className={styles.ErrorText}>{error}</div> : ''}
    </div>
  );
};
export default BaseInputApp;
