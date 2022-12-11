import React, { useState } from 'react';
import styles from './Portfolio.module.scss';
import { BaseContainer, BaseText, BaseTitle } from '@base/index';
import { Header, PortfolioItem, TextWithAnimation } from '@content/index';
import { portfolioItems } from '@services/index';
import { computedStr } from '@utils/index';

const Portfolio = () => {
  return (
    <>
      <BaseContainer>
        <ul className={styles.PortfolioItems}>
          {portfolioItems?.map((item) => {
            return (
              <li key={item.id}>
                <PortfolioItem
                  id={item.id}
                  name={item.name}
                  title={item.title}
                  founding_date={item.founding_date}
                  founding_place={item.founding_place}
                  tags={item.tags}
                  market_value={item.market_value}
                  company_market_cap={item.company_market_cap}
                  opened_investmet_opportunities={
                    item.opened_investmet_opportunities
                  }
                  investment_amounts={item.investment_amounts}
                />
              </li>
            );
          })}
        </ul>
      </BaseContainer>
    </>
  );
};

export default Portfolio;
