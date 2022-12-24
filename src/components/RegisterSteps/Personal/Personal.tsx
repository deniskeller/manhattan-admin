import React from 'react';
import styles from './style.module.scss';
import { Input } from '@tw/components/Input';
import { Select as SelectComponent } from '@tw/components/Select';
import { BaseButton, BaseLink } from '@base/index';
import { calendarProps18 } from '@tw/components/Input/inputHelper';
import { TErrorField } from '@utils/validation';
export type FieldsPersonal = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  code: string;
  birthDate: string;
  title: string;
  password: string;
  confirmPassword: string;
};
export type FieldsPersonalErrors = {
  firstName: TErrorField;
  lastName: TErrorField;
  email: TErrorField;
  phone: TErrorField;
  code: TErrorField;
  birthDate: TErrorField;
  title: TErrorField;
  password: TErrorField;
  confirmPassword: TErrorField;
};
type Props = {
  fields: FieldsPersonal;
  errors: FieldsPersonalErrors;
  handleChange: (e: any, name: string) => void;
  onNext: () => void;
  onBack: () => void;
};

export const PersonalInfo: React.FC<Props> = ({
  fields,
  errors,
  handleChange,
  onBack,
  onNext,
}) => {
  return (
    <div>
      <div className={styles.TitleForm}>Personal info</div>
      <div className={styles.ContainerForm}>
        <div className={styles.Form}>
          <div className={styles.SubtitleForm}>
            Please, fill info about company manager
          </div>
          <Input
            label="First Name"
            placeholder="First Name"
            variant={errors['firstName'].isError ? 'error' : 'default'}
            message={errors['firstName'].errorText}
            required
            value={fields.firstName}
            onChange={(e: any) => {
              handleChange(e?.target?.value, 'firstName');
            }}
          />
          <div className={styles.spacer} />
          <Input
            label="Last Name"
            placeholder="Last Name"
            variant={errors['lastName'].isError ? 'error' : 'default'}
            message={errors['lastName'].errorText}
            required
            value={fields.lastName}
            onChange={(e: any) => {
              handleChange(e?.target?.value, 'lastName');
            }}
          />
          <div className={styles.spacer} />
          <Input.Email
            label="Email"
            placeholder={'Email'}
            required
            variant={errors['email'].isError ? 'error' : 'default'}
            message={errors['email'].errorText}
            value={fields.email}
            onChange={(e: any) => {
              handleChange(e?.target?.value, 'email');
            }}
          />
          <div className={styles.spacer} />
          <Input.Phone
            label={'Phone'}
            value={fields.phone}
            variant={errors['phone'].isError ? 'error' : 'default'}
            message={errors['phone'].errorText}
            messageCode={errors['code'].errorText}
            isErrorPhone={errors['phone'].isError}
            isErrorCode={errors['code'].isError}
            onChange={(val: any) => {
              handleChange(val, 'phone');
            }}
            valueCodeInitial={fields.code}
            onChangeCode={(val: any) => {
              handleChange(val, 'code');
            }}
          />
          <div className={styles.spacer} />
          <Input.Calendar
            label={'Birth date'}
            value={fields.birthDate}
            variant={errors['birthDate'].isError ? 'error' : 'default'}
            message={errors['birthDate'].errorText}
            calendarProps={calendarProps18}
            onChange={(val: any) => {
              handleChange(val, 'birthDate');
            }}
          />
          <div className={styles.spacer} />
          <SelectComponent.Simple
            label={'Title'}
            required={true}
            value={fields.title}
            variant={errors['title'].isError ? 'error' : 'default'}
            onChange={(e: any) => {
              handleChange(e?.target?.value, 'title');
            }}
            options={[
              { value: 'mr', label: 'Mr' },
              { value: 'mrs', label: 'Mrs' },
              { value: 'ms', label: 'Ms' },
              { value: 'miss', label: 'Miss' },
            ]}
          />
          <div className={styles.spacer} />
          <Input.Password
            label="Password"
            placeholder="Password"
            name={'password'}
            variant={errors['password'].isError ? 'error' : 'default'}
            required
            value={fields.password}
            onChange={(e: any) => {
              handleChange(e?.target?.value, 'password');
            }}
          />
          <div className={styles.spacer} />
          <Input.Password
            label="Confirm password"
            placeholder="Confirm password"
            variant={errors['confirmPassword'].isError ? 'error' : 'default'}
            message={errors['confirmPassword'].errorText}
            required
            value={fields.confirmPassword}
            valueCompare={fields.password}
            onChange={(e: any) => {
              handleChange(e?.target?.value, 'confirmPassword');
            }}
          />
          <div className={styles.spacer} />
          <div className={styles.bottomForm}>
            Already have account?&nbsp;
            <BaseLink href={'/auth'}> Log in </BaseLink>
          </div>
        </div>
        <div className={styles.bottomButtons}>
          <BaseButton
            variant={'dark'}
            type={'transparent'}
            arrow={'left'}
            title={'Back'}
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
