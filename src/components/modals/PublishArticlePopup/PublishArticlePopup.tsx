//@ts-nocheck
import React from 'react';
import styles from './PublishArticlePopup.module.scss';
import { BaseButtonApp, BasePopupApp, BaseTitle } from '@base/index';
import toast from 'react-hot-toast';
import { useAppDispatch } from '@hooks/redux';
import { modalSlice } from '@store/modals/reducer';

interface Props {
  className: string;
}

const PublishArticlePopup: React.FC<Props> = ({ className }) => {
  const dispatch = useAppDispatch();
  const { setPopup } = modalSlice.actions;

  const publishHandler = () => {
    dispatch(setPopup({ popup: '' }));
    setTimeout(() => {
      toast.success('Article published on site', { duration: 3000 });
    }, 300);
  };

  return (
    <BasePopupApp className={className} type="small">
      <BaseTitle type="app" className={styles.Title}>
        Publish
      </BaseTitle>

      <div className={styles.Subtitle}>
        <p>Do you want to publish this article?</p>
      </div>

      <div className={styles.Actions}>
        <BaseButtonApp title="Cancel" type="secondary" size="small" />

        <BaseButtonApp
          title="Publish"
          type="primary"
          size="small"
          onClick={() => publishHandler()}
        />
      </div>
    </BasePopupApp>
  );
};

export default PublishArticlePopup;
