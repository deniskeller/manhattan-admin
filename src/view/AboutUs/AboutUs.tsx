import React from 'react';
import { useRouter } from 'next/router'
import {
  AboutUsForm,
  AboutUsHeader,
  AboutUsInfo,
} from 'components/pages/AboutUs';
import Editor from "@content/Editor/Editor";
import {AboutInfoPlugin} from "@content/Editor/plugins/AboutUsInfoPlugin";
import {
  useCmsStorageControllerGetOneCmsObjectQuery,
  useCmsStorageControllerSaveNewCmsObjectMutation
} from "@store/editor/reducerEnhansed";

const AboutUs = () => {

  const router = useRouter();
  const id = router?.pathname?.slice(1);
  const [saveEditor] = useCmsStorageControllerSaveNewCmsObjectMutation();
  const {data} = useCmsStorageControllerGetOneCmsObjectQuery({id});
  return (
    <>
      <AboutUsHeader />
      {/*<AboutUsInfo />*/}
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
        pluginsList={[AboutInfoPlugin]}/>
      <AboutUsForm />
    </>
  );
};

export default AboutUs;
