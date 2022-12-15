import { BaseIcon } from '@base/index';
import { ALL_ICONS } from '@constants/icons';
import useOnClickOutside from '@hooks/useOnClickOutside';
import React from 'react';
import styles from './Notifications.module.scss';
import { NotificationItem } from '../';

const mock_notifications = [
  {
    type: 'add',
    description: 'John Doe joined team Teido.',
    time: '10:05',
    date: '20.09.2022',
    new_notification: true,
  },
  {
    type: 'add',
    description: 'New application been received. Type: Merchant, Name: Google',
    time: '',
    date: '20.09.2022',
    new_notification: false,
  },
  {
    type: 'add',
    description: 'T-01: New customer Case has been received',
    time: '10:05',
    date: '',
    new_notification: false,
  },
  {
    type: 'add',
    description: 'New application been received. Type: Merchant, Name: Google',
    time: '10:05',
    date: '20.09.2022',
    new_notification: true,
  },
  {
    type: 'add',
    description: 'T-01: New customer Case has been received',
    time: '10:05',
    date: '20.09.2022',
    new_notification: false,
  },
  {
    type: 'add',
    description: 'T-01: New customer Case has been received',
    time: '10:05',
    date: '20.09.2022',
    new_notification: false,
  },
  {
    type: 'add',
    description: 'T-01: New customer Case has been received',
    time: '10:05',
    date: '20.09.2022',
    new_notification: false,
  },
  {
    type: 'add',
    description: 'T-01: New customer Case has been received',
    time: '10:05',
    date: '20.09.2022',
    new_notification: false,
  },
  {
    type: 'add',
    description: 'T-01: New customer Case has been received',
    time: '10:05',
    date: '20.09.2022',
    new_notification: false,
  },
  {
    type: 'add',
    description: 'T-01: New customer Case has been received',
    time: '10:05',
    date: '20.09.2022',
    new_notification: false,
  },
  {
    type: 'add',
    description: 'T-01: New customer Case has been received',
    time: '10:05',
    date: '20.09.2022',
    new_notification: false,
  },
  {
    type: 'add',
    description: 'T-01: New customer Case has been received',
    time: '10:05',
    date: '20.09.2022',
    new_notification: false,
  },
  {
    type: 'add',
    description: 'T-01: New customer Case has been received',
    time: '10:05',
    date: '20.09.2022',
    new_notification: false,
  },
];

type Props = {
  isNotifications: boolean;
  setIsNotifications: (value: boolean) => void;
};

const Notifications: React.FC<Props> = ({
  isNotifications,
  setIsNotifications,
}) => {
  console.log('setIsNotifications: ', setIsNotifications);
  const thisNotifications = React.useRef<HTMLDivElement>(null);

  const clickOutsideHandler = () => {
    setIsNotifications(false);
  };
  useOnClickOutside(thisNotifications, clickOutsideHandler);

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

        <div className={styles.Notifications_Header_ClearAll}>Clear all</div>

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
        <div className={styles.Notifications_Footer}>
          <span>View all</span>
        </div>
      ) : null}
    </div>
  );
};

export default Notifications;
