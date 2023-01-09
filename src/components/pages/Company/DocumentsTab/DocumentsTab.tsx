import React from 'react';
import styles from './DocumentsTab.module.scss';
import { BaseCheck, BaseIcon, BaseLabel } from '@base/index';
import { InfoRow } from '@content/index';
import { ALL_ICONS } from '@constants/icons';

type Props = {};

const DocumentsTab: React.FC<Props> = () => {
  return (
    <div className={styles.Documents}>
      {/* 1 */}
      <div className={styles.Documents_Item}>
        <div className={styles.Documents_Item_Title}>
          <span>System documents</span>
        </div>

        <div className={styles.Documents_Item_Row}>
          <div className={styles.Documents_Item_Row_Values}>
            <div className={styles.Documents_Item_Row_Values_Name}>
              <span>Investment agreement</span>
            </div>

            <div className={styles.Documents_Item_Row_Values_Date}></div>
          </div>

          <div className={styles.Documents_Item_Row_Actions}>
            <BaseIcon
              icon={ALL_ICONS.EYE}
              viewBox="0 0 22 16"
              className={styles.Documents_Item_Row_Actions_View}
            />

            <BaseIcon
              icon={ALL_ICONS.UPLOAD}
              viewBox="0 0 18 18"
              className={styles.Documents_Item_Row_Actions_Upload}
            />
          </div>
        </div>

        <div className={styles.Documents_Item_Row}>
          <div className={styles.Documents_Item_Row_Values}>
            <div className={styles.Documents_Item_Row_Values_Name}>
              <span>Contract with Manhattan VC</span>
            </div>

            <div className={styles.Documents_Item_Row_Values_Date}></div>
          </div>

          <div className={styles.Documents_Item_Row_Actions}>
            <BaseIcon
              icon={ALL_ICONS.EYE}
              viewBox="0 0 22 16"
              className={styles.Documents_Item_Row_Actions_View}
            />

            <BaseIcon
              icon={ALL_ICONS.UPLOAD}
              viewBox="0 0 18 18"
              className={styles.Documents_Item_Row_Actions_Upload}
            />
          </div>
        </div>

        <div className={styles.Documents_Item_Row}>
          <div className={styles.Documents_Item_Row_Values}>
            <div className={styles.Documents_Item_Row_Values_Name}>
              <span>Term & conditions</span>
            </div>

            <div className={styles.Documents_Item_Row_Values_Date}></div>
          </div>

          <div className={styles.Documents_Item_Row_Actions}>
            <BaseIcon
              icon={ALL_ICONS.EYE}
              viewBox="0 0 22 16"
              className={styles.Documents_Item_Row_Actions_View}
            />

            <BaseIcon
              icon={ALL_ICONS.UPLOAD}
              viewBox="0 0 18 18"
              className={styles.Documents_Item_Row_Actions_Upload}
            />
          </div>
        </div>
      </div>
      {/* 2 */}
      <div className={styles.Documents_Item}>
        <div className={styles.Documents_Item_Title}>
          <span>Financial reports</span>
        </div>

        <div className={styles.Documents_Item_Row}>
          <div className={styles.Documents_Item_Row_Values}>
            <div className={styles.Documents_Item_Row_Values_Name}>
              <span>Johnd Doe Inc. report. Now 2022</span>
            </div>

            <div className={styles.Documents_Item_Row_Values_Date}>
              14.10.2022
            </div>
          </div>

          <div className={styles.Documents_Item_Row_Actions}>
            <BaseIcon
              icon={ALL_ICONS.EYE}
              viewBox="0 0 22 16"
              className={styles.Documents_Item_Row_Actions_View}
            />

            <BaseIcon
              icon={ALL_ICONS.UPLOAD}
              viewBox="0 0 18 18"
              className={styles.Documents_Item_Row_Actions_Upload}
            />
          </div>
        </div>

        <div className={styles.Documents_Item_Row}>
          <div className={styles.Documents_Item_Row_Values}>
            <div className={styles.Documents_Item_Row_Values_Name}>
              <span>Screenshot documents 12.08.2022 at 18:15</span>
            </div>

            <div className={styles.Documents_Item_Row_Values_Date}>
              08.10.2022
            </div>
          </div>

          <div className={styles.Documents_Item_Row_Actions}>
            <BaseIcon
              icon={ALL_ICONS.EYE}
              viewBox="0 0 22 16"
              className={styles.Documents_Item_Row_Actions_View}
            />

            <BaseIcon
              icon={ALL_ICONS.UPLOAD}
              viewBox="0 0 18 18"
              className={styles.Documents_Item_Row_Actions_Upload}
            />
          </div>
        </div>

        <div className={styles.Documents_Item_Row}>
          <div className={styles.Documents_Item_Row_Values}>
            <div className={styles.Documents_Item_Row_Values_Name}>
              <span>Johnd Doe Inc. report. Now 2021</span>
            </div>

            <div className={styles.Documents_Item_Row_Values_Date}>
              28.09.2022
            </div>
          </div>

          <div className={styles.Documents_Item_Row_Actions}>
            <BaseIcon
              icon={ALL_ICONS.EYE}
              viewBox="0 0 22 16"
              className={styles.Documents_Item_Row_Actions_View}
            />

            <BaseIcon
              icon={ALL_ICONS.UPLOAD}
              viewBox="0 0 18 18"
              className={styles.Documents_Item_Row_Actions_Upload}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DocumentsTab;
