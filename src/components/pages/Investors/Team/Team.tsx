import React from 'react';
import styles from './Team.module.scss';
import { BaseIcon } from '@base/index';
import { ALL_ICONS } from '@constants/icons';
import { TeamItem } from '@content/index';

const team_members = [
  {
    name: 'Maxim Ivanov',
    profession: 'Owner',
    mail: 'maximivanov@mail.com',
    phone: '+79393034057',
    status: 'invited',
  },
  {
    name: 'Maxim Ivanov 2',
    profession: 'UX designer',
    mail: 'maximivanov@mail.com',
    phone: '+79393034057',
    status: 'active',
  },
  {
    name: 'Maxim Ivanov 3',
    profession: 'Owner',
    mail: 'maximivanov@mail.com',
    phone: '+79393034057',
    status: 'blocked',
  },
  {
    name: 'Maxim Ivanov 4',
    profession: 'Owner',
    mail: 'maximivanov@mail.com',
    phone: '+79393034057',
    status: 'active',
  },
  {
    name: 'Maxim Ivanov 5',
    profession: 'Owner',
    mail: 'maximivanov@mail.com',
    phone: '+79393034057',
    status: 'invited',
  },
];

type Props = {};

const Team: React.FC<Props> = () => {
  return (
    <div className={styles.Team}>
      {team_members?.map((member, index) => {
        return (
          <TeamItem
            key={index}
            name={member.name}
            profession={member.profession}
            mail={member.mail}
            phone={member.phone}
            status={member.status}
          />
        );
      })}
    </div>
  );
};

export default Team;
