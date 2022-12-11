import React from 'react';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import styles from './PhoneInput.module.scss';

interface Props {
  label?: string;
  placeholder?: string;
  className?: string;
  error?: string | boolean;
  value: string;
  onChange(value: string | number): void;
}

const PhoneInput2: React.FC<Props> = ({
  value,
  label,
  error,
  placeholder,
  className = '',
  onChange,
}) => {
  return (
    <div className={`${styles.BaseInput} ${className}`}>
      {label ? <label className={styles.Label}>{label}</label> : ''}

      <PhoneInput
        placeholder={placeholder}
        country={'us'}
        value={value}
        onChange={onChange}
        inputClass={error ? styles.Error : ""}
      />
      {error ? <div className={styles.ErrorText}>{error}</div> : ''}
    </div>
  );
};
export default PhoneInput2;
