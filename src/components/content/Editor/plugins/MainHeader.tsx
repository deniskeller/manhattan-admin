import { CellPlugin } from '@react-page/editor';
import React from 'react';
import {Header} from "../../../pages/Main";
import {TextEditorField} from "@content/Editor/plugins/fields/TextEditorField";

export type TMainHeader = {
  subtitle: string;
  description: string;
}

export const MainHeaderPlugin: CellPlugin<TMainHeader> = {
  Renderer: ({ data }) => <Header subtitle={data.subtitle}
                                  description={data.description}
                                  />,
  id: 'mainHeaderPlugin',
  title: 'Main Header plugin',
  description: 'Main page header plugin',
  version: 1,
  controls: {
    type: 'autoform',
    columnCount: 1,
    schema: {
      required: ['description', 'subtitle'],
      properties: {
        /*mainText: {
          type: 'string',
          default: `<p><p>WE ARE BUILDING THE FUTURE OF THE FINANCIAL WORLD</p><p>AND CREATING REAL SPACE ROCKET COMPANIES</p></p>`,
          uniforms: {
            component: TextEditorField
          }
        },*/
        description: {
          type: 'string',
          default: `<p><p>Invest in Business</p><p>with Manhattan VC Holding.</p><p>As Seen in Forbes with our founders</p></p>`,
          uniforms: {
            component: TextEditorField
          }
        },
        subtitle: {
          type: 'string',
          default: `Welcome to the future of FinTech In Manhattan VC Holding`,
        },
      },
    },
  },
};
