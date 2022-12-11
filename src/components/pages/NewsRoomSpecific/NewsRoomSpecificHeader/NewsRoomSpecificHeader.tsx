import React from 'react';
import styles from './NewsRoomSpecificHeader.module.scss';
import { BaseContainer, BaseTitle } from '@base/index';
import { Header } from '@content/index';
import { useRouter } from 'next/router';

const NewsRoomSpecificHeader = () => {
  const router = useRouter();
  return (
    <>
      <div className={styles.Wrapper}>
        <BaseContainer>
          <div className={styles.Header}>
            <Header className={styles.StepBack}>
              <span
                className={styles.StepBack_Btn}
                onClick={() => router.back()}
              >
                <div className={styles.IconBack}>
                  <i className={styles.Up}></i>
                </div>
                <BaseTitle>PORTFOLIO</BaseTitle>
              </span>
            </Header>
          </div>
        </BaseContainer>
      </div>
    </>
  );
};

export default NewsRoomSpecificHeader;
