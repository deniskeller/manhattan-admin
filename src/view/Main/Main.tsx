import React from 'react';
import Editor from "@content/Editor/Editor";
import {JoinPlugin} from "@content/Editor/plugins/JoinUs";
import {MainHeaderPlugin} from "@content/Editor/plugins/MainHeader";
import {MainAboutUsPlugin} from "@content/Editor/plugins/MainAboutUsPlugin";
import {OurPortfolioPlugin} from "@content/Editor/plugins/OurPortfoiloPlugin";
import {
  useCmsStorageControllerSaveNewCmsObjectMutation,
  useCmsStorageControllerGetOneCmsObjectQuery
} from "@store/editor/reducerEnhansed";

const Main = () => {
  const id = "index";
  const [saveEditor] = useCmsStorageControllerSaveNewCmsObjectMutation();
  const {data} = useCmsStorageControllerGetOneCmsObjectQuery({id});
  return (
    <>
      {/*<Header subtitle={""} description={""} mainText={""} />*/}
      {/*<MainAboutUs />*/}
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
        pluginsList={[MainHeaderPlugin, MainAboutUsPlugin, OurPortfolioPlugin, JoinPlugin ]}/>
      {/*<OurPorftolio />*/}
      {/*<MainFooter text={"Get Started with us, invest into the future."} buttonText={"Join Us"}/>*/}

    </>
  );
};

export default Main;

//[JoinPlugin, MainHeaderPlugin, ContactUsFormPlugin, ContactUsMapPlugin ,
//         AboutInfoPlugin,  NewsHeaderPlugin, PortfolioHeaderPlugin, MainAboutUsPlugin, OurPortfolioPlugin ]
