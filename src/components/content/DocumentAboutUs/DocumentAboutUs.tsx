import { BaseIcon } from '@base/index';
import { ALL_ICONS } from '@constants/icons';
import React from 'react';
import styles from './DocumentAboutUs.module.scss';
import {TAboutUs} from "@content/Editor/plugins/AboutUs";

const DocumentAboutUs: React.FC<TAboutUs> = ({titleBlock, mainText}) => {
  return (
    <>
      <div className={styles.Content_AboutUs}>
        <BaseIcon
          viewBox="0 0 91 91"
          icon={ALL_ICONS.GEAR_COLOR_ICON}
          className={styles.AboutUs_Icon}
        />

        <div className={styles.AboutUs_Description}>
          <div className={styles.AboutUs_Title}>
            {titleBlock}
            {/*Who we are and how to contact us*/}
          </div>

          <div className={styles.AboutUs_Text} dangerouslySetInnerHTML={{__html: mainText}}/>
           {/* <p>
              <a href="https://www.manisland.com">https://www.manisland.com</a>
              , <br />
              <a href="https://dashboard.manisland.com">
                https://dashboard.manisland.com
              </a>{' '}
              <br />
              (each a “site”) are sites operated by Manhattan VC Holding LLC
              (&quot;we&quot;). We are a limited liability company registered in
              the state of New York, United States of American, EIN 35-2753010
              and have our registered office at 1330 6th Avenue, New York,
              Manhattan, 10019, United States of America.To contact us, please
              email info@manisland.com.
            </p>
            <br />
            <p>By using our site you accept these terms</p>
            <br />
            <p>
              By using our site, you confirm that you accept these terms of use
              and that you agree to comply with them. If you do not agree to
              these terms, you must not use our site. We recommend that you
              print a copy of these terms for future reference.
            </p>
          </div>*/}
        </div>
      </div>
    </>
  );
};

export default DocumentAboutUs;
