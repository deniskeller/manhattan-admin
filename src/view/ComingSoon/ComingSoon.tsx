import React from 'react';
import styles from './ComingSoon.module.scss';
import Image from 'next/image';
import { BaseButton, BaseContainer } from '@base/index';
import { useRouter } from 'next/router';

const ComingSoon: React.FC = () => {
  const router = useRouter();

  return (
    <>
      <div className={styles.ComingSoon}>
        <div className={styles.ComingSoon_Image}>
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
          <div className={styles.ComingSoon_Content}>
            <div className={styles.ComingSoon_Title}>
              <h1>Coming soon</h1>
            </div>

            <div className={styles.ComingSoon_SubTitle}>
              <h3>Page under construction</h3>
            </div>

            <BaseButton
              title="Main page"
              className={styles.ComingSoon_Button}
              onClick={() => router.push('/')}
            />
          </div>
        </BaseContainer>
      </div>
    </>
  );
};

export default ComingSoon;
