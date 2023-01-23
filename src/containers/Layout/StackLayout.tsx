'use client';

import React, { useEffect, useState } from 'react';
import tw from 'twin.macro';
import { FaAngleLeft } from 'react-icons/fa';
import { useRouter } from 'next/navigation';

interface IStackLayout {
  children: React.ReactNode;
  useHeader?: boolean;
  headerOptions?: {
    title: string;
  };
}

const StackLayout: React.FC<IStackLayout> = ({ children, useHeader = false, headerOptions }) => {
  const router = useRouter();
  const [isLoaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <Wrapper>
      {isLoaded && (
        <>
          {useHeader && (
            <Header>
              <Back
                onClick={() => {
                  router.back();
                }}
              />
              <Title>{headerOptions?.title}</Title>
            </Header>
          )}
          {children}
        </>
      )}
    </Wrapper>
  );
};

export default StackLayout;

const Wrapper = tw.div`w-full h-full`;
const Header = tw.div`w-full h-80 border-b border-grey-700 flex items-center justify-center text-[2.4rem] text-grey-100`;
const Back = tw(
  FaAngleLeft,
)`absolute left-20 text-[3.2rem] cursor-pointer hover:text-grey-200 transition-colors duration-300 ease-in-out`;
const Title = tw.div`font-[500]`;
