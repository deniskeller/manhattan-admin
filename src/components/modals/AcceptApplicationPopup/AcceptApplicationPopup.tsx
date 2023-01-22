import React from 'react';
import styles from './AcceptApplicationPopup.module.scss';
import { BaseButtonApp, BasePopupApp, BaseTitle } from '@base/index';

interface Props {
  className: string;
}

const AcceptApplicationPopup: React.FC<Props> = ({ className }) => {
  return (
    <BasePopupApp className={className} type="small">
      <BaseTitle type="app" className={styles.Title}>
        accept application
      </BaseTitle>

      <div className={styles.Subtitle}>
        <p>
          After confirming the application, user will be notified and received
          access to the platform.
        </p>
      </div>

      <div className={styles.Actions}>
        <BaseButtonApp title="Cancel" type="secondary" size="small" />

        <BaseButtonApp title="Confirm" type="primary" size="small" />
      </div>
    </BasePopupApp>
  );
};

export default AcceptApplicationPopup;
