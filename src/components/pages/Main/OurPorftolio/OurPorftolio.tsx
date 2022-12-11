//@ts-nocheck
import { BaseButton, BaseContainer } from '@base/index';
import React, { useEffect, useRef, useState } from 'react';
import styles from './OurPorftolio.module.scss';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import { portfolioItems } from '@services/index';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import {TOurPortfolio} from "@content/Editor/plugins/OurPortfoiloPlugin";
import {
  AqatinIcon, BlvcIcon, CndaIcon, CospayIcon,
  EsoqueIcon,
  HalalCashIcon,
  PridePayIcon,
  SpacefexIcon,
  TeidoIcon, TyncofexIcon
} from "../../../../assets/portfolio/icons";

const OurPorftolio: React.FC<TOurPortfolio> = ({titleBlock, text}) => {
  //настройки сладйера
  const settings = {
    className: 'our-portfolio-slider variable-width',
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
  };
  const settings2 = {
    className: 'our-portfolio-slider2 variable-width',
    dots: false,
    infinite: true,
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

  const sliderLogos = portfolioItems?.slice(1).concat(portfolioItems?.slice(0,1));
  console.log("sliderLogos", sliderLogos);
  console.log("portfolioItems", portfolioItems);

  return (
    <>
      <div className={styles.OurPorftolio}>
        <BaseContainer>
          <div className={styles.OurPorftolio_Header}>
            <div className={styles.Title}>
              <h1>
                {titleBlock}
                {/*Explore our porftolio*/}</h1>
            </div>

            <div className={styles.Subtitle}>
              <p>
                {text}
               {/* Please apply now and arrange an interview with our professionals*/}
              </p>
            </div>

            <AnimationOnScroll animateIn="animate__fadeInUp" animateOnce>
              <BaseButton
                className={styles.Button}
                title="apply now"
                type="empty"
              />
            </AnimationOnScroll>
          </div>
        </BaseContainer>

        <div className={styles.OurPorftolio_SliderContent}>
          {/* <div className={styles.ActiveSlideBg}></div>

          <div className={styles.NextSlideBg}></div> */}

          <div className={styles.SlideContainer}>
            <div className={styles.Slider}>
              {/* навбар */}
              <div className={styles.Navbar}>
                <div
                  className={styles.Navbar_PrevSlide}
                  onClick={() => slider1.current.slickPrev()}
                >
                  <i className={styles.Arrow}></i>
                </div>

                <div
                  className={styles.Navbar_NextSlide}
                  onClick={() => slider1.current.slickNext()}
                >
                  <i className={styles.Arrow}></i>
                </div>
              </div>

              {/* слайдер */}

              {/* слайдер 1 */}
              <div className={styles.Slider1}>
                <Slider
                  {...settings}
                  asNavFor={nav2}
                  ref={slider1}
                  dots={false}
                  arrows={false}
                >
                  {portfolioItems.map((item, index) => {
                    const name = item.name;
                    return (
                      <div key={index}>
                        <div className={styles.ActiveSlide}>
                          <div className={styles.ActiveSlide_Header}>
                            <div className={styles.ActiveSlide_Header_Icon}>

                              <PortfolioIcon styles={styles} name={name}/>

                            </div>

                            <div className={styles.ActiveSlide_Header_Founded}>
                              {item.founding_date}
                            </div>
                          </div>

                          <div className={styles.ActiveSlide_Info}>
                            <div className={styles.WhoAreWe}>
                              <span>{item.title}</span>
                            </div>

                            <div className={styles.FromCountry}>
                              Countries: {item.founding_place}
                            </div>
                          </div>

                          <div className={styles.ActiveSlide_Parameters}>
                            <div className={styles.Values}>
                              <div className={styles.Values_Item}>
                                <div className={styles.ItemName}>
                                  <span>Market value</span>
                                </div>
                                <div className={styles.ItemValue}>
                                  {item.market_value}
                                </div>
                              </div>

                              <div className={styles.Values_Item}>
                                <div className={styles.ItemName}>
                                  <span>Company Market Cap</span>
                                </div>
                                <div className={styles.ItemValue}>
                                  {item.company_market_cap}
                                </div>
                              </div>
                            </div>

                            <div className={styles.Tags}>
                              {item.tags?.map((item, index) => {
                                return (
                                  <div className={styles.TagsItem} key={index}>
                                    <span>{item}</span>
                                  </div>
                                );
                              })}
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </Slider>
              </div>
              {/* слайдер 1 */}

              {/* слайдер 2 */}
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
                  {sliderLogos?.map((item, index) => {
                    const name = item.name;
                    return (
                      <div key={index}>
                        <div className={styles.NextSlide}>
                          <div className={styles.NextSlide_Icon}>
                            <PortfolioIcon styles={styles} name={name}/>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </Slider>
              </div>
              {/* слайдер 2 */}
            </div>
          </div>
        </div>

        <div className={styles.OurPorftolio_Gradient}></div>
      </div>
    </>
  );
};

export default OurPorftolio;

type PropsIcon = {
  name: string;
  styles: any;
}
export const PortfolioIcon = ({name, styles}: PropsIcon)=>{
  {return name == 'spacefex' ? (
    <SpacefexIcon className={styles.spacefex}/>
  ) : name == 'teido' ? (
    <TeidoIcon className={styles.teido}/>
  ) : name == 'aqatin' ? (
    <AqatinIcon className={styles.aqatin}/>
  ) : name == 'esoque' ? (
    <EsoqueIcon className={styles.esoque}/>
  ) : name == 'halalcash' ? (
    <div className={styles.halalcash}>
      <HalalCashIcon/>
    </div>
  ) : name == 'pridepay' ? (
    <div className={styles.pridepay}>
      <PridePayIcon/>
    </div>
  ) : name == 'blvc' ? (
    <div className={styles.blvc}>
      <BlvcIcon/>
    </div>
  ) : name == 'cnda' ? (
    <CndaIcon className={styles.cnda}/>
  ) : name == 'tyncofex' ? (
    <TyncofexIcon className={styles.tyncofex}/>
  ) : name == 'cospay' ? (
    <div className={styles.cospay}>
      <CospayIcon />
    </div>
  ) : null}
}