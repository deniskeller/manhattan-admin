import React from 'react';
import { useRouter } from 'next/router';
import { Application } from '@layouts/index';
import { InvestorDetails } from 'components/pages/Investors';

const RequestsDetailPage = () => {
  const router = useRouter();
  const query = router.query;
  const id = typeof query?.id === 'string' ? query?.id : '';
  return (
    <Application>
      <InvestorDetails id={id} />
    </Application>
  );
};

export default RequestsDetailPage;
