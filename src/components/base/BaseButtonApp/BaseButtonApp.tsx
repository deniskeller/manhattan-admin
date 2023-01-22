import { ALL_ICONS } from '@constants/icons';
import React, { ReactNode } from 'react';
import { BaseIcon } from '..';
import styles from './BaseButtonApp.module.scss';

interface Props {
  title?: string;
  size?: string;
  type?: string;
  disabled?: boolean;
  className?: string;
  style?: object;
  icon?: string;
  onClick?: (ev: React.MouseEvent<HTMLButtonElement>) => void;
}

const BaseButtonApp: React.FC<Props> = ({
  title = '',
  type = 'primary',
  size = '',
  disabled = false,
  className = '',
  style,
  icon = '',
  onClick,
}) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`${className} ${styles.Button} ${styles['Button_' + type]} ${
        styles['Button_' + size]
      }`}
      style={style}
    >
      {icon === 'invite' ? (
        <BaseIcon
          icon={ALL_ICONS.INVITE}
          viewBox="0 0 16 16"
          className={styles.Invite}
        />
      ) : null}

      {icon === 'invest' ? (
        <BaseIcon
          icon={ALL_ICONS.INVEST}
          viewBox="0 0 20 12"
          className={styles.Invest}
        />
      ) : null}

      {icon === 'create-project' ? (
        <BaseIcon
          icon={ALL_ICONS.CREATE_PROJECT}
          viewBox="0 0 20 20"
          className={styles.CreateProject}
        />
      ) : null}

      {icon === 'new-article' ? (
        <BaseIcon
          icon={ALL_ICONS.NEW_ARTICLE}
          viewBox="0 0 16 16"
          className={styles.NewArticle}
        />
      ) : null}

      {icon === 'edit' ? (
        <BaseIcon
          icon={ALL_ICONS.EDIT}
          viewBox="0 0 16 16"
          className={styles.Edit}
        />
      ) : null}

      {icon === 'delete' ? (
        <BaseIcon
          icon={ALL_ICONS.DELETE}
          viewBox="0 0 18 20"
          className={styles.Delete}
        />
      ) : null}

      <div className={styles.Title}>{title}</div>

      {icon === 'to-details' ? (
        <BaseIcon
          icon={ALL_ICONS.TO_DETAILS}
          viewBox="0 0 16 8"
          className={styles.ToDetails}
        />
      ) : null}
    </button>
  );
};

export default BaseButtonApp;
