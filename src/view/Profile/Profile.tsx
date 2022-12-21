import {
  BaseAlert,
  BaseButtonApp,
  BaseIcon,
  BaseInput,
  BaseInputApp,
  BaseTitle,
} from '@base/index';
import React, { useState } from 'react';
import s from './Profile.module.scss';

export interface IValueForm {
  name: string;
  surname: string;
  phone: string;
  email: string;
  birth_date: string;
  title: string;
}

const Profile = () => {
  const [value, setValue] = React.useState<IValueForm>({
    name: '',
    surname: '',
    phone: '',
    email: '',
    birth_date: '',
    title: '',
  });

  const setNewValue = (val: string | number | File[], key: string) => {
    setValue((prev) => ({ ...prev, [key]: val }));
  };

  return (
    <>
      <div className={s.Profile}>
        <BaseInputApp
          name="name"
          placeholder="Placeholder-label"
          label="Placeholder-label"
          value={value.name}
          onChange={(val: string) => setNewValue(val, 'name')}
          className={s.Form_Input}
          // error="some text"
          // disabled
          prefix="wer"
        />
      </div>
    </>
  );
};

export default Profile;
