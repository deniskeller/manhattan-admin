//@ts-nocheck
import React, { useEffect, useRef, useState } from 'react';
import styles from './InputDataList.module.scss';
import useOnClickOutside from '@hooks/useOnClickOutside';
import { BaseIcon } from '@base/index';
import { ALL_ICONS } from '@constants/icons';

interface Props {
  type?: string;
  name: string;
  label?: string;
  min?: number;
  max?: number;
  placeholder?: string;
  required?: boolean;
  className?: string;
  autocomplete?: string;
  error?: string | boolean;
  value: string | number;
  options: ISelectItem[];
  onChange(value: string | number): void;
  onKeyDown?: React.KeyboardEventHandler;
}

interface ISelectItem {
  value: number;
  title: string;
}

const InputDataList: React.FC<Props> = ({
  value,
  options,
  type = 'text',
  name,
  min,
  max,
  required = false,
  placeholder,
  className = '',
  autocomplete = 'off',
  onChange,
  onKeyDown,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const [selectedOption, setSelectedOption] = useState('');

  const clickOutsideHandler = () => setIsOpen(false);
  useOnClickOutside(wrapperRef, clickOutsideHandler);

  const toggling = () => setIsOpen(!isOpen);

  const onOptionClicked = (value: string) => () => {
    console.log('value111: ', value);
    setSelectedOption(value);
    onChange(value);
    setIsOpen(false);
  };
  const inputWidth = value?.toString()?.length >= 1 ? (
    value?.toString()?.length - Math.floor((value?.toString().match(/,/g) || []).length / 2 )  )
    : 6;

  return (
    <div className={`${styles.InputDataList} ${className}`} ref={wrapperRef}>
      <div className={styles.InputDataList_Currency}>
        <span>$</span>
      </div>
      <div
        className={styles.InputDataList_Wrapper}
        onClick={() => inputRef.current?.focus()}
      >
        <input
          ref={inputRef}
          value={value}
          className={styles.InputDataList_Input}
          name={name}
          min={min}
          max={max}
          placeholder={placeholder}
          required={required}
          autoComplete={autocomplete}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            onChange(e.target.value)
          }
          onKeyDown={onKeyDown}
           style={{
             width: inputRef?.current
              ? `${inputWidth}ch`
               : '100%',
           }}
          onFocus={() => {
            setIsOpen(true);
          }}
        />

        {/* <p className={`${selectedOption ? styles.NotEmpty : ''}`}>
          {selectedOption || placeholder}
        </p> */}

        <BaseIcon
          viewBox="0 0 40 40"
          icon={ALL_ICONS.ARROW}
          className={`${styles.InputDataList_IconArrow} ${
            isOpen ? styles.Active : null
          }`}
        />
      </div>
      {isOpen && (
        <ul className={styles.SelectList}>
          {options.map((option: ISelectItem) => (
            <li
              className={styles.ListItem}
              onClick={onOptionClicked(option.value)}
              key={option.code}
            >
              <span className={styles.ListItemTitle}>{option.title}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
export default InputDataList;
