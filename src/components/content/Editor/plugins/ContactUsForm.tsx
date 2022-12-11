import { CellPlugin } from '@react-page/editor';
import React from 'react';
import {MainFooter} from "../../../pages/Main";
import {ContactUsForm} from "../../../pages/ContactUs";



export type TContact = {
  titleForm: string;
  description: string;
}

export const ContactUsFormPlugin: CellPlugin<TContact> = {
  Renderer: ({ data }) => <ContactUsForm titleForm={data.titleForm} description={data.description}/>,
  id: 'contactUsFormPlugin',
  title: 'Contact us plugin',
  description: 'Contact us (text + form)',
  version: 1,
  controls: {
    type: 'autoform',
    columnCount: 1,
    schema: {
      required: ['titleForm', 'description'],
      properties: {
        description: {
          type: 'string',
          default: `Thank you for your interest in our company. We would be happy to assist you as much as we can and provide you with any information you might need.`,
        },
        titleForm: {
          type: 'string',
          default: `Please feel free to feel out the form below and we will contact you as soon as possible`,
        },
      },
    },
  },
};
