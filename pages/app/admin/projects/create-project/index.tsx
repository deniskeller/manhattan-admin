import React, { useEffect, useRef, useState } from 'react';
import { Application } from '@layouts/index';
import { CreateProject } from 'components/pages/AdminProjects';

const UserProjectDetailsPage = () => {
  //логика для липких кнопок
  const scrollContainer = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [scroll, setScroll] = useState(0);

  const scrollFunction = () => {
    // if (scrollContainer.current?.clientHeight > 900) {
    //   setIsVisible(true);
    // } else {
    //   setIsVisible(false);
    // }
  };

  const onScroll = () => {
    // console.log('kek1111');
    const scrollY = window.scrollY;
    const scrollTop = scrollContainer.current?.scrollTop;
    console.log(
      `onScroll, window.scrollY: ${scrollY} myRef.scrollTop: ${scrollTop}`
    );

    // setScroll(scrollTop);
  };

  useEffect(() => {
    // console.log('scrollContainer: ', scrollContainer.current);
    // console.log('scroll: ', scroll);
  }, [scroll]);

  return (
    <Application ref={scrollContainer} onScroll={onScroll}>
      <CreateProject />
    </Application>
  );
};

export default UserProjectDetailsPage;
