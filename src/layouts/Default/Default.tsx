//@ts-nocheck
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import styles from './Default.module.scss';
import { Navbar } from '@nav/index';
import { Footer } from 'components/footer';
import Image from 'next/image';
import { InvestmentRequestPopup, JoinUsPopup } from 'components/modals';
var Scroll = require('react-scroll');
var scroll = Scroll.animateScroll;

interface Props {
  children: JSX.Element;
}

const Default: React.FC<Props> = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false);

  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  const scrollFunction = () => {
    if (
      document.body.scrollTop > 600 ||
      document.documentElement.scrollTop > 600
    ) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    if (typeof window !== undefined && typeof document !== undefined) {
      window.onscroll = function () {
        scrollFunction();
      };
    }
  });

  const router = useRouter();
  const [visibleImage, setVisibleImage] = React.useState(true);

  React.useEffect(() => {
    if (router.pathname == '/' || router.pathname == '/terms_and_conditions') {
      setVisibleImage(false);
    }
  }, [router.pathname]);
  return (
    <>
      <Navbar />
      <div className={styles.WrapperForSlicky}>
        <div className={styles.Content}>
          <div
            className={styles.Wrapper}
            style={{
              display:
                router.pathname == `${'/portfolio/[id]'}` ? 'block' : 'none',
            }}
          ></div>

          {visibleImage ? (
            <div className={styles.Image}>
              <div
                className={styles.Img}
                style={{
                  zIndex:
                    router.pathname == `${'/portfolio/[id]'}` ? '100' : '-10',
                }}
              >
                <Image
                  src={`${
                    router.pathname == '/portfolio/[id]'
                      ? '/images/image/gear_bg2.png'
                      : '/images/image/gear_bg.png'
                  }`}
                  layout="fill"
                  alt={'Image'}
                  priority
                />
              </div>
            </div>
          ) : null}

          {children}
        </div>

        {/* <div className={styles.Line}>
          {isVisible ? (
            <button onClick={scrollToTop} className={styles.ScrollToTop}>
              <i className={styles.Up}></i>
            </button>
          ) : null}
        </div> */}
      </div>
      <Footer />

      <JoinUsPopup className="JoinUsPopup" />
      <InvestmentRequestPopup className="InvestmentRequestPopup" />
    </>
  );
};

export default Default;
