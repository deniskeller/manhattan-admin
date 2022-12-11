import React from 'react';
import {LayoutLogin } from '@layouts/index';
import {Auth} from '@view/index';

const AuthPage = () => {
  return (
    <LayoutLogin alignCenter={true}>
      <Auth/>
    </LayoutLogin>
  );
};

export default AuthPage;