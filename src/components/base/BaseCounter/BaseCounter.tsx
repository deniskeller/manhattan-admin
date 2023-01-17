import { ALL_ICONS } from '@constants/icons';
import React, { useRef, useState } from 'react';
import { BaseIcon } from '..';
import styles from './BaseCounter.module.scss';

interface Props {
  name: string;
  label?: string;
  min?: number;
  max?: number;
  placeholder?: string;
  required?: boolean;
  disabled?: boolean;
  className?: string;
  error?: string | boolean;
  value: number;
  onChange(value: number): void;
  onKeyDown?: React.KeyboardEventHandler;
}

const BaseCounter: React.FC<Props> = ({
  value,
  label,
  error,
  name,
  min,
  max,
  required = false,
  disabled = false,
  placeholder,
  className = '',
  onChange,
  onKeyDown,
}) => {
  const refCounter = useRef<HTMLInputElement | null>(null);

  const incrementHandler = () => {
    refCounter.current?.focus();
    onChange(value + 1);
  };

  const decrementHandler = () => {
    refCounter.current?.focus();
    if (value <= 1) {
      return 1;
    }
    onChange(value - 1);
  };

  return (
    <div className={`${styles.BaseCounter} ${className}`}>
      <input
        ref={refCounter}
        value={value || ''}
        type="number"
        className={`${styles.Input} ${error ? styles.Error : ''}`}
        name={name}
        min={min}
        max={max}
        placeholder={placeholder}
        required={required}
        disabled={disabled}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          onChange(+e.target.value)
        }
        onKeyDown={onKeyDown}
      />

      {label ? (
        <label
          className={`${styles.Label} ${value ? styles.NoEmpty : ''} ${
            styles.Label_Default
          }`}
        >
          {label}
        </label>
      ) : null}

      {error ? <div className={styles.ErrorText}>{error}</div> : ''}

      <div
        className={`${styles.Counter} ${
          disabled ? styles.Counter_Disabled : ''
        }`}
      >
        <div className={`${styles.Increment}`} onClick={incrementHandler}>
          <BaseIcon
            icon={ALL_ICONS.ARROW_2}
            viewBox="0 0 16 9"
            className={`${styles.Increment_Icon}`}
          />
        </div>

        <div className={`${styles.Decrement}`} onClick={decrementHandler}>
          <BaseIcon
            icon={ALL_ICONS.ARROW_2}
            viewBox="0 0 16 9"
            className={`${styles.Decrement_Icon}`}
          />
        </div>
      </div>
    </div>
  );
};
export default BaseCounter;
