import React, { useState } from 'react';
import styles from './NotificationsPopup.module.scss';
import { BaseIcon, BasePopupApp, BaseTitle } from '@base/index';
import { ALL_ICONS } from '@constants/icons';
import { NotificationItem } from 'components/app/content';
import { mock_notifications } from '@services/index';
import { Pagination } from '@beetbarrel/teido-core';
import { modalSlice } from '@store/modals/reducer';
import { useAppDispatch } from '@hooks/redux';

interface Props {
  className: string;
}

const NotificationsPopup: React.FC<Props> = ({ className }) => {
  const [page, setPage] = useState(1);
  const { setPopup } = modalSlice.actions;
  const dispatch = useAppDispatch();

  const deletAllHandler = () => {
    dispatch(setPopup({ popup: '' }));
    setTimeout(() => {
      dispatch(setPopup({ popup: 'DeleteAllNotificationsPopup' }));
    }, 300);
  };

  return (
    <BasePopupApp className={className} type="large">
      <div className={styles.Header}>
        <BaseTitle type="app">notifications</BaseTitle>

        <div className={styles.Header_ClearAll} onClick={deletAllHandler}>
          <div className={styles.Header_ClearAll_Title}>Clear all</div>

          <BaseIcon
            icon={ALL_ICONS.DELETE}
            viewBox="0 0 18 20"
            className={styles.Header_ClearAll_Icon}
          />
        </div>
      </div>

      <div className={styles.Content}>
        {mock_notifications?.map((item, index) => {
          return (
            <NotificationItem
              key={index}
              type={item.type}
              description={item.description}
              time={item.time}
              date={item.date}
              new_notification={item.new_notification}
            />
          );
        })}
      </div>

      <div className={styles.Pagination}>
        {/* сделать логику пагинации */}
        <Pagination
          currentPage={page}
          totalPages={Math.ceil(mock_notifications.length / 10)}
          onPageChange={(page) => {
            setPage(page);
          }}
        />
      </div>
    </BasePopupApp>
  );
};

export default NotificationsPopup;
