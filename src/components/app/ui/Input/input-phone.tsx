import { ComponentProps, forwardRef, useEffect, useState } from 'react';
import Input from './Input';
import { Phone } from 'react-feather';
import tw from 'twin.macro';
import { PhoneNumberUtil } from 'google-libphonenumber';
import { countries } from './countries';
import { Select } from '../';

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
  value?: string;
} & Omit<ComponentProps<typeof Input>, 'onChange' | 'value'>;

export const InputPhone = forwardRef<HTMLInputElement, PhoneProps>(
  (props, ref) => {
    const parsedPhone = parsePhoneNumber(props.value);
    const natinalPhone = parsedPhone?.getNationalNumber()?.toString();
    const initialCountryCode =
      parsedPhone && phoneUtil.getRegionCodeForNumber(parsedPhone);

    const [country, setCountry] = useState<string | undefined>(
      initialCountryCode ? initialCountryCode : undefined
    );
    const [phone, setPhone] = useState<string>(
      natinalPhone ? natinalPhone : ''
    );

    useEffect(() => {
      const foundCountryCode = countries.find((code) => {
        return code.code === country;
      });
      if (foundCountryCode) {
        props.onChange?.(`${foundCountryCode.dial_code}${phone}`);
      }
    }, [country, phone]);

    return (
      <div css={tw`flex gap-1`}>
        <Select
          value={country}
          options={countries.map((country) => {
            return {
              value: country.code,
              label:
                country.flag + ' ' + country.dial_code + ' ' + country.name,
            };
          })}
          onChange={(value) => {
            if (typeof value === 'string') {
              setCountry(value);
            }
          }}
          placeholder="Code"
          renderValue={(option) => {
            if (
              option &&
              typeof option === 'object' &&
              typeof option.label === 'string'
            ) {
              return (
                <span>
                  <span css={tw`text-black`}>{option.label.slice(0, 4)}</span>{' '}
                  <span>
                    {option.label.slice(4, option.label.indexOf(' ', 5))}
                  </span>
                </span>
              );
            }
          }}
          componentsProps={{
            popper: {
              style: {
                whiteSpace: 'nowrap',
              },
            },
            root: {
              style: {
                width: 150,
                whiteSpace: 'nowrap',
              },
            },
          }}
        />
        <Input
          {...props}
          ref={ref}
          left={<Phone />}
          type="tel"
          value={phone}
          onChange={(e) => {
            setPhone(e.target.value.replace(/[^0-9.]/g, ''));
          }}
        />
      </div>
    );
  }
);

InputPhone.displayName = 'Input.Phone';
