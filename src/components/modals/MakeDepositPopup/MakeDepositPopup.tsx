import React from 'react';
import styles from './MakeDepositPopup.module.scss';
import {
  BaseButtonApp,
  BaseInputApp,
  BasePopupApp,
  BaseTitle,
} from '@base/index';
import toast from 'react-hot-toast';
import { useAppDispatch } from '@hooks/redux';
import { modalSlice } from '@store/modals/reducer';

interface Props {
  className: string;
}

interface IValueModals {
  verification_code: string;
}

const MakeDepositPopup: React.FC<Props> = ({ className }) => {
  const dispatch = useAppDispatch();
  const { setPopup } = modalSlice.actions;

  const [value, setValue] = React.useState<IValueModals>({
    verification_code: '',
  });

  const setNewValue = (val: string | File[], key: string) => {
    setValue((prev) => ({ ...prev, [key]: val }));
  };

  const submitHandler = () => {
    dispatch(setPopup({ popup: '' }));
    setTimeout(() => {
      toast.success('User invited', { duration: 3000 });
    }, 300);
  };

  return (
    <BasePopupApp className={className} type="large">
      <BaseTitle type="app" className={styles.Title}>
        Make Deposit
      </BaseTitle>

      <div className={styles.Subtitle}>
        <p>Please enter 6-digit verification code dsfdsf1111231231</p>
      </div>

      <BaseInputApp
        name="verification_code"
        placeholder="Code"
        label="Code"
        value={value.verification_code}
        onChange={(val: string) => setNewValue(val, 'verification_code')}
        className={styles.Input}
      />

      <BaseButtonApp
        title="Submit"
        type="primary"
        onClick={() => submitHandler()}
        className={styles.Button}
      />
    </BasePopupApp>
  );
};

export default MakeDepositPopup;
