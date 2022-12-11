import React from 'react';
import styles from './MainFooter.module.scss';
import { BaseButton, BaseContainer } from '@base/index';
import { useAppDispatch } from '@hooks/redux';
import { modalSlice } from '@store/modals/reducer';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import {TJoin} from "@content/Editor/plugins/JoinUs";

const MainFooter: React.FC<TJoin> = ({text, buttonText}) => {
  const { setPopup } = modalSlice.actions;
  const dispatch = useAppDispatch();

  const JoinUsShowPopup = () => {
    dispatch(setPopup({ popup: 'JoinUsPopup' }));
  };

  return (
    <>
      <div
        className={styles.Container}
        style={{
          backgroundImage: 'url(/images/image/main_footer_bg.jpg)',
        }}
      >
        <div className={styles.Gradient}></div>
        <BaseContainer>
          <div className={styles.MainFooter}>
            <div className={styles.MainFooter_Title}>
              <h1>
                {text}
                {/*Get Started with us, invest into the future.*/}
              </h1>
            </div>

            <AnimationOnScroll
              animateIn="MainFooter_Button animate__fadeInUp"
              animateOnce
            >
              <BaseButton
                className={styles.MainFooter_Button}
                title={buttonText}
                onClick={JoinUsShowPopup}
              />
            </AnimationOnScroll>
          </div>
        </BaseContainer>
      </div>
    </>
  );
};

export default MainFooter;
