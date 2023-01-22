//@ts-nocheck
import React from 'react';
import styles from './ProjectSaveChangesPopup.module.scss';
import { BaseButtonApp, BasePopupApp, BaseTitle } from '@base/index';
import toast from 'react-hot-toast';
import { useAppDispatch } from '@hooks/redux';
import { modalSlice } from '@store/modals/reducer';

interface Props {
  className: string;
}

const ProjectSaveChangesPopup: React.FC<Props> = ({ className }) => {
  const dispatch = useAppDispatch();
  const { setPopup } = modalSlice.actions;

  const publishHandler = () => {
    dispatch(setPopup({ popup: '' }));
    setTimeout(() => {
      toast.success('Changes saved', { duration: 3000 });
    }, 300);
  };

  return (
    <BasePopupApp className={className} type="small">
      <BaseTitle type="app" className={styles.Title}>
        Save changes
      </BaseTitle>

      <div className={styles.Subtitle}>
        <p>If you exit without saving, changes will be lost</p>
      </div>

      <div className={styles.Actions}>
        <BaseButtonApp title="No" type="destructive2" size="small" />

        <BaseButtonApp
          title="Save"
          type="primary"
          size="small"
          onClick={() => publishHandler()}
        />
      </div>
    </BasePopupApp>
  );
};

export default ProjectSaveChangesPopup;
