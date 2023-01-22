import React, { useEffect, useState } from 'react';
import styles from './MakePayoutPopup.module.scss';
import {
  BaseButtonApp,
  BaseIcon,
  BaseInputApp,
  BaseInputFileApp,
  BasePopupApp,
  BaseRadioButton,
  BaseSelectApp,
  BaseTitle,
} from '@base/index';
import { useAppDispatch } from '@hooks/redux';
import { modalSlice } from '@store/modals/reducer';
import { ALL_ICONS } from '@constants/icons';
import toast from 'react-hot-toast';

interface Props {
  className: string;
}

interface IRadioItems {
  value: string;
  label: string;
  icon: string;
}

interface IValueModals {
  deposit_amount: string;
  files: File[];
  transaction_hash: string;
}

const MakePayoutPopup: React.FC<Props> = ({ className }) => {
  const dispatch = useAppDispatch();
  const { setPopup } = modalSlice.actions;

  const [value, setValue] = React.useState<IValueModals>({
    deposit_amount: '15 000.00',
    files: [],
    transaction_hash: '',
  });

  const radio_items: IRadioItems[] = [
    {
      value: 'usd',
      label: 'USD',
      icon: '$',
    },
    {
      value: 'usdt',
      label: 'USDT',
      icon: 'T',
    },
  ];
  const [radioValue, setRadioValue] = React.useState('usd');

  const setNewValue = (val: string | File[], key: string) => {
    setValue((prev) => ({ ...prev, [key]: val }));
  };

  const submitHandler = () => {
    dispatch(setPopup({ popup: '' }));

    setTimeout(() => {
      dispatch(setPopup({ popup: 'TwoFactorAuthenticationPopup' }));
    }, 600);
  };

  return (
    <BasePopupApp className={className} type="large">
      <BaseTitle type="app" className={styles.Title}>
        Make Payout
      </BaseTitle>

      <>
        <div className={styles.Label}>
          <p>Choose convenient banking details</p>
        </div>

        <div className={styles.RadioButtons}>
          {radio_items?.map((item) => {
            return (
              <BaseRadioButton
                type="button"
                key={item.value}
                value={item.value}
                checked={radioValue === item.value}
                onChange={() => setRadioValue(item.value)}
                icon={item.icon}
              >
                {item.label}
              </BaseRadioButton>
            );
          })}
        </div>

        <BaseInputApp
          name="deposit_amount"
          placeholder="Deposit amount"
          label="Deposit amount"
          value={value.deposit_amount}
          onChange={(val: string) => setNewValue(val, 'deposit_amount')}
          className={styles.Input}
        />

        <BaseSelectApp
          label="Company name"
          options={[
            { value: 'system_documents', label: 'System documents.' },
            { value: 'financial_reports', label: 'Financial reports.' },
          ]}
          onChange={(val: string) => setNewValue(val, 'upload_title')}
          className={styles.Input}
        />

        <BaseSelectApp
          label="Project"
          options={[
            { value: 'system_documents', label: 'System documents.' },
            { value: 'financial_reports', label: 'Financial reports.' },
          ]}
          onChange={(val: string) => setNewValue(val, 'upload_title')}
          className={styles.Input}
        />

        {radioValue == 'usdt' ? (
          <>
            <div className={styles.Input_Label}>
              <span>Transaction Hash</span>
            </div>

            <div className={styles.TransactionHash}>
              <textarea
                autoFocus
                value={value.transaction_hash}
                onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
                  setNewValue(e.target.value, 'transaction_hash')
                }
                className={styles.TransactionHash_Name}
              />
            </div>
          </>
        ) : (
          <>
            <div className={styles.Input_Label}>
              <span>Statement</span>
            </div>

            <BaseInputFileApp
              title="Drag file here to upload or browse"
              types="odt, doc, docx, pdf, jpg, jpeg, png, ppt, odp, pptx (max 3MB)"
              files={value.files}
              onChange={(val: any[]) => setNewValue(val, 'files')}
              className={styles.Input}
            />
          </>
        )}

        <BaseButtonApp
          title="Submit payment"
          type="primary"
          onClick={() => submitHandler()}
          className={styles.Button}
        />
      </>
    </BasePopupApp>
  );
};

export default MakePayoutPopup;
