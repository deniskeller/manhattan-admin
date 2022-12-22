import React, { useState } from 'react';
import useOnClickOutside from '@hooks/useOnClickOutside';
import styles from './BaseSelectApp.module.scss';
import { BaseIcon } from '@base/index';
import { ALL_ICONS } from '@constants/icons';

interface Props {
  label?: string;
  type?: string;
  className?: string;
  error?: string | boolean;
  disabled?: boolean;
  options: ISelectItem[];
  onChange: (value: string) => void;
}

interface ISelectItem {
  value: string;
  label: string;
}

const BaseSelectApp: React.FC<Props> = ({
  label,
  className,
  type = 'default',
  options,
  error,
  disabled = false,
  onChange,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(options[0].label);
  const selectContainerRef = React.useRef(null);

  const clickOutsideHandler = () => setIsOpen(false);
  useOnClickOutside(selectContainerRef, clickOutsideHandler);

  const toggling = () => setIsOpen(!isOpen);

  const onOptionClicked = (value: string) => () => {
    const item = options.filter((item) => {
      return item.value == value;
    })[0].label;
    setSelectedOption(item);
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
      <div
        className={`${styles.SelectHeader}  ${
          isOpen ? styles.SelectHeaderFocus : ''
        } ${error ? styles.Error : ''} ${disabled ? styles.Disabled : ''}`}
        onClick={toggling}
      >
        <p
          className={`${selectedOption ? styles.NotEmpty : ''}`}
          style={{ position: label ? 'absolute' : 'static' }}
        >
          {selectedOption}
        </p>

        <BaseIcon
          icon={ALL_ICONS.SELECT_ARROW}
          viewBox="0 0 8 5"
          className={`${styles.IconArrow} ${
            isOpen ? styles.IconArrowActive : null
          }`}
        />
      </div>

      {label ? (
        <label
          className={`${styles.Label} ${
            (!isOpen && selectedOption) || selectedOption
              ? styles.Label_Focus
              : ''
          }`}
        >
          {label}
        </label>
      ) : null}

      {error ? <div className={styles.ErrorText}>{error}</div> : ''}

      {isOpen && (
        <ul className={styles.SelectList}>
          {options.map((option: ISelectItem) => (
            <li
              className={`${styles.ListItem} ${
                selectedOption === option.label ? styles.ListItem_Active : ''
              }`}
              onClick={onOptionClicked(option.value)}
              key={option.value}
            >
              <span className={styles.ListItemTitle}>{option.label}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default BaseSelectApp;
