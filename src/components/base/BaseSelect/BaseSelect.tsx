import React, { useState } from 'react';
import useOnClickOutside from '@hooks/useOnClickOutside';
import styles from './BaseSelect.module.scss';
import { BaseIcon } from '@base/index';
import { ALL_ICONS } from '@constants/icons';

interface Props {
  label?: string;
  placeholder?: string;
  type?: string;
  className?: string;
  error?: string | boolean;
  options: ISelectItem[];
  onChange: (value: string) => void;
}

interface ISelectItem {
  name: string;
  code: string;
}

const BaseSelect: React.FC<Props> = ({
  label,
  placeholder,
  className,
  type = 'default',
  options,
  error,
  onChange,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState('');
  const selectContainerRef = React.useRef(null);

  const clickOutsideHandler = () => setIsOpen(false);
  useOnClickOutside(selectContainerRef, clickOutsideHandler);

  const toggling = () => setIsOpen(!isOpen);

  const onOptionClicked = (value: string) => () => {
    setSelectedOption(value);
    setIsOpen(false);
    onChange(value);
  };

  return (
    <div
      className={`${styles.SelectContainer} ${
        styles['Select_' + type]
      } ${className} ${error ? styles.SelectError : ''} `}
      ref={selectContainerRef}
    >
      {label ? <label className={styles.Label}>{label}</label> : ''}

      <div
        className={`${styles.SelectHeader}  ${
          isOpen ? styles.SelectHeaderFocus : ''
        } ${error ? styles.Error : ''}`}
        onClick={toggling}
      >
        <p className={`${selectedOption ? styles.NotEmpty : ''}`}>
          {selectedOption || placeholder}
        </p>

        <BaseIcon
          icon={ALL_ICONS.SELECT_ARROW}
          viewBox="0 0 8 5"
          className={`${styles.IconArrow} ${
            isOpen ? styles.IconArrowActive : null
          }`}
        />
      </div>
      {error ? <div className={styles.ErrorText}>{error}</div> : ''}
      {isOpen && (
        <ul className={styles.SelectList}>
          {options.map((option: ISelectItem) => (
            <li
              className={styles.ListItem}
              onClick={onOptionClicked(option.name)}
              key={option.code}
            >
              <span className={styles.ListItemTitle}>{option.name}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default BaseSelect;
