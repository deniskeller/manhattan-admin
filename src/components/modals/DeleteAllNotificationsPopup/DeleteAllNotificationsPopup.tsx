import React from 'react';
import styles from './DeleteAllNotificationsPopup.module.scss';
import { BasePopupApp, BaseTitle } from '@base/index';

interface Props {
  className: string;
}

const DeleteAllNotificationsPopup: React.FC<Props> = ({ className }) => {
  return (
    <BasePopupApp className={className} type="small">
      <BaseTitle type="app" className={styles.Title}>
        Delete all notifications?
      </BaseTitle>

      <div className={styles.Subtitle}>All notifications will be deleted</div>

      <div className={styles.Actions}></div>
    </BasePopupApp>
  );
};

export default DeleteAllNotificationsPopup;
