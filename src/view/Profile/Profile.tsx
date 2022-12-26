//@ts-nocheck
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
import { useAppDispatch } from '@hooks/redux';
import { modalSlice } from '@store/modals/reducer';
import Input from '@tw/components/Input/Input';
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
    phone: '+3809307733233',
    email: 'example@com',
    birth_date: '',
    title: 'Mr',
  });

  const setNewValue = (val: string | number | File[], key: string) => {
    setValue((prev) => ({ ...prev, [key]: val }));
  };

  const dispatch = useAppDispatch();
  const { setPopup } = modalSlice.actions;

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
                disabled
                name="name"
                placeholder="Name"
                label="Name"
                value={value.name}
                onChange={(val: string) => setNewValue(val, 'name')}
                className={s.Profile_Content_Form_Form_Field}
              />

              <BaseInputApp
                disabled
                name="surname"
                placeholder="Surname"
                label="Surname"
                value={value.surname}
                onChange={(val: string) => setNewValue(val, 'surname')}
                className={s.Profile_Content_Form_Form_Field}
              />

              <div className={s.Change}>
                <div className={s.Profile_Content_Form_Form_Field}>
                  <BaseInputApp
                    disabled
                    name="phone"
                    placeholder="Phone number"
                    label="Phone number"
                    value={value.phone}
                    onChange={(val: string) => setNewValue(val, 'phone')}
                  />
                </div>
                <span
                  onClick={() => {
                    dispatch(setPopup({ popup: 'ChangePhoneNumberPopup' }));
                  }}
                >
                  Change
                </span>
              </div>

              <BaseInputApp
                disabled
                name="email"
                placeholder="Email"
                label="Email"
                value={value.email}
                onChange={(val: string) => setNewValue(val, 'email')}
                className={s.Profile_Content_Form_Form_Field}
              />

              <Input.Calendar
                disabled
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
                className={s.Profile_Content_Form_Form_Field}
              />

              <BaseSelectApp
                disabled
                label="Title"
                options={[
                  { value: 'mr', label: 'Mr.' },
                  { value: 'mrs', label: 'Mrs.' },
                  { value: 'ms', label: 'Ms.' },
                  { value: 'mss', label: 'Mss.' },
                ]}
                onChange={(val: string) => setNewValue(val, 'title')}
                className={s.Profile_Content_Form_Form_Field}
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
      <BaseAlert />
    </>
  );
};

export default Profile;
