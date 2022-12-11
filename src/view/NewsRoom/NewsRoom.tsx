import React, { useState } from 'react';
import styles from './NewsRoom.module.scss';
import { BaseButton, BaseContainer, BaseText, BaseTitle } from '@base/index';
import { Header, NewsItem } from '@content/index';
import { news } from '@services/index';
import { computedStr } from '@utils/index';

const NewsRoom = () => {
  return (
    <>
      <BaseContainer>


        <div className={styles.News}>
          {news?.map((item) => {
            return (
              <NewsItem
                key={item.id}
                id={item.id}
                image={item.image}
                date={item.date}
                author={item.author}
                title={item.title}
                description={item.description}
              />
            );
          })}
        </div>
        <BaseButton title="view more" type="empty" className={styles.Button} />
      </BaseContainer>
    </>
  );
};

export default NewsRoom;
