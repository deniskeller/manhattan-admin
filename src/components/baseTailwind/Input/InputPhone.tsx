import React, { ComponentProps, forwardRef, useEffect, useState } from 'react';
import Input from './Input';
import { AlertTriangle, Phone } from 'react-feather';
import tw, { css } from 'twin.macro';
import styles from './styles.module.scss';
import { PhoneNumberUtil } from 'google-libphonenumber';
import { Select } from '../Select/Select';
import { countries } from 'utils/countries';

const phoneUtil = PhoneNumberUtil.getInstance();

function parsePhoneNumber(value?: string) {
  try {
    return phoneUtil.parse(value);
  } catch (e) {
    return null;
  }
}

type PhoneProps = {
  onChange?: (value: string) => void;
  onChangeCode?: (value: string) => void;
  value?: string;
  valueCodeInitial?: string;
  messageCode?: string;
  isErrorPhone?: boolean;
  isErrorCode?: boolean;
} & Omit<ComponentProps<typeof Input>, 'onChange' | 'value'>;

export const InputPhone = forwardRef<HTMLInputElement, PhoneProps>(
  ({ label, labelVariant = 'floating', ...props }, ref) => {
    const parsedPhone = parsePhoneNumber(props.value);
    const nationalPhone = parsedPhone?.getNationalNumber()?.toString();
    const initialCountryCode =
      parsedPhone && phoneUtil.getRegionCodeForNumber(parsedPhone);

    const [country, setCountry] = useState<string | undefined>(
      initialCountryCode
        ? initialCountryCode
        : props.valueCodeInitial
        ? countries.find((c) => {
            return c.dial_code == props.valueCodeInitial;
          })?.code
        : ''
    );
    useEffect(() => {
      const val = countries.find((c) => {
        return c.code == country;
      })?.dial_code;
      props.onChangeCode?.(val as string);
    }, [country]);
    const [phone, setPhone] = useState<string>(
      nationalPhone ?? props?.value ?? ''
    );

    useEffect(() => {
      const foundCountryCode = countries.find((code) => {
        return code.code === country;
      });

      props.onChange?.(phone ?? '');

      /*if (foundCountryCode) {
        props.onChange?.(`${foundCountryCode.dial_code}${phone}`);
      } else {
        props.onChange?.(phone ?? "");
      }*/
    }, [phone]);

    return (
      <div css={tw`flex gap-2 flex-col`}>
        <div
          css={[
            [tw`flex gap-1 items-start`],
            labelVariant === 'default' &&
              css`
                .MuiInputLabel-shrink {
                  display: none !important;
                }
              `,
          ]}
        >
          <Select
            label={labelVariant === 'default' && label}
            variant={props.isErrorCode ? 'error' : undefined}
            value={country}
            message={props.messageCode}
            required={true}
            options={countries.map((country) => {
              return {
                value: country.code,
                name: country.name,
                label: (
                  <div css={tw`flex`}>
                    <span css={tw`w-20`} style={{ flexShrink: 0 }}>
                      <img
                        loading="lazy"
                        width="20"
                        src={`https://flagcdn.com/w20/${country.code.toLowerCase()}.png`}
                        srcSet={`https://flagcdn.com/w40/${country.code.toLowerCase()}.png 2x`}
                        alt={``}
                        style={{
                          display: 'inline-flex',
                        }}
                      />{' '}
                      <span>{country.dial_code}</span>
                    </span>
                    <div style={{ whiteSpace: 'break-spaces' }}>
                      {country.name}
                    </div>
                  </div>
                ),
              };
            })}
            onChange={(value) => {
              if (typeof value === 'string') {
                setCountry(value);
              }
            }}
            placeholder="Code"
            renderValue={(option) => {
              if (option && 'value' in option) {
                const foundCountryCode = countries.find((code) => {
                  return code.code === option.value;
                });
                return (
                  <span className={styles.FlagSelectWrap}>
                    {foundCountryCode && (
                      <div
                        className={styles.FlagSelect}
                        style={{
                          backgroundImage: `url(https://flagcdn.com/w20/${foundCountryCode.code.toLowerCase()}.png)`,
                        }}
                      >
                        {/* <img
                          loading="lazy"
                          width="24"
                          src={`https://flagcdn.com/w20/${foundCountryCode.code.toLowerCase()}.png`}
                          srcSet={`https://flagcdn.com/w40/${foundCountryCode.code.toLowerCase()}.png 2x`}
                          alt={`Flag of ${foundCountryCode.name}`}
                          style={{
                            display: "inline-block",
                          }}
                        />*/}
                      </div>
                    )}{' '}
                    <span>{foundCountryCode?.dial_code}</span>
                  </span>
                );
              }
            }}
            slotProps={{
              popper: {
                style: {
                  whiteSpace: 'nowrap',
                },
                disablePortal: false,
              },
              root: {
                style: {
                  width: 120,
                  whiteSpace: 'nowrap',
                },
              },
            }}
          />
					
          <Input
            {...props}
            message={props.message}
            ref={ref}
            variant={props.isErrorPhone ? 'error' : 'default'}
            type="text"
            value={phone}
            placeholder={'Phone'}
            onChange={(e) => {
              if (e.target.value.includes('+')) {
                const parsedPhone = parsePhoneNumber(e.target.value);
                const nationalPhone = parsedPhone
                  ?.getNationalNumber()
                  ?.toString();
                const initialCountryCode =
                  parsedPhone && phoneUtil.getRegionCodeForNumber(parsedPhone);
                if (initialCountryCode && nationalPhone) {
                  setCountry(initialCountryCode);
                  setPhone(nationalPhone);
                } else {
                  setPhone(e.target.value.replace(/[^0-9.]/g, ''));
                }
              } else {
                setPhone(e.target.value.replace(/[^0-9.]/g, ''));
              }
            }}
          />
        </div>
        {/*   {props.variant === "error" && props.message && (
          <div css={tw`flex gap-1 items-center`}>
            <div css={tw`text-left w-full text-red-light-450 text-sm`}>
              {props.message}
            </div>
          </div>
        )}*/}
      </div>
    );
  }
);

InputPhone.displayName = 'Input.Phone';
