import React, { useEffect, useState } from 'react';
import styles from './MakeDepositPopup.module.scss';
import {
  BaseButtonApp,
  BaseIcon,
  BaseInputApp,
  BaseInputFileApp,
  BasePopupApp,
  BaseRadioButton,
  BaseTitle,
} from '@base/index';
import { useAppDispatch } from '@hooks/redux';
import { modalSlice } from '@store/modals/reducer';
import { ALL_ICONS } from '@constants/icons';

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

const MakeDepositPopup: React.FC<Props> = ({ className }) => {
  const [step, setStep] = useState(1);
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

  const stepHandler = () => {
    setStep(2);
  };

  const submitHandler = () => {
    dispatch(setPopup({ popup: '' }));
    // setTimeout(() => {
    //   dispatch(setPopup({ popup: 'TwoFactorAuthenticationPopup' }));
    // }, 300);

    setTimeout(() => {
      dispatch(setPopup({ popup: 'PaymentSubmittedPopup' }));
    }, 300);
  };

  return (
    <BasePopupApp className={className} type="large">
      <BaseTitle type="app" className={styles.Title}>
        Make Deposit
      </BaseTitle>

      {step == 1 ? (
        <>
          <div className={styles.Description}>
            <p>
              In order to replenish the balance in the system, you need to make
              a payment using one of the details below. We accept USD and USDT.
              When using any of these currencies, the funds will be credited to
              the balance in the ratio of 1 to 1.
            </p>

            <p>
              After paying the payment, you need to notify the administrator by
              creating a payment in the system. To do this, press Create, fill
              in the currency, payment amount and attach a statement in case of
              USD payment or transaction hash in case of USDT transfer and
              submit the form. Within 10 minutes, the operator will check the
              receipt of the payment and the funds will be credited to your
              balance
            </p>
          </div>

          <div className={styles.Label}>
            <p>Use the details below to make a payment</p>
          </div>

          <div className={styles.Input}>
            <div className={styles.Input_DownloadFile}>
              <div className={styles.Input_DownloadFile_Name}>
                USD bank details.pdf
              </div>

              <BaseIcon
                icon={ALL_ICONS.UPLOAD}
                viewBox="0 0 18 18"
                className={styles.Input_DownloadFile_Icon}
              />
            </div>
          </div>

          <div className={styles.Input}>
            <div className={styles.Input_WalletNumber}>
              <div className={styles.Input_WalletNumber_Label}>
                <span>USDT wallet number</span>
              </div>
              <div className={styles.Input_WalletNumber_Value}>
                <span>124574123748796</span>
              </div>

              <BaseIcon
                icon={ALL_ICONS.CLIPBOARD_COPY}
                viewBox="0 0 18 18"
                className={styles.Input_WalletNumber_Icon}
              />
            </div>
          </div>

          <BaseButtonApp
            title="Create payment"
            icon="to-details"
            type="primary"
            onClick={() => stepHandler()}
            className={styles.Button}
          />
        </>
      ) : step == 2 ? (
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
      ) : null}
    </BasePopupApp>
  );
};

export default MakeDepositPopup;
