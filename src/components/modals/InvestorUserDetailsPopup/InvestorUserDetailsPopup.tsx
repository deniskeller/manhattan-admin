import React from 'react';
import styles from './InvestorUserDetailsPopup.module.scss';
import {
  BaseButtonApp,
  BaseInputApp,
  BasePopupApp,
  BaseTitle,
} from '@base/index';
import { modalSlice } from '@store/modals/reducer';
import { useAppDispatch } from '@hooks/redux';

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
  status: string;
}

const InvestorUserDetailsPopup: React.FC<Props> = ({ className }) => {
  const { setPopup } = modalSlice.actions;
  const dispatch = useAppDispatch();

  const [value, setValue] = React.useState<IValueModals>({
    first_name: 'Maxim',
    last_name: 'Ivanov',
    phone_number: '+79393034057',
    email: 'example@mail.com',
    birth_date: 'Birth date',
    job_title: 'Ux designer',
    permision: 'View only',
    status: 'Invited',
  });

  const setNewValue = (val: string | File[], key: string) => {
    setValue((prev) => ({ ...prev, [key]: val }));
  };

  return (
    <BasePopupApp className={className} type="large">
      <BaseTitle type="app" className={styles.Title}>
        user details
      </BaseTitle>

      <BaseInputApp
        disabled
        name="first_name"
        placeholder="First name"
        label="First name"
        value={value.first_name}
        onChange={(val: string) => setNewValue(val, 'first_name')}
        className={styles.Input}
      />

      <BaseInputApp
        disabled
        name="last_name"
        placeholder="Last name"
        label="Last name"
        value={value.last_name}
        onChange={(val: string) => setNewValue(val, 'last_name')}
        className={styles.Input}
      />

      <BaseInputApp
        disabled
        name="phone_number"
        placeholder="Phone number"
        label="Phone number"
        value={value.phone_number}
        onChange={(val: string) => setNewValue(val, 'phone_number')}
        className={styles.Input}
      />

      <BaseInputApp
        disabled
        name="email"
        placeholder="Email"
        label="Email"
        value={value.email}
        onChange={(val: string) => setNewValue(val, 'email')}
        className={styles.Input}
      />

      <BaseInputApp
        disabled
        name="birth_date"
        placeholder="Birth date"
        label="Birth date"
        value={value.birth_date}
        onChange={(val: string) => setNewValue(val, 'birth_date')}
        className={styles.Input}
      />

      <BaseInputApp
        disabled
        name="job_title"
        placeholder="Job title"
        label="Job title"
        value={value.job_title}
        onChange={(val: string) => setNewValue(val, 'job_title')}
        className={styles.Input}
      />

      <BaseInputApp
        disabled
        name="permision"
        placeholder="Permision"
        label="Permision"
        value={value.permision}
        onChange={(val: string) => setNewValue(val, 'permision')}
        className={styles.Input}
      />

      <BaseInputApp
        disabled
        name="status"
        placeholder="status"
        label="status"
        value={value.status}
        onChange={(val: string) => setNewValue(val, 'status')}
        className={styles.Input}
      />

      <BaseButtonApp
        title="Close"
        type="secondary"
        className={styles.Button}
        onClick={() => dispatch(setPopup({ popup: '' }))}
      />
    </BasePopupApp>
  );
};

export default InvestorUserDetailsPopup;
