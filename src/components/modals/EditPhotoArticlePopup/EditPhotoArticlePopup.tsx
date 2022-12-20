import React from 'react';
import styles from './EditPhotoArticlePopup.module.scss';
import { BaseButtonApp, BasePopupApp, BaseTitle } from '@base/index';

interface Props {
  className: string;
}

const EditPhotoArticlePopup: React.FC<Props> = ({ className }) => {
  return (
    <BasePopupApp className={className}>
      <BaseTitle type="app" className={styles.Title}>
        Edit photo
      </BaseTitle>

      <div className={styles.Subtitle}>
        <p>Edit or change the photo</p>
      </div>

      <div
        className={styles.Image}
        style={{
          backgroundImage: 'url(/images/image/main_header_bg.jpg)',
        }}
      ></div>

      <div className={styles.Actions}>
        <BaseButtonApp
          title="Cancel"
          type="secondary"
          size="small"
          className={styles.Actions_Cencel}
        />

        <BaseButtonApp
          title="Save"
          type="primary"
          size="small"
          className={styles.Actions_Save}
        />
      </div>
    </BasePopupApp>
  );
};

export default EditPhotoArticlePopup;
