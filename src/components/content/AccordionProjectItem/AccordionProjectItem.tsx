import React, { ReactNode } from 'react';
import { BaseIcon } from '@base/index';
import styles from './AccordionProjectItem.module.scss';
import { ALL_ICONS } from '@constants/icons';

interface IPurpose {
  [key: string]: string;
}

interface IProps {
  image?: JSX.Element;
  name?: string;
  status?: string;
  investment?: string;
  current_valuation?: string;
  performance?: string;
  purpose_of_collection?: IPurpose[];
  tags?: string[];
}

const AccordionProjectItem: React.FC<IProps> = ({ ...props }) => {
  const [isVisible, setIsVisible] = React.useState<boolean>(true);

  const { name, status, image } = props;

  return (
    <>
      <div className={styles.ProjectItem}>
        <div
          className={styles.ProjectItem_Header}
          onClick={() => setIsVisible(!isVisible)}
        >
          <div className={styles.ProjectItem_Header_Icon}>{image}</div>

          <div className={styles.ProjectItem_Header_Title}>{name}</div>

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
        </div>

        <div
          className={`${styles.ProjectItem_Content} ${
            isVisible ? styles.ProjectItem_Content_Hidden : ''
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
                  <div className={styles.Graph}>
                    <div className={styles.Graph}></div>
                    <div className={styles.Graph}></div>
                    <div className={styles.Graph}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AccordionProjectItem;
