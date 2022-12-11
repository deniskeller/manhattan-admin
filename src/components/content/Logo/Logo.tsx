import React from 'react';
import styles from './Logo.module.scss';
import Link from 'next/link';
import { BaseIcon } from '@base/index';
import { ALL_ICONS } from '@constants/icons';

interface Props {
  className?: string;
  small?: boolean;
}

const Logo: React.FC<Props> = ({ className, small }) => {
  return (
    <div className={`${styles.Logo} ${className} ${small ? styles.LogoSmall : ""} `}>
      <Link href="/">
        <a>
          <BaseIcon
            viewBox="0 0 173 62"
            icon={ALL_ICONS.LOGO}
            className={styles.Icon}
          />
        </a>
      </Link>
      <BaseIcon
        viewBox="0 0 21 21"
        icon={ALL_ICONS.LOGO_GEAR}
        className={styles.Gear}
      />
    </div>
  );
};

export default Logo;
