import React from 'react';
import styles from './LayoutLogin.module.scss';
import {Logo} from "@content/index";

interface Props {
  children: JSX.Element;
  alignCenter?: boolean;
}

const LayoutLogin: React.FC<Props> = ({ children,
                                        alignCenter }) => {
  return (
    <>
      <div className={styles.Layout}>
         {/* <div
            className={styles.BgImage}
            style={{
              backgroundImage: 'url(/images/image/main_header_bg.jpg)',
            }}
          ></div>

          <div
            className={styles.BgOverlay}
            style={{
              backgroundImage: 'url(/images/image/main_header_bg_overlay.jpg)',
            }}
          />*/}
        <div className={styles.WrapLogo}>
          <Logo />
        </div>
        <div className={`${styles.Content} ${alignCenter ? styles.ContentCenter : ""}`}>{children}</div>
      </div>
    </>
  );
};

export default LayoutLogin;
