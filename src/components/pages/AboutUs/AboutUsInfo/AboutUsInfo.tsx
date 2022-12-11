import React, {useEffect, useState} from 'react';
import styles from './AboutUsInfo.module.scss';
import { BaseContainer, BaseText, BaseTitle } from '@base/index';
import Image from 'next/image';
import { computedStr } from '@utils/index';
import {TAboutInfo} from "@content/Editor/plugins/AboutUsInfoPlugin";

const accordionImages = [
  { title: 'Space', image: 'accordion_slide1.png' },
  { title: 'Sport', image: 'accordion_slide2.png' },
  { title: 'Medicine', image: 'accordion_slide3.png' },
  { title: 'Computer Science', image: 'accordion_slide4.png' },
  { title: 'Big Data', image: 'accordion_slide5.png' },
  {
    title: 'Artificial Intelligence',
    image: 'accordion_slide6.png',
  },
];

const AboutUsInfo: React.FC<TAboutInfo> = ({text1, text2, subtitle, bottomText}) => {
  const [paragraph, setParagraph] = useState('');
  const [paragraph2, setParagraph2] = useState('');

  useEffect(()=>{
    setTimeout(
      () =>
        setParagraph(
          computedStr(text1 || "")
        ),
      0
    );
  },[text1])
  useEffect(()=>{
    setTimeout(
      () =>
        setParagraph2(
          computedStr(text2 || "")
        ),
      1300
    );
  },[text2])


  return (
    <>
      <BaseContainer>
        <div className={styles.Info}>
          <div className={styles.Info_AboutUs}>
            <p
              className="paragraph_animated"
              dangerouslySetInnerHTML={{
                __html: paragraph,
              }}
            ></p>

            <p
              className="paragraph_animated"
              dangerouslySetInnerHTML={{
                __html: paragraph2,
              }}
            ></p>
          </div>

          <div className={styles.Info_Title}>
            <BaseTitle type="h2">
              {subtitle}
             {/* We invest in the following business areas of the business that are
              related to FinTech*/}
            </BaseTitle>
          </div>

          <ul className={styles.Info_AccordionSlider}>
            {accordionImages?.map((item, index) => {
              return (
                <li
                  key={index}
                  style={{
                    backgroundImage: `url(/images/image/${item.image})`,
                  }}
                >
                  <div className={styles.SlideTitle}>
                    <span>{item.title}</span>
                  </div>
                  <div className={`${styles.SlideTitle} ${styles.Active}`}>
                    <span>{item.title}</span>
                  </div>
                </li>
              );
            })}
          </ul>

          <div className={styles.Info_Description}>
            <BaseText>
              <p dangerouslySetInnerHTML={{__html: bottomText}}/>
           {/*   The fund&apos;s core values of our fund are constant development
              and vision that are unexpected by everyone but allow us to reach
              the stars.
            </BaseText>
            <br />

            <BaseText>
              Our founders were mentioned in Forbes and were the VPs of many
              well-known companies, and such organisations recognised their
              projects, J.P.Morgan in NYC and MasterCard International.*/}
            </BaseText>
          </div>
        </div>
      </BaseContainer>
    </>
  );
};

export default AboutUsInfo;
