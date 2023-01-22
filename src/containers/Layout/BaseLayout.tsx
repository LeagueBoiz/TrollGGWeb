'use client';

import React, { useEffect, useState } from 'react';
import tw, { css, styled } from 'twin.macro';
import { FaHome, FaUser, FaClipboardList } from 'react-icons/fa';
import Link from 'next/link';
import { useSelector } from 'react-redux';
import { RootState } from '@/redux/store';

interface BaseLayoutProps {
  children: React.ReactNode;
}

const BaseLayout: React.FC<BaseLayoutProps> = ({ children }) => {
  const [isLoaded, setLoaded] = useState(false);
  const selectedMenu = useSelector<RootState, number>((state) => state.common.selectedMenu);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <Wrapper>
      {isLoaded && (
        <>
          {children}
          <BottomNavigation activeMenuNumber={selectedMenu}>
            <Item>
              <Link href="/board">
                <FaClipboardList />
              </Link>
            </Item>
            <Line />
            <Item>
              <Link href="/">
                <FaHome />
              </Link>
            </Item>
            <Line />
            <Item>
              <Link href="/profile">
                <FaUser />
              </Link>
            </Item>
          </BottomNavigation>
        </>
      )}
    </Wrapper>
  );
};

export default BaseLayout;

const Wrapper = styled.div`
  ${tw`flex flex-col items-center justify-center w-full h-full pb-[80px]`};
`;

const BottomNavigation = styled.div<{
  activeMenuNumber: number;
}>`
  ${tw`fixed bottom-0 flex items-center justify-evenly w-full bg-white h-80 text-[3rem] text-grey-500`};

  ${({ activeMenuNumber }) => {
    return css`
      .item:nth-of-type(${activeMenuNumber * 2 + 1}) {
        ${tw`text-[#3E7B8E]`}
      }
    `;
  }};
`;

const Line = styled.div.attrs({
  className: 'line',
})`
  ${tw`w-1 h-full bg-grey-800`}
`;
const Item = styled.div.attrs({
  className: 'item',
})``;
