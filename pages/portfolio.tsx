import React from 'react';
import { Default } from '@layouts/index';
import { Portfolio } from '@view/index';
import Editor from "@content/Editor/Editor";
import {PortfolioHeaderPlugin} from "@content/Editor/plugins/PortfolioHeaderPlugin";
import {useRouter} from "next/router";
import {
  useCmsStorageControllerGetOneCmsObjectQuery,
  useCmsStorageControllerSaveNewCmsObjectMutation
} from "@store/editor/reducerEnhansed";

const PortfolioPage = () => {
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
          pluginsList={[PortfolioHeaderPlugin]}/>
        <Portfolio />
      </>
    </Default>
  );
};

export default PortfolioPage;
