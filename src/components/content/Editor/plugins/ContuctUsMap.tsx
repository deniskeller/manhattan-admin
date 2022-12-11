import { CellPlugin } from '@react-page/editor';
import React from 'react';
import {MainFooter} from "../../../pages/Main";
import {ContactUsForm, ContactUsMap} from "../../../pages/ContactUs";

export type TContactMap = {
  titleForm: string;
  subtitle: string;
  address: string;
  workingHours: string;
  lat: number;
  lng: number;
}

export const ContactUsMapPlugin: CellPlugin<TContactMap> = {
  Renderer: ({ data }) => (
    <ContactUsMap
      titleForm={data.titleForm}
      subtitle={data.subtitle}
      address={data.address}
      workingHours={data.workingHours}
      lat={data.lat}
      lng={data.lng}
    />),
  id: 'contactUsMapPlugin',
  title: 'Contact us Map plugin',
  description: 'Contact us (map, location)',
  version: 1,
  controls: {
    type: 'autoform',
    columnCount: 1,
    schema: {
      required: ['titleForm', 'subtitle', 'address', 'workingHours', 'lat', 'lng'],
      properties: {
        titleForm: {
          type: 'string',
          default: `Manhattan VC Holding LLC`,
        },
        subtitle: {
          type: 'string',
          default: `EIN 35-2753010`,
        },
        address: {
          type: 'string',
          default: `1330 6th Avenue, New York, Manhattan, 10019, United States of America`,
        },
        workingHours: {
          type: 'string',
          default: `9:00 AM - 16:00 PM by NY time (GMT-4)`,
        },
        lat: {
          type: 'number',
          default: 40.76210561590526,
        },
        lng: {
          type: 'number',
          default: -73.97843847116481,
        },
      },
    },
  },
};
