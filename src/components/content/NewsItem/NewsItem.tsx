import React from 'react';
import styles from './NewsItem.module.scss';
import { BaseText } from '@base/index';
import { useRouter } from 'next/router';

interface Props {
  id: number;
  image: string;
  date: string;
  author: string;
  title: string;
  description: string;
}

const NewsItem: React.FC<Props> = ({
  id,
  image,
  date,
  author,
  title,
  description,
}) => {
  //обрезание строки
  const computedText = (text: string) => {
    if (text.length > 120) {
      const newStr = text.substring(0, 120);
      return newStr + '...';
    }
    return text;
  };

  const router = useRouter();
  const goToNews = (id: number) => {
    router.push('/news_room/' + id);
  };
  return (
    <>
      <div className={styles.NewItem} onClick={() => goToNews(id)}>
        <div
          className={styles.NewItem_Image}
          style={{
            backgroundImage: image
              ? `url(/images/image/${image})`
              : 'url(/images/image/main_header_bg.png)',
          }}
        ></div>

        <div className={styles.NewItem_NewsInfo}>
          <span className={styles.NewItem_NewsInfo_Date}>{date}</span>
          &nbsp;•&nbsp;
          <span className={styles.NewItem_NewsInfo_Author}>{author}</span>
        </div>

        <div className={styles.NewItem_Title}>{title}</div>

        <div className={styles.NewItem_Description}>
          <BaseText>{computedText(description)}</BaseText>
        </div>
      </div>
    </>
  );
};

export default NewsItem;
