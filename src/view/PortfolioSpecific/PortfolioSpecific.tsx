//@ts-nocheck
import React, { useEffect, useRef, useState } from 'react';
import styles from './PortfolioSpecific.module.scss';
import { BaseButton, BaseContainer, BaseIcon, BaseTitle } from '@base/index';
import { Header } from '@content/index';
import { useRouter } from 'next/router';
import { portfolioItems } from '@services/index';
import { ALL_ICONS } from '@constants/icons';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import {PortfolioIcon} from "../../components/pages/Main/OurPorftolio/OurPorftolio";

const images = [
  'https://images.unsplash.com/photo-1549989476-69a92fa57c36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
  'https://images.unsplash.com/photo-1549396535-c11d5c55b9df?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
  'https://images.unsplash.com/photo-1550133730-695473e544be?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
  'https://images.unsplash.com/photo-1550167164-1b67c2be3973?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
  'https://images.unsplash.com/photo-1550338861-b7cfeaf8ffd8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
  'https://images.unsplash.com/photo-1550223640-23097fc71cb2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
  'https://images.unsplash.com/photo-1550353175-a3611868086b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
  'https://images.unsplash.com/photo-1550330039-a54e15ed9d33?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
  'https://images.unsplash.com/photo-1549737328-8b9f3252b927?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
  'https://images.unsplash.com/photo-1549833284-6a7df91c1f65?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
  'https://images.unsplash.com/photo-1549985908-597a09ef0a7c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
  'https://images.unsplash.com/photo-1550064824-8f993041ffd3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
];

const PortfolioSpecific = () => {
  const router = useRouter();
  const { id } = router.query;

  //тащим с базы
  const newItem = (portfolioItems.filter((item) => +item.id === Number(id)))?.[0] || {};
  console.log("newItem",newItem);
 /* company_market_cap: "$ 10,00M"
  founding_date: "Founded in 2021"
  founding_place: "USA & Canada"
  id: 71
  investment_amounts: "$ 4,000,000.00"
  market_value: "$ 4,000,000.00"
  name: "cnda"
  opened_investmet_opportunities: "$ 4,000,000.00"
  tags: (3) ['Finance', 'Information Technologies', 'FinTech']
  title: "Canadian Payment System"*/
  //настройки сладйера
  const settings = {
    className: 'portfolio-specific-slider variable-width',
    dots: true,
    infinite: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
  };
  const settings2 = {
    className: 'portfolio-specific-slider2 variable-width',
    dots: true,
    infinite: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
  };

  const [nav1, setNav1] = useState(null);
  const [nav2, setNav2] = useState(null);
  const slider1 = useRef(null);
  const slider2 = useRef(null);

  useEffect(() => {
    setNav1(slider1.current);
    setNav2(slider2.current);
  }, []);

  const goToBack = () => {
    router.back();
  };

  return (
    <>
      <div className={styles.PortfolioSpecificHeaderOverlay}>
        <BaseContainer>
          <div className={styles.Header}>
            <Header className={styles.StepBack}>
              <span className={styles.StepBack_Btn} onClick={goToBack}>
                <div className={styles.IconBack}>
                  <i className={styles.Up}/>
                </div>
                <BaseTitle>PORTFOLIO</BaseTitle>
              </span>
            </Header>
          </div>
        </BaseContainer>
      </div>

      <BaseContainer>
        <div className={styles.Info}>
          <div className={styles.Parameters}>
            <div className={styles.Parameters_Col}>
              <div className={styles.Parameters_Row}>
                <div className={styles.Parameters_Row_Name}>Company name</div>
                <div className={styles.Parameters_Row_Value}>
                  {newItem?.title}
                </div>
              </div>

              <div className={styles.Parameters_Row}>
                <div className={styles.Parameters_Row_Name}>
                  Company Registration Number
                </div>
                <div className={styles.Parameters_Row_Value}>1234235563534</div>
              </div>

              <div className={styles.Parameters_Row}>
                <div className={styles.Parameters_Row_Name}>
                  Company Business Address
                </div>
                <div className={styles.Parameters_Row_Value}>
                  17 State Street Suite 4000, New York, NY 10004 Level 18, 40
                  Bank Street, Canary Wharf, London, UK, E14 5NR
                </div>
              </div>

              <div className={styles.Parameters_Row}>
                <div className={styles.Parameters_Row_Name}>
                  Company Office Address
                </div>
                <div className={styles.Parameters_Row_Value}>
                  17 State Street Suite 4000, New York, NY 10004 Level 18, 40
                  Bank Street, Canary Wharf, London, UK, E14 5NR
                </div>
              </div>

              <div className={styles.Parameters_Row}>
                <div className={styles.Parameters_Row_Name}>
                  Company Website
                </div>
                <div className={styles.Parameters_Row_Value}>teido.com</div>
              </div>

              <div className={styles.Parameters_Row}>
                <div className={styles.Parameters_Row_Name}>Company Email</div>
                <div className={styles.Parameters_Row_Value}>
                  info@teido.com
                </div>
              </div>
            </div>

            <div className={styles.Parameters_Col}>
              <div className={styles.Parameters_Row}>
                <div className={styles.Parameters_Row_Name}>
                  Company Valuation
                </div>
                <div className={styles.Parameters_Row_Value}>
                  $ 50,000,000.00
                </div>
              </div>

              <div className={styles.Parameters_Row}>
                <div className={styles.Parameters_Row_Name}>
                  Required Investments
                </div>
                <div className={styles.Parameters_Row_Value}>
                  {newItem?.opened_investmet_opportunities}
                </div>
              </div>

              <div className={styles.Parameters_Row}>
                <div className={styles.Parameters_Row_Name}>
                  Company Market Cap
                </div>
                <div className={styles.Parameters_Row_Value}>{newItem?.company_market_cap}</div>
              </div>

              <div className={styles.Parameters_Row}>
                <div className={styles.Parameters_Row_Name}>
                  Available amount of investments
                </div>
                <div className={styles.Parameters_Row_Value}>
                  {newItem?.investment_amounts}
                </div>
              </div>

              <div className={styles.Parameters_Row}>
                <div className={styles.Parameters_Row_Name}>Invested Funds</div>
                <div className={styles.Parameters_Row_Value}>
                  $ 50,000,000.00
                </div>
              </div>

              <div className={styles.Parameters_Row}>
                <div className={styles.Parameters_Row_Name}>ROI</div>
                <div className={styles.Parameters_Row_Value}>99%</div>
              </div>
            </div>
          </div>

          <div className={styles.Description}>
            <div className={styles.Logo}>
              <PortfolioIcon name={newItem?.name} styles={styles}/>

            </div>

            <div className={styles.Title}>
              The future on onboarding & compliance
            </div>

            <div className={styles.FoundedDate}>{newItem?.founding_date}</div>

            <div className={styles.Text}>
              Our mission is to unlock the power of a borderless economy, for
              everyone. Financial services are the backbone of our society, and
              our goal is to make them work for as many individuals and
              businesses as possible. We want to grow the global economy by
              providing everyone with frictionless, accessible financial
              products.
            </div>

            <div className={styles.DownloadFile}>
              <BaseIcon
                viewBox="0 0 27 36"
                icon={ALL_ICONS.PDF_ICON}
                className={styles.DownloadFile_Icon}
              />
              <div className={styles.DownloadFile_Title}>
                Pitch (pdf, 10 Mb)
              </div>
            </div>

            <div className={styles.Tags}>
              {newItem?.tags?.map((item, index) => {
                return (
                  <div className={styles.TagsItem} key={index}>
                    <span>{item}</span>
                  </div>
                );
              })}
            </div>

            <BaseButton title="Invest" className={styles.Button} />
          </div>
        </div>
      </BaseContainer>

      <div className={styles.Slider}>
        <div className={styles.Slider_Navbar}>
          <div
            className={styles.PrevSlide}
            onClick={() => slider1.current.slickPrev()}
          >
            <i className={styles.Arrow}/>
          </div>

          <div
            className={styles.NextSlide}
            onClick={() => slider1.current.slickNext()}
          >
            <i className={styles.Arrow}/>
          </div>
        </div>

        <div className={styles.Slider_Slider}>
          <div className={styles.Slider1}>
            <Slider
              {...settings}
              asNavFor={nav2}
              ref={slider1}
              dots={false}
              arrows={false}
            >
              {images.slice(0, 4).map((image, index) => {
                return (
                  <div key={index}>
                    <div
                      className={styles.SlideImage}
                      style={{ backgroundImage: `url(${image})` }}
                    />
                  </div>
                );
              })}
            </Slider>
          </div>
          <div className={styles.Slider2}>
            <Slider
              {...settings2}
              asNavFor={nav1}
              ref={slider2}
              dots={false}
              arrows={false}
              swipeToSlide={true}
              focusOnSelect={true}
            >
              {images.slice(1, 5).map((image, index) => {
                return (
                  <div key={index}>
                    <div
                      className={styles.SlideImage}
                      style={{ backgroundImage: `url(${image})` }}
                    />
                  </div>
                );
              })}
            </Slider>
          </div>
        </div>
      </div>
    </>
  );
};

export default PortfolioSpecific;
