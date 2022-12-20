import { BaseButtonApp, BaseSortSelect } from '@base/index';
import React, { useState } from 'react';
import s from './Articles.module.scss';
import { Pagination } from '@beetbarrel/teido-core';
import { ArticleItem } from 'components/app/content';
import { useRouter } from 'next/router';

const mock_articles = [
  {
    id: 1,
    image: 'main_header_bg.jpg',
    date: '09.01.2022',
    author: 'Dmitriy Bunin',
    header: 'Start a blog to reach your creative peak',
    description:
      'Placeholder for body text. Enter text into this container. Body text hugs tex..',
  },
  {
    id: 2,
    image: 'main_header_bg.jpg',
    date: '09.01.2022',
    author: 'Dmitriy Bunin 2',
    header: 'Start a blog to reach your creative peak',
    description:
      'Placeholder for body text. Enter text into this container. Body text hugs tex..',
  },
  {
    id: 3,
    image: 'main_header_bg.jpg',
    date: '09.01.2022',
    author: 'Dmitriy Bunin 3',
    header: 'Start a blog to reach your creative peak',
    description:
      'Placeholder for body text. Enter text into this container. Body text hugs tex..',
  },
  {
    id: 4,
    image: 'main_header_bg.jpg',
    date: '09.01.2022',
    author: 'Dmitriy Bunin 4',
    header: 'Start a blog to reach your creative peak',
    description:
      'Placeholder for body text. Enter text into this container. Body text hugs tex..',
  },
  {
    id: 5,
    image: 'main_header_bg.jpg',
    date: '09.01.2022',
    author: 'Dmitriy Bunin 5',
    header: 'Start a blog to reach your creative peak',
    description:
      'Placeholder for body text. Enter text into this container. Body text hugs tex..',
  },
];

const Articles = () => {
  const [page, setPage] = useState(1);
  const [sortValue, setSortValue] = useState('');
  const router = useRouter();
  return (
    <div className={s.Articles}>
      <div className={s.Articles_Header}>
        <BaseSortSelect
          onChange={(val: string) => setSortValue(val)}
          className={s.Articles_Header_Sorting}
          options={[
            {
              label: 'All articles',
              value: 'all-articles',
            },
            {
              label: 'Puplished articles',
              value: 'puplished-articles',
            },
            {
              label: 'Archieved articles',
              value: 'archieved-articles',
            },
          ]}
          label={'All articles'}
        />

        <BaseButtonApp
          title="New article"
          type="primary"
          size="small"
          icon="new-article"
          className={s.Articles_Header_Button}
          onClick={() => {
            router.push('/app/admin/create-article');
          }}
        />
      </div>

      <div className={s.Articles_Content}>
        {mock_articles?.map((item, index) => {
          return (
            <ArticleItem
              key={index}
              id={item.id}
              image={item.image}
              date={item.date}
              author={item.author}
              header={item.header}
              description={item.description}
            />
          );
        })}
      </div>

      <div className={s.Articles_Pagination}>
        {/* сделать логику пагинации */}
        <Pagination
          currentPage={page}
          totalPages={2}
          onPageChange={(page) => {
            setPage(page);
          }}
        />
      </div>
    </div>
  );
};

export default Articles;
