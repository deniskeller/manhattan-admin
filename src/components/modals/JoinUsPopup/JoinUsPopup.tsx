import React from 'react';
import styles from './JoinUsPopup.module.scss';
import { Form } from '@content/index';
import { BaseContainer, BasePopup } from '@base/index';

interface Props {
  className: string;
}

const JoinUsPopup: React.FC<Props> = ({ className }) => {
  return (
    <BasePopup className={className}>
      <BaseContainer>
        <div className={styles.Popup}>
          <div className={styles.Title}>
            <h1>Join Us</h1>
          </div>

          <div className={styles.Form}>
            <Form />
          </div>
        </div>
      </BaseContainer>
    </BasePopup>
  );
};

export default JoinUsPopup;
