import React, { useEffect, useRef, useState } from 'react';
import { Application } from '@layouts/index';
import { EditProject } from 'components/pages/AdminProjects';
import { useRouter } from 'next/router';

const UserProjectDetailsPage = () => {
  const router = useRouter();
  const query = router.query;
  const id = typeof query?.id === 'string' ? query?.id : '';

  return (
    <Application>
      <EditProject id={id} />
    </Application>
  );
};

export default UserProjectDetailsPage;
