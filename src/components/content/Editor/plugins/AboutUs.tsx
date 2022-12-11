import { CellPlugin } from '@react-page/editor';
import React from 'react';
import {TextEditorField} from "@content/Editor/plugins/fields/TextEditorField";
import {DocumentAboutUs} from "@content/index";

export type TAboutUs = {
  mainText: string;
  titleBlock: string;
}

export const AboutUsPlugin: CellPlugin<TAboutUs> = {
  Renderer: ({ data }) => <DocumentAboutUs mainText={data.mainText} titleBlock={data.titleBlock}/>,
  id: 'aboutUsPlugin',
  title: 'About Us plugin',
  description: 'Who we are and how to contact us',
  version: 1,
  controls: {
    type: 'autoform',
    columnCount: 1,
    schema: {
      required: ['titleBlock','mainText'],
      properties: {
        titleBlock: {
          type: 'string',
          default: `Who we are and how to contact us`,
        },
        mainText: {
          type: 'string',
          default: `<p><p>
<a href="https://www.manisland.com">https://www.manisland.com</a>,
<a href="https://dashboard.manisland.com">https://dashboard.manisland.com</a>
</p>
<p>
(each a “site”) are sites operated by Manhattan VC Holding LLC ("we"). We are a limited liability company registered in the state of New York, United States of American, EIN 35-2753010 and have our registered office at 1330 6th Avenue, New York, Manhattan, 10019, United States of America.To contact us, please email info@manisland.com.
</p>
<p>
By using our site you accept these terms
</p>
<p>
By using our site, you confirm that you accept these terms of use and that you agree to comply with them. If you do not agree to these terms, you must not use our site. We recommend that you print a copy of these terms for future reference.
</p>
</p>`,
          uniforms: {
            component: TextEditorField
          }
        },
      },
    },
  },
};
