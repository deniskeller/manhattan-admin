import React from 'react';
import {LayoutLogin } from '@layouts/index';
import {ChangePassword} from '@view/index';
import {useRouter} from "next/router";

const ChangePasswordPage = () => {
  const router = useRouter()
  const query = router.query;
  const id = typeof query?.id === "string" ? query?.id : "";
  return (
    <LayoutLogin alignCenter={true}>
      <ChangePassword id={id}/>
    </LayoutLogin>
  );
};

export default ChangePasswordPage;