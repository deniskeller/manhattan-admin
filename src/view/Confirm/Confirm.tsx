import React from 'react';
import styles from './Confirm.module.scss';
import Image from 'next/image';
import { BaseButton, BaseContainer } from '@base/index';
import { useRouter } from 'next/router';

const Confirm: React.FC = () => {
  const router = useRouter();

  return (
    <>
      <div className={styles.Confirm}>
        <div className={styles.Confirm_Image}>
          <div className={styles.Img}>
            <Image
              src="/images/image/gear_bg.png"
              layout="fill"
              alt={'Image'}
              priority
            />
          </div>
        </div>

        <BaseContainer>
          <div className={styles.Confirm_Content}>
            <div className={styles.Confirm_Title}>
              <h1>Thank you!</h1>
            </div>

            <div className={styles.Confirm_SubTitle}>
              <h3>We will reach you very shortly.</h3>
            </div>

            <BaseButton
              title="Main page"
              className={styles.Confirm_Button}
              onClick={() => router.push('/')}
            />
          </div>
        </BaseContainer>
      </div>
    </>
  );
};

export default Confirm;
