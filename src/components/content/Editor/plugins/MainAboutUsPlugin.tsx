import { CellPlugin } from '@react-page/editor';
import React from 'react';
import {MainAboutUs, MainFooter} from "../../../pages/Main";
import {TextEditorField} from "@content/Editor/plugins/fields/TextEditorField";

export type TMainAbout = {
  description: string;
  titleStatistics: string;
  subtitleStatistics: string;
  descriptionStatistics: string;
  parameters: any[];
  benefits: any[];
  benefitsDescription: string;
}

export const MainAboutUsPlugin: CellPlugin<TMainAbout> = {
  Renderer: ({ data }) => <MainAboutUs
                                       description={data.description}
                                       titleStatistics={data.titleStatistics}
                                       subtitleStatistics={data.subtitleStatistics}
                                       parameters={data.parameters}
                                       descriptionStatistics={data.descriptionStatistics}
                                       benefitsDescription={data.benefitsDescription}
                                       benefits={data.benefits}
  />,
  id: 'mainAboutPlugin',
  title: 'Main About Us plugin',
  description: 'Main About Us plugin',
  version: 1,
  controls: {
    type: 'autoform',
    columnCount: 1,
    schema: {
      required: ['description'],
      properties: {
        description: {
          type: 'string',
          default: `The fund was founded by economists, software engineers and creative designers combining the future of technologies and finance.`,
        },
        titleStatistics: {
          type: 'string',
          default: `Key financial highlights of Manhattan VC`,
        },
        subtitleStatistics: {
          type: 'string',
          default: `for the second quarted of 2022`,
        },
        descriptionStatistics: {
          type: 'string',
          default: `We are 16 years in finance and have only started our journey where we invite you`
        },
        parameters: {
          type: 'array',
          items: {
            type: `object`,
            required: ['name', 'value'],
            properties: {
              name: {
                type: 'string',
              },
              value: {
                type: 'string',
              },
            },
          },
          default: [
            {name: "VC Funds Assets", value: "$ 191.1 M"},
            {name: "Capital and Reserves", value: "$ 31.9 M"},
            {name: "Profit", value: "$ 1.6 M"},
            {name: "Operating Income", value: "$ 6.3 M"},
            {name: "Liquidity Coverage Ratio", value: "$ 139 %"},
            {name: "Capital Adequacy ratio", value: "$ 19.36 %"},
          ]
        },
        benefitsDescription: {
          type: 'string',
          default: `<p> Co-invest in startups. Manhattan VC Holding is the Venture Capital firm build to fund its own managed startups. It means that everything that you will see in our portfolio is done by us and managed by our team.</p>
                    <p/><p/>
                    <p> We have created a unique network of trusted professional investors, that are firms only, who support the companies  wich we are managing and developing.</p>
                    <p/><p/>
                    <p>Inside our network, investors can only follow up with each company, see the financial data online, make reports and manage their own capital 24/7/365. The modern approach to finance allows us to build the unique infrastructure for our startups.</p>
`,
          uniforms: {
            component: TextEditorField
          }
        },
        benefits: {
          type: 'array',
          items: {
            type: `object`,
            required: ['name'],
            properties: {
              name: {
                type: 'string',
              },
              description: {
                type: 'string',
              },
            },
          },
          default: [
            {name: "9 FinTech startups", description: "in our portfolio"},
            {name: "16 years", description: "of experience"},
            {name: "$ 500,000,000.00", description: "porfolio valuation by the Big 4"},
            {name: "x20", description: "profit growth per annum"},
          ]
        },

      },
    },
  },
};
