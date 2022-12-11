import { CellPlugin } from '@react-page/editor';
import React from 'react';
import {MainFooter} from "../../../pages/Main";
import {NewsRoomHeader} from "@view/NewsRoom/NewsRoomHeader";
import {PortfolioHeader} from "@view/Portfolio/PortfolioHeader";



export type TPortfolioHeader = {
  text1: string;
  text2?: string;
}

export const PortfolioHeaderPlugin: CellPlugin<TPortfolioHeader> = {
  Renderer: ({ data }) => <PortfolioHeader text1={data.text1} text2={data.text2} />,
  id: 'portfolioHeaderPlugin',
  title: 'Portfolio Header plugin',
  description: 'Portfolio Header plugin (description)',
  version: 1,
  controls: {
    type: 'autoform',
    columnCount: 1,
    schema: {
      required: ['text1'],
      properties: {
        text1: {
          type: 'string',
          default: `This is a story, all about how, My life got twisted upside down. So I'd like to tell a story, just sit right there. And I'll tell you how I became the prince of Bel Air.`,
        },
        text2: {
          type: 'string',
          default: `Each startup in our portfolio was designed by our R&D team and managed by its founders and ideologists who trust in its future and\twould like to make significant changes in the FinTech world.`,
        },
      },
    },
  },
};
