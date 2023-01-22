import React from 'react';
import styles from './Team.module.scss';
import { TeamItem } from '@content/index';
import { modalSlice } from '@store/modals/reducer';
import { useAppDispatch } from '@hooks/redux';
import { BaseAlert, BaseButtonApp, BaseTitle } from '@base/index';

type Props = {};

const Team: React.FC<Props> = () => {
  const { setPopup } = modalSlice.actions;
  const dispatch = useAppDispatch();

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
    // {
    //   name: 'Maxim Ivanov 3',
    //   profession: 'Owner',
    //   mail: 'maximivanov@mail.com',
    //   phone: '+79393034057',
    //   status: 'blocked',
    // },
    // {
    //   name: 'Maxim Ivanov 4',
    //   profession: 'Owner',
    //   mail: 'maximivanov@mail.com',
    //   phone: '+79393034057',
    //   status: 'active',
    // },
    // {
    //   name: 'Maxim Ivanov 5',
    //   profession: 'Owner',
    //   mail: 'maximivanov@mail.com',
    //   phone: '+79393034057',
    //   status: 'invited',
    // },
  ];

  return (
    <>
      <div className={styles.Team}>
        <div className={styles.Team_Header}>
          <BaseTitle type="app" className={styles.Team_Header_Title}>
            Manhattan VC
          </BaseTitle>

          <BaseButtonApp
            size="small"
            title="Invite user"
            type="primary"
            icon="invite"
            className={styles.Team_Header_Button}
            onClick={() => dispatch(setPopup({ popup: 'TeamInviteUserPopup' }))}
          />
        </div>

        <div
          className={`${styles.Team_Members} ${
            team_members?.length <= 2 ? styles.Team_Members_NoSlim : ''
          }`}
        >
          {team_members?.map((member, index) => {
            return (
              <TeamItem
                key={index}
                length={team_members.length}
                name={member.name}
                profession={member.profession}
                mail={member.mail}
                phone={member.phone}
                status={member.status}
                onClick={() =>
                  dispatch(setPopup({ popup: 'TeamUserDetailsPopup' }))
                }
              />
            );
          })}
        </div>
      </div>
      <BaseAlert />
    </>
  );
};

export default Team;
