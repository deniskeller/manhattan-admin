import React from 'react';
import { useRouter } from 'next/router';
import { Application } from '@layouts/index';
import { ProjectDetails } from 'components/pages/AdminProjects';

const UserProjectDetailsPage = () => {
  const router = useRouter();
  const query = router.query;
  const id = typeof query?.id === 'string' ? query?.id : '';
  return (
    <Application>
      <ProjectDetails id={id} />
    </Application>
  );
};

export default UserProjectDetailsPage;
