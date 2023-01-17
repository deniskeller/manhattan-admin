import React, { useRef, useState } from 'react';
import styles from './BaseTextareaApp.module.scss';

interface Props {
  type?: string;
  name?: string;
  label?: string;
  placeholder?: string;
  required?: boolean;
  className?: string;
  error?: string | boolean;
  value: string;
  maxLength?: number;
  onChange(value: string): void;
}

const BaseTextareaApp: React.FC<Props> = ({
  value,
  label,
  error,
  name,
  required,
  placeholder,
  className = '',
  maxLength,
  onChange,
}) => {
  const [focus, setFocus] = useState(false);
  const refTextarea = useRef<HTMLTextAreaElement | null>(null);

  return (
    <div className={`${styles.BaseTextarea} ${className}`}>
      <div
        className={`${styles.Textarea} ${error ? styles.Error : ''} ${
          focus ? styles.Focus : ''
        }`}
        onClick={() => refTextarea.current?.focus()}
      >
        <textarea
          ref={refTextarea}
          value={value}
          name={name}
          maxLength={maxLength}
          placeholder={placeholder}
          required={required}
          onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
            onChange(e.target.value)
          }
          onFocus={() => setFocus(true)}
          onBlur={() => setFocus(false)}
          className={`${styles.Textarea_Input}`}
        />
      </div>

      {label ? (
        <label
          className={`${styles.Label} ${value || focus ? styles.NoEmpty : ''} ${
            styles.Label_Default
          }`}
        >
          {label}
        </label>
      ) : null}

      {error ? <div className={styles.ErrorText}>{error}</div> : null}
    </div>
  );
};
export default BaseTextareaApp;
