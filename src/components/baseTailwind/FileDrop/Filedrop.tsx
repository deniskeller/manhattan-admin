import React, { useEffect } from 'react';
import { useDropArea, useEvent } from 'react-use';
import tw, { css } from 'twin.macro';
import { File, Trash2 } from 'react-feather';
import { Button } from '../Button/Button';
import styles from './style.module.scss';

type TFile = {
  file: TFileSingle;
  url: string;
};
type TFileSingle = {
  name: string;
};
type FileDropProps = {
  onDrop: (files: TFileSingle[] | File[] | []) => void;
  /**
   * example: png, pdf
   */
  types: string[];
  /**
   * Max file size in MB
   */
  maxSize?: number;
  maxFiles?: number;
  files?: TFile[];
  variant?: 'default' | 'error';
  message?: string;
  theme?: 'light' | 'dark';
};
function checkFiles(
  files: File[],
  types: string[],
  maxSize?: number,
  maxFiles?: number
) {
  if (maxFiles && files.length > maxFiles) {
    throw new Error(
      `You can only upload ${maxFiles} ${maxFiles === 1 ? 'file' : 'files'}`
    );
  }

  const filtered = files.filter((file) => {
    const extension = file.name.split('.').pop();

    if (!extension || !types.includes(extension)) {
      throw new Error('Invalid file type');
    }
    if (maxSize && file.size > maxSize * Math.pow(2, 20)) {
      console.log('error maxsize');
      throw new Error(`File size must be less than ${maxSize}MB`);
    }

    return types.includes(extension);
  });

  return filtered;
}

export const FileDrop = function ({
  onDrop,
  maxFiles,
  types,
  maxSize,
  files,
  variant = 'default',
  theme = 'dark',
  message,
}: FileDropProps) {
  const [isDragActive, setIsDragActive] = React.useState(false);
  const [error, setError] = React.useState<string | null>(null);
  const [loading, setLoading] = React.useState(false);
  const [bond] = useDropArea({
    onFiles: async (files) => {
      try {
        const filtered = checkFiles(files, types, maxSize, maxFiles);
        console.log('filtered drop', filtered);
        setLoading(true);
        onDrop(filtered);
      } catch (e: unknown) {
        setLoading(false);
        if (e instanceof Error) {
          setError(e.message);
        }
      }
    },
  });
  useEffect(() => {
    if (files && files?.length > 0) {
      setTimeout(() => {
        setLoading(false);
      }, 500);
    }
  }, [files]);
  useEvent('dragenter', (e) => {
    e.preventDefault();
    setIsDragActive(true);
    setError(null);
  });
  useEvent('drop', (e) => {
    e.preventDefault();
    setIsDragActive(false);
  });
  useEffect(() => {
    if (error) {
      setTimeout(() => {
        setError(null);
      }, 3000);
    }
  }, [error]);
  const inputRef = React.useRef<HTMLInputElement>(null);

  return (
    <div>
      {files?.length === 0 && (
        <div
          {...bond}
          css={[
            tw`border border-dashed text-base-light-500 flex flex-col items-center gap-2 rounded-lg py-10 px-4 md:px-14`,
            css`
              border-color: rgba(255, 255, 255, 0.5);
            `,
            tw`h-48`,
            isDragActive &&
              css`
                border-color: rgba(255, 255, 255, 0.9);
              `,
            variant === 'error' && tw`border-red-light-500`,
            files && files.length === 0 && tw`cursor-pointer`,
          ]}
          onClick={() => {
            if (files?.length === 0) {
              inputRef.current?.click();
            }
          }}
        >
          {loading ? (
            <div style={{ color: 'white' }}>{loading && 'loading...'}</div>
          ) : (
            <div className={styles.innerContent}>
              <div className={styles.copyRow}>
                <svg
                  width="46"
                  height="45"
                  viewBox="0 0 46 45"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M15.2285 13.125V28.125C15.2285 30.1961 16.9074 31.875 18.9785 31.875H30.2285M15.2285 13.125V9.375C15.2285 7.30393 16.9074 5.625 18.9785 5.625H27.5769C28.0741 5.625 28.5511 5.82254 28.9027 6.17417L37.1793 14.4508C37.531 14.8025 37.7285 15.2794 37.7285 15.7767V28.125C37.7285 30.1961 36.0496 31.875 33.9785 31.875H30.2285M15.2285 13.125H9.72852C8.62395 13.125 7.72852 14.0204 7.72852 15.125V35.625C7.72852 37.6961 9.40745 39.375 11.4785 39.375H28.2285C29.3331 39.375 30.2285 38.4796 30.2285 37.375V31.875"
                    stroke="white"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                Drag file here to upload or browse
              </div>
              <div className={styles.extensionsRow}>
                .odt, .doc, docx, .pdf, .jpg, jpeg, .png, .ppt, .odp, .pptx{' '}
                <br /> (max 3MB)
              </div>
            </div>
          )}

          <input
            type="file"
            ref={inputRef}
            hidden
            multiple
            onChange={(e) => {
              if (e.target.files) {
                try {
                  const filtered = checkFiles(
                    Array.from(e.target.files),
                    types,
                    maxSize,
                    maxFiles
                  );
                  setLoading(true);
                  onDrop(filtered);
                  // clear input
                  e.target.value = '';
                } catch (e: unknown) {
                  setLoading(false);
                  if (e instanceof Error) {
                    setError(e.message);
                  }
                }
              }
            }}
          />
        </div>
      )}
      <div css={tw`min-h-full justify-center flex flex-col gap-2`}>
        {(error || (variant === 'error' && message && message?.length > 0)) && (
          <div css={tw`text-red-light-450`}>
            {message && message?.length > 0 ? message : error}
          </div>
        )}
      </div>
      {!error && files && files.length > 0 && (
        <div style={{ marginTop: '10px' }}>
          {files.map((file, key) => {
            return (
              <div
                key={key}
                className={`${styles.FileWrap} ${styles['FileWrap_' + theme]}`}
              >
                <div className={styles.FileName}>{file?.file?.name}</div>
                <div
                  css={tw`hover:text-red-light-450 text-base-light-10 cursor-pointer w-5`}
                  onClick={() => {
                    const leftFiles = files.filter(
                      (f) => f?.file?.name !== file?.file?.name
                    )?.[0]?.file;
                    onDrop(leftFiles ? [leftFiles] : []);
                    //onDrop([files.filter((f) => f?.file?.name !== file?.file?.name)?.[0]?.file]);
                  }}
                >
                  <Trash2 width={14} height={14} />
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};
