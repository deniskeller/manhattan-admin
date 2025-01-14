//@ts-nocheck
import { BaseButtonApp, BaseIcon, BaseSwitch, BaseTitle } from '@base/index';
import { useAppDispatch } from '@hooks/redux';
import { modalSlice } from '@store/modals/reducer';
import React, { useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/router';
import s from './ProjectDetails.module.scss';
import { ALL_ICONS } from '@constants/icons';
import Link from 'next/link';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';

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

type Props = {
  id: string;
};

const ProjectDetails: React.FC<Props> = ({ id }) => {
  const { setPopup } = modalSlice.actions;
  const dispatch = useAppDispatch();
  const router = useRouter();

  const [checked, setChecked] = React.useState<boolean>(true);
  const [status, setStatus] = useState('available');
  const [tags, setTags] = useState([
    'FinTech',
    'Finance',
    'Compliance',
    'Information Technologies',
  ]);

  //slider settings
  const settings = {
    className: 'project-details-slider',
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 1441,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const slider = useRef(null);

  return (
    <>
      <div className={s.ProjectDetails}>
        <div className={s.ProjectDetails_Header}>
          <BaseTitle type="app" className={s.ProjectDetails_Header_Title}>
            Project details
          </BaseTitle>

          <BaseSwitch checked={checked} onChange={() => setChecked(!checked)}>
            Available
          </BaseSwitch>

          <BaseButtonApp
            title="Edit"
            type="primary"
            icon="edit"
            size="small"
            className={s.ProjectDetails_Header_Edit}
            onClick={() =>
              router.push(`/app/admin/projects/edit-project/${id}`)
            }
          />

          <BaseButtonApp
            title="Archive"
            type="secondary"
            size="small"
            className={s.ProjectDetails_Header_Archive}
          />
        </div>

        <div className={s.ProjectDetails_Details}>
          <div className={s.ProjectDetails_Details_Header}>
            <div className={s.ProjectDetails_Details_Header_InvestedInfo}>
              <div
                className={s.ProjectDetails_Details_Header_InvestedInfo_Header}
              >
                <div
                  className={
                    s.ProjectDetails_Details_Header_InvestedInfo_Header_Title
                  }
                >
                  Teido payments LTD
                </div>

                <div
                  className={
                    s.ProjectDetails_Details_Header_InvestedInfo_Header_Status
                  }
                  style={{
                    backgroundColor:
                      status == 'available'
                        ? '#defce9'
                        : status == 'unavailable'
                        ? 'rgba(26, 26, 26, 0.05)'
                        : 'rgba(26, 26, 26, 0.05)',
                  }}
                >
                  <span
                    style={{
                      color:
                        status == 'available'
                          ? '#114C29'
                          : status == 'unavailable'
                          ? 'rgba(26, 26, 26, 0.5'
                          : '#000000',
                    }}
                  >
                    available
                  </span>
                </div>
              </div>

              <div
                className={
                  s.ProjectDetails_Details_Header_InvestedInfo_Header_Logo
                }
              >
                <svg
                  width="114"
                  height="38"
                  viewBox="0 0 114 38"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_7443_218916)">
                    <g clipPath="url(#clip1_7443_218916)">
                      <path
                        d="M30.5096 11.5137C32.2247 11.5137 33.7863 11.7706 35.1931 12.2832C36.5999 12.7957 37.8129 13.5016 38.8322 14.3983C39.8514 15.2962 40.6442 16.3688 41.2104 17.6196C41.7767 18.8692 42.0598 20.2311 42.0598 21.7052C42.0598 22.7952 41.7528 23.6283 41.1375 24.2044C40.5234 24.7819 39.6652 25.1498 38.5654 25.3106L26.5798 27.0878C26.9359 28.1454 27.6632 28.9385 28.763 29.4673C29.8628 29.9961 31.1249 30.2605 32.5481 30.2605C33.8744 30.2605 35.1277 30.0921 36.3092 29.7554C37.4895 29.4187 38.4522 29.0271 39.1958 28.5781C39.7143 28.8986 40.1509 29.3463 40.507 29.9238C40.8631 30.5012 41.0406 31.1085 41.0406 31.7508C41.0406 33.1925 40.3611 34.2663 39.0021 34.9709C37.9677 35.5159 36.8025 35.885 35.5089 36.0771C34.3043 36.2623 33.0875 36.3586 31.8686 36.3652C29.9597 36.3652 28.1892 36.1008 26.5546 35.572C24.9213 35.0432 23.4969 34.25 22.2851 33.1925C21.0721 32.1349 20.117 30.8055 19.4224 29.2017C18.7265 27.6004 18.378 25.7259 18.378 23.5784C18.378 21.4633 18.7265 19.645 19.4224 18.1222C20.117 16.6007 21.0318 15.3511 22.163 14.3733C23.2944 13.3963 24.6161 12.6598 26.0463 12.2096C27.488 11.7471 28.9942 11.5119 30.5096 11.5124V11.5137ZM78.7629 3.82266C79.4751 3.82266 80.1131 3.8713 80.6793 3.96733C81.2456 4.06336 81.7237 4.25541 82.1113 4.5435C82.5001 4.83283 82.7908 5.22443 82.9846 5.72203C83.1784 6.21839 83.2765 6.8669 83.2765 7.66755V30.455C83.2765 31.9616 82.5643 33.1626 81.1411 34.0592C80.2024 34.6703 78.9894 35.2066 77.5008 35.6705C76.0134 36.1357 74.2983 36.3677 72.358 36.3677C70.2553 36.3677 68.369 36.0796 66.7043 35.5022C65.0382 34.926 63.6302 34.0929 62.4826 33.0029C61.3279 31.9044 60.4328 30.5663 59.8615 29.0845C59.2637 27.563 58.9643 25.8407 58.9643 23.9176C58.9643 21.8025 59.2877 19.968 59.9344 18.414C60.5812 16.8589 61.4797 15.5693 62.6273 14.5442C63.7919 13.5094 65.1648 12.7311 66.6552 12.2607C68.1929 11.7644 69.8514 11.5149 71.6294 11.5149C72.2641 11.5139 72.8976 11.5702 73.5219 11.6833C74.1372 11.7955 74.6381 11.9327 75.0269 12.0924V4.30405C75.3503 4.20802 75.8675 4.10451 76.5797 3.99227C77.2906 3.88003 78.0192 3.82266 78.7629 3.82266V3.82266ZM100.158 11.5137C102.067 11.5137 103.797 11.8105 105.35 12.4029C106.904 12.9965 108.238 13.8296 109.354 14.9034C110.47 15.9759 111.336 17.2829 111.95 18.8206C112.565 20.3596 112.873 22.0581 112.873 23.9164C112.873 25.903 112.565 27.6739 111.95 29.2291C111.336 30.7818 110.47 32.0888 109.354 33.1451C108.238 34.2027 106.904 35.0033 105.35 35.5496C103.797 36.0945 102.067 36.3664 100.158 36.3664C98.2494 36.3664 96.5192 36.0783 94.9664 35.5009C93.4137 34.9247 92.0786 34.0991 90.9624 33.0254C89.8463 31.9528 88.9806 30.6459 88.3665 29.1081C87.7512 27.5692 87.4441 25.8394 87.4441 23.9164C87.4441 22.0257 87.7512 20.3122 88.3665 18.7732C88.9806 17.2343 89.8463 15.9298 90.9624 14.8547C92.0786 13.7822 93.4137 12.9566 94.9664 12.3792C96.5192 11.803 98.2507 11.5137 100.158 11.5137V11.5137ZM50.0666 11.4651C50.7788 11.4651 51.418 11.5137 51.9843 11.6097C52.5505 11.7057 53.0274 11.8978 53.415 12.1871C53.8038 12.474 54.1033 12.8681 54.3135 13.3644C54.5236 13.8608 54.628 14.5105 54.628 15.3112L54.54 35.6181C54.0115 35.9112 53.5144 36.0958 53.0514 36.1706C52.3555 36.2829 51.6521 36.339 50.9399 36.339C50.2981 36.3442 49.657 36.2958 49.0234 36.1943C48.4572 36.0983 47.9803 35.9062 47.5914 35.6181C47.1905 35.3128 46.8805 34.9055 46.6943 34.4396C46.4841 33.9433 46.3797 33.2947 46.3797 32.4941V11.8978C46.7345 11.8342 47.2605 11.7457 47.9564 11.6334C48.651 11.5212 49.3556 11.4651 50.0666 11.4651ZM0.375 19.7983C1.41438 21.0006 2.62742 21.8312 4.0141 22.2876C5.27747 22.7054 6.64024 22.7428 8.10117 22.3999C8.15208 22.3878 8.20509 22.3873 8.25622 22.3985C8.30734 22.4097 8.35524 22.4322 8.39631 22.4644C8.43737 22.4965 8.47054 22.5375 8.49331 22.5842C8.51607 22.631 8.52785 22.6822 8.52774 22.7341V27.5692C8.52774 28.4023 8.79451 29.168 9.32804 29.5197C9.86158 29.8726 10.6141 30.0485 11.5842 30.0485C12.07 30.0485 12.572 30.0086 13.0892 29.9288C13.6064 29.8489 14.0594 29.5721 14.4482 29.4449C14.7389 29.7966 14.9893 30.1894 15.1994 30.6222C15.4108 31.0549 15.5153 31.575 15.5153 32.1848C15.5153 33.402 15.0547 34.396 14.1324 35.1654C13.21 35.9337 11.5842 36.3178 9.25506 36.3178C6.40871 36.3178 4.21669 35.678 2.68027 34.396C1.14384 33.1139 0.375 31.0312 0.375 28.1466V19.7983V19.7983ZM100.158 17.9077C98.7993 17.9077 97.7486 18.4278 97.0037 19.4704C96.2613 20.5117 95.8875 21.9933 95.8875 23.9164C95.8875 25.8706 96.2688 27.3697 97.0288 28.411C97.7889 29.4524 98.8484 29.9737 100.207 29.9737C101.566 29.9737 102.61 29.4449 103.337 28.3873C104.065 27.3297 104.429 25.8394 104.429 23.9164C104.429 21.9933 104.057 20.5117 103.313 19.4704C102.568 18.4278 101.517 17.9077 100.158 17.9077V17.9077ZM72.7455 17.9077C70.999 17.9077 69.6563 18.4041 68.7189 19.398C67.7801 20.3907 67.3095 21.8973 67.3095 23.9164C67.3095 25.903 67.7474 27.4008 68.6207 28.411C69.494 29.4212 70.7561 29.925 72.4058 29.925C72.9884 29.925 73.5131 29.8377 73.9837 29.6606C74.4518 29.4848 74.8167 29.284 75.0747 29.0595V18.4839C74.4279 18.0998 73.6515 17.9077 72.7468 17.9077H72.7455ZM30.5096 17.475C29.7332 17.475 29.0625 17.6034 28.4962 17.8591C27.93 18.116 27.4694 18.4452 27.1121 18.8443C26.7609 19.2382 26.4896 19.6955 26.313 20.1912C26.1369 20.6788 26.0305 21.1884 25.9972 21.7052L34.2946 20.3583C34.1977 19.7185 33.8416 19.0775 33.2276 18.4365C32.6135 17.7955 31.7075 17.475 30.5096 17.475V17.475ZM4.0141 7.09138C5.43853 7.09138 6.54587 7.3408 7.33862 7.83716C8.13137 8.33352 8.52774 9.3836 8.52774 10.9849V14.0616H14.8848C15.0786 14.4145 15.2649 14.8547 15.4423 15.3835C15.621 15.9123 15.7091 16.4972 15.7091 17.1382C15.7091 18.2606 15.4586 19.0688 14.9578 19.5664C14.4558 20.0627 13.7851 20.3109 12.9445 20.3109H8.52774C3.09174 20.3109 0.375 17.3053 0.375 11.2942V7.57277C0.731108 7.47674 1.24073 7.37323 1.90388 7.26099C2.60121 7.14562 3.30713 7.08889 4.0141 7.09138V7.09138ZM50.4944 0.773438C51.7326 0.773438 52.7292 1.15381 53.4804 1.91331C54.2329 2.67406 54.6092 3.60816 54.6092 4.71934C54.6092 5.82929 54.2329 6.76463 53.4804 7.52413C52.7292 8.28363 51.7326 8.66401 50.4944 8.66401C49.255 8.66401 48.2596 8.28363 47.5071 7.52413C46.7547 6.76338 46.3784 5.82804 46.3784 4.7181C46.3784 3.60816 46.7559 2.67281 47.5071 1.91206C48.2596 1.15506 49.2562 0.773438 50.4944 0.773438Z"
                        fill="#275AC5"
                      />
                      <path
                        opacity="0.6"
                        d="M103.429 21.5107C104.721 21.5107 105.768 20.4537 105.768 19.1499C105.768 17.846 104.721 16.7891 103.429 16.7891C102.137 16.7891 101.09 17.846 101.09 19.1499C101.09 20.4537 102.137 21.5107 103.429 21.5107Z"
                        fill="#275AC5"
                        stroke="#275AC5"
                        strokeWidth="0.3875"
                      />
                      <path
                        opacity="0.6"
                        d="M108.195 16.025C110.013 16.025 111.487 14.5643 111.487 12.7625C111.487 10.9607 110.013 9.5 108.195 9.5C106.377 9.5 104.903 10.9607 104.903 12.7625C104.903 14.5643 106.377 16.025 108.195 16.025Z"
                        fill="#275AC5"
                        stroke="#275AC5"
                        strokeWidth="0.3875"
                      />
                    </g>
                  </g>
                  <defs>
                    <clipPath id="clip0_7443_218916">
                      <rect
                        width="113.25"
                        height="37.5"
                        fill="white"
                        transform="translate(0.375)"
                      />
                    </clipPath>
                    <clipPath id="clip1_7443_218916">
                      <rect
                        width="113.25"
                        height="37.5"
                        fill="white"
                        transform="translate(0.375 0.75)"
                      />
                    </clipPath>
                  </defs>
                </svg>
              </div>

              <div
                className={s.ProjectDetails_Details_Header_InvestedInfo_Graph}
              >
                <div className={s.GraphLabels}>
                  <div
                    className={`${s.GraphLabels_Item} ${s.GraphLabels_Item_Initial}`}
                  >
                    200,000.00
                  </div>
                  <span className={s.GraphLabels_Item_Slash}>/</span>
                  <div
                    className={`${s.GraphLabels_Item} ${s.GraphLabels_Item_Current}`}
                  >
                    120 000
                  </div>
                  <div
                    className={`${s.GraphLabels_Item} ${s.GraphLabels_Item_Total}`}
                  >
                    1,500,000.00
                  </div>
                </div>

                <div className={s.GraphProgressBar}>
                  <span className={s.GraphProgressBar_Item}></span>
                  <span className={s.GraphProgressBar_Item}></span>
                </div>

                <div className={s.GraphDate}>
                  <div className={s.GraphDate_Label}>Round ends in</div>

                  <div className={s.GraphDate_Tooltip}>
                    <BaseIcon
                      icon={ALL_ICONS.TOOLTIP}
                      viewBox="0 0 20 20"
                      className={s.GraphDate_Tooltip_Icon}
                    />

                    <div className={s.GraphDate_Tooltip_Tooltip}>
                      <span>31.02.2022</span>&nbsp;—&nbsp;
                      <span>12.00</span>
                    </div>
                  </div>

                  <div className={s.GraphDate_Date}>
                    <span>42 days 18 hrs 51 min</span>
                  </div>
                </div>
              </div>
            </div>

            <div className={s.ProjectDetails_Details_Header_Border}></div>

            <div className={s.ProjectDetails_Details_Header_Logo}>
              <svg
                // width="114"
                // height="38"
                viewBox="0 0 114 38"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_7443_218916)">
                  <g clipPath="url(#clip1_7443_218916)">
                    <path
                      d="M30.5096 11.5137C32.2247 11.5137 33.7863 11.7706 35.1931 12.2832C36.5999 12.7957 37.8129 13.5016 38.8322 14.3983C39.8514 15.2962 40.6442 16.3688 41.2104 17.6196C41.7767 18.8692 42.0598 20.2311 42.0598 21.7052C42.0598 22.7952 41.7528 23.6283 41.1375 24.2044C40.5234 24.7819 39.6652 25.1498 38.5654 25.3106L26.5798 27.0878C26.9359 28.1454 27.6632 28.9385 28.763 29.4673C29.8628 29.9961 31.1249 30.2605 32.5481 30.2605C33.8744 30.2605 35.1277 30.0921 36.3092 29.7554C37.4895 29.4187 38.4522 29.0271 39.1958 28.5781C39.7143 28.8986 40.1509 29.3463 40.507 29.9238C40.8631 30.5012 41.0406 31.1085 41.0406 31.7508C41.0406 33.1925 40.3611 34.2663 39.0021 34.9709C37.9677 35.5159 36.8025 35.885 35.5089 36.0771C34.3043 36.2623 33.0875 36.3586 31.8686 36.3652C29.9597 36.3652 28.1892 36.1008 26.5546 35.572C24.9213 35.0432 23.4969 34.25 22.2851 33.1925C21.0721 32.1349 20.117 30.8055 19.4224 29.2017C18.7265 27.6004 18.378 25.7259 18.378 23.5784C18.378 21.4633 18.7265 19.645 19.4224 18.1222C20.117 16.6007 21.0318 15.3511 22.163 14.3733C23.2944 13.3963 24.6161 12.6598 26.0463 12.2096C27.488 11.7471 28.9942 11.5119 30.5096 11.5124V11.5137ZM78.7629 3.82266C79.4751 3.82266 80.1131 3.8713 80.6793 3.96733C81.2456 4.06336 81.7237 4.25541 82.1113 4.5435C82.5001 4.83283 82.7908 5.22443 82.9846 5.72203C83.1784 6.21839 83.2765 6.8669 83.2765 7.66755V30.455C83.2765 31.9616 82.5643 33.1626 81.1411 34.0592C80.2024 34.6703 78.9894 35.2066 77.5008 35.6705C76.0134 36.1357 74.2983 36.3677 72.358 36.3677C70.2553 36.3677 68.369 36.0796 66.7043 35.5022C65.0382 34.926 63.6302 34.0929 62.4826 33.0029C61.3279 31.9044 60.4328 30.5663 59.8615 29.0845C59.2637 27.563 58.9643 25.8407 58.9643 23.9176C58.9643 21.8025 59.2877 19.968 59.9344 18.414C60.5812 16.8589 61.4797 15.5693 62.6273 14.5442C63.7919 13.5094 65.1648 12.7311 66.6552 12.2607C68.1929 11.7644 69.8514 11.5149 71.6294 11.5149C72.2641 11.5139 72.8976 11.5702 73.5219 11.6833C74.1372 11.7955 74.6381 11.9327 75.0269 12.0924V4.30405C75.3503 4.20802 75.8675 4.10451 76.5797 3.99227C77.2906 3.88003 78.0192 3.82266 78.7629 3.82266V3.82266ZM100.158 11.5137C102.067 11.5137 103.797 11.8105 105.35 12.4029C106.904 12.9965 108.238 13.8296 109.354 14.9034C110.47 15.9759 111.336 17.2829 111.95 18.8206C112.565 20.3596 112.873 22.0581 112.873 23.9164C112.873 25.903 112.565 27.6739 111.95 29.2291C111.336 30.7818 110.47 32.0888 109.354 33.1451C108.238 34.2027 106.904 35.0033 105.35 35.5496C103.797 36.0945 102.067 36.3664 100.158 36.3664C98.2494 36.3664 96.5192 36.0783 94.9664 35.5009C93.4137 34.9247 92.0786 34.0991 90.9624 33.0254C89.8463 31.9528 88.9806 30.6459 88.3665 29.1081C87.7512 27.5692 87.4441 25.8394 87.4441 23.9164C87.4441 22.0257 87.7512 20.3122 88.3665 18.7732C88.9806 17.2343 89.8463 15.9298 90.9624 14.8547C92.0786 13.7822 93.4137 12.9566 94.9664 12.3792C96.5192 11.803 98.2507 11.5137 100.158 11.5137V11.5137ZM50.0666 11.4651C50.7788 11.4651 51.418 11.5137 51.9843 11.6097C52.5505 11.7057 53.0274 11.8978 53.415 12.1871C53.8038 12.474 54.1033 12.8681 54.3135 13.3644C54.5236 13.8608 54.628 14.5105 54.628 15.3112L54.54 35.6181C54.0115 35.9112 53.5144 36.0958 53.0514 36.1706C52.3555 36.2829 51.6521 36.339 50.9399 36.339C50.2981 36.3442 49.657 36.2958 49.0234 36.1943C48.4572 36.0983 47.9803 35.9062 47.5914 35.6181C47.1905 35.3128 46.8805 34.9055 46.6943 34.4396C46.4841 33.9433 46.3797 33.2947 46.3797 32.4941V11.8978C46.7345 11.8342 47.2605 11.7457 47.9564 11.6334C48.651 11.5212 49.3556 11.4651 50.0666 11.4651ZM0.375 19.7983C1.41438 21.0006 2.62742 21.8312 4.0141 22.2876C5.27747 22.7054 6.64024 22.7428 8.10117 22.3999C8.15208 22.3878 8.20509 22.3873 8.25622 22.3985C8.30734 22.4097 8.35524 22.4322 8.39631 22.4644C8.43737 22.4965 8.47054 22.5375 8.49331 22.5842C8.51607 22.631 8.52785 22.6822 8.52774 22.7341V27.5692C8.52774 28.4023 8.79451 29.168 9.32804 29.5197C9.86158 29.8726 10.6141 30.0485 11.5842 30.0485C12.07 30.0485 12.572 30.0086 13.0892 29.9288C13.6064 29.8489 14.0594 29.5721 14.4482 29.4449C14.7389 29.7966 14.9893 30.1894 15.1994 30.6222C15.4108 31.0549 15.5153 31.575 15.5153 32.1848C15.5153 33.402 15.0547 34.396 14.1324 35.1654C13.21 35.9337 11.5842 36.3178 9.25506 36.3178C6.40871 36.3178 4.21669 35.678 2.68027 34.396C1.14384 33.1139 0.375 31.0312 0.375 28.1466V19.7983V19.7983ZM100.158 17.9077C98.7993 17.9077 97.7486 18.4278 97.0037 19.4704C96.2613 20.5117 95.8875 21.9933 95.8875 23.9164C95.8875 25.8706 96.2688 27.3697 97.0288 28.411C97.7889 29.4524 98.8484 29.9737 100.207 29.9737C101.566 29.9737 102.61 29.4449 103.337 28.3873C104.065 27.3297 104.429 25.8394 104.429 23.9164C104.429 21.9933 104.057 20.5117 103.313 19.4704C102.568 18.4278 101.517 17.9077 100.158 17.9077V17.9077ZM72.7455 17.9077C70.999 17.9077 69.6563 18.4041 68.7189 19.398C67.7801 20.3907 67.3095 21.8973 67.3095 23.9164C67.3095 25.903 67.7474 27.4008 68.6207 28.411C69.494 29.4212 70.7561 29.925 72.4058 29.925C72.9884 29.925 73.5131 29.8377 73.9837 29.6606C74.4518 29.4848 74.8167 29.284 75.0747 29.0595V18.4839C74.4279 18.0998 73.6515 17.9077 72.7468 17.9077H72.7455ZM30.5096 17.475C29.7332 17.475 29.0625 17.6034 28.4962 17.8591C27.93 18.116 27.4694 18.4452 27.1121 18.8443C26.7609 19.2382 26.4896 19.6955 26.313 20.1912C26.1369 20.6788 26.0305 21.1884 25.9972 21.7052L34.2946 20.3583C34.1977 19.7185 33.8416 19.0775 33.2276 18.4365C32.6135 17.7955 31.7075 17.475 30.5096 17.475V17.475ZM4.0141 7.09138C5.43853 7.09138 6.54587 7.3408 7.33862 7.83716C8.13137 8.33352 8.52774 9.3836 8.52774 10.9849V14.0616H14.8848C15.0786 14.4145 15.2649 14.8547 15.4423 15.3835C15.621 15.9123 15.7091 16.4972 15.7091 17.1382C15.7091 18.2606 15.4586 19.0688 14.9578 19.5664C14.4558 20.0627 13.7851 20.3109 12.9445 20.3109H8.52774C3.09174 20.3109 0.375 17.3053 0.375 11.2942V7.57277C0.731108 7.47674 1.24073 7.37323 1.90388 7.26099C2.60121 7.14562 3.30713 7.08889 4.0141 7.09138V7.09138ZM50.4944 0.773438C51.7326 0.773438 52.7292 1.15381 53.4804 1.91331C54.2329 2.67406 54.6092 3.60816 54.6092 4.71934C54.6092 5.82929 54.2329 6.76463 53.4804 7.52413C52.7292 8.28363 51.7326 8.66401 50.4944 8.66401C49.255 8.66401 48.2596 8.28363 47.5071 7.52413C46.7547 6.76338 46.3784 5.82804 46.3784 4.7181C46.3784 3.60816 46.7559 2.67281 47.5071 1.91206C48.2596 1.15506 49.2562 0.773438 50.4944 0.773438Z"
                      fill="#275AC5"
                    />
                    <path
                      opacity="0.6"
                      d="M103.429 21.5107C104.721 21.5107 105.768 20.4537 105.768 19.1499C105.768 17.846 104.721 16.7891 103.429 16.7891C102.137 16.7891 101.09 17.846 101.09 19.1499C101.09 20.4537 102.137 21.5107 103.429 21.5107Z"
                      fill="#275AC5"
                      stroke="#275AC5"
                      strokeWidth="0.3875"
                    />
                    <path
                      opacity="0.6"
                      d="M108.195 16.025C110.013 16.025 111.487 14.5643 111.487 12.7625C111.487 10.9607 110.013 9.5 108.195 9.5C106.377 9.5 104.903 10.9607 104.903 12.7625C104.903 14.5643 106.377 16.025 108.195 16.025Z"
                      fill="#275AC5"
                      stroke="#275AC5"
                      strokeWidth="0.3875"
                    />
                  </g>
                </g>
                <defs>
                  <clipPath id="clip0_7443_218916">
                    <rect
                      width="113.25"
                      height="37.5"
                      fill="white"
                      transform="translate(0.375)"
                    />
                  </clipPath>
                  <clipPath id="clip1_7443_218916">
                    <rect
                      width="113.25"
                      height="37.5"
                      fill="white"
                      transform="translate(0.375 0.75)"
                    />
                  </clipPath>
                </defs>
              </svg>
            </div>
          </div>

          <div className={s.ProjectDetails_Details_Content}>
            <div className={s.ProjectDetails_Details_Content_Left}>
              <div className={s.ProjectPipeline}>
                <div className={s.ProjectPipeline_Title}>
                  <span>Project pipeline</span>
                </div>

                <div className={s.ProjectPipeline_Items}>
                  <div className={s.ProjectPipeline}>
                    <div className={s.ProjectPipeline_Period}>
                      <div className={s.ProjectPipeline_Period_Quartal}>1q</div>
                      <div className={s.ProjectPipeline_Period_Year}>
                        <span>2022</span>
                      </div>
                    </div>

                    <div className={s.ProjectPipeline_Description}>
                      <p>
                        Lay the groundwork for in-house accounting and financial
                        reporting to take it over from the outsourcing firm.
                        Simplify internal procedures and make financial
                        reporting more transparent
                      </p>
                    </div>
                  </div>

                  <div className={s.ProjectPipeline}>
                    <div className={s.ProjectPipeline_Period}>
                      <div className={s.ProjectPipeline_Period_Quartal}>2q</div>
                      <div className={s.ProjectPipeline_Period_Year}>
                        <span>2022</span>
                      </div>
                    </div>

                    <div className={s.ProjectPipeline_Description}>
                      <p>
                        Lay the groundwork for in-house accounting and financial
                        reporting to take it over from the outsourcing firm.
                        Simplify internal procedures and make financial
                        reporting more transparent Lorem ipsum dolor sit amet
                        consectetur adipisicing elit. Quia, in. Dolore sequi
                        modi ea esse, quo eligendi explicabo dolores libero
                        fugiat, suscipit aut ad iusto nemo quisquam, sint quam
                        enim?
                      </p>
                    </div>
                  </div>

                  <div className={s.ProjectPipeline}>
                    <div className={s.ProjectPipeline_Period}>
                      <div className={s.ProjectPipeline_Period_Quartal}>3q</div>
                      <div className={s.ProjectPipeline_Period_Year}>
                        <span>2022</span>
                      </div>
                    </div>

                    <div className={s.ProjectPipeline_Description}>
                      <p>
                        Lay the groundwork for in-house accounting and financial
                        reporting to take it over from the outsourcing firm.
                        Simplify internal procedures and make financi
                      </p>
                    </div>
                  </div>

                  <div className={s.ProjectPipeline}>
                    <div className={s.ProjectPipeline_Period}>
                      <div className={s.ProjectPipeline_Period_Quartal}>4q</div>
                      <div className={s.ProjectPipeline_Period_Year}>
                        <span>2022</span>
                      </div>
                    </div>

                    <div className={s.ProjectPipeline_Description}>
                      <p>
                        Lay the groundwork for in-house accounting and financial
                        reporting to take it over from the outsourcing firm.
                        Simplify internal procedures and make financi
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className={s.FinancialValues}>
                <div className={s.FinancialValues_Title}>
                  <span>Financial values</span>
                </div>

                <div className={s.FinancialValues_Items}>
                  <div className={s.FinancialValue}>
                    <div className={s.FinancialValue_Label}>
                      <span>Required Investments</span>
                    </div>
                    <div className={s.FinancialValue_Value}>$ 1,500,000.00</div>
                  </div>

                  <div className={s.FinancialValue}>
                    <div className={s.FinancialValue_Label}>
                      <span>Available amount of investments</span>
                    </div>
                    <div className={s.FinancialValue_Value}>$ 1,300,000.00</div>
                  </div>

                  <div className={s.FinancialValue}>
                    <div className={s.FinancialValue_Label}>
                      <span>Invested Funds</span>
                    </div>
                    <div className={s.FinancialValue_Value}>$ 200,000.00</div>
                  </div>

                  <div className={s.FinancialValue}>
                    <div className={s.FinancialValue_Label}>
                      <span>Company Valuation</span>
                    </div>
                    <div className={s.FinancialValue_Value}>
                      $ 50,000,000.00
                    </div>
                  </div>

                  <div className={s.FinancialValue}>
                    <div className={s.FinancialValue_Label}>
                      <span>Company Market Cap</span>
                    </div>
                    <div className={s.FinancialValue_Value}>
                      $ 70,000,000.00
                    </div>
                  </div>

                  <div className={s.FinancialValue}>
                    <div className={s.FinancialValue_Label}>
                      <span>ROI</span>
                    </div>
                    <div className={s.FinancialValue_Value}>99%</div>
                  </div>
                </div>
              </div>

              <div className={s.FundExpences}>
                <div className={s.FundExpences_Title}>
                  <span>Fund Expences</span>
                </div>

                <div className={s.FundExpences_Subtitle}>
                  <p>
                    General fund expences for project activities and its launch
                  </p>
                </div>

                <div className={s.FundExpences_Items}>
                  <div className={s.FundExpence}>
                    <div className={s.FundExpence_Tooltip}>
                      <BaseIcon
                        icon={ALL_ICONS.TOOLTIP}
                        viewBox="0 0 20 20"
                        className={s.FundExpence_Tooltip_Icon}
                      />

                      <div className={s.FundExpence_Tooltip_Tooltip}>
                        <ul>
                          <li>
                            <span className={s.Label}>Office rent</span>
                            <span className={s.Value}>$ 25,000</span>
                          </li>
                          <li>
                            <span className={s.Label}>Salaries</span>
                            <span className={s.Value}>$ 25,000</span>
                          </li>
                          <li>
                            <span className={s.Label}>Tax</span>
                            <span className={s.Value}>$ 25,000</span>
                          </li>
                          <li>
                            <span className={s.Label}>Office rent</span>
                            <span className={s.Value}>$ 25,000</span>
                          </li>
                          <li>
                            <span className={s.Label}>Salaries</span>
                            <span className={s.Value}>$ 25,000</span>
                          </li>
                          <li>
                            <span className={s.Label}>Tax</span>
                            <span className={s.Value}>$ 25,000</span>
                          </li>
                          <li>
                            <span className={s.Label}>Office rent</span>
                            <span className={s.Value}>$ 25,000</span>
                          </li>
                          <li>
                            <span className={s.Label}>Salaries</span>
                            <span className={s.Value}>$ 25,000</span>
                          </li>
                          <li>
                            <span className={s.Label}>Tax</span>
                            <span className={s.Value}>$ 25,000</span>
                          </li>
                          <li>
                            <span className={s.Label}>Office rent</span>
                            <span className={s.Value}>$ 25,000</span>
                          </li>
                          <li>
                            <span className={s.Label}>Salaries</span>
                            <span className={s.Value}>$ 25,000</span>
                          </li>
                        </ul>
                      </div>
                    </div>

                    <div className={s.FundExpence_Label}>
                      <span>Total</span>
                    </div>

                    <div className={s.FundExpence_Value}>$ 25,000,000.00</div>
                  </div>

                  <div className={s.FundExpence}>
                    <div className={s.FundExpence_Tooltip}>
                      <BaseIcon
                        icon={ALL_ICONS.TOOLTIP}
                        viewBox="0 0 20 20"
                        className={s.FundExpence_Tooltip_Icon}
                      />

                      <div className={s.FundExpence_Tooltip_Tooltip}>
                        <ul>
                          <li>
                            <span className={s.Label}>Office rent</span>
                            <span className={s.Value}>$ 25,000</span>
                          </li>
                          <li>
                            <span className={s.Label}>Salaries</span>
                            <span className={s.Value}>$ 25,000</span>
                          </li>
                          <li>
                            <span className={s.Label}>Tax</span>
                            <span className={s.Value}>$ 25,000</span>
                          </li>
                          <li>
                            <span className={s.Label}>Office rent</span>
                            <span className={s.Value}>$ 25,000</span>
                          </li>
                          <li>
                            <span className={s.Label}>Salaries</span>
                            <span className={s.Value}>$ 25,000</span>
                          </li>
                        </ul>
                      </div>
                    </div>

                    <div className={s.FundExpence_Label}>
                      <span>By year</span>
                    </div>

                    <div className={s.FundExpence_Value}>$50,000.00</div>
                  </div>
                </div>
              </div>
            </div>

            <div className={s.ProjectDetails_Details_Content_Border}></div>

            <div className={s.ProjectDetails_Details_Content_Right}>
              <div className={s.AboutCompany}>
                <div className={s.AboutCompany_Title}>
                  <span>The future on onboarding & compliance</span>
                </div>

                <div className={s.AboutCompany_Founded}>
                  <span>Founded in 2018</span>
                </div>

                <div className={s.AboutCompany_Market}>
                  <span>Market countries</span>
                </div>

                <div className={s.AboutCompany_Countries}>
                  USA, Canada, New Zeland
                </div>

                <div className={s.Border}></div>

                <div className={s.AboutCompany_Description}>
                  <p>
                    Our mission is to unlock the power of a borderless economy,
                    for everyone. Financial services are the backbone of our
                    society, and our goal is to make them work for as many
                    individuals and businesses as possible. We want to grow the
                    global economy by providing everyone with frictionless,
                    accessible financial products.
                  </p>
                </div>

                <div className={s.AboutCompany_Tags}>
                  {tags?.map((tag, index) => {
                    return (
                      <div className={s.AboutCompany_Tags_Item} key={index}>
                        <div className={s.AboutCompany_Tags_Item_Name}>
                          {tag}
                        </div>
                      </div>
                    );
                  })}
                </div>

                <div className={s.AboutCompany_File}>
                  <BaseIcon
                    viewBox="0 0 16 20"
                    icon={ALL_ICONS.FILE}
                    className={s.AboutCompany_File_Icon}
                  />

                  <a
                    className={s.AboutCompany_File_Filename}
                    href="/images/myw3schoolsimage.jpg"
                    download
                  >
                    Pitch.pdf
                  </a>
                </div>

                <div className={s.Border}></div>

                <div className={s.AboutCompany_RegistrationNumber}>
                  <BaseIcon
                    viewBox="0 0 18 18"
                    icon={ALL_ICONS.DIEZ}
                    className={s.AboutCompany_RegistrationNumber_Icon}
                  />

                  <div className={s.AboutCompany_RegistrationNumber_Info}>
                    <div
                      className={s.AboutCompany_RegistrationNumber_Info_Label}
                    >
                      <span>Registration Number</span>
                    </div>
                    <div
                      className={s.AboutCompany_RegistrationNumber_Info_Value}
                    >
                      1234235563534
                    </div>
                  </div>
                </div>

                <div className={s.Border}></div>

                <div className={s.AboutCompany_Website}>
                  <BaseIcon
                    viewBox="0 0 20 20"
                    icon={ALL_ICONS.WEBSITE}
                    className={s.AboutCompany_Website_Icon}
                  />

                  <div className={s.AboutCompany_Website_Info}>
                    <div className={s.AboutCompany_Website_Info_Label}>
                      <span>Website</span>
                    </div>
                    <Link href="https://twitter.com/">
                      <a
                        className={s.AboutCompany_Website_Info_Value}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        teido.com
                      </a>
                    </Link>
                  </div>
                </div>

                <div className={s.Border}></div>

                <div className={s.AboutCompany_CompanyEmail}>
                  <BaseIcon
                    viewBox="0 0 16 12"
                    icon={ALL_ICONS.MAIL}
                    className={s.AboutCompany_CompanyEmail_Icon}
                  />

                  <div className={s.AboutCompany_CompanyEmail_Info}>
                    <div className={s.AboutCompany_CompanyEmail_Info_Label}>
                      <span>Company Email</span>
                    </div>

                    <a
                      href="mailto:info@teido.com"
                      className={s.AboutCompany_CompanyEmail_Info_Value}
                    >
                      info@teido.com
                    </a>
                  </div>
                </div>

                <div className={s.Border}></div>

                <div className={s.AboutCompany_Address}>
                  <BaseIcon
                    viewBox="0 0 18 20"
                    icon={ALL_ICONS.MARKER}
                    className={s.AboutCompany_Address_Icon}
                  />

                  <div className={s.AboutCompany_Address_Info}>
                    <div className={s.AboutCompany_Address_Info_Label}>
                      <span>Business Address</span>
                    </div>

                    <div className={s.AboutCompany_Address_Info_Value}>
                      <p>17 State</p>
                    </div>

                    <br />

                    <div className={s.AboutCompany_Address_Info_Label}>
                      <span>Office Address</span>
                    </div>

                    <div className={s.AboutCompany_Address_Info_Value}>
                      <p>17 State</p>
                    </div>
                  </div>
                </div>

                <div className={s.Border}></div>

                <div className={s.AboutCompany_ValuationPartner}>
                  <BaseIcon
                    viewBox="0 0 20 20"
                    icon={ALL_ICONS.SHIELD}
                    className={s.AboutCompany_ValuationPartner_Icon}
                  />

                  <div className={s.AboutCompany_ValuationPartner_Info}>
                    <div className={s.AboutCompany_ValuationPartner_Info_Label}>
                      <span>Valuation partner</span>
                    </div>

                    <div className={s.AboutCompany_ValuationPartner_Info_Logo}>
                      <svg
                        width="197"
                        height="28"
                        viewBox="0 0 197 28"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g clipPath="url(#clip0_6547_241759)">
                          <path
                            d="M20.3493 18.7512C20.3493 21.0593 18.0432 22.1843 13.3946 22.1843H1.50118C0.514897 22.1843 0 21.8069 0 21.0085C0 20.2101 0.565661 19.8327 1.50118 19.8327H13.4381C15.9255 19.8327 17.1947 19.4552 17.1947 18.7948V17.1036C17.1947 16.3996 15.9255 16.0657 13.4381 16.0657H7.09253C2.4367 16.0222 0.137789 14.8899 0.137789 12.6762V11.2173C0.137789 8.62621 2.53822 7.3125 7.33184 7.3125H11.5163C12.5026 7.3125 13.0682 7.73347 13.0682 8.53911C13.0682 9.34476 12.5026 9.71492 11.5163 9.71492H7.33184C4.65583 9.71492 3.33595 10.1867 3.33595 11.2173V12.5819C3.33595 13.431 4.69934 13.852 7.33184 13.852H13.6266C18.1374 13.852 20.3928 14.8899 20.3928 16.9585V18.744H20.3493V18.7512Z"
                            fill="#CC4945"
                          />
                          <path
                            d="M28.9058 22.1843V26.227C28.9058 27.0762 28.3401 27.4972 27.3103 27.4972C26.2805 27.4972 25.7148 27.0762 25.7148 26.227V12.1609C25.7148 8.91653 28.3473 7.3125 33.6123 7.3125H39.7694C45.0344 7.3125 47.6669 8.90927 47.6669 12.1609V17.3359C47.6669 20.5367 45.0344 22.1843 39.7694 22.1843H28.913H28.9058ZM28.9058 19.6875H39.7621C42.7717 19.6875 44.2729 18.8891 44.2729 17.3794V12.1609C44.2729 10.6077 42.7717 9.85282 39.7621 9.85282H33.4165C30.4069 9.85282 28.9058 10.6077 28.9058 12.1609V19.6875V19.6875Z"
                            fill="#CC4945"
                          />
                          <path
                            d="M59.038 22.1854C54.665 22.1854 52.5039 20.8209 52.5039 18.1426V16.4007C52.5039 13.7225 54.665 12.358 59.038 12.358H72.012V11.8862C72.012 10.4273 70.7429 9.72329 68.2482 9.72329H63.9259C62.9396 9.72329 62.4175 9.34587 62.4175 8.54748C62.4175 7.74909 62.9324 7.32812 63.9259 7.32812H68.2482C72.904 7.32812 75.2029 8.88135 75.2029 11.8934V17.8668C75.2029 20.7338 72.991 22.1926 68.531 22.1926H59.038V22.1854ZM72.012 17.7652V14.4265H59.2773C56.8769 14.4265 55.7021 15.087 55.7021 16.3064V17.9031C55.7021 19.1733 56.8769 19.783 59.2773 19.783H68.3497C70.7936 19.783 72.0192 19.1225 72.0192 17.758"
                            fill="#CC4945"
                          />
                          <path
                            d="M88.6944 22.1843C83.4294 22.1843 80.7969 20.5875 80.7969 17.3359V12.1609C80.7969 8.91653 83.4294 7.3125 88.6944 7.3125H99.2679C100.305 7.3125 100.863 7.73347 100.863 8.58266C100.863 9.43185 100.298 9.85282 99.2679 9.85282H88.5493C85.5397 9.85282 84.0386 10.6077 84.0386 12.1609V17.3867C84.0386 18.8891 85.5397 19.6948 88.5493 19.6948H99.2679C100.305 19.6948 100.863 20.0722 100.863 20.9214C100.863 21.7706 100.298 22.1915 99.2679 22.1915H88.6944V22.1843Z"
                            fill="#CC4945"
                          />
                          <path
                            d="M108.767 15.7436V17.6234C108.767 19.0823 110.173 19.7863 112.994 19.7863H117.505C118.492 19.7863 119.006 20.1637 119.006 20.9621C119.006 21.7605 118.492 22.1379 117.505 22.1379H112.994C108.056 22.1379 105.518 20.6355 105.518 17.6234V11.65C105.518 8.78309 107.729 7.32422 112.189 7.32422H121.023C125.345 7.32422 127.513 8.64519 127.513 11.2291V14.6621C127.513 15.417 127.042 15.7436 126.106 15.7436H108.759H108.767ZM108.767 13.675H124.09C124.279 13.675 124.322 13.5807 124.322 13.4428V11.846C124.322 10.4379 123.147 9.72664 120.798 9.72664H112.385C109.941 9.72664 108.767 10.4307 108.767 11.846V13.6823V13.675Z"
                            fill="#CC4945"
                          />
                          <path
                            d="M135.89 9.8121V21.0548C135.89 21.904 135.375 22.325 134.338 22.325C133.214 22.325 132.648 21.904 132.648 21.0548V5.10887C132.648 2.05323 135.092 0.5 140.125 0.5H142.714C143.701 0.5 144.215 0.920968 144.215 1.67581C144.215 2.47419 143.701 2.89516 142.714 2.89516H140.125C137.304 2.89516 135.897 3.59919 135.897 5.05806V7.45323H142.714C143.701 7.45323 144.215 7.83064 144.215 8.62903C144.215 9.42742 143.701 9.80484 142.714 9.80484H135.897L135.89 9.8121Z"
                            fill="#CC4945"
                          />
                          <path
                            d="M151.446 15.7436V17.6234C151.446 19.0823 152.853 19.7863 155.674 19.7863H160.185C161.171 19.7863 161.686 20.1637 161.686 20.9621C161.686 21.7605 161.171 22.1379 160.185 22.1379H155.718C150.786 22.1379 148.248 20.6355 148.248 17.6234V11.65C148.248 8.78309 150.46 7.32422 154.92 7.32422H163.753C168.075 7.32422 170.244 8.64519 170.244 11.2291V14.6621C170.244 15.417 169.772 15.7436 168.829 15.7436H151.439H151.446ZM151.446 13.675H166.77C166.958 13.675 167.002 13.5807 167.002 13.4428V11.846C167.002 10.4379 165.827 9.72664 163.477 9.72664H155.065C152.621 9.72664 151.446 10.4307 151.446 11.846V13.6823V13.675Z"
                            fill="#CC4945"
                          />
                          <path
                            d="M185.762 16.3506L177.632 21.903C177.161 22.2296 176.784 22.3747 176.363 22.3239C175.326 22.3239 174.768 21.903 174.768 21.1046C174.768 20.778 174.905 20.4006 175.522 20.0231L183.325 14.6594L175.942 9.52797C175.333 9.15055 175.188 8.67878 175.188 8.35217C175.188 7.50297 175.754 7.13281 176.834 7.13281C177.4 7.13281 177.726 7.27072 178.198 7.60459L186.001 13.0118L193.899 7.60459C194.37 7.32152 194.696 7.13281 195.168 7.13281C196.248 7.13281 196.763 7.55378 196.763 8.40297C196.72 8.68604 196.669 9.06346 196.009 9.48443L188.394 14.703L195.958 19.9288C196.524 20.3497 196.712 20.778 196.712 21.1046C196.712 21.9538 196.147 22.3239 195.066 22.3239C194.595 22.3239 194.123 22.2296 193.703 21.8522L185.762 16.3506V16.3506Z"
                            fill="#CC4945"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_6547_241759">
                            <rect
                              width="197"
                              height="27"
                              fill="white"
                              transform="translate(0 0.5)"
                            />
                          </clipPath>
                        </defs>
                      </svg>
                    </div>
                  </div>
                </div>

                <div className={s.AboutCompany_File}>
                  <BaseIcon
                    viewBox="0 0 16 20"
                    icon={ALL_ICONS.FILE}
                    className={s.AboutCompany_File_Icon}
                  />

                  <a
                    className={s.AboutCompany_File_Filename}
                    href="/images/myw3schoolsimage.jpg"
                    download
                  >
                    Valuation statement.pdf
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={s.ProjectDetails_Gallery}>
          <div className={s.ProjectDetails_Gallery_Header}>
            <div className={s.ProjectDetails_Gallery_Header_Title}>Gallery</div>

            <div className={s.ProjectDetails_Gallery_Header_Navbar}>
              <BaseIcon
                icon={ALL_ICONS.TO_DETAILS}
                viewBox="0 0 16 8"
                className={s.PrevSlide}
                onClick={() => slider.current.slickPrev()}
              />

              <BaseIcon
                icon={ALL_ICONS.TO_DETAILS}
                viewBox="0 0 16 8"
                className={s.NextSlide}
                onClick={() => slider.current.slickNext()}
              />
            </div>
          </div>

          <div className={s.ProjectDetails_Gallery_Slider}>
            <Slider {...settings} ref={slider} arrows={false}>
              {images.map((image, index) => {
                return (
                  <div key={index}>
                    <div
                      className={s.SlideImage}
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

export default ProjectDetails;
