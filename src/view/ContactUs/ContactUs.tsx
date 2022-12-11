import {
  ContactUsForm,
  ContactUsHeader,
  ContactUsMap,
} from 'components/pages/ContactUs';
import React from 'react';
import Editor from "@content/Editor/Editor";
import {ContactUsMapPlugin} from "@content/Editor/plugins/ContuctUsMap";
import {ContactUsFormPlugin} from "@content/Editor/plugins/ContactUsForm";
import {useRouter} from "next/router";
import {
  useCmsStorageControllerGetOneCmsObjectQuery,
  useCmsStorageControllerSaveNewCmsObjectMutation
} from "@store/editor/reducerEnhansed";

const ContactUs = () => {
  const router = useRouter();
  const id = router?.pathname?.slice(1);
  const [saveEditor] = useCmsStorageControllerSaveNewCmsObjectMutation();
  const {data} = useCmsStorageControllerGetOneCmsObjectQuery({id});
  return (
    <>
      <ContactUsHeader />
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
        pluginsList={[ContactUsFormPlugin, ContactUsMapPlugin]}/>
      {/*<ContactUsForm description={""} titleForm={""}/>*/}
      {/*<ContactUsMap />*/}
    </>
  );
};

export default ContactUs;
