import React from 'react';
import styles from './Overwiev.module.scss';
import { BaseCheck, BaseIcon, BaseLabel } from '@base/index';
import { InfoRow } from '@content/index';
import { ALL_ICONS } from '@constants/icons';

type Props = {};

const Overwiev: React.FC<Props> = () => {
  return (
    <div className={styles.Details}>
      <div className={styles.Container}>
        <div className={styles.Title}>
          <span>verification status</span>
        </div>

        <div className={styles.Status}>
          <div className={styles.Status_Item}>
            <div className={styles.Status_Item_Name}>KYC status</div>

            <BaseLabel type={'success'}>in progress</BaseLabel>
          </div>
          <div className={styles.Status_Item}>
            <div className={styles.Status_Item_Name}>KYB status</div>

            <BaseLabel type={'success'}>in progress</BaseLabel>
          </div>
        </div>
      </div>

      {/* 1 */}
      <div className={styles.Container}>
        <div className={styles.Title}>
          <span>Personal info</span>
        </div>

        <div className={styles.Content}>
          <div className={styles.Content_Items}>
            <InfoRow
              className={styles.Content_Items_Row}
              left={'First name'}
              right={'Maxim'}
            />
            <InfoRow
              className={styles.Content_Items_Row}
              left={'Last name'}
              right={'Ivanov'}
            />
            <InfoRow left={'Title'} right={'UX designer'} />
          </div>

          <div className={styles.Content_Items}>
            <InfoRow
              className={styles.Content_Items_Row}
              left={'Date of birth'}
              right={'12.02.2022'}
            />
            <InfoRow
              className={styles.Content_Items_Row}
              left={'Email'}
              right={'example@mail.com'}
            />
            <InfoRow left={'Phone number'} right={'+79303993949'} />
          </div>
        </div>
      </div>
      {/* 2 */}
      <div className={styles.Container}>
        <div className={styles.Title}>
          <span>About company</span>
        </div>

        <div className={styles.Content}>
          <div className={styles.Content_Items}>
            <InfoRow
              className={styles.Content_Items_Row}
              left={'I`m contact person'}
              right={<BaseCheck checked={true} />}
            />
          </div>
        </div>

        <div className={styles.Content}>
          <div className={styles.Content_Items}>
            <InfoRow
              className={styles.Content_Items_Row}
              left={'County of incorporation'}
              right={'Russua'}
            />
            <InfoRow
              className={styles.Content_Items_Row}
              left={'Company name'}
              right={'Wayne Enterprises'}
            />
            <InfoRow
              className={styles.Content_Items_Row}
              left={'Registered trade name'}
              right={'Wayne Enterprises'}
            />
            <InfoRow
              className={styles.Content_Items_Row}
              left={'Business type'}
              right={'IT company'}
            />
            <InfoRow
              className={styles.Content_Items_Row}
              left={'Registration number'}
              right={'12345678'}
            />
          </div>

          <div className={styles.Content_Items}>
            <InfoRow
              className={styles.Content_Items_Row}
              left={'Date of registration'}
              right={'12.02.2022'}
            />
            <InfoRow
              className={styles.Content_Items_Row}
              left={'VAT / Tax ID number'}
              right={'123456789'}
            />
            <InfoRow
              className={styles.Content_Items_Row}
              left={'Business sector (SIC/NACE)'}
              right={'Text'}
            />
            <InfoRow
              className={styles.Content_Items_Row}
              left={'Website'}
              right={'https://11x11.ru/'}
            />
          </div>
        </div>

        <div className={styles.Content}>
          <div className={styles.Content_Items}>
            <InfoRow
              left={'Company actual address is the same as registered'}
              right={<BaseCheck checked={true} />}
              className={styles.Content_Items_Row}
            />
            <InfoRow
              left={'Does your company have a U.S person?'}
              right={<BaseCheck checked={true} />}
              className={styles.Content_Items_Row}
            />
          </div>

          <div className={styles.Content_Items_Row}>
            <InfoRow
              left={'Does your company have the Financial institution status?'}
              right={<BaseCheck checked={true} />}
            />
          </div>
        </div>
      </div>
      {/* 3 */}
      <div className={styles.Container}>
        <div className={styles.Title}>
          <span>Registration address</span>
        </div>

        <div className={styles.Content}>
          <div className={styles.Content_Items}>
            <InfoRow
              className={styles.Content_Items_Row}
              left={'Country'}
              right={'Russia'}
            />
            <InfoRow
              className={styles.Content_Items_Row}
              left={'City'}
              right={'Moscow'}
            />
            <InfoRow left={'Post code'} right={'240144'} />
          </div>

          <div className={styles.Content_Items}>
            <InfoRow
              className={styles.Content_Items_Row}
              left={'Address line 1'}
              right={'Klimentovskiy Pereulok, 37, Moscow, Russia '}
            />
            <InfoRow
              className={styles.Content_Items_Row}
              left={'Address line 2'}
              right={'Klimentovskiy Pereulok, 37, Moscow, Russia '}
            />
          </div>
        </div>

        <div className={styles.Title}>
          <span>Actual address</span>
        </div>

        <div className={styles.Content}>
          <div className={styles.Content_Items}>
            <InfoRow
              className={styles.Content_Items_Row}
              left={'Country'}
              right={'Russia'}
            />
            <InfoRow
              className={styles.Content_Items_Row}
              left={'City'}
              right={'Moscow'}
            />
            <InfoRow left={'Post code'} right={'240144'} />
          </div>

          <div className={styles.Content_Items}>
            <InfoRow
              className={styles.Content_Items_Row}
              left={'Address line 1'}
              right={'Klimentovskiy Pereulok, 37, Moscow, Russia '}
            />
            <InfoRow
              className={styles.Content_Items_Row}
              left={'Address line 2'}
              right={'Klimentovskiy Pereulok, 37, Moscow, Russia '}
            />
          </div>
        </div>
      </div>
      {/* 4 */}
      <div className={styles.Container}>
        <div className={styles.Title}>
          <span>Company industies</span>
        </div>

        <div className={styles.Content}>
          <div className={styles.Content_Items}>
            <InfoRow
              left={'Armaments, weapons or defense manufacturers'}
              right={<BaseCheck checked={false} />}
              className={styles.Content_Items_Row}
            />
            <InfoRow
              left={
                'Adult entertainment or the sale or advertising of sexual services'
              }
              right={<BaseCheck checked={false} />}
              className={styles.Content_Items_Row}
            />
            <InfoRow
              left={'Art dealers and auction houses'}
              right={<BaseCheck checked={false} />}
              className={styles.Content_Items_Row}
            />
            <InfoRow
              left={'Industrial chemical or legal high companies'}
              right={<BaseCheck checked={true} />}
              className={styles.Content_Items_Row}
            />
            <InfoRow
              left={'Client money processing firms'}
              right={<BaseCheck checked={true} />}
              className={styles.Content_Items_Row}
            />
            <InfoRow
              left={'Cryptocurrency processing firms'}
              right={<BaseCheck checked={true} />}
            />
          </div>

          <div className={styles.Content_Items_Row}>
            <InfoRow
              left={'FX speculators'}
              right={<BaseCheck checked={true} />}
              className={styles.Content_Items_Row}
            />
            <InfoRow
              left={'Gambling firms or video game arcades'}
              right={<BaseCheck checked={true} />}
              className={styles.Content_Items_Row}
            />
            <InfoRow
              left={'Nonprofit, political and religious organizations'}
              right={<BaseCheck checked={true} />}
              className={styles.Content_Items_Row}
            />
            <InfoRow
              left={'Precious metals and stones firms'}
              right={<BaseCheck checked={true} />}
              className={styles.Content_Items_Row}
            />
            <InfoRow
              left={'Sale of used cars or heavy industry vehicles'}
              right={<BaseCheck checked={true} />}
            />
          </div>
        </div>
      </div>
      {/* 5 */}
      <div className={styles.Container}>
        <div className={styles.Title}>
          <span>UBO</span>
        </div>

        <div className={styles.Content}>
          <div className={styles.Content_Items}>
            <InfoRow
              left={'1 Ultimate Beneficial Owner added'}
              right={<BaseCheck checked={false} />}
              className={styles.Content_Items_Row}
            />
            <InfoRow
              left={'First name'}
              right={'Maxim'}
              className={styles.Content_Items_Row}
            />
            <InfoRow
              left={'Last name'}
              right={'Ivanov'}
              className={styles.Content_Items_Row}
            />
            <InfoRow
              left={'Address line 1'}
              right={'Klimentovskiy Pereulok, 37, Moscow, Russia '}
              className={styles.Content_Items_Row}
            />
            <InfoRow
              left={'Email'}
              right={'example@mqil.com'}
              className={styles.Content_Items_Row}
            />
            <InfoRow
              left={'Existence of criminal records'}
              right={<BaseCheck checked={true} />}
              className={styles.Content_Items_Row}
            />
            <InfoRow
              left={'US person'}
              right={<BaseCheck checked={true} />}
              className={styles.Content_Items_Row}
            />
          </div>

          <div className={styles.Content_Items_Row}>
            <InfoRow
              left={'Date of birth'}
              right={'12.02.2000'}
              className={styles.Content_Items_Row}
            />
            <InfoRow
              left={'Owership stake, %'}
              right={'30%'}
              className={styles.Content_Items_Row}
            />
            <InfoRow
              left={'Tax ID number'}
              right={'123456789'}
              className={styles.Content_Items_Row}
            />
            <InfoRow
              left={'Phone number'}
              right={'+79303324334'}
              className={styles.Content_Items_Row}
            />
            <InfoRow
              left={'Passport details'}
              right={
                <a
                  className={styles.DownloadFile}
                  href={'/public/images/image/gear_bg.png'}
                  download={true}
                >
                  docx.txt
                </a>
              }
              className={styles.Content_Items_Row}
            />
            <InfoRow
              left={'Politically esposed'}
              right={<BaseCheck checked={true} />}
            />
          </div>
        </div>

        <div className={styles.Title}>
          <span>Shareholder</span>
        </div>

        <div className={styles.Content}>
          <div className={styles.Content_Items}>
            <InfoRow
              left={'1 Ultimate Beneficial Owner added'}
              right={<BaseCheck checked={false} />}
              className={styles.Content_Items_Row}
            />
            <InfoRow
              left={'First name'}
              right={'Maxim'}
              className={styles.Content_Items_Row}
            />
            <InfoRow
              left={'Last name'}
              right={'Ivanov'}
              className={styles.Content_Items_Row}
            />
            <InfoRow
              left={'Address line 1'}
              right={'Klimentovskiy Pereulok, 37, Moscow, Russia '}
              className={styles.Content_Items_Row}
            />
            <InfoRow
              left={'Email'}
              right={'example@mqil.com'}
              className={styles.Content_Items_Row}
            />
            <InfoRow
              left={'Existence of criminal records'}
              right={<BaseCheck checked={true} />}
              className={styles.Content_Items_Row}
            />
            <InfoRow
              left={'US person'}
              right={<BaseCheck checked={true} />}
              className={styles.Content_Items_Row}
            />
          </div>

          <div className={styles.Content_Items_Row}>
            <InfoRow
              left={'Date of birth'}
              right={'12.02.2000'}
              className={styles.Content_Items_Row}
            />
            <InfoRow
              left={'Owership stake, %'}
              right={'30%'}
              className={styles.Content_Items_Row}
            />
            <InfoRow
              left={'Tax ID number'}
              right={'123456789'}
              className={styles.Content_Items_Row}
            />
            <InfoRow
              left={'Phone number'}
              right={'+79303324334'}
              className={styles.Content_Items_Row}
            />
            <InfoRow
              left={'Passport details'}
              right={
                <a
                  className={styles.DownloadFile}
                  href={'/public/images/image/gear_bg.png'}
                  download={true}
                >
                  docx.txt
                </a>
              }
              className={styles.Content_Items_Row}
            />
            <InfoRow
              left={'Politically esposed'}
              right={<BaseCheck checked={true} />}
            />
          </div>
        </div>
      </div>
      {/* 6 */}
      <div className={styles.Container}>
        <div className={styles.Title}>
          <span>Financial details</span>
        </div>

        <div className={styles.Content}>
          <div className={styles.Content_Items}>
            <InfoRow
              left={'USD details'}
              right={
                <a
                  className={styles.DownloadFile}
                  href={'/public/images/image/gear_bg.png'}
                  download={true}
                >
                  My USD bank details.pdf
                </a>
              }
            />
          </div>

          <div className={styles.Content_Items}>
            <InfoRow
              left={'USDT wallet number'}
              right={
                <div className={styles.Clipboard}>
                  <div className={styles.Clipboard_Title}>
                    <span>124574123748796</span>
                  </div>

                  <BaseIcon
                    icon={ALL_ICONS.CLIPBOARD_COPY}
                    viewBox="0 0 18 18"
                    className={styles.Clipboard_Icon}
                  />
                </div>
              }
              className={styles.Content_Items_Row}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Overwiev;
