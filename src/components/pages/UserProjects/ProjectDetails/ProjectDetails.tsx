import { BaseButtonApp, BaseTitle } from '@base/index';
import { useAppDispatch } from '@hooks/redux';
import { modalSlice } from '@store/modals/reducer';
import React from 'react';
import { useRouter } from 'next/router';
import s from './ProjectDetails.module.scss';

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

        <div className={s.ProjectDetails_Details}></div>

        <div className={s.ProjectDetails_Slider}></div>
      </div>
    </>
  );
};

export default ProjectDetails;
