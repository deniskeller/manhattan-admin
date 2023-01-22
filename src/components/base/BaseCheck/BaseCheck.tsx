import React from 'react';
import styles from './BaseCheck.module.scss';

interface Props {
  checked: boolean;
  className?: string;
}

const BaseCheck: React.FC<Props> = ({ checked, className }) => {
  return (
    <span className={className}>
      <svg
        width="24"
        height="20"
        viewBox="0 0 24 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M5 12L8.23309 14.4248C8.66178 14.7463 9.26772 14.6728 9.60705 14.2581L18 4"
          stroke={checked ? '#1D4FD7' : '#1A1A1A'}
          strokeWidth="2"
          strokeOpacity={checked ? 1 : 0.3}
          strokeLinecap="round"
        />
      </svg>
    </span>
  );
};

export default BaseCheck;
