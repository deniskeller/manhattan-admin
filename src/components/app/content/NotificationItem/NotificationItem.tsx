import React from 'react';
import styles from './NotificationItem.module.scss';

type Props = {
  type?: string;
  description?: string;
  time?: string;
  date?: string;
  new_notification?: boolean;
};

const NotificationItem: React.FC<Props> = ({
  type,
  description,
  time,
  date,
  new_notification,
}) => {
  return (
    <div className={styles.NotificationItem}>
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={styles.NotificationItem_Icon}
      >
        <path
          d="M16 7V10M16 10V13M16 10H19M16 10H13M11 5C11 7.20914 9.20914 9 7 9C4.79086 9 3 7.20914 3 5C3 2.79086 4.79086 1 7 1C9.20914 1 11 2.79086 11 5ZM1 18C1 14.6863 3.68629 12 7 12C10.3137 12 13 14.6863 13 18V18C13 18.5523 12.5523 19 12 19H2C1.44772 19 1 18.5523 1 18V18Z"
          stroke="#2E3C8D"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>

      <div className={styles.NotificationItem_Info}>
        <div className={styles.NotificationItem_Info_Description}>
          <p>{description}</p>
        </div>

        <div className={styles.NotificationItem_Info_Date}>
          <span>
            {time && time} {date && date}
          </span>
        </div>
      </div>
      {new_notification ? (
        <div className={styles.NotificationItem_New}></div>
      ) : null}

      <div className={styles.NotificationItem_Border}></div>
    </div>
  );
};

export default NotificationItem;
