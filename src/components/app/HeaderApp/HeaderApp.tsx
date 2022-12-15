import { useAppDispatch, useAppSelector } from '@hooks/redux';
import { sidebarSlice } from '@store/sidebar/reducer';
import React from 'react';
import { Notifications } from '../content';
import styles from './HeaderApp.module.scss';

type Props = {};

const HeaderApp = () => {
  const dispatch = useAppDispatch();
  const isVisible = useAppSelector((state) => state.sidebar.visible);
  const { setVisibleSidebar } = sidebarSlice.actions;

  const [isNotifications, setIsNotifications] = React.useState(false);

  return (
    <div className={styles.HeaderApp}>
      <header className={styles.HeaderApp_Header}>
        <div className={styles.HeaderApp_Header_Title}>Company</div>

        <div className={styles.HeaderApp_Header_Actions}>
          <div className={styles.HeaderApp_Header_Actions_CompanyBalance}>
            <div
              className={styles.HeaderApp_Header_Actions_CompanyBalance_Value}
            >
              <span>157,478.57</span>
            </div>

            <svg
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className={styles.HeaderApp_Header_Actions_CompanyBalance_Button}
            >
              <path
                d="M10 7V10M10 10V13M10 10H13M10 10H7M19 10C19 14.9706 14.9706 19 10 19C5.02944 19 1 14.9706 1 10C1 5.02944 5.02944 1 10 1C14.9706 1 19 5.02944 19 10Z"
                stroke="#0d1026"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>

          <div className={styles.HeaderApp_Header_Actions_Notifications}>
            <svg
              width="18"
              height="20"
              viewBox="0 0 18 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className={styles.HeaderApp_Header_Actions_Notifications_Icon}
              onClick={() => setIsNotifications(!isNotifications)}
            >
              <path
                d="M12 15H17L15.5951 13.5951C15.2141 13.2141 15 12.6973 15 12.1585V9C15 6.38757 13.3304 4.16509 11 3.34142V3C11 1.89543 10.1046 1 9 1C7.89543 1 7 1.89543 7 3V3.34142C4.66962 4.16509 3 6.38757 3 9V12.1585C3 12.6973 2.78595 13.2141 2.40493 13.5951L1 15H6M12 15V16C12 17.6569 10.6569 19 9 19C7.34315 19 6 17.6569 6 16V15M12 15H6"
                stroke="#0D1026"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>

            <div
              className={styles.HeaderApp_Header_Actions_Notifications_Counter}
              onClick={() => setIsNotifications(!isNotifications)}
            >
              <span>99+</span>
            </div>

            <Notifications
              isNotifications={isNotifications}
              setIsNotifications={setIsNotifications}
            />
          </div>

          <div className={styles.HeaderApp_Header_Actions_Logout}>
            <div className={styles.HeaderApp_Header_Actions_Logout_Name}>
              <span>Maxim Ivanov</span>
            </div>

            <svg
              viewBox="0 0 20 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className={styles.HeaderApp_Header_Actions_Logout_Button}
            >
              <path
                d="M15 13L19 9M19 9L15 5M19 9L5 9M11 13V14C11 15.6569 9.65686 17 8 17H4C2.34315 17 1 15.6569 1 14V4C1 2.34315 2.34315 1 4 1H8C9.65686 1 11 2.34315 11 4V5"
                stroke="#0d1026"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>

          <div
            className={`${styles.HeaderApp_Header_Actions_Burger} ${
              isVisible ? styles.Active : styles.NotActive
            }`}
            onClick={() => dispatch(setVisibleSidebar({ visible: !isVisible }))}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </header>
    </div>
  );
};

export default HeaderApp;
