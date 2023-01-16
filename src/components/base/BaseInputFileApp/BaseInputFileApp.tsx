import React from 'react';
import styles from './BaseInputFileApp.module.scss';
import { useDropzone } from 'react-dropzone';
import { BaseIcon } from '@base/index';
import { ALL_ICONS } from '@constants/icons';

interface FileInputProps {
  files: File[];
  multiple?: boolean;
  article?: boolean;
  className?: string;
  title?: string;
  types?: string;
  type?: string;
  error?: string | boolean;
  onChange(files: File[]): void;
}

const BaseInputFileApp: React.FC<FileInputProps> = ({
  files,
  onChange,
  multiple = false,
  //флаг для фалйдропа настранцие новостей
  article = false,
  // типы файлов
  type = 'all',
  // заголовок инпута
  title = '',
  // загружаемые типы
  types = '',
  error,
  className = '',
}) => {
  function onDeleteFile(lastModified: number) {
    const newArr = files.filter((file) => file.lastModified !== lastModified);
    onChange(newArr);
  }

  const uploadDropFile = React.useCallback(
    (acceptedFiles: File[]) => {
      onChange(acceptedFiles);
    },
    [onChange]
  );

  function onDropFunc(files: File[]) {
    console.log('files: ', files);
    if (files.length > 1 && multiple === true) {
      uploadDropFile(files);
    } else {
      uploadDropFile([files[0]]);
    }
  }

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop: onDropFunc,
  });

  //обрезание строки до 15 символов
  const computedName = (file: string) => {
    if (file.length > 15) {
      const fileName = file.split('.')[0];
      const fileType = file.split('.')[1];
      const newStr = fileName.substring(0, 15);
      return newStr + '...' + '.' + fileType;
    }
    return file;
  };

  return (
    <>
      <div className={`${styles.FileInput} ${className}`}>
        {files?.length > 0 ? (
          files.map((file) => {
            return (
              <>
                {type == 'all' ? (
                  <div
                    className={`${styles.FileInput_UploadFile} ${
                      files.length > 1 ? styles.mb20 : ''
                    }`}
                    key={file?.name}
                  >
                    <div className={styles.FileInput_UploadFile_Title}>
                      {computedName(file.name)}
                    </div>

                    <BaseIcon
                      viewBox="0 0 21 21"
                      icon={ALL_ICONS.DELETE}
                      className={styles.FileInput_UploadFile_Delete}
                      onClick={() => onDeleteFile(file.lastModified)}
                    />
                  </div>
                ) : (
                  <div
                    className={`${styles.FileInput_UploadImage}`}
                    key={file?.name}
                    style={{
                      backgroundImage: `url(/images/image/main_header_bg.jpg)`,
                    }}
                  >
                    <div className={styles.FileInput_UploadImage_Overlay}></div>

                    <div
                      className={`${styles.FileInput_UploadImage_Delete} ${styles.FileInput_UploadImage_Delete_Desktop}`}
                    >
                      <BaseIcon
                        viewBox="0 0 18 22"
                        icon={ALL_ICONS.DELETE}
                        className={styles.FileInput_UploadImage_Delete_Icon}
                        onClick={() => onDeleteFile(file.lastModified)}
                      />
                    </div>

                    <div
                      className={`${styles.FileInput_UploadImage_Delete} ${styles.FileInput_UploadImage_Delete_Mobile}`}
                    >
                      <BaseIcon
                        icon={ALL_ICONS.APP_MODAL_CLOSE}
                        viewBox="0 0 16 16"
                        className={
                          styles.FileInput_UploadImage_Delete_Mobile_Icon
                        }
                        onClick={() => onDeleteFile(file.lastModified)}
                      />
                    </div>
                  </div>
                )}
              </>
            );
          })
        ) : (
          <>
            <div
              className={`${styles.FileInput_Clear} ${
                isDragActive ? styles.Active : ''
              } ${error ? styles.Error : ''}`}
              {...getRootProps()}
            >
              <div className={styles.FileInput_Clear_Border}></div>

              <input
                {...getInputProps()}
                hidden
                accept="image/*"
                multiple={multiple}
              />

              <div className={styles.FileInput_Clear_Content}>
                <div
                  className={`${styles.FileInput_Clear_Content_Header} ${styles.Desktop}`}
                >
                  <div
                    className={`${styles.FileInput_Clear_Content_Header_Title}`}
                    style={{ flexDirection: article ? 'column' : 'row' }}
                  >
                    {type == 'image' ? (
                      <BaseIcon
                        viewBox="0 0 31 31"
                        icon={ALL_ICONS.IMAGE_UPLOAD}
                        className={`${styles.FileInput_Clear_Content_Icon} ${
                          styles.FileInput_Clear_Content_Icon_Image
                        } ${
                          article ? styles.MarginBottom : styles.MarginRight
                        }`}
                      />
                    ) : (
                      <BaseIcon
                        viewBox="0 0 42 42"
                        icon={ALL_ICONS.FILE_UPLOAD}
                        className={`${styles.FileInput_Clear_Content_Icon} ${
                          styles.FileInput_Clear_Content_Icon_File
                        } ${
                          article ? styles.MarginBottom : styles.MarginRight
                        }`}
                      />
                    )}

                    <span>{title}</span>
                  </div>

                  <div
                    className={styles.FileInput_Clear_Content_Header_Subtitle}
                  >
                    <span>{types}</span>
                  </div>
                </div>

                <div
                  className={`${styles.FileInput_Clear_Content_Header} ${styles.Mobile}`}
                >
                  <div
                    className={`${styles.FileInput_Clear_Content_Header_Title}`}
                    style={{ flexDirection: article ? 'column' : 'row' }}
                  >
                    {type == 'image' ? (
                      <BaseIcon
                        viewBox="0 0 31 31"
                        icon={ALL_ICONS.IMAGE_UPLOAD}
                        className={`${styles.FileInput_Clear_Content_Icon} ${
                          styles.FileInput_Clear_Content_Icon_Image
                        } ${
                          article ? styles.MarginBottom : styles.MarginRight
                        }`}
                      />
                    ) : (
                      <BaseIcon
                        viewBox="0 0 46 45"
                        icon={ALL_ICONS.FILE_UPLOAD}
                        className={`${styles.FileInput_Clear_Content_Icon} ${
                          styles.FileInput_Clear_Content_Icon_File
                        } ${
                          article ? styles.MarginBottom : styles.MarginRight
                        }`}
                      />
                    )}

                    <span>Browse to upload</span>
                  </div>

                  <div
                    className={styles.FileInput_Clear_Content_Header_Subtitle}
                  >
                    <span>{types}</span>
                  </div>
                </div>
              </div>
            </div>

            {error ? (
              <div className={styles.ErrorText}>
                <span>{error}</span>
              </div>
            ) : (
              ''
            )}
          </>
        )}
      </div>
    </>
  );
};

export default BaseInputFileApp;
