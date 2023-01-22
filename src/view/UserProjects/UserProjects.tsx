import { BaseCheckbox } from '@base/index';
import { AllProjects } from 'components/pages/UserProjects';
import React, { useEffect } from 'react';
import s from './UserProjects.module.scss';

const UserProjects: React.FC = () => {
  const tabs = [
    { id: 1, title: 'All projects' },
    { id: 2, title: 'Invested' },
  ];
  const [tab, setTab] = React.useState(0);

  const [isChecked, setIsChecked] = React.useState<boolean>(false);

  useEffect(() => {
    console.log('isChecked: ', isChecked);
  }, [isChecked]);

  return (
    <>
      <div className={s.UserProjects}>
        <div className={s.UserProjects_Statistics}>
          <div className={s.UserProjects_Statistics_Item}>
            <div className={s.UserProjects_Statistics_Item_Label}>
              <span>Assets under management</span>
            </div>
            <div className={s.UserProjects_Statistics_Item_Value}>
              $800,183.05
            </div>
          </div>

          <div className={s.UserProjects_Statistics_Item}>
            <div className={s.UserProjects_Statistics_Item_Label}>
              <span>Last period return</span>
            </div>
            <div className={s.UserProjects_Statistics_Item_Value}>
              $8,183.05
            </div>
          </div>

          <div className={s.UserProjects_Statistics_Item}>
            <div className={s.UserProjects_Statistics_Item_Label}>
              <span>Amount of dividends paid</span>
            </div>
            <div className={s.UserProjects_Statistics_Item_Value}>
              $15,000.35
            </div>
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

            <BaseCheckbox
              checked={isChecked}
              onChange={() => setIsChecked(!isChecked)}
              className={s.Tabs_TabList_Checkbox}
            >
              Available only
            </BaseCheckbox>
          </ul>

          <div className={s.Tabs_TabContent}>
            <div
              className={`${s.Tabs_TabContent_TabItem} ${
                tab === 0 ? s.Active : ''
              }`}
            >
              <AllProjects />
            </div>

            <div
              className={`${s.Tabs_TabContent_TabItem} ${
                tab === 1 ? s.Active : ''
              }`}
            >
              {/* <InvestmentStatsTab /> */}
              tab 2
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserProjects;
