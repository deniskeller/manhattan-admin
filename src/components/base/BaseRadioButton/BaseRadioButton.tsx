import React, { ReactNode } from 'react';
import styles from './BaseRadioButton.module.scss';

interface Props {
  value?: string;
  className?: string;
  name?: string;
  error?: string | boolean;
  checked?: boolean;
  disabled?: boolean;
  children?: ReactNode;
  type?: string;
  onChange: (e: React.FormEvent) => void;
  icon?: string;
}

const BaseRadioButton: React.FC<Props> = ({
  children,
  value = '',
  className,
  name,
  error,
  checked,
  icon,
  disabled = false,
  type = 'default',
  onChange,
}) => {
  const handler = !disabled ? onChange : undefined;

  return (
    <div
      className={`${className} ${styles.BaseRadioButton} ${
        checked && !disabled ? styles.isActive : ''
      } ${disabled ? styles.Disabled : ''} ${styles['RadioButton_' + type]}`}
      onClick={handler}
    >
      <input
        value={value}
        checked={checked}
        disabled={disabled}
        name={name}
        type="radio"
        className={styles.Input}
        readOnly
        onChange={handler}
      />
      <div
        className={` ${styles.BaseRadioButtonCheck} ${
          checked && !disabled ? styles.isActive : ''
        } ${error && !checked ? styles.isError : ''}`}
      >
        <div className={styles.BaseRadioButtonTick}></div>
      </div>

      {children ? (
        <div className={styles.Label}>
          <span>{children}</span>
        </div>
      ) : null}

      {type && type == 'button' ? (
        <div className={styles.Icon}>
          {icon == '$' ? (
            <svg
              viewBox="0 0 10 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className={styles.Icon_S}
            >
              <path
                d="M5.58389 1.74475C6.18562 1.76587 6.80319 1.87143 7.43659 2.06145C8.06999 2.25147 8.63478 2.54706 9.13094 2.94822C8.61366 3.53939 8.10166 4.11473 7.59494 4.67424C7.33103 4.41032 7.01433 4.20446 6.64484 4.05667C6.27536 3.90888 5.92171 3.8297 5.58389 3.81914V6.35275C5.9956 6.47943 6.41259 6.62195 6.83486 6.7803C7.25713 6.93865 7.64245 7.14978 7.99082 7.4137C8.33919 7.67762 8.62422 7.9996 8.84591 8.37964C9.0676 8.75968 9.17845 9.23473 9.17845 9.80479C9.17845 10.3854 9.07288 10.8921 8.86175 11.325C8.66117 11.7472 8.3867 12.1009 8.03832 12.3859C7.70051 12.6709 7.30991 12.8874 6.86653 13.0351C6.43371 13.1829 5.98505 13.2621 5.52055 13.2727V14.4286H4.34876V13.2727C3.66257 13.2516 2.97111 13.1249 2.27437 12.8926C1.57762 12.6498 0.965335 12.2909 0.4375 11.8158C0.711974 11.5308 0.986449 11.2458 1.26092 10.9608C1.54595 10.6652 1.82571 10.3696 2.10018 10.074C2.23742 10.2323 2.40105 10.3801 2.59107 10.5174C2.78109 10.6441 2.97639 10.7549 3.17696 10.8499C3.37754 10.9449 3.57812 11.0241 3.7787 11.0874C3.97927 11.1402 4.16929 11.1666 4.34876 11.1666V8.39547C3.89482 8.26879 3.45672 8.12628 3.03445 7.96793C2.62274 7.80958 2.25853 7.60372 1.94183 7.35036C1.62513 7.097 1.37177 6.79086 1.18175 6.43193C0.991727 6.06244 0.896717 5.61378 0.896717 5.08595C0.896717 4.56867 1.00228 4.10945 1.21342 3.7083C1.42455 3.29659 1.69903 2.95349 2.03684 2.67902C2.37465 2.39399 2.7547 2.17758 3.17696 2.02978C3.59923 1.87143 4.01622 1.7817 4.42793 1.76059V0.667969H5.58389V1.74475ZM4.42793 3.78747C4.1429 3.81914 3.88426 3.92999 3.65202 4.12001C3.43032 4.29947 3.31948 4.56339 3.31948 4.91176C3.31948 5.24958 3.41977 5.50822 3.62035 5.68768C3.82092 5.86714 4.09012 5.9991 4.42793 6.08356V3.78747ZM5.52055 11.1824C5.87948 11.1613 6.15923 11.0452 6.35981 10.8341C6.57094 10.6124 6.67651 10.3168 6.67651 9.94731C6.67651 9.57783 6.56566 9.30335 6.34397 9.12389C6.13284 8.93387 5.85837 8.78607 5.52055 8.68051V11.1824Z"
                fill="#2E3C8D"
              />
            </svg>
          ) : icon == 'T' ? (
            <svg
              viewBox="0 0 14 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className={styles.Icon_T}
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M8.4164 7.46302C8.3384 7.46887 7.9354 7.49292 7.03646 7.49292C6.32146 7.49292 5.81381 7.47147 5.63572 7.46302C2.87258 7.34147 0.810146 6.86048 0.810146 6.28458C0.810146 5.70868 2.87258 5.22834 5.63572 5.10484V6.98398C5.81641 6.99698 6.33381 7.02753 7.04881 7.02753C7.9068 7.02753 8.33645 6.99178 8.4138 6.98463V5.10614C11.1711 5.22899 13.229 5.70998 13.229 6.28458C13.229 6.85918 11.1717 7.34017 8.4138 7.46237L8.4164 7.46302ZM8.4164 4.91179V3.23025H12.2644V0.666016H1.78774V3.23025H5.63506V4.91114C2.50793 5.05479 0.15625 5.67423 0.15625 6.41653C0.15625 7.15883 2.50793 7.77762 5.63506 7.92192V13.3104H8.41575V7.91997C11.5357 7.77632 13.8835 7.15753 13.8835 6.41588C13.8835 5.67423 11.5377 5.05544 8.41575 4.91114L8.4164 4.91179Z"
                fill="#2E3C8D"
              />
            </svg>
          ) : null}
        </div>
      ) : null}
    </div>
  );
};

export default BaseRadioButton;
