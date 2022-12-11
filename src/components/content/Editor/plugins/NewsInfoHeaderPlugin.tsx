import { CellPlugin } from '@react-page/editor';
import React from 'react';
import {MainFooter} from "../../../pages/Main";
import {NewsRoomHeader} from "@view/NewsRoom/NewsRoomHeader";



export type TNewsInfoHeader = {
  text: string;
}

export const NewsHeaderPlugin: CellPlugin<TNewsInfoHeader> = {
  Renderer: ({ data }) => <NewsRoomHeader text={data.text} />,
  id: 'newsHeaderPlugin',
  title: 'News Info Header plugin',
  description: 'News Info Header plugin (description)',
  version: 1,
  controls: {
    type: 'autoform',
    columnCount: 1,
    schema: {
      required: ['text'],
      properties: {
        text: {
          type: 'string',
          default: `This is a story, all about how, My life got twisted upside down. So I'd like to tell a story, just sit right there. And I'll tell you how I became the prince of Bel Air.`,

        },
      },
    },
  },
};
