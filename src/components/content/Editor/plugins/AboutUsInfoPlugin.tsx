import { CellPlugin } from '@react-page/editor';
import React from 'react';
import {MainFooter} from "../../../pages/Main";
import {AboutUsInfo} from "../../../pages/AboutUs";
import {TextEditorField} from "@content/Editor/plugins/fields/TextEditorField";



export type TAboutInfo = {
  text1: string;
  text2: string;
  subtitle: string;
  bottomText: string;

}

export const AboutInfoPlugin: CellPlugin<TAboutInfo> = {
  Renderer: ({ data }) => <AboutUsInfo
                                       text1={data.text1}
                                       text2={data.text2}
                                       subtitle={data.subtitle}
                                       bottomText={data.bottomText}
  />,
  id: 'aboutInfoPlugin',
  title: 'About us plugin',
  description: 'About us',
  version: 1,
  controls: {
    type: 'autoform',
    columnCount: 1,
    schema: {
      required: ['text1', 'text2', 'subtitle', 'bottomText'],
      properties: {
        text1: {
          type: 'string',
           default: `Manhattan VC Holding LLC is a Venture Capital firm established	recently in Manhattan, New York, by its founders with the only goal, to expand the growth of the startups under its management and support.`,
        },
        text2: {
          type: 'string',
          default: `We have many years of professional experience, allowing us to offer to the market completely new opportunities and build	non-ordinary companies that would change the world.`,
        },
        subtitle: {
          type: 'string',
          default: `We invest in the following business areas of the business that are related to FinTech`,
        },
        bottomText: {
          type: 'string',
          uniforms:{
            component: TextEditorField
          },
          default: `<p>The fund&apos;s core values of our fund are constant development and vision that are unexpected by everyone but allow us to reach the stars.</p><p>Our founders were mentioned in Forbes and were the VPs of many well-known companies, and such organisations recognised their projects, J.P.Morgan in NYC and MasterCard International.</p>`,
        },
      },
    },
  },
};
