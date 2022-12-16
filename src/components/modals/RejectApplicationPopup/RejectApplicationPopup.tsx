import React from 'react';
import styles from './RejectApplicationPopup.module.scss';
import { BaseButtonApp, BasePopupApp, BaseTitle } from '@base/index';

interface Props {
  className: string;
}

const RejectApplicationPopup: React.FC<Props> = ({ className }) => {
  return (
    <BasePopupApp className={className} type="small">
      <BaseTitle type="app" className={styles.Title}>
        Reject application
      </BaseTitle>

      <div className={styles.Subtitle}>
        <p>
          If you reject this application, user will be notified and will not be
          able to register again. It can still be accepted later.
        </p>
      </div>

      <div className={styles.Actions}>
        <BaseButtonApp title="Cancel" type="secondary" size="small" />

        <BaseButtonApp title="Confirm" type="primary" size="small" />
      </div>
    </BasePopupApp>
  );
};

export default RejectApplicationPopup;
