import React from 'react';
import styles from './PortfolioItem.module.scss';
import { BaseButton } from '@base/index';
import { useRouter } from 'next/router';
import Image from 'next/image';

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

//для графика
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import {
  AqatinIcon,
  EsoqueIcon,
  HalalCashIcon,
  PridePayIcon,
  SpacefexIcon,
  TeidoIcon
} from "../../../assets/portfolio/icons";
import {PortfolioIcon} from "../../pages/Main/OurPorftolio/OurPorftolio";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

//для мобильного слайдера
const responsive = {
  mobile: {
    breakpoint: { max: 767, min: 0 },
    items: 1,
  },
};

interface Props {
  id: number;
  name: string;
  title: string;
  founding_date: string;
  founding_place: string;
  tags: string[];
  market_value: string;
  company_market_cap: string;
  opened_investmet_opportunities: string;
  investment_amounts: string;
}

const PortfolioItem: React.FC<Props> = ({
  id,
  name,
  title,
  founding_date,
  founding_place,
  tags,
  market_value,
  company_market_cap,
  opened_investmet_opportunities,
  investment_amounts,
}) => {
  const router = useRouter();
  const goToNews = (id: number) => {
    router.push('/portfolio/' + id);
  };

  //настриойка гарфика
  ChartJS.defaults.font.family = 'Avenir Next';
  ChartJS.defaults.plugins.tooltip.yAlign = 'bottom';

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        displayColors: false,
        backgroundColor: '#2E3D8D',
        titleColor: '#fff',
        padding: 9,
        caretPadding: 10,
        callbacks: {
          title: function () {
            return '';
          },
          label: function () {
            const value = '23,057,800.00';
            return '$ ' + value;
          },
        },
      },
    },
    scales: {
      y: {
        ticks: {
          padding: 8,
          color: 'rgba(240, 243, 255, .7)',
          stepSize: 10,
        },
        grid: {
          color: 'rgba(46, 61, 141, .4)',
          borderColor: 'rgba(46, 61, 141, .4)',
          borderWidth: 0,
        },
      },
      x: {
        ticks: {
          color: 'rgba(240, 243, 255, .7)',
        },
        grid: {
          display: false,
          borderWidth: 0,
          tickColor: 'rgba(46, 61, 141, .4)',
          borderColor: 'rgba(46, 61, 141, .4)',
        },
      },
    },
  };

  const labels = ['2018', '2019', '2020', '2021', '2022'];

  const data = {
    labels,
    datasets: [
      {
        fill: false,
        lineTension: 0.3,
        borderColor: 'rgba(232, 0, 84, 1)',
        pointBorderColor: 'rgba(232, 0, 84, 1)',
        pointBackgroundColor: '#fff',
        pointBorderWidth: 2,
        data: [3, 10, 17, 7, 30, 40],
      },
    ],
  };
  //настриойка гарфика

  return (
    <>
      <div className={styles.PortfolioItem}>
        <div className={styles.PortfolioItem_Description}>
          <div className={styles.Logo}>
           <PortfolioIcon name={name} styles={styles}/>
          </div>
          <div className={styles.Title}>{title}</div>

          <div className={styles.FoundingDate}>{founding_date}</div>

          <div className={styles.FoundingPlace}>{founding_place}</div>
        </div>

        <div className={`${styles.PortfolioItem_Tabs} ${styles.Desktop}`}>
          <div className={styles.PortfolioItem_Tabs_Info}>
            <div className={styles.InfoItem}>
              <div className={styles.InfoItem_Title}>Market value</div>
              <div className={styles.InfoItem_Value}>{market_value}</div>
            </div>

            <div className={styles.InfoItem}>
              <div className={styles.InfoItem_Title}>Company Market Cap</div>
              <div className={styles.InfoItem_Value}>{company_market_cap}</div>
            </div>

            <div className={styles.InfoItem}>
              <div className={styles.InfoItem_Title}>
                Opened Investmet Opportunities
              </div>
              <div className={styles.InfoItem_Value}>
                {opened_investmet_opportunities}
              </div>
            </div>

            <div className={styles.InfoItem}>
              <div className={styles.InfoItem_Title}>Investment Amounts</div>
              <div className={styles.InfoItem_Value}>{investment_amounts}</div>
            </div>
          </div>
          <div className={styles.PortfolioItem_Tabs_Grapth}>
            <div className={styles.GrapthTitle}>Investment Amounts</div>

            <div className={styles.Grapth}>
              <Line options={options} data={data} />
            </div>
          </div>
        </div>

        {/* мобильный вариант */}
        <div className={`${styles.Tabs} ${styles.Mobile}`}>
          <Carousel
            arrows={false}
            showDots
            responsive={responsive}
            containerClass="carousel-container"
            sliderClass="slide-container"
            itemClass="slide-item"
            dotListClass="custom-dot-list-style"
          >
            {/* 1ый слайд */}
            <div
              className={styles.PortfolioItem_Tabs_Info}
              style={{ width: '100%', height: '100%' }}
            >
              <div className={styles.InfoItem}>
                <div className={styles.InfoItem_Title}>Market value</div>
                <div className={styles.InfoItem_Value}>{market_value}</div>
              </div>

              <div className={styles.InfoItem}>
                <div className={styles.InfoItem_Title}>Company Market Cap</div>
                <div className={styles.InfoItem_Value}>
                  {company_market_cap}
                </div>
              </div>

              <div className={styles.InfoItem}>
                <div className={styles.InfoItem_Title}>
                  Opened Investmet Opportunities
                </div>
                <div className={styles.InfoItem_Value}>
                  {opened_investmet_opportunities}
                </div>
              </div>

              <div className={styles.InfoItem}>
                <div className={styles.InfoItem_Title}>Investment Amounts</div>
                <div className={styles.InfoItem_Value}>
                  {investment_amounts}
                </div>
              </div>
            </div>
            {/* 1ый слайд */}

            {/* 2ой слайд  */}
            <div
              className={styles.PortfolioItem_Tabs_Grapth}
              style={{ width: '100%', height: '100%' }}
            >
              <div className={styles.GrapthTitle}>Investment Amounts</div>

              <div className={styles.Grapth}>
                <Line options={options} data={data} />
              </div>
            </div>
            {/* 2ой слайд  */}
          </Carousel>
        </div>
        {/* мобильный вариант */}

        <div className={styles.PortfolioItem_Actions}>
          <div className={styles.Tags}>
            {tags?.map((item, index) => {
              return (
                <div className={styles.TagsItem} key={index}>
                  <span>{item}</span>
                </div>
              );
            })}
          </div>

          <BaseButton
            title="Wiev details"
            type="empty"
            onClick={() => goToNews(id)}
            className={styles.Button}
          />
        </div>
      </div>
    </>
  );
};

export default PortfolioItem;
