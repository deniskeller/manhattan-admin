import React from 'react';
import styles from './InvestorDocumentsUploadFilePopup.module.scss';
import {
  BaseButtonApp,
  BaseInputApp,
  BaseInputFileApp,
  BasePopupApp,
  BaseSelectApp,
  BaseTitle,
} from '@base/index';

interface Props {
  className: string;
}

interface IValueModals {
  title: string;
  upload_title: string;
  files: File[];
}

const InvestorDocumentsUploadFilePopup: React.FC<Props> = ({ className }) => {
  const [value, setValue] = React.useState<IValueModals>({
    title: 'Documents',
    upload_title: '',
    files: [],
  });

  const setNewValue = (val: string | File[], key: string) => {
    setValue((prev) => ({ ...prev, [key]: val }));
  };

  return (
    <BasePopupApp className={className} type="large">
      <BaseTitle type="app" className={styles.Title}>
        Upload file
      </BaseTitle>

      <BaseInputApp
        name="title"
        placeholder="Title"
        label="Title"
        value={value.title}
        onChange={(val: string) => setNewValue(val, 'title')}
        className={styles.Input}
      />

      <BaseSelectApp
        label="Upload to"
        options={[
          { value: 'system_documents', label: 'System documents.' },
          { value: 'financial_reports', label: 'Financial reports.' },
        ]}
        onChange={(val: string) => setNewValue(val, 'upload_title')}
        className={styles.Input}
      />

      <BaseInputFileApp
        title="Drag article cover here to upload or browse"
        types="odt, doc, docx, pdf, jpg, jpeg, png, ppt, odp, pptx (max 3MB)"
        files={value.files}
        onChange={(val: any[]) => setNewValue(val, 'files')}
        className={styles.Input}
      />

      <BaseButtonApp
        title="Upload file"
        type="primary"
        className={styles.Button}
      />
    </BasePopupApp>
  );
};

export default InvestorDocumentsUploadFilePopup;
