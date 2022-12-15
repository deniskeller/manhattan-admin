import React, { ReactNode } from 'react';
import styles from './BaseTitle.module.scss';

interface Props {
  children?: ReactNode;
  type?: string;
  className?: string;
  color?: string;
  isHtml?: boolean;
  html?: string;
}

const BaseTitle: React.FC<Props> = ({
  children,
  type = 'h1',
  className = '',
  color = '#ffffff',
  isHtml,
  html,
}) => {
  if (isHtml) {
    if (type == 'h1') {
      return (
        <div className={`${className}`}>
          <h1
            className={`${styles.Title} ${styles['Title_' + type]}`}
            style={{ color: color }}
            dangerouslySetInnerHTML={{ __html: html || '' }}
          />
        </div>
      );
    } else if (type == 'h2') {
      return (
        <div className={`${className}`}>
          <h2
            className={`${styles.Title} ${styles['Title_' + type]}`}
            style={{ color: color }}
            dangerouslySetInnerHTML={{ __html: html || '' }}
          />
        </div>
      );
    } else {
      return null;
    }
  }

  if (type == 'h1') {
    return (
      <div className={`${className}`}>
        <h1
          className={`${styles.Title} ${styles['Title_' + type]}`}
          style={{ color: color }}
        >
          {children}
        </h1>
      </div>
    );
  } else if (type == 'h2') {
    return (
      <div className={`${className}`}>
        <h2
          className={`${styles.Title} ${styles['Title_' + type]}`}
          style={{ color: color }}
        >
          {children}
        </h2>
      </div>
    );
  } else if (type == 'app') {
    return (
      <div className={`${className}`}>
        <h2
          className={`${styles.Title} ${styles['Title_' + type]}`}
          style={{ color: color }}
        >
          {children}
        </h2>
      </div>
    );
  } else {
    return null;
  }
};

export default BaseTitle;
