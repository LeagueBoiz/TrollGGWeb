import React from 'react';
import tw, { css, styled } from 'twin.macro';
import { FaHome, FaUser, FaClipboardList } from 'react-icons/fa';

interface BaseLayoutProps {
  children: React.ReactNode;
  bgColor?: 'black' | 'white';
}

const BaseLayout: React.FC<BaseLayoutProps> = ({ children, bgColor = 'white' }) => {
  return (
    <Wrapper bgColor={bgColor}>
      {children}
      <BottomNavigation activeMenuNumber={1}>
        <Item>
          <FaClipboardList />
        </Item>
        <Line />
        <Item>
          <FaHome />
        </Item>
        <Line />
        <Item>
          <FaUser />
        </Item>
      </BottomNavigation>
    </Wrapper>
  );
};

export default BaseLayout;

const Wrapper = styled.div<{
  bgColor: 'black' | 'white';
}>`
  ${tw`flex flex-col items-center justify-center w-full h-full pb-[80px]`};

  ${({ bgColor }) => (bgColor === 'black' ? tw`bg-grey-100` : tw`bg-white`)};
`;

const BottomNavigation = styled.div<{
  activeMenuNumber: 0 | 1 | 2;
}>`
  ${tw`fixed bottom-0 flex items-center justify-evenly w-full bg-white h-80 text-[3rem] text-grey-500`};

  ${({ activeMenuNumber }) => {
    return css`
      .item:nth-of-type(${activeMenuNumber * 2 + 1}) {
        ${tw`text-[#3E7B8E] text-[4rem]`}
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
