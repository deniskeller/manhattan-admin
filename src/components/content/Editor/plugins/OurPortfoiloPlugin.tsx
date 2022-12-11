import { CellPlugin } from '@react-page/editor';
import React from 'react';
import {MainFooter, OurPorftolio} from "../../../pages/Main";



export type TOurPortfolio = {
  titleBlock: string;
  text: string;
}

export const OurPortfolioPlugin: CellPlugin<TOurPortfolio> = {
  Renderer: ({ data }) => <OurPorftolio titleBlock={data.titleBlock} text={data.text}/>,
  id: 'portfolioPlugin',
  title: 'Portfolio plugin',
  description: 'Portfolio plugin',
  version: 1,
  controls: {
    type: 'autoform',
    columnCount: 1,
    schema: {
      required: ['text', 'titleBlock'],
      properties: {
        titleBlock: {
          type: 'string',
          default: `Explore our porftolio`,
        },
       text: {
          type: 'string',
          default: `Please apply now and arrange an interview with our professionals`,
        },

      },
    },
  },
};
