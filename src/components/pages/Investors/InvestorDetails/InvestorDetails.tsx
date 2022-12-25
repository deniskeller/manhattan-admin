import React from 'react';
import s from './InvestorDetails.module.scss';

type Props = {
  id: string;
};

const InvestorDetails: React.FC<Props> = ({ id }) => {
  const tabs = [
    { id: 1, title: 'Overwiev' },
    { id: 2, title: 'Investment stats' },
    { id: 3, title: 'Documents' },
    { id: 3, title: 'Team' },
  ];

  const [tab, setTab] = React.useState(0);

  return (
    <>
      <div className={s.InvestorDetails}>
        <div className={s.InvestorDetails_Header}>
          <div className={s.InvestorDetails_Header_InvestorName}>
            investor details —&nbsp;
            <span>Wayne Enterprises</span>
          </div>
        </div>

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
              Tab 1
            </div>

            <div
              className={`${s.Tabs_TabContent_TabItem} ${
                tab === 1 ? s.Active : ''
              }`}
            >
              Tab 2
            </div>

            <div
              className={`${s.Tabs_TabContent_TabItem} ${
                tab === 2 ? s.Active : ''
              }`}
            >
              Tab 3
            </div>

            <div
              className={`${s.Tabs_TabContent_TabItem} ${
                tab === 3 ? s.Active : ''
              }`}
            >
              Tab 4
            </div>
          </div>
        </div>
        {/* <CompanyDetails data={data ?? ({} as any)} /> */}
      </div>
    </>
  );
};

export default InvestorDetails;
