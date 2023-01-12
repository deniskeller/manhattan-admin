import { BaseButtonApp, BaseIcon, BaseTitle } from '@base/index';
import { useAppDispatch } from '@hooks/redux';
import { modalSlice } from '@store/modals/reducer';
import React from 'react';
import { useRouter } from 'next/router';
import s from './ProjectDetails.module.scss';
import { ALL_ICONS } from '@constants/icons';

type Props = {
  id: string;
};

const ProjectDetails: React.FC<Props> = ({ id }) => {
  const { setPopup } = modalSlice.actions;
  const dispatch = useAppDispatch();
  const router = useRouter();

  return (
    <>
      <div className={s.ProjectDetails}>
        <div className={s.ProjectDetails_Header}>
          <BaseTitle type="app" className={s.ProjectDetails_Header_Title}>
            Project details
          </BaseTitle>

          <BaseButtonApp
            title="Invest details"
            type="primary"
            icon="to-details"
            size="small"
            className={s.ProjectDetails_Header_Button}
            onClick={() =>
              router.push(`/app/user/projects/invest-in-project/${id}`)
            }
          />
        </div>

        <div className={s.ProjectDetails_Details}>
          <div className={s.ProjectDetails_Details_Header}>
            <div className={s.ProjectDetails_Details_Header_InvestedInfo}>
              <div
                className={s.ProjectDetails_Details_Header_InvestedInfo_Graph}
              >
                <div className={s.GraphLabels}>
                  <div
                    className={`${s.GraphLabels_Item} ${s.GraphLabels_Item_Initial}`}
                  >
                    200,000.00
                  </div>
                  <span className={s.GraphLabels_Item_Slash}>/</span>
                  <div
                    className={`${s.GraphLabels_Item} ${s.GraphLabels_Item_Current}`}
                  >
                    120 000
                  </div>
                  <div
                    className={`${s.GraphLabels_Item} ${s.GraphLabels_Item_Total}`}
                  >
                    1,500,000.00
                  </div>
                </div>

                <div className={s.GraphProgressBar}>
                  <span className={s.GraphProgressBar_Item}></span>
                  <span className={s.GraphProgressBar_Item}></span>
                </div>

                <div className={s.GraphDate}>
                  <div className={s.GraphDate_Label}>Round ends in</div>

                  <div className={s.GraphDate_Tooltip}>
                    <BaseIcon
                      icon={ALL_ICONS.TOOLTIP}
                      viewBox="0 0 20 20"
                      className={s.GraphDate_Tooltip_Icon}
                    />

                    <div className={s.GraphDate_Tooltip_Tooltip}>
                      <span>31.02.2022</span>&nbsp;—&nbsp;
                      <span>12.00</span>
                    </div>
                  </div>

                  <div className={s.GraphDate_Date}>
                    <span>42 days 18 hrs 51 min</span>
                  </div>
                </div>
              </div>
            </div>

            <div className={s.ProjectDetails_Details_Header_Border}></div>

            <div className={s.ProjectDetails_Details_Header_Logo}></div>
          </div>
        </div>

        <div className={s.ProjectDetails_Slider}></div>
      </div>
    </>
  );
};

export default ProjectDetails;
