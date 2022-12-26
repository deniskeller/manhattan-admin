import { BaseButtonApp } from '@base/index';
import { useAppDispatch } from '@hooks/redux';
import { modalSlice } from '@store/modals/reducer';
import React from 'react';
import { Documents, Overwiev } from '../index';
import s from './InvestorDetails.module.scss';

type Props = {
  id: string;
};

const InvestorDetails: React.FC<Props> = ({ id }) => {
  const { setPopup } = modalSlice.actions;
  const dispatch = useAppDispatch();

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
          {tab == 2 ? (
            <BaseButtonApp
              title="Upload file"
              type="primary"
              size="small"
              className={s.InvestorDetails_Header_UploadFile}
              onClick={() =>
                dispatch(
                  setPopup({ popup: 'InvestorDocumentsUploadFilePopup' })
                )
              }
            />
          ) : null}
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
              <Overwiev />
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
              <Documents />
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
      </div>
    </>
  );
};

export default InvestorDetails;
