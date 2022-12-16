import { BaseButtonApp } from '@base/index';
import React, { useState } from 'react';
import s from './Articles.module.scss';
import { Pagination } from '@beetbarrel/teido-core';

const Articles = () => {
  const [page, setPage] = useState(1);
  return (
    <div className={s.Articles}>
      <div className={s.Articles_Header}>
        <div className={s.Articles_Header_Sorting}></div>

        <BaseButtonApp
          title="New article"
          type="primary"
          size="small"
          icon="new-article"
          className={s.Articles_Header_Button}
        ></BaseButtonApp>
      </div>

      <div className={s.Articles_Content}></div>

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
