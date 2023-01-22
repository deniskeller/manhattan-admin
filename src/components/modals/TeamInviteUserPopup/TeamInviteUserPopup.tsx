//@ts-nocheck
import React from 'react';
import styles from './TeamInviteUserPopup.module.scss';
import {
  BaseButtonApp,
  BaseInputApp,
  BasePopupApp,
  BaseSelectApp,
  BaseTitle,
} from '@base/index';
import { modalSlice } from '@store/modals/reducer';
import { useAppDispatch } from '@hooks/redux';
import Input from '@tw/components/Input/Input';

interface Props {
  className: string;
}

interface IValueModals {
  first_name: string;
  last_name: string;
  phone_number: string;
  email: string;
  birth_date: string;
  job_title: string;
  permision: string;
}

const TeamInviteUserPopup: React.FC<Props> = ({ className }) => {
  const { setPopup } = modalSlice.actions;
  const dispatch = useAppDispatch();

  const [value, setValue] = React.useState<IValueModals>({
    first_name: '',
    last_name: '',
    phone_number: '',
    email: '',
    birth_date: '',
    job_title: '',
    permision: '',
  });

  const setNewValue = (val: string | File[], key: string) => {
    setValue((prev) => ({ ...prev, [key]: val }));
  };

  const inviteUserHandler = () => {
    dispatch(setPopup({ popup: '' }));

    setTimeout(() => {
      dispatch(setPopup({ popup: 'TwoFactorAuthenticationPopup' }));
    }, 300);
  };

  return (
    <BasePopupApp className={className} type="large">
      <BaseTitle type="app" className={styles.Title}>
        Invite user
      </BaseTitle>

      <BaseInputApp
        name="first_name"
        placeholder="First name"
        label="First name"
        value={value.first_name}
        onChange={(val: string) => setNewValue(val, 'first_name')}
        className={styles.Input}
      />

      <BaseInputApp
        name="last_name"
        placeholder="Last name"
        label="Last name"
        value={value.last_name}
        onChange={(val: string) => setNewValue(val, 'last_name')}
        className={styles.Input}
      />

      <BaseInputApp
        name="email"
        placeholder="Email"
        label="Email"
        value={value.email}
        onChange={(val: string) => setNewValue(val, 'email')}
        className={styles.Input}
      />

      <div className={styles.Input}>
        <Input.Phone
          label={'Phone'}
          value={value.phone_number}
          valueCodeInitial={''}
          variant={'default'}
          message={''}
          messageCode={''}
          isErrorPhone={false}
          isErrorCode={false}
          onChangeCode={(val: any) => {}}
          onChange={(val: string) => setNewValue(val, 'phone_number')}
        />
      </div>

      <BaseInputApp
        name="job_title"
        placeholder="Details"
        label="Details"
        value={value.job_title}
        onChange={(val: string) => setNewValue(val, 'job_title')}
        className={styles.Input}
      />

      <div className={styles.Input}>
        <Input.Calendar
          label={'Birth date'}
          value={value.birth_date}
          calendarProps={{}}
          valueCodeInitial={''}
          variant={'default'}
          message={''}
          messageCode={''}
          isErrorPhone={false}
          isErrorCode={false}
          onChange={(val: string) => setNewValue(val, 'birth_date')}
        />
      </div>

      <BaseSelectApp
        label="Permision"
        options={[
          { value: 'view_only', label: 'View only' },
          { value: 'asset_management', label: 'Asset management' },
        ]}
        onChange={(val: string) => setNewValue(val, 'permision')}
        className={styles.Input}
      />

      <BaseButtonApp
        title="Invite user"
        type="primary"
        className={styles.Button}
        onClick={() => inviteUserHandler()}
      />
    </BasePopupApp>
  );
};

export default TeamInviteUserPopup;
