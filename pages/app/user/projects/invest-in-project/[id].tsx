import React from 'react';
import { useRouter } from 'next/router';
import { Application } from '@layouts/index';
import { InvestInProject } from 'components/pages/UserProjects';

const InvestInProjectPage = () => {
  const router = useRouter();
  const query = router.query;
  const id = typeof query?.id === 'string' ? query?.id : '';
  return (
    <Application>
      <InvestInProject id={id} />
    </Application>
  );
};

export default InvestInProjectPage;
