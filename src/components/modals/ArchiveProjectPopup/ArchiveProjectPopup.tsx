//@ts-nocheck
import React from 'react';
import styles from './ArchiveProjectPopup.module.scss';
import { BaseButtonApp, BasePopupApp, BaseTitle } from '@base/index';
import toast from 'react-hot-toast';
import { useAppDispatch } from '@hooks/redux';
import { modalSlice } from '@store/modals/reducer';

interface Props {
  className: string;
}

const ArchiveProjectPopup: React.FC<Props> = ({ className }) => {
  const dispatch = useAppDispatch();
  const { setPopup } = modalSlice.actions;

  const publishHandler = () => {
    dispatch(setPopup({ popup: '' }));
    setTimeout(() => {
      toast.success('Project archived', { duration: 3000 });
    }, 300);
  };

  return (
    <BasePopupApp className={className} type="small">
      <BaseTitle type="app" className={styles.Title}>
        Archive Project
      </BaseTitle>

      <div className={styles.Subtitle}>
        <p>Do you want to archive this project?</p>
      </div>

      <div className={styles.Actions}>
        <BaseButtonApp title="Cancel" type="secondary" size="small" />

        <BaseButtonApp
          title="Archive"
          type="primary"
          size="small"
          onClick={() => publishHandler()}
        />
      </div>
    </BasePopupApp>
  );
};

export default ArchiveProjectPopup;
