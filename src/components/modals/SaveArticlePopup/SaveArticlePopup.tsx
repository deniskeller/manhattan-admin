import React from 'react';
import styles from './SaveArticlePopup.module.scss';
import { BaseButtonApp, BasePopupApp, BaseTitle } from '@base/index';
import toast from 'react-hot-toast';
import { useAppDispatch } from '@hooks/redux';
import { modalSlice } from '@store/modals/reducer';

interface Props {
  className: string;
}

const SaveArticlePopup: React.FC<Props> = ({ className }) => {
  const dispatch = useAppDispatch();
  const { setPopup } = modalSlice.actions;
  const saveHandler = () => {
    dispatch(setPopup({ popup: '' }));
    setTimeout(() => {
      toast.success('Article archieved', { duration: 3000 });
    }, 300);
  };

  return (
    <BasePopupApp className={className} type="small">
      <BaseTitle type="app" className={styles.Title}>
        Save
      </BaseTitle>

      <div className={styles.Subtitle}>
        <p>Do you want to save this article as a draft?</p>
      </div>

      <div className={styles.Actions}>
        <BaseButtonApp title="Cancel" type="secondary" size="small" />

        <BaseButtonApp
          title="Save"
          type="primary"
          size="small"
          onClick={() => saveHandler()}
        />
      </div>
    </BasePopupApp>
  );
};

export default SaveArticlePopup;
