import React from 'react';
import styles from './TeamItem.module.scss';
import { BaseIcon } from '@base/index';
import { ALL_ICONS } from '@constants/icons';

type Props = {
  name?: string;
  profession?: string;
  mail?: string;
  phone?: string;
  status?: string;
  onClick?: (e: React.SyntheticEvent) => void;
};

const TeamItem: React.FC<Props> = ({
  name,
  profession,
  mail,
  phone,
  status = 'active',
  onClick,
}) => {
  return (
    <div className={styles.TeamItem} onClick={onClick}>
      <div className={styles.TeamItem_Header}>
        <BaseIcon
          icon={ALL_ICONS.USER}
          viewBox="0 0 21 22"
          className={styles.TeamItem_Header_Icon}
        />
        <div className={styles.TeamItem_Header_Name}>{name}</div>
        <div className={styles.TeamItem_Header_Profession}>{profession}</div>
      </div>

      <div className={styles.TeamItem_Mail}>
        <BaseIcon
          icon={ALL_ICONS.MAIL}
          viewBox="0 0 16 12"
          className={styles.TeamItem_Mail_Icon}
        />
        <div className={styles.TeamItem_Mail_Name}>{mail}</div>
      </div>

      <div className={styles.TeamItem_Phone}>
        <BaseIcon
          icon={ALL_ICONS.PHONE}
          viewBox="0 0 16 16"
          className={styles.TeamItem_Phone_Icon}
        />
        <div className={styles.TeamItem_Phone_Name}>{phone}</div>
      </div>

      <div className={styles.TeamItem_Status}>
        <div
          className={styles.TeamItem_Status_Icon}
          style={{
            background:
              status == 'invited'
                ? '#948f8f'
                : status == 'blocked'
                ? '#ef4343'
                : '#3479e9',
          }}
        ></div>
        <div className={styles.TeamItem_Status_Name}>{status}</div>
      </div>
    </div>
  );
};

export default TeamItem;
