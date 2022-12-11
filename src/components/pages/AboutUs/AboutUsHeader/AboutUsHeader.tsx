import React from 'react';
import styles from './AboutUsHeader.module.scss';
import { BaseContainer, BaseTitle } from '@base/index';
import { Header } from '@content/index';

const AboutUsHeader = () => {
  return (
    <>
      <BaseContainer>
        <div className={styles.Header}>
          <Header>
            <BaseTitle>ABOUT US</BaseTitle>
          </Header>
        </div>
      </BaseContainer>
    </>
  );
};

export default AboutUsHeader;
