import { BaseTitle } from '@base/index';
import {
  CompanyTab,
  DocumentsTab,
  InvestmentStatsTab,
} from 'components/pages/Company';
import React from 'react';
import s from './Company.module.scss';

const Company: React.FC = () => {
  const tabs = [
    { id: 1, title: 'Company' },
    { id: 2, title: 'Investment stats' },
    { id: 3, title: 'Documents' },
  ];

  const [tab, setTab] = React.useState(0);

  return (
    <>
      <div className={s.Company}>
        <BaseTitle type="app" className={s.Company_Header}>
          Wayne Enterprises
        </BaseTitle>

        <div className={s.Tabs}>
          <ul className={s.Tabs_TabList}>
            {tabs.map((item, index) => (
              <li
                onClick={() => setTab(index)}
                className={`${s.TabItem} ${tab === index ? s.Active : ''}`}
                key={item.id}
              >
                <span>{item.title}</span>
              </li>
            ))}
          </ul>

          <div className={s.Tabs_TabContent}>
            <div
              className={`${s.Tabs_TabContent_TabItem} ${
                tab === 0 ? s.Active : ''
              }`}
            >
              <CompanyTab />
            </div>

            <div
              className={`${s.Tabs_TabContent_TabItem} ${
                tab === 1 ? s.Active : ''
              }`}
            >
              <InvestmentStatsTab />
            </div>

            <div
              className={`${s.Tabs_TabContent_TabItem} ${
                tab === 2 ? s.Active : ''
              }`}
            >
              <DocumentsTab />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Company;
