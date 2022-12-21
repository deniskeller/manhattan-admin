import {
  BaseAlert,
  BaseButtonApp,
  BaseIcon,
  BaseInput,
  BaseInputApp,
  BaseSelect,
  BaseSelectApp,
  BaseTitle,
} from '@base/index';
import { ALL_ICONS } from '@constants/icons';
import { Select } from '@tw/components/Select';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
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
    name: 'Maxim',
    surname: 'Ivanov',
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
        <div className={s.Profile_Header}>
          <div className={s.Profile_Header_Name}>
            Maxim Ivanov&nbsp;—<span>&nbsp;Manhattan VC</span>
          </div>
        </div>

        <div className={s.Profile_Content}>
          <div className={s.Profile_Content_Form}>
            <div className={s.Profile_Content_Form_Header}>
              <span>
                Personal info caption, connect with the two-factor
                authentication service
              </span>
            </div>

            <div className={s.Profile_Content_Form_Form}>
              <BaseInputApp
                name="name"
                placeholder="Name"
                label="Name"
                value={value.name}
                onChange={(val: string) => setNewValue(val, 'name')}
              />

              <BaseInputApp
                name="surname"
                placeholder="Surname"
                label="Surname"
                value={value.surname}
                onChange={(val: string) => setNewValue(val, 'surname')}
              />

              <BaseInputApp
                name="phone"
                placeholder="Phone number"
                label="Phone number"
                value={value.phone}
                onChange={(val: string) => setNewValue(val, 'phone')}
              />

              <BaseInputApp
                name="email"
                placeholder="Email"
                label="Email"
                value={value.email}
                onChange={(val: string) => setNewValue(val, 'email')}
              />

              <BaseInputApp
                name="birth_date"
                placeholder="Birth date"
                label="Birth date"
                value={value.birth_date}
                onChange={(val: string) => setNewValue(val, 'birth_date')}
              />

              <BaseSelectApp
                label="Title"
                options={[
                  { value: 'mr', label: 'Mr' },
                  { value: 'mrs', label: 'Mrs' },
                  { value: 'ms', label: 'Ms' },
                  { value: 'mss', label: 'Mss' },
                ]}
                onChange={(val: string) => setNewValue(val, 'title')}
              />
            </div>
          </div>

          <div className={s.Profile_Content_2fAuth}>
            <div className={s.Profile_Content_2fAuth_Header}>
              <span>Two-factor authentication</span>
            </div>

            <div className={s.Profile_Content_2fAuth_Form}>
              <div className={s.Profile_Content_2fAuth_Form_Tooltip}>
                <BaseIcon
                  icon={ALL_ICONS.TOOLTIP}
                  viewBox="0 0 20 20"
                  className={s.Profile_Content_2fAuth_Form_Tooltip_Icon}
                />

                <p>
                  Please, connect with the two-factor authentication service to
                  confirm your financial activities inside Manhattan VC.
                </p>
              </div>

              <div className={s.Profile_Content_2fAuth_Form_Image}>
                <Image
                  src="/images/image/2f-auth.png"
                  layout="fill"
                  alt={'Image'}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
