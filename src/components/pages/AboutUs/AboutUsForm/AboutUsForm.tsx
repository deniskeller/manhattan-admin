import React from 'react';
import styles from './AboutUsForm.module.scss';
import Image from 'next/image';
import { BaseContainer, BaseText, BaseTitle } from '@base/index';
import { Form } from '@content/index';

const AboutUsForm = () => {
  return (
    <>
      <div className={styles.Wrapper}>
        <BaseContainer>
          <div className={styles.Title}>
            <BaseTitle type="h2">
              Join Us and apply for the interview to become the investor
            </BaseTitle>
          </div>

          <div className={styles.Form}>
            <Form />
          </div>
        </BaseContainer>
      </div>
    </>
  );
};

export default AboutUsForm;
