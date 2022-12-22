import { useRouter } from 'next/router';
import React from 'react';
import styles from './ArticleItem.module.scss';

type Props = {
  id: number;
  image: string;
  status: string;
  date: string;
  author: string;
  header: string;
  description: string;
};

const ArticleItem: React.FC<Props> = ({
  id,
  image,
  status,
  date,
  author,
  header,
  description,
}) => {
  const router = useRouter();

  return (
    <div
      className={styles.ArticleItem}
      onClick={() => router.push('/app/admin/edit-article')}
    >
      <div
        className={styles.ArticleItem_Image}
        style={{
          backgroundImage: image
            ? `url(/images/image/${image})`
            : 'url(/images/image/main_header_bg.jpg)',
        }}
      >
        {status ? (
          <div
            className={styles.ArticleItem_Status}
            style={{ background: status == 'draft' ? '#BF8822' : '#027147' }}
          >
            <span>{status}</span>
          </div>
        ) : null}
      </div>

      <div className={styles.ArticleItem_Content}>
        <div className={styles.ArticleItem_Content_Info}>
          <div className={styles.ArticleItem_Content_Info_Date}>{date}</div>

          <div className={styles.ArticleItem_Content_Info_Dote}>
            <span>•</span>
          </div>

          <div className={styles.ArticleItem_Content_Info_Author}>{author}</div>
        </div>

        <div className={styles.ArticleItem_Content_Header}>
          <h3>{header}</h3>
        </div>

        <div className={styles.ArticleItem_Content_Description}>
          {description}
        </div>
      </div>
    </div>
  );
};

export default ArticleItem;
