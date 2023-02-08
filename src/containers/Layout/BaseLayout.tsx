'use client';

import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '@/redux/store';
import Header from '@/components/common/Header';
import tw from 'twin.macro';

const BaseLayout: React.FC<BaseLayoutProps> = ({ children, headerOptions }) => {
  const [isLoaded, setLoaded] = useState(false);
  const selectedMenu = useSelector<RootState, number>((state) => state.common.selectedMenu);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <Wrapper>
      {isLoaded && (
        <>
          {headerOptions?.isShow && <Header options={headerOptions} />}
          {children}
        </>
      )}
    </Wrapper>
  );
};

export default BaseLayout;

const Wrapper = tw.div`flex flex-col items-center justify-center w-full h-full`;
