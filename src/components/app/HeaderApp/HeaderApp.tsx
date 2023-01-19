import { BaseIcon } from '@base/index';
import { ALL_ICONS } from '@constants/icons';
import { useAppDispatch, useAppSelector } from '@hooks/redux';
import { modalSlice } from '@store/modals/reducer';
import { sidebarSlice } from '@store/sidebar/reducer';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { Notifications } from '../content';
import styles from './HeaderApp.module.scss';

const HeaderApp = () => {
  const dispatch = useAppDispatch();
  const { setPopup } = modalSlice.actions;
  const router = useRouter();
  const isVisible = useAppSelector((state) => state.sidebar.visible);
  const { setVisibleSidebar } = sidebarSlice.actions;
  const [isNotifications, setIsNotifications] = React.useState(false);

  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <div className={styles.HeaderApp}>
      <header className={styles.HeaderApp_Header}>
        {router.pathname.split('/')[3] === 'create-article' ||
        router.pathname.split('/')[3] === 'edit-article' ||
        router.pathname.split('/')[4] === 'current-investor' ||
        router.pathname.split('/')[4] === 'project-details' ||
        router.pathname.split('/')[4] === 'invest-in-project' ||
        router.pathname.split('/')[4] === 'create-project' ||
        router.pathname.split('/')[4] === 'edit-project' ? (
          <div
            className={styles.HeaderApp_Header_WithButtonBack}
            onClick={() => router.back()}
          >
            <BaseIcon
              icon={ALL_ICONS.TO_DETAILS}
              viewBox="0 0 16 8"
              className={styles.HeaderApp_Header_WithButtonBack_Icon}
            />

            <div className={styles.HeaderApp_Header_Title}>
              {router.pathname.split('/')[3] === 'create-article'
                ? 'Articles'
                : router.pathname.split('/')[3] === 'edit-article'
                ? 'Articles'
                : router.pathname.split('/')[3] === 'investors'
                ? 'investors'
                : router.pathname.split('/')[3] === 'applications'
                ? 'Applications'
                : router.pathname.split('/')[3] === 'projects'
                ? 'projects'
                : router.pathname.split('/')[3] === 'projects'
                ? 'create-project'
                : router.pathname.split('/')[3] === 'projects'
                ? 'edit-project'
                : router.pathname.split('/')[4] === 'invest-in-project'
                ? 'Teido payments LTD'
                : ''}
            </div>
          </div>
        ) : (
          <div className={styles.HeaderApp_Header_Title}>
            {router.pathname.split('/')[3]}
          </div>
        )}

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
              onClick={() => dispatch(setPopup({ popup: 'MakeDepositPopup' }))}
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
            <BaseIcon
              icon={ALL_ICONS.USER}
              viewBox="0 0 20 20"
              className={styles.IconUser}
              onClick={() => setShowDropdown(!showDropdown)}
            />

            <svg
              viewBox="0 0 12 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className={styles.IconCheveron}
              style={{ transform: showDropdown ? 'rotate(180deg)' : '' }}
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M3.17574 4.37569C3.41005 4.14137 3.78995 4.14137 4.02426 4.37569L6 6.35142L7.97574 4.37569C8.21005 4.14137 8.58995 4.14137 8.82426 4.37569C9.05858 4.61 9.05858 4.9899 8.82426 5.22422L6.42426 7.62422C6.18995 7.85853 5.81005 7.85853 5.57574 7.62422L3.17574 5.22422C2.94142 4.9899 2.94142 4.61 3.17574 4.37569Z"
                fill="#1A1A1A"
                fillOpacity="0.3"
              />
            </svg>
            {showDropdown ? (
              <>
                <div className={styles.HeaderApp_Header_Actions_Dropdown}>
                  <ul>
                    <li>
                      <div
                        className={
                          styles.HeaderApp_Header_Actions_Logout_Profile
                        }
                      >
                        <div
                          className={
                            styles.HeaderApp_Header_Actions_Logout_Profile_Name
                          }
                          onClick={() => router.push('/app/admin/profile')}
                        >
                          <span>Maxim Ivanov</span>
                        </div>

                        <div
                          className={
                            styles.HeaderApp_Header_Actions_Logout_Profile_Mail
                          }
                        >
                          verilongmailadress@mail.com
                        </div>
                      </div>

                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className={
                          styles.HeaderApp_Header_Actions_Logout_Profile_Icon
                        }
                      >
                        <path
                          d="M10.3246 4.31731C10.751 2.5609 13.249 2.5609 13.6754 4.31731C13.9508 5.45193 15.2507 5.99038 16.2478 5.38285C17.7913 4.44239 19.5576 6.2087 18.6172 7.75218C18.0096 8.74925 18.5481 10.0492 19.6827 10.3246C21.4391 10.751 21.4391 13.249 19.6827 13.6754C18.5481 13.9508 18.0096 15.2507 18.6172 16.2478C19.5576 17.7913 17.7913 19.5576 16.2478 18.6172C15.2507 18.0096 13.9508 18.5481 13.6754 19.6827C13.249 21.4391 10.751 21.4391 10.3246 19.6827C10.0492 18.5481 8.74926 18.0096 7.75219 18.6172C6.2087 19.5576 4.44239 17.7913 5.38285 16.2478C5.99038 15.2507 5.45193 13.9508 4.31731 13.6754C2.5609 13.249 2.5609 10.751 4.31731 10.3246C5.45193 10.0492 5.99037 8.74926 5.38285 7.75218C4.44239 6.2087 6.2087 4.44239 7.75219 5.38285C8.74926 5.99037 10.0492 5.45193 10.3246 4.31731Z"
                          stroke="#1A1A1A"
                          strokeOpacity="0.7"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M15 12C15 13.6569 13.6569 15 12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12Z"
                          stroke="#1A1A1A"
                          strokeOpacity="0.7"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </li>

                    <div
                      className={
                        styles.HeaderApp_Header_Actions_Dropdown_Border
                      }
                    ></div>

                    <li>
                      <div
                        className={styles.HeaderApp_Header_Actions_Logout_Title}
                      >
                        Logout
                      </div>
                      <svg
                        viewBox="0 0 20 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className={
                          styles.HeaderApp_Header_Actions_Logout_Button
                        }
                      >
                        <path
                          d="M15 13L19 9M19 9L15 5M19 9L5 9M11 13V14C11 15.6569 9.65686 17 8 17H4C2.34315 17 1 15.6569 1 14V4C1 2.34315 2.34315 1 4 1H8C9.65686 1 11 2.34315 11 4V5"
                          stroke="#0d1026"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </li>
                  </ul>
                </div>
              </>
            ) : null}
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
