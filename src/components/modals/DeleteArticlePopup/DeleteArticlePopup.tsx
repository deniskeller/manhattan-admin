//@ts-nocheck
import React from 'react';
import styles from './DeleteArticlePopup.module.scss';
import { BaseButtonApp, BasePopupApp, BaseTitle } from '@base/index';
import toast from 'react-hot-toast';
import { useAppDispatch } from '@hooks/redux';
import { modalSlice } from '@store/modals/reducer';

interface Props {
  className: string;
}

const DeleteArticlePopup: React.FC<Props> = ({ className }) => {
  const dispatch = useAppDispatch();
  const { setPopup } = modalSlice.actions;

  const deletedHandler = () => {
    dispatch(setPopup({ popup: '' }));
    setTimeout(() => {
      toast.success('Article deleted', { duration: 3000 });
    }, 300);
  };

  return (
    <BasePopupApp className={className} type="small">
      <BaseTitle type="app" className={styles.Title}>
        Delete article
      </BaseTitle>

      <div className={styles.Subtitle}>
        <p>Do you want to delete this article?</p>
      </div>

      <div className={styles.Actions}>
        <BaseButtonApp title="Cancel" type="secondary" size="small" />

        <BaseButtonApp
          title="Delete"
          type="destructive"
          size="small"
          onClick={() => deletedHandler()}
        />
      </div>
    </BasePopupApp>
  );
};

export default DeleteArticlePopup;
