import React from 'react';
import styles from './DeleteAllNotificationsPopup.module.scss';
import { BaseButtonApp, BasePopupApp, BaseTitle } from '@base/index';

interface Props {
  className: string;
}

const DeleteAllNotificationsPopup: React.FC<Props> = ({ className }) => {
  return (
    <BasePopupApp className={className} type="small">
      <BaseTitle type="app" className={styles.Title}>
        Delete all notifications?
      </BaseTitle>

      <div className={styles.Subtitle}>
        <p>All notifications will be deleted</p>
      </div>

      <div className={styles.Actions}>
        <BaseButtonApp title="Cancel" type="secondary" size="small" />

        <BaseButtonApp title="Delete" type="destructive" size="small" />
      </div>
    </BasePopupApp>
  );
};

export default DeleteAllNotificationsPopup;
