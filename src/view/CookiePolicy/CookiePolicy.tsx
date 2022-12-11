/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import styles from './CookiePolicy.module.scss';
import { Header } from '@content/index';
import { BaseContainer, BaseTitle } from '@base/index';
import Image from 'next/image';
import Editor from "@content/Editor/Editor";
import {AboutUsPlugin} from "@content/Editor/plugins/AboutUs";
import {
  useCmsStorageControllerGetOneCmsObjectQuery,
  useCmsStorageControllerSaveNewCmsObjectMutation
} from "@store/editor/reducerEnhansed";

const CookiePolicy = () => {
  const id = "documentaboutus";
  const [saveEditor] = useCmsStorageControllerSaveNewCmsObjectMutation();
  const {data} = useCmsStorageControllerGetOneCmsObjectQuery({id});
  return (
    <>
      <div className={styles.HeaderOverlay}>
        <BaseContainer>
          <div className={styles.Header}>
            <Header>
              <BaseTitle>Cookie Policy</BaseTitle>
            </Header>
            <div className={styles.Header_Image}>
              <div className={styles.Img}>
                <Image
                  src="/images/image/gear_bg.png"
                  layout="fill"
                  alt={'Image'}
                  priority
                />
              </div>
            </div>
          </div>
        </BaseContainer>
      </div>

      <div className={styles.Wrapper}>
        <BaseContainer>
          <div className={styles.Content}>
            {/*<DocumentAboutUs />*/}
            <div>
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
                pluginsList={[AboutUsPlugin]}/>
            </div>

            <div className={styles.Content_Terms}>
              <div className={styles.Terms_Item}>
                <div className={styles.Terms_Item_Description}>
                  Last updated: 13/05/2022
                </div>

                <div className={styles.Terms_Item_Description}>
                  Our website uses cookies to distinguish you from other users
                  of our website. This helps us to provide you with a good
                  experience when you browse our website and also allows us to
                  improve our site. A cookie is a small file of letters and
                  numbers that we store on your browser or the hard drive of
                  your computer, if you agree. Cookies contain information that
                  is transferred to your computer&apos;s hard drive. We use the
                  following cookies:
                </div>

                <ul className={styles.Terms_Item_DescriptionList}>
                  <li className={styles.List_Item}>
                    Strictly necessary cookies. These are cookies that are
                    required for the operation of our website. They include, for
                    example, cookies that enable you to log into secure areas of
                    our website, use a shopping cart or use e-billing services.{' '}
                  </li>
                  <li className={styles.List_Item}>
                    Analytical or performance cookies. These allow us to
                    recognise and count the number of visitors and see how
                    visitors move around our website when they use it. This
                    helps us improve the way our website works, for example, by
                    ensuring that users find what they are looking for easily.
                  </li>
                  <li className={styles.List_Item}>
                    Functionality cookies. These are used to recognise you when
                    you return to our website. This enables us to personalise
                    our content for you, greet you by name and remember your
                    preferences (for example, your choice of language or
                    region).
                  </li>
                  <li className={styles.List_Item}>
                    Targeting cookies. These cookies record your visit to our
                    website, the pages you have visited and the links you have
                    followed. We will use this information to make our website,
                    and the advertising displayed t more relevant to your
                    interests. We may also share this information with third
                    parties for this purpose. You can find more information
                    about the individual cookies we use and the purposes for
                    which we use them in the table below:
                  </li>
                </ul>
              </div>

              <div className="Table_Wrapper">
                <div className="Table CookiePolicyTable">
                  <div className="Table__head">
                    <span>Cookie</span>
                  </div>
                  <div className="Table__col">
                    <span>_ga</span>
                  </div>
                  <div className="Table__col">
                    <span>_gid</span>
                  </div>
                  <div className="Table__col">
                    <span>_gat_gtag</span>
                  </div>

                  <div className="Table__head">
                    <span>Domain</span>
                  </div>
                  <div className="Table__col">
                    <span></span>
                  </div>
                  <div className="Table__col">
                    <span></span>
                  </div>
                  <div className="Table__col">
                    <span></span>
                  </div>

                  <div className="Table__head">
                    <span>Type</span>
                  </div>
                  <div className="Table__col">
                    <span>Analytics</span>
                  </div>
                  <div className="Table__col">
                    <span>Analytics</span>
                  </div>
                  <div className="Table__col">
                    <span>Analytics</span>
                  </div>

                  <div className="Table__head">
                    <span>Description</span>
                  </div>
                  <div className="Table__col">
                    <span>
                      This cookie is installed by Google Analytics. The cookie
                      is used to calculate visitor, session, and campaign data
                      and keep track of site usage for the site's analytics
                      report. The cookies store of information anonymously and
                      assign a randomly generated number to identify unique
                      visitors
                    </span>
                  </div>
                  <div className="Table__col">
                    <span>
                      This cookie is installed by Google Analytics. The cookie
                      is used to store information of how visitors use a website
                      and helps in creating an analytics report of how the
                      website is doing. The data collected including the number
                      visitors, the source where they have come from, and the
                      pages visted in an anonymous form.
                    </span>
                  </div>
                  <div className="Table__col">
                    <span>
                      This cookie is installed by Google Analytics. The cookie
                      is used to store information of how visitors use a website
                      and helps in creating an analytics report of how the
                      website is doing. The data collected including the number
                      visitors, the source where they have come from, and the
                      pages visted in an anonymous form.
                    </span>
                  </div>

                  <div className="Table__head">
                    <span>Duration</span>
                  </div>
                  <div className="Table__col">
                    <span>2 years'</span>
                  </div>
                  <div className="Table__col">
                    <span>1 day</span>
                  </div>
                  <div className="Table__col">
                    <span>1 minute</span>
                  </div>
                </div>
              </div>

              <div className={styles.Terms_Item}>
                <div className={styles.Terms_Item_Description}>
                  We do not share the information collected by the cookies with
                  any third parties. You can block cookies by activating the
                  setting on your browser that allows you to refuse the setting
                  of all or some cookies. However, if you use your browser
                  settings to block all cookies (including essential cookies)
                  you may not be able to access all or parts of our website.
                  Except for essential cookies, all cookies will expire after
                  such duration stipulated in the above table
                </div>
              </div>
            </div>
          </div>
        </BaseContainer>
      </div>
    </>
  );
};

export default CookiePolicy;
