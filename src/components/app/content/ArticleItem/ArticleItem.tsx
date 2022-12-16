import { Input } from '@tw/components/Input';
import React from 'react';
import styles from './ArticleItem.module.scss';

type Props = {
  image: string;
  date: string;
  author: string;
  header: string;
  description: string;
};

const ArticleItem: React.FC<Props> = ({
  image,
  date,
  author,
  header,
  description,
}) => {
  return (
    <div className={styles.ArticleItem}>
      <div
        className={styles.ArticleItem_Image}
        style={{
          backgroundImage: image
            ? `url(/images/image/${image})`
            : 'url(/images/image/main_header_bg.jpg)',
        }}
      ></div>

      <div className={styles.ArticleItem_Content}>
        <div className={styles.ArticleItem_Content_Info}>
          <div className={styles.ArticleItem_Content_Info_Date}>09.01.2022</div>

          <div className={styles.ArticleItem_Content_Info_Dote}>
            <span>•</span>
          </div>

          <div className={styles.ArticleItem_Content_Info_Author}>
            Dmitriy Bunin
          </div>
        </div>

        <div className={styles.ArticleItem_Content_Header}>
          <h3>Start a blog to reach your creative peak</h3>
        </div>

        <div className={styles.ArticleItem_Content_Description}>
          Placeholder for body text. Enter text into this container. Body text
          hugs tex..
        </div>

        {/* <Input
          label="City"
          placeholder="City"
          required
          value={'sdfsd'}
          onChange={(e: any) => {}}
        /> */}
      </div>
    </div>
  );
};

export default ArticleItem;
