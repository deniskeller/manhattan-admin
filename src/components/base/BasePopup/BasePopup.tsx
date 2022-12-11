import React, { ReactNode, useCallback, useEffect, useState } from 'react';
import styles from './BasePopup.module.scss';
import Image from 'next/image';
import { modalSlice } from '@store/modals/reducer';
import { useAppDispatch, useAppSelector } from '@hooks/redux';

interface Props {
  children: ReactNode | ReactNode[];
  className?: string;
}

const BasePopup: React.FC<Props> = ({ children, className }) => {
  const [isVisible, setIsVisible] = useState(false);
  const popup = useAppSelector((state) => state.modals.popup);
  const { setPopup } = modalSlice.actions;
  const dispatch = useAppDispatch();
  const thisClass = React.useRef<HTMLDivElement>(null);

  const showPopup = useCallback(() => {
    setIsVisible(true);
    document.body.style.overflow = 'hidden';
    document.body.style.height = '100%';
  }, []);

  const hidePopup = useCallback(() => {
    setIsVisible(false);
    document.body.style.overflow = '';
    document.body.style.height = '';
    dispatch(setPopup({ popup: '' }));
  }, [dispatch, setPopup]);

  useEffect(() => {
    if (thisClass.current?.classList.contains(popup)) {
      showPopup();
    }
    if (!popup) {
      hidePopup();
    }
  }, [popup, hidePopup, showPopup]);

  useEffect(() => {
    function onKeyDown(event: any) {
      if (event.keyCode === 27) {
        hidePopup();
      }
    }
    document.addEventListener('keydown', onKeyDown);
    return () => {
      document.removeEventListener('keydown', onKeyDown);
    };
  }, [hidePopup]);

  return (
    <div
      className={` ${styles.Wrapper} ${
        isVisible ? styles.Visible : ''
      } ${className}`}
      ref={thisClass}
    >
      <div className={styles.Popup}>
        <div className={styles.Popup_Close} onClick={hidePopup}></div>

        <div className={styles.Popup_Image}>
          <div className={styles.Img}>
            <Image
              src="/images/image/gear_bg.png"
              layout="fill"
              alt={'Image'}
              priority
            />
          </div>
        </div>

        {children}
      </div>
    </div>
  );
};

export default BasePopup;
