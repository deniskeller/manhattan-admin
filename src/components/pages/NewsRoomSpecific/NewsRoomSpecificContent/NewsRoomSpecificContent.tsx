import React, { useEffect, useState } from 'react';
import styles from './NewsRoomSpecificContent.module.scss';
import { BaseContainer, BaseText, BaseTitle } from '@base/index';
import { useRouter } from 'next/router';
import { news } from '@services/index';

const NewsRoomSpecificContent = () => {
  const router = useRouter();
  const { id } = router.query;

  //обрезание строки
  const computedText = (text: string) => {
    if (text.length > 30) {
      const newStr = text.substring(0, 30);
      return newStr + '...';
    }
    return text;
  };

  //тащим новый пост с базы
  const newItem = news.filter((item) => item.id === Number(id));

  return (
    <>
      <BaseContainer>
        <div className={styles.News}>
          <BaseTitle className={styles.News_Title} type="h2">
            {newItem[0]?.title}
          </BaseTitle>

          <div className={styles.News_Date}>{newItem[0]?.date}</div>

          <div
            className={styles.News_Image}
            style={{
              backgroundImage: newItem[0]?.image
                ? `url(/images/image/${newItem[0].image})`
                : 'url(/images/image/main_header_bg.png)',
            }}
          ></div>

          <div className={styles.News_Description}>
            <BaseText>
              I love using the five-paragraph model for writing. I can find
              three points to argue for or exemplify just about any topic
              imaginable.
            </BaseText>
            <br />
            <BaseText>
              Cats are good pets because they’re good companions, clean, and
              easy to care for. Jaws is a classic film because of its acting,
              its cinematography, and its musical score. Three examples of the
              U.S. checks and balances are its executive branch, the legislative
              branch, and judicialbranches.
            </BaseText>
          </div>

          <div className={styles.News_Quote}>
            <p>
              “As natural selection acts solely by accumulating slight,
              successive, favourable variations, it can produce no great or
              sudden modification.”
            </p>
            <br />
            <span>— Darwin, 1859</span>
          </div>

          <div className={styles.News_List}>
            <div className={styles.News_List_Title}>Example of a list</div>

            <div className={styles.News_List_Items}>
              <li>
                Bullet Lists: use when order of listed items is not important;
              </li>
              <li>
                Numbered Lists: use when order is important, such as steps in
                instructions;
              </li>
              <li>
                In-sentence Lists: use when you want to maintain sentence
                structure and paragraphing, and have a short list (2-4 items);
              </li>
              <li>
                Labelled Lists: use when the listed items require some
                explanation or amplification;{' '}
              </li>
              <li>
                Nested Lists: use when listed items have sub-lists (list within
                a list).
              </li>
            </div>
          </div>

          <div className={styles.News_Author}>by&nbsp;{newItem[0]?.author}</div>

          <div className={styles.News_Navbar}>
            <div className={styles.News_Navbar_Prev}>
              <i className={styles.IconArrow}></i>
              <div className={styles.Name}>
                <span>
                  {computedText('Start a blog to reach your creative peak')}
                </span>
              </div>
            </div>
						
            <div className={styles.News_Navbar_Next}>
              <i className={styles.IconArrow}></i>
              <div className={styles.Name}>
                <span>
                  {computedText(
                    'New product introduction. Special invitation only'
                  )}
                </span>
              </div>
            </div>
          </div>
        </div>
      </BaseContainer>
    </>
  );
};

export default NewsRoomSpecificContent;
