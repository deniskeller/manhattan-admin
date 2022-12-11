import React from 'react';
import styles from './ContactUsHeader.module.scss';
import { BaseContainer, BaseTitle } from '@base/index';
import { Header } from '@content/index';

const ContactUsHeader = () => {
  return (
    <>
      <BaseContainer>
        <div className={styles.Header}>
          <Header>
            <BaseTitle>CONTACT US</BaseTitle>
          </Header>
        </div>
      </BaseContainer>
    </>
  );
};

export default ContactUsHeader;
