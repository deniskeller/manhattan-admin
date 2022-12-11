import { CellPlugin } from '@react-page/editor';
import React from 'react';
import {MainFooter} from "../../../pages/Main";



export type TJoin = {
  text: string;
  buttonText: string;
}

export const JoinPlugin: CellPlugin<TJoin> = {
  Renderer: ({ data }) => <MainFooter text={data.text} buttonText={data.buttonText} />,
  id: 'joinPlugin',
  title: 'Join us plugin',
  description: 'Join us (text + button)',
  version: 1,
  controls: {
    type: 'autoform',
    columnCount: 1,
    schema: {
      required: ['text', 'buttonText'],
      properties: {
        text: {
          type: 'string',
          default: `Get Started with us, invest into the future.`,

        },
        buttonText: {
          type: 'string',
          default: `Join us`,
        },

      },
    },
  },
};
