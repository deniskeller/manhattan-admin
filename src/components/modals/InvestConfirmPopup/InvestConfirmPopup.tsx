import React, { useState } from 'react';
import styles from './InvestConfirmPopup.module.scss';
import { BaseButtonApp, BaseIcon, BasePopupApp, BaseTitle } from '@base/index';
import { ALL_ICONS } from '@constants/icons';

interface Props {
  className: string;
}

const InvestConfirmPopup: React.FC<Props> = ({ className }) => {
  const [confirm, setConfirm] = useState(false);
  const [loader, setLoader] = useState(false);

  const confirmHandler = () => {
    setLoader(true);
    setTimeout(() => {
      setLoader(false);
      setConfirm(true);
    }, 1000);
  };

  return (
    <BasePopupApp className={className} type="small">
      {!confirm ? (
        <>
          <div className={`${styles.Icon} ${styles.Icon_Confirm}`}>
            <BaseIcon
              icon={ALL_ICONS.INVEST}
              viewBox="0 0 20 12"
              className={styles.Invest}
            />
          </div>

          <BaseTitle type="app" className={styles.Title}>
            Invest in Teido payments LTD
          </BaseTitle>

          <div className={styles.Subtitle}>
            <p>Do you want to invest $120 000?</p>
          </div>

          <div className={styles.Actions}>
            <BaseButtonApp title="Cancel" type="secondary" size="small" />

            <BaseButtonApp
              title="Confirm"
              type="primary"
              size="small"
              onClick={confirmHandler}
            />
          </div>
        </>
      ) : (
        <>
          <div className={`${styles.Icon} ${styles.Icon_Done}`}>
            <svg
              width="18"
              height="12"
              viewBox="0 0 18 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className={styles.Invest}
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M17.0486 0.351472C17.5173 0.820101 17.5173 1.5799 17.0486 2.04853L7.44863 11.6485C6.98 12.1172 6.2202 12.1172 5.75157 11.6485L0.95157 6.84853C0.48294 6.3799 0.48294 5.6201 0.95157 5.15147C1.4202 4.68284 2.18 4.68284 2.64863 5.15147L6.6001 9.10294L15.3516 0.351472C15.8202 -0.117157 16.58 -0.117157 17.0486 0.351472Z"
                fill="#10B77F"
              />
            </svg>
          </div>

          <BaseTitle type="app" className={styles.Title}>
            Congratulations!
          </BaseTitle>

          <div className={styles.Subtitle}>
            <p>
              You just invested in Teido project. <br /> You can see all
              progress in your portfolio.
            </p>
          </div>

          <BaseButtonApp
            title="To projects"
            type="primary"
            size="small"
            className={styles.Button}
          />
        </>
      )}

      {loader ? (
        <div className={styles.Loader}>
          <div className={styles.Loader_Overlay}></div>
          <h1>
            <BaseIcon
              viewBox="0 0 91 91"
              icon={ALL_ICONS.GEAR_COLOR_ICON}
              className={styles.Loader_Icon}
            />
          </h1>
        </div>
      ) : null}
    </BasePopupApp>
  );
};

export default InvestConfirmPopup;
