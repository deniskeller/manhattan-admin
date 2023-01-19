import React, { ReactNode } from 'react';
import { BaseButtonApp, BaseIcon } from '@base/index';
import styles from './AccordionProjectItem.module.scss';
import { ALL_ICONS } from '@constants/icons';
import { useRouter } from 'next/router';

interface IPurpose {
  [key: string]: string;
}

interface IProps {
  image?: JSX.Element;
  name: string;
  status?: string;
  investment?: string;
  current_valuation?: string;
  performance?: string;
  link?: string;
  purpose_of_collection?: IPurpose[];
  tags?: string[];
  isAccordion?: boolean;
}

const AccordionProjectItem: React.FC<IProps> = ({ ...props }) => {
  const router = useRouter();
  const [isVisible, setIsVisible] = React.useState<boolean>(true);

  const { name, status, image, tags, link, isAccordion = false } = props;

  return (
    <>
      <div className={styles.ProjectItem}>
        <div
          className={`${styles.ProjectItem_Header} ${
            name.length > 15 ? styles.ProjectItem_HeaderWithLargeTitle : ''
          } ${!isAccordion ? styles.Accordion : ''}`}
          onClick={() => setIsVisible(!isVisible)}
        >
          <div className={styles.ProjectItem_Header_Icon}>{image}</div>

          <div className={styles.ProjectItem_Header_Title}>
            <span>{name}</span>
          </div>

          <div
            className={styles.ProjectItem_Header_Status}
            style={{
              backgroundColor:
                status == 'available'
                  ? '#defce9'
                  : status == 'Currently unavailable'
                  ? 'rgba(26, 26, 26, 0.05)'
                  : 'rgba(26, 26, 26, 0.05)',
            }}
          >
            <span
              style={{
                color:
                  status == 'available'
                    ? '#114c29'
                    : status == 'Currently unavailable'
                    ? 'rgba(26, 26, 26, 0.5'
                    : '#000000',
              }}
            >
              {status}
            </span>
          </div>

          {isAccordion ? (
            <div
              className={`${styles.ProjectItem_Header_Toggle} ${
                !isVisible ? styles.Open : ''
              }`}
            >
              <BaseIcon
                icon={ALL_ICONS.ARROW_2}
                viewBox="0 0 16 9"
                className={styles.ProjectItem_Header_Toggle_Icon}
              />
            </div>
          ) : null}
        </div>

        <div
          className={`${styles.ProjectItem_Content} ${
            isVisible && isAccordion ? styles.ProjectItem_Content_Hidden : ''
          }`}
        >
          <div className={styles.ProjectItem_Content_MoreInfo}>
            <div className={styles.ProjectItem_Content_MoreInfo_Info}>
              <div
                className={styles.ProjectItem_Content_MoreInfo_Info_Statistics}
              >
                <div className={styles.StatisticsItem}>
                  <div className={styles.StatisticsItem_Label}>
                    <span>Investment</span>
                  </div>
                  <div className={styles.StatisticsItem_Value}>$150,000.32</div>
                </div>

                <div className={styles.StatisticsItem}>
                  <div className={styles.StatisticsItem_Label}>
                    <span>Current valuation</span>
                  </div>
                  <div className={styles.StatisticsItem_Value}>$150,000.32</div>
                </div>

                <div className={styles.StatisticsItem}>
                  <div className={styles.StatisticsItem_Label}>
                    <span>Net profile/performance</span>
                  </div>
                  <div className={styles.StatisticsItem_Value}>19 %</div>
                </div>
              </div>

              <div
                className={styles.ProjectItem_Content_MoreInfo_Info_Collected}
              >
                <div
                  className={
                    styles.ProjectItem_Content_MoreInfo_Info_Collected_Label
                  }
                >
                  <span>Purpose of collection/collected</span>
                </div>

                <div
                  className={
                    styles.ProjectItem_Content_MoreInfo_Info_Collected_Graph
                  }
                >
                  <div className={styles.GraphLabels}>
                    <div
                      className={`${styles.GraphLabels_Item} ${styles.GraphLabels_Item_Initial}`}
                    >
                      200,000.00
                    </div>
                    <span className={styles.GraphLabels_Item_Slash}>/</span>
                    <div
                      className={`${styles.GraphLabels_Item} ${styles.GraphLabels_Item_Current}`}
                    >
                      120 000
                    </div>
                    <div
                      className={`${styles.GraphLabels_Item} ${styles.GraphLabels_Item_Total}`}
                    >
                      1,500,000.00
                    </div>
                  </div>

                  <div className={styles.GraphProgressBar}>
                    <span className={styles.GraphProgressBar_Item}></span>
                    <span className={styles.GraphProgressBar_Item}></span>
                  </div>

                  <div className={styles.GraphDate}>
                    <div className={styles.GraphDate_Label}>Round ends in</div>

                    <div className={styles.GraphDate_Tooltip}>
                      <BaseIcon
                        icon={ALL_ICONS.TOOLTIP}
                        viewBox="0 0 20 20"
                        className={styles.GraphDate_Tooltip_Icon}
                      />

                      <div className={styles.GraphDate_Tooltip_Tooltip}>
                        <span>31.02.2022</span>&nbsp;—&nbsp;
                        <span>12.00</span>
                      </div>
                    </div>

                    <div className={styles.GraphDate_Date}>
                      <span>42 days 18 hrs 51 min</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className={styles.ProjectItem_Content_MoreInfo_Footer}>
              <div className={styles.Tags}>
                {tags?.map((tag, index) => {
                  return (
                    <div className={styles.Tags_Item} key={index}>
                      <div className={styles.Tags_Item_Name}>{tag}</div>
                    </div>
                  );
                })}
              </div>

              <BaseButtonApp
                title="Details"
                type="primary"
                icon="to-details"
                size="small"
                className={styles.ToDetails}
                onClick={() =>
                  router.push(
                    `/app/${link}/projects/project-details/${name.toLocaleLowerCase()}`
                  )
                }
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AccordionProjectItem;
