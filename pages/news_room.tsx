import React, {useState} from 'react';
import { Default } from '@layouts/index';
import { NewsRoom } from '@view/index';
import {BaseContainer, BaseTitle} from "@base/index";
import styles from "@view/NewsRoom/NewsRoom.module.scss";
import {Header} from "@content/index";
import {computedStr} from "@utils/index";
import Editor from "@content/Editor/Editor";
import {NewsHeaderPlugin} from "@content/Editor/plugins/NewsInfoHeaderPlugin";
import {useRouter} from "next/router";
import {
  useCmsStorageControllerGetOneCmsObjectQuery,
  useCmsStorageControllerSaveNewCmsObjectMutation
} from "@store/editor/reducerEnhansed";

const NewsRoomPage = () => {
  const router = useRouter();
  const id = router?.pathname?.slice(1);
  const [saveEditor] = useCmsStorageControllerSaveNewCmsObjectMutation();
  const {data} = useCmsStorageControllerGetOneCmsObjectQuery({id});

  return (
    <Default>
      <>
      <Editor
        onSave={
          (value)=>{
            saveEditor({
              cmsObjectEntity: {
                key: id,
                value
              }
            })
          }
        }
        initialValue={data?.value}
        pluginsList={[NewsHeaderPlugin]}/>
      <NewsRoom />
      </>
    </Default>
  );
};

export default NewsRoomPage;
