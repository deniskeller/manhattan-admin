//@ts-nocheck
import React from 'react';
import styles from './ChangePhoneNumberPopup.module.scss';
import {
  BaseButtonApp,
  BaseInputApp,
  BasePopupApp,
  BaseTitle,
} from '@base/index';
import toast from 'react-hot-toast';
import { useAppDispatch } from '@hooks/redux';
import { modalSlice } from '@store/modals/reducer';
import Input from '@tw/components/Input/Input';

interface Props {
  className: string;
}

interface IValueModals {
  verification_code: string;
  phone: string;
}

const ChangePhoneNumberPopup: React.FC<Props> = ({ className }) => {
  const dispatch = useAppDispatch();
  const { setPopup } = modalSlice.actions;

  const [value, setValue] = React.useState<IValueModals>({
    phone: '+3809307733233',
    verification_code: '',
  });

  const setNewValue = (val: string | number, key: string) => {
    setValue((prev) => ({ ...prev, [key]: val }));
  };

  //изменения в модалке
  const [subtitle, setSubtitle] = React.useState<string>(
    'Please enter new Phone number'
  );
  const [input_type, setInputType] = React.useState<string>('phone');
  const [sizeModal, setSizeModal] = React.useState<string>('large');

  const changeHandler = () => {
    setSizeModal('small');
    setSubtitle('Please enter 6-digit verification code');
    setInputType('text');
  };

  const publishHandler = () => {
    dispatch(setPopup({ popup: '' }));
    setTimeout(() => {
      toast.success('Phone number successfully changed ', { duration: 3000 });
    }, 300);
  };

  return (
    <BasePopupApp className={className} type={sizeModal}>
      <BaseTitle type="app" className={styles.Title}>
        Change Phone number
      </BaseTitle>

      <div className={styles.Subtitle}>
        <p>{subtitle}</p>
      </div>

      {input_type == 'phone' ? (
        <>
          <Input.Phone
            label={'Phone'}
            value={value.phone}
            valueCodeInitial={''}
            variant={'default'}
            message={''}
            messageCode={''}
            isErrorPhone={false}
            isErrorCode={false}
            onChangeCode={(val: any) => {}}
            onChange={(val: string) => setNewValue(val, 'phone')}
          />

          <BaseButtonApp
            title="Verify Phone number"
            type="primary"
            icon="to-details"
            onClick={() => changeHandler()}
            className={styles.Button}
          />
        </>
      ) : input_type == 'text' ? (
        <>
          <BaseInputApp
            name="verification_code"
            placeholder="Code"
            label="Code"
            value={value.verification_code}
            onChange={(val: string) => setNewValue(val, 'verification_code')}
          />

          <BaseButtonApp
            title="Submit"
            type="primary"
            onClick={() => publishHandler()}
            className={styles.Button}
          />
        </>
      ) : null}
    </BasePopupApp>
  );
};

export default ChangePhoneNumberPopup;
