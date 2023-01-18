//@ts-nocheck
import React from 'react';
import styles from './DeleteProjectPopup.module.scss';
import { BaseButtonApp, BasePopupApp, BaseTitle } from '@base/index';
import toast from 'react-hot-toast';
import { useAppDispatch } from '@hooks/redux';
import { modalSlice } from '@store/modals/reducer';

interface Props {
  className: string;
}

const DeleteProjectPopup: React.FC<Props> = ({ className }) => {
  const dispatch = useAppDispatch();
  const { setPopup } = modalSlice.actions;

  const publishHandler = () => {
    dispatch(setPopup({ popup: '' }));
    setTimeout(() => {
      toast.success('Project deleted', { duration: 3000 });
    }, 300);
  };

  return (
    <BasePopupApp className={className} type="small">
      <BaseTitle type="app" className={styles.Title}>
        Delete Project
      </BaseTitle>

      <div className={styles.Subtitle}>
        <p>Do you want to delete this project? This action can not be undone</p>
      </div>

      <div className={styles.Actions}>
        <BaseButtonApp title="Cancel" type="secondary" size="small" />

        <BaseButtonApp
          title="Delete"
          type="destructive"
          size="small"
          onClick={() => publishHandler()}
        />
      </div>
    </BasePopupApp>
  );
};

export default DeleteProjectPopup;
