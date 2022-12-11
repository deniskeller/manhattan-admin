import React, { useEffect, useState } from 'react';
import styles from './ButtonScrollToTop.module.scss';
var Scroll = require('react-scroll');
var scroll = Scroll.animateScroll;

const ButtonScrollToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);

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
  }, []);

  return (
    <>
      {isVisible ? (
        <button onClick={scrollToTop} className={styles.ScrollToTop}>
          <i className={styles.Up}></i>
        </button>
      ) : null}
    </>
  );
};

export default ButtonScrollToTop;
