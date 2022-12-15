import { BaseIcon } from '@base/index';
import { ALL_ICONS } from '@constants/icons';
import { Logo } from '@content/index';
import Link from 'next/link';
import React, { useEffect } from 'react';
import styles from './Sidebar.module.scss';
import { useRouter } from 'next/router';
import { useAppDispatch, useAppSelector } from '@hooks/redux';
import { sidebarSlice } from '@store/sidebar/reducer';

type Props = {
  pages?: {
    name: string;
    path: string;
  }[];
};

const Sidebar: React.FC<Props> = ({ pages }) => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const isVisible = useAppSelector((state) => state.sidebar.visible);
  const { setVisibleSidebar } = sidebarSlice.actions;
  const [visible, setVisible] = React.useState(false);

  useEffect(() => {
    if (isVisible) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  }, [isVisible]);

  return (
    <div className={`${styles.SidebarApp} ${visible ? styles.Visible : ''}`}>
      <div className={styles.SidebarApp_Sidebar}>
        <Logo className={styles.SidebarApp_Sidebar_Logo} small />

        <div className={styles.SidebarApp_Sidebar_CompanyBalance}>
          <div className={styles.SidebarApp_Sidebar_CompanyBalance_Title}>
            <span>Company balance</span>
          </div>

          <div className={styles.SidebarApp_Sidebar_CompanyBalance_Info}>
            <div
              className={styles.SidebarApp_Sidebar_CompanyBalance_Info_Value}
            >
              <span>157,478.57</span>
            </div>

            <svg
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className={styles.SidebarApp_Sidebar_CompanyBalance_Info_Button}
            >
              <path
                d="M10 7V10M10 10V13M10 10H13M10 10H7M19 10C19 14.9706 14.9706 19 10 19C5.02944 19 1 14.9706 1 10C1 5.02944 5.02944 1 10 1C14.9706 1 19 5.02944 19 10Z"
                stroke="#ECEEF9"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>

        <ul className={styles.SidebarApp_Sidebar_Navbar}>
          {pages?.map((page, index) => {
            return (
              <Link href={page.path} key={index}>
                <a
                  onClick={() =>
                    dispatch(setVisibleSidebar({ visible: false }))
                  }
                >
                  <li
                    className={`${
                      router.pathname.split('/')[3] === page.path.split('/')[3]
                        ? styles.Active
                        : ''
                    } ${styles.SidebarApp_Sidebar_Navbar_Item}`}
                  >
                    <BaseIcon
                      icon={ALL_ICONS.SIDEBAR_NAVBAR_ITEM_ICON}
                      viewBox="0 0 14 14"
                      className={styles.SidebarApp_Sidebar_Navbar_Item_Icon}
                    />
                    <div className={styles.SidebarApp_Sidebar_Navbar_Item_Name}>
                      {page.name}
                    </div>
                  </li>
                </a>
              </Link>
            );
          })}
        </ul>

        {router.pathname.split('/')[2] === 'user' ? (
          <>
            <div className={styles.SidebarApp_Sidebar_Invite}>
              <div className={styles.SidebarApp_Sidebar_Invite_Title}>
                <span>Invite partners</span>
              </div>

              <div className={styles.SidebarApp_Sidebar_Invite_Description}>
                <p>
                  Use this code to participate in Manhattan VC and make
                  investments in Fintech projects
                </p>
              </div>

              <div className={styles.SidebarApp_Sidebar_Invite_Field}>
                <div
                  className={styles.SidebarApp_Sidebar_Invite_Field_CodeInvite}
                >
                  US37429
                </div>

                <svg
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className={styles.SidebarApp_Sidebar_Invite_Field_ButtonCopy}
                >
                  <path
                    d="M5 13H3C1.89543 13 1 12.1046 1 11V3C1 1.89543 1.89543 1 3 1H11C12.1046 1 13 1.89543 13 3V5M7 17H15C16.1046 17 17 16.1046 17 15V7C17 5.89543 16.1046 5 15 5H7C5.89543 5 5 5.89543 5 7V15C5 16.1046 5.89543 17 7 17Z"
                    stroke="white"
                    strokeOpacity="0.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>
          </>
        ) : null}

        <div className={styles.SidebarApp_Sidebar_Logout}>
          <div className={styles.SidebarApp_Sidebar_Logout_Name}>
            <span>Maxim Ivanov</span>
          </div>

          <svg
            viewBox="0 0 20 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={styles.SidebarApp_Sidebar_Logout_Button}
          >
            <path
              d="M15 13L19 9M19 9L15 5M19 9L5 9M11 13V14C11 15.6569 9.65686 17 8 17H4C2.34315 17 1 15.6569 1 14V4C1 2.34315 2.34315 1 4 1H8C9.65686 1 11 2.34315 11 4V5"
              stroke="#ECEEF9"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>

        <div className={styles.SidebarApp_Sidebar_Copyright}>
          All rights reserved © 2022 <br /> © Manhattan VC
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
