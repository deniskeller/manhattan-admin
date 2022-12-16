import React, { useState } from 'react';
import useOnClickOutside from '@hooks/useOnClickOutside';
import styles from './BaseSortSelect.module.scss';
import { BaseIcon } from '..';
import { ALL_ICONS } from '@constants/icons';

interface Props {
  label?: string;
  className?: string;
  options: ISelectItem[];
  onChange: (value: string) => void;
}

interface ISelectItem {
  value: string;
  label: string;
}

const BaseSortSelect: React.FC<Props> = ({
  className,
  options,
  label,
  onChange,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState('');
  const selectContainerRef = React.useRef(null);

  const clickOutsideHandler = () => setIsOpen(false);
  useOnClickOutside(selectContainerRef, clickOutsideHandler);

  const toggling = () => setIsOpen(!isOpen);

  const onOptionClicked = (value: string) => () => {
    const kek = options.filter((option, index) => {
      if (option.value == value) {
        return options[index].label;
      }
    });

    setSelectedOption(kek[0].label);
    setIsOpen(false);
    onChange(value);
  };

  return (
    <div
      className={`${styles.SelectContainer} ${className}`}
      ref={selectContainerRef}
    >
      <div className={styles.SelectHeader} onClick={toggling}>
        <p>{selectedOption || label}</p>

        <BaseIcon
          icon={ALL_ICONS.ARROW_2}
          viewBox="0 0 16 9"
          className={`${styles.IconArrow} ${
            isOpen ? styles.IconArrowActive : null
          }`}
        />
      </div>
      {isOpen && (
        <ul className={styles.SelectList}>
          {options.map((option: ISelectItem, index) => (
            <li
              className={styles.ListItem}
              onClick={onOptionClicked(option.value)}
              key={index}
            >
              <span className={styles.ListItemTitle}>{option.label}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default BaseSortSelect;
