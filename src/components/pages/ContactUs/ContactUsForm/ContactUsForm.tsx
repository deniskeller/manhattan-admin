import React, {useEffect, useState} from 'react';
import styles from './ContactUsForm.module.scss';
import Image from 'next/image';
import { BaseContainer, BaseText, BaseTitle } from '@base/index';
import { Form } from '@content/index';
import { computedStr } from '@utils/index';
import {TContact} from "@content/Editor/plugins/ContactUsForm";

const ContactUsForm: React.FC<TContact> = ({description, titleForm}) => {
  const [paragraph, setParagraph] = useState('');
  useEffect(()=>{
    setTimeout(
      () =>
        setParagraph(
          computedStr(description || "")
        ),
      0
    );
  },[description])



  return (
    <>
      <div className={styles.Wrapper}>
        <BaseContainer>
          <div className={styles.Description}>
            <p
              className="paragraph_animated"
              dangerouslySetInnerHTML={{
                __html: paragraph,
              }}
            ></p>
          </div>

          <div className={styles.Title}>
            <BaseTitle type="h2" isHtml={true} html={titleForm}/>
             {/* Please feel free to feel out the form below and we will contact
              you as soon as possible*/}
          </div>

          <div className={styles.Form}>
            <Form />
          </div>
        </BaseContainer>
      </div>
    </>
  );
};

export default ContactUsForm;


/*
* import React from 'react';
import styles from './ContactUsForm.module.scss';
import Image from 'next/image';
import { BaseContainer, BaseText, BaseTitle } from '@base/index';
import { Form } from '@content/index';

const ContactUsForm = () => {
  return (
    <>
      <div className={styles.Wrapper}>
        <BaseContainer>
          <div className={styles.Description}>
            <BaseText>
              Thank you for your interest in our company. We would be happy to
              assist you as much as we can and provide you with any information
              you might need.
            </BaseText>
          </div>

          <div className={styles.Title}>
            <BaseTitle type="h2">
              Please feel free to feel out the form below and we will contact
              you as soon as possible
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

export default ContactUsForm;

*
* */


