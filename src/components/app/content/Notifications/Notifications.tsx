import { BaseIcon } from '@base/index';
import { ALL_ICONS } from '@constants/icons';
import useOnClickOutside from '@hooks/useOnClickOutside';
import React from 'react';
import styles from './Notifications.module.scss';
import { NotificationItem } from '../';
import { mock_notifications } from '@services/index';
import { useAppDispatch } from '@hooks/redux';
import { modalSlice } from '@store/modals/reducer';

type Props = {
  isNotifications: boolean;
  setIsNotifications: (value: boolean) => void;
};

const Notifications: React.FC<Props> = ({
  isNotifications,
  setIsNotifications,
}) => {
  const thisNotifications = React.useRef<HTMLDivElement>(null);

  const clickOutsideHandler = () => {
    setIsNotifications(false);
  };
  useOnClickOutside(thisNotifications, clickOutsideHandler);

  const { setPopup } = modalSlice.actions;
  const dispatch = useAppDispatch();

  return (
    <div
      className={styles.Notifications}
      style={{
        display: isNotifications ? 'flex' : 'none',
      }}
      ref={thisNotifications}
    >
      <div className={styles.Notifications_Header}>
        <div className={styles.Notifications_Header_Title}>Notifications</div>

        <div
          className={styles.Notifications_Header_ClearAll}
          onClick={() =>
            dispatch(setPopup({ popup: 'DeleteAllNotificationsPopup' }))
          }
        >
          Clear all
        </div>

        <BaseIcon
          icon={ALL_ICONS.APP_MODAL_CLOSE}
          viewBox="0 0 16 16"
          className={styles.Notifications_Header_Close}
          onClick={() => setIsNotifications(false)}
        />
      </div>

      <div className={styles.Notifications_Content}>
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

      {mock_notifications?.length > 10 ? (
        <div
          className={styles.Notifications_Footer}
          onClick={() => dispatch(setPopup({ popup: 'NotificationsPopup' }))}
        >
          <span>View all</span>
        </div>
      ) : null}
    </div>
  );
};

export default Notifications;
