import React from 'react';
import styles from './SelectActionPopup.module.scss';
import { BaseButtonApp, BasePopupApp, BaseTitle } from '@base/index';

interface Props {
  className: string;
}

const SelectActionPopup: React.FC<Props> = ({ className }) => {
  return (
    <BasePopupApp className={className} type="small">
      <BaseTitle type="app" className={styles.Title}>
        Select action
      </BaseTitle>

      <div className={styles.Subtitle}>
        <p>
          After approval, the payment amount will be credited to the client's
          balance. If payment is invalid, declain it and the client will not
          receive funds.
        </p>
      </div>

      <div className={styles.Actions}>
        <BaseButtonApp title="Declain" type="destructive2" size="small" />

        <BaseButtonApp title="Approve" type="primary" size="small" />
      </div>
    </BasePopupApp>
  );
};

export default SelectActionPopup;
