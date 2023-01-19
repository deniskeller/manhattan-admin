//@ts-nocheck
import { ALL_ICONS } from '@constants/icons';
import React, { KeyboardEvent, useEffect, useRef } from 'react';
import { BaseIcon } from '..';
import styles from './BaseSelectMultipleApp.module.scss';

interface Props {
  placeholder?: string;
  className?: string;
  label?: string;
  options: ISelectItem[];
  multiple?: boolean;
  onChange?: (value: string) => void;
}

interface ISelectItem {
  [key: string]: string;
}

const BaseSelectMultipleApp: React.FC<Props> = ({
  placeholder,
  className = '',
  options,
  multiple,
  label,
  onChange,
}) => {
  const [values, setValues] = React.useState<ISelectItem[]>([]);
  const [focusedValue, setFocusedValue] = React.useState(-1);
  const [isFocused, setIsFocused] = React.useState(false);
  const [isOpen, setIsOpen] = React.useState(false);
  const [typed, setTyped] = React.useState('');
  const searchInputRef = useRef<HTMLInputElement>(null);

  const onFocus = () => {
    setIsFocused(true);
  };

  useEffect(() => {
    if (isOpen && searchInputRef) {
      console.log('searchInputRef: ', searchInputRef);
    }
  }, [isOpen, searchInputRef]);

  const onBlur = () => {
    if (multiple) {
      setFocusedValue(-1);
      setIsFocused(false);
      setIsOpen(false);
    } else {
      const value = values[0];
      let focusedValue = -1;

      if (value) {
        focusedValue = options.findIndex((option) => option.value === value);
      }
      setFocusedValue(focusedValue);
      setIsFocused(false);
      setIsOpen(false);
    }
  };

  const onKeyDown = (e: KeyboardEvent) => {
    switch (e.key) {
      case ' ':
        e.preventDefault();
        if (isOpen) {
          if (multiple) {
            if (focusedValue !== -1) {
              const [...values2] = values;
              const value = options[focusedValue].value;
              const index = values2.indexOf(value);

              if (index === -1) {
                values2.push(value);
              } else {
                values2.splice(index, 1);
              }
              setValues(values2);
              onChange(values2);
            }
          }
        } else {
          setIsOpen(true);
        }
        break;
      case 'Escape':
      case 'Tab':
        if (isOpen) {
          e.preventDefault();
          setIsOpen(false);
        }
        break;
      case 'Enter':
        setIsOpen(!isOpen);
        break;
      case 'ArrowDown':
        e.preventDefault();

        if (focusedValue < options.length - 1) {
          setFocusedValue(focusedValue++);

          if (multiple) {
            setFocusedValue(focusedValue);
          } else {
            setValues([options[focusedValue].value]);
            onChange([options[focusedValue].value]);
            setFocusedValue(focusedValue);
          }
        }
        break;
      case 'ArrowUp':
        e.preventDefault();

        if (focusedValue > 0) {
          setFocusedValue(focusedValue--);

          if (multiple) {
            setFocusedValue(focusedValue);
          } else {
            setValues([options[focusedValue].value]);
            onChange([options[focusedValue].value]);
            setFocusedValue(focusedValue);
          }
        }
        break;
      default:
        if (/^[a-z0-9]$/i.test(e.key)) {
          const char = e.key;

          setTimeout(() => {
            setTyped('');
          }, 1000);

          const typed2 = typed + char;
          const re = new RegExp(`^${typed2}`, 'i');
          const index = options.findIndex((option) => re.test(option.value));

          if (index === -1) {
            setTyped(typed2);
          }

          if (multiple) {
            setFocusedValue(index);
            setTyped(typed2);
          } else {
            setValues([options[index].value]);
            onChange([options[index].value]);
            setFocusedValue(index);
            setTyped(typed2);
          }
        }
        break;
    }
  };

  const onClick = () => {
    setIsOpen(!isOpen);
  };

  const onDeleteOption = (e) => {
    const { value } = e.currentTarget.dataset;

    const [...values2] = values;
    const index = values2.indexOf(value);

    values2.splice(index, 1);

    setValues(values2);
    onChange(values2);
  };

  const onHoverOption = (e: React.ChangeEvent<HTMLElement>) => {
    const { value } = e.currentTarget.dataset;
    const index = options.findIndex((option) => option.value === value);

    setFocusedValue(index);
  };

  const onClickOption = (e) => {
    const { value } = e.currentTarget.dataset;
    // console.log('value: ', value);

    if (!multiple) {
      setValues([value]);
      setIsOpen(false);
      onChange(value);
    } else {
      const [...values2] = values;
      const index = values2.indexOf(value);

      if (index === -1) {
        values2.push(value);
      } else {
        values2.splice(index, 1);
      }

      setValues(values2);
      onChange(values2);
    }
  };

  const stopPropagation = (e) => {
    e.stopPropagation();
  };

  const renderValues = () => {
    if (multiple) {
      return (
        <div className={styles.Wrapper}>
          {values.map((value, index) => {
            return (
              <span
                key={index}
                onClick={stopPropagation}
                className={styles.Multiple}
              >
                <span className={styles.Multiple_Name}>{value}</span>

                <span
                  data-value={value}
                  onClick={onDeleteOption}
                  className={styles.Delete}
                >
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className={styles.Delete_Icon}
                  >
                    <path
                      d="M1 11L11 1M1 1L11 11"
                      stroke="#1A1A1A"
                      strokeOpacity="0.3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </span>
            );
          })}

          {isOpen ? (
            <div className={styles.Search}>
              <input
                ref={searchInputRef}
                type="text"
                className={styles.Search_Input}
                onClick={(e) => e.preventDefault()}
              />
            </div>
          ) : null}
        </div>
      );
    }

    return <div className={styles.Value}>{values[0]}</div>;
  };

  const renderOptions = () => {
    if (!isOpen) {
      return null;
    }

    return (
      <div className={styles.Options}>
        <span>{options.map(renderOption)}</span>
      </div>
    );
  };

  const renderOption = (option: ISelectItem | string, index: number) => {
    const { value } = option;

    const selected = values.includes(value);

    return (
      <div
        key={value}
        data-value={value}
        className={`${styles.Option} ${selected ? styles.Selected : null} ${
          index === focusedValue ? styles.Focused : null
        }`}
        onMouseOver={onHoverOption}
        onClick={onClickOption}
      >
        {value}

        {multiple ? (
          <>
            {selected ? (
              <svg
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className={styles.Checkbox}
              >
                <path
                  d="M5 13L9 17L19 7"
                  stroke="#2E3C8D"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            ) : null}
          </>
        ) : null}
      </div>
    );
  };

  // React.useEffect(() => {
  //   console.log('values inside: ', values);
  //   onChange(values);
  // }, [values, onChange]);

  return (
    <div
      className={`${styles.Select} ${className}`}
      tabIndex={0}
      onFocus={onFocus}
      onBlur={onBlur}
      onKeyDown={onKeyDown}
    >
      <label
        className={`${styles.Label} ${
          isOpen || values.length > 0 ? styles.Label_Focus : ''
        }`}
      >
        {placeholder}
      </label>

      <div className={styles.Selection} onClick={onClick}>
        {renderValues()}

        <BaseIcon
          icon={ALL_ICONS.SELECT_ARROW}
          viewBox="0 0 8 5"
          className={`${styles.IconArrow} ${
            isOpen ? styles.IconArrowActive : null
          }`}
        />
      </div>
      {renderOptions()}
    </div>
  );
};

export default BaseSelectMultipleApp;
