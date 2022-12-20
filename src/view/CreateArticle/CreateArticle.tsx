import { BaseAlert, BaseButtonApp, BaseIcon, BaseTitle } from '@base/index';
import React, { useState } from 'react';
import s from './CreateArticle.module.scss';
import { useRouter } from 'next/router';
import { Input } from '@tw/components/Input';
import { ALL_ICONS } from '@constants/icons';
import { FileDrop } from '@tw/components/index';
import { useAppDispatch } from '@hooks/redux';
import { modalSlice } from '@store/modals/reducer';

interface IValueForm {
  title: string;
  author: string;
  files: File[];
}

const CreateArticle = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const { setPopup } = modalSlice.actions;

  const [value, setValue] = React.useState<IValueForm>({
    title: '',
    author: '',
    files: [],
  });
  const setNewValue = (val: string | File[], key: string) => {
    setValue((prev) => ({ ...prev, [key]: val }));
  };
  return (
    <>
      <div className={s.Articles}>
        <div className={s.Articles_Header}>
          <BaseTitle type="app" className={s.Articles_Header_Title}>
            Creating a publication
          </BaseTitle>

          <div className={s.Articles_Header_Actions}>
            <BaseButtonApp
              title="Cancel"
              type="secondary"
              size="small"
              className={s.Articles_Header_Cancel}
              onClick={() => {
                alert('Cancel');
              }}
            />

            <div
              className={s.Articles_Header_SaveDraft}
              onClick={() => {
                dispatch(setPopup({ popup: 'SaveArticlePopup' }));
              }}
            >
              Save draft
            </div>

            <BaseButtonApp
              title="Publish"
              type="primary"
              size="small"
              className={s.Articles_Header_Publish}
              onClick={() => {
                dispatch(setPopup({ popup: 'PublishArticlePopup' }));
              }}
            />
          </div>
        </div>

        <div className={s.Articles_Options}>
          <div className={s.Articles_Options_Details}>
            <div className={s.Articles_Options_Details_Header}>
              <span>Details</span>
            </div>

            <div className={s.Articles_Options_Details_InputTitle}>
              <Input
                label="Article title"
                placeholder="Article title"
                required
                value={value.title}
                //
                //поправить инпуты
                //
                // onChange={(val: string) => setNewValue(val, 'title')}
              />
            </div>

            <div className={s.Articles_Options_Details_InputAuthor}>
              <Input
                label="Article author"
                placeholder="Article author"
                required
                value={value.author}
                //
                //поправить инпуты
                //
                // onChange={(val: string) => setNewValue(val, 'author')}
              />
            </div>

            <div className={s.Articles_Options_Details_Tooltip}>
              <BaseIcon
                icon={ALL_ICONS.TOOLTIP}
                viewBox="0 0 20 20"
                className={s.Articles_Options_Details_Tooltip_Icon}
              />

              <p>
                If you publish the article, it will be seen by all site visitors
                with current publication date Also publication date will be
                updated, if you republish it from Archive
              </p>
            </div>
          </div>

          <div className={s.Articles_Options_Image}>
            <div className={s.Articles_Options_Image_Header}>Cover image</div>
            <div className={s.Articles_Options_Image_AddImage}>
              {value.files.length == 0 ? (
                <FileDrop
                  onDrop={(files) => {
                    // handleChange(files, 'filesBankDetails');
                    // setNewValue(files, 'files');
                  }}
                  files={[]}
                  // files={value.files}
                  types={['jpg', 'png', 'jpeg']}
                  maxFiles={1}
                  maxSize={3}
                  // variant={true ? 'error' : 'default'}
                  // message={'spme text'}
                />
              ) : (
                <>
                  <div
                    className={s.Articles_Options_Image_AddImage_Image}
                    style={{
                      backgroundImage: 'url(/images/image/main_header_bg.jpg)',
                    }}
                  >
                    <div
                      className={
                        s.Articles_Options_Image_AddImage_Image_Actions
                      }
                    >
                      <div
                        className={
                          s.Articles_Options_Image_AddImage_Image_Actions_Button
                        }
                        onClick={() =>
                          dispatch(setPopup({ popup: 'EditPhotoArticlePopup' }))
                        }
                      >
                        <BaseIcon
                          icon={ALL_ICONS.EDIT}
                          viewBox="0 0 18 18"
                          className={s.Edit}
                        />
                      </div>
                      <div
                        className={
                          s.Articles_Options_Image_AddImage_Image_Actions_Button
                        }
                      >
                        <BaseIcon
                          icon={ALL_ICONS.DELETE}
                          viewBox="0 0 20 20"
                          className={s.Delete}
                        />
                      </div>
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>

        <div className={s.Articles_Wysiwyg}>
          <div className={s.Articles_Wysiwyg_Header}>
            <span>Article text</span>
          </div>

          <div className={s.Articles_Wysiwyg_Field}></div>
        </div>

        <div
          className={`${s.Articles_Header_Actions} ${s.Articles_Header_Actions_Mobile}`}
        >
          <BaseButtonApp
            title="Cancel"
            type="secondary"
            size="small"
            className={s.Articles_Header_Cancel}
          />

          <div
            className={s.Articles_Header_SaveDraft}
            onClick={() => {
              dispatch(setPopup({ popup: 'SaveArticlePopup' }));
            }}
          >
            Save draft
          </div>

          <BaseButtonApp
            title="Publish"
            type="primary"
            size="small"
            className={s.Articles_Header_Publish}
            onClick={() => {
              dispatch(setPopup({ popup: 'PublishArticlePopup' }));
            }}
          />
        </div>
      </div>

      <BaseAlert />
    </>
  );
};

export default CreateArticle;
