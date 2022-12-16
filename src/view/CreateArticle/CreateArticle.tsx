import { BaseButtonApp } from '@base/index';
import React, { useState } from 'react';
import s from './CreateArticle.module.scss';
import { useRouter } from 'next/router';
import { Input } from '@tw/components/Input';

const CreateArticle = () => {
  const router = useRouter();
  return (
    <div className={s.Articles}>
      <div className={s.Articles_Header}>
        <BaseButtonApp
          title="New article"
          type="primary"
          size="small"
          icon="new-article"
          className={s.Articles_Header_Button}
          onClick={() => {
            router.push('/auth');
          }}
        />
      </div>

      <Input
        label="City"
        placeholder="City"
        required
        value={'sdfsd'}
        onChange={(e: any) => {}}
      />
    </div>
  );
};

export default CreateArticle;
