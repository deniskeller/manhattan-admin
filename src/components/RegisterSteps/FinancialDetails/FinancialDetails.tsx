import React from 'react';
import styles from './style.module.scss';
import { Input } from '@tw/components/Input';
import { Select as SelectComponent } from '@tw/components/Select';
import { BaseButton } from '@base/index';
import { FileDrop } from '@tw/components/FileDrop/Filedrop';
import { TErrorField } from '@utils/validation';
export type FieldsFinancialDetails = {
  filesBankDetails: any;
  walletNumber: string;
};
export type FieldsFinancialDetailsErrors = {
  filesBankDetails: TErrorField;
  walletNumber: TErrorField;
};
type Props = {
  fields: FieldsFinancialDetails;
  handleChange: (e: any, name: string) => void;
  onNext: () => void;
  onBack: () => void;
  errors: FieldsFinancialDetailsErrors;
};
export const FinancialDetails: React.FC<Props> = ({
  fields,
  errors,
  handleChange,
  onNext,
  onBack,
}) => {
  return (
    <div>
      <div className={styles.TitleForm}>Financial details</div>
      <div className={styles.ContainerForm}>
        <div className={styles.Form}>
          <div className={styles.SubtitleForm}>USD</div>
          <div className={styles.SubtitleBlock}>
            Upload your USD bank details
          </div>
          <div className={styles.spacer} />
          <FileDrop
            onDrop={(files) => {
              handleChange(files, 'filesBankDetails');
            }}
            files={fields.filesBankDetails}
            types={[
              'txt',
              'jpg',
              'pdf',
              'png',
              'docx',
              'odt',
              'doc',
              'jpeg',
              'ppt',
              'odp',
              'pptx',
            ]}
            maxFiles={1}
            maxSize={3}
            variant={errors['filesBankDetails'].isError ? 'error' : 'default'}
            message={errors['filesBankDetails'].errorText}
          />
          <div className={styles.spacer} />
          <div className={styles.SubtitleForm}>USDT</div>
          <div className={styles.SubtitleBlock}>
            Copy your USDT wallet number
          </div>
          <div className={styles.spacer} />
          <Input
            label="USDT wallet number"
            placeholder="USDT wallet number"
            variant={errors['walletNumber'].isError ? 'error' : 'default'}
            message={errors['walletNumber'].errorText}
            required
            value={fields.walletNumber}
            onChange={(e: any) => {
              handleChange(e?.target?.value, 'walletNumber');
            }}
          />
        </div>
        <div className={styles.bottomButtons}>
          <BaseButton
            variant={'dark'}
            type={'transparent'}
            arrow={'left'}
            title={'Step 5'}
            onClick={onBack}
          />
          <BaseButton
            title={'Continue'}
            variant={'dark'}
            arrow={'right'}
            onClick={onNext}
          />
        </div>
      </div>
    </div>
  );
};
