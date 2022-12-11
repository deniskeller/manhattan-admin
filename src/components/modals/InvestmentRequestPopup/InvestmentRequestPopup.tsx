import React from 'react';
import styles from './InvestmentRequestPopup.module.scss';
import { Form } from '@content/index';
import { BaseContainer, BasePopup } from '@base/index';
import {useAppSelector} from "@hooks/redux";
import {selectInvestData} from "@store/forms/reducer";

interface Props {
  className: string;
}

const InvestmentRequestPopup: React.FC<Props> = ({ className }) => {
  const investData = useAppSelector(selectInvestData);
  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0
  });
  return (
    <BasePopup className={className}>
      <BaseContainer>
        <div className={styles.Popup}>
          <div className={styles.Title}>
            <h1>Investment request</h1>
          </div>

          <div className={styles.Header}>
            <div className={styles.Header_Item}>
              <div className={styles.Name}>
                <span>Companies to invest</span>
              </div>
              <div className={styles.Value}>
                {investData.companiesToInvest}
              </div>
            </div>

            <div className={styles.Header_Item}>
              <div className={styles.Name}>
                <span>Investment amount</span>
              </div>
              <div className={styles.Value}>
               { formatter.format(investData.investmentAmount)}
              </div>
            </div>
          </div>

          <div className={styles.Form}>
            <Form />
          </div>
        </div>
      </BaseContainer>
    </BasePopup>
  );
};

export default InvestmentRequestPopup;
