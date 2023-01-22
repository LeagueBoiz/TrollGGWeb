'use client';

import { useEffect, useLayoutEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import tw, { styled } from 'twin.macro';

import BaseLayout from './Layout/BaseLayout';

import { FaSearch } from 'react-icons/fa';

import iconTroll from '@/assets/svg/icons/icon_troll.svg';
import { useDispatch } from 'react-redux';
import { setSelectedMenu } from '@/redux/slice/commonSlice';

const Home = () => {
  const router = useRouter();
  const dispatch = useDispatch();

  useLayoutEffect(() => {
    dispatch(setSelectedMenu(1));
  }, [dispatch]);

  return (
    <Wrapper>
      <Image src={iconTroll} alt="troll" />
      <Logo>
        <span>Troll</span>.<span>GG</span>
      </Logo>
      <SearchBar>
        <SearchInput />
        <SearchIcon />
      </SearchBar>
    </Wrapper>
  );
};

export default Home;

const Wrapper = tw.div`w-full h-full bg-grey-100 flex flex-col justify-center items-center`;

const Logo = styled.div.attrs({
  className: 'font-gmarket',
})`
  ${tw`text-white text-[3.6rem] mt-[1rem]`};

  span:nth-of-type(1) {
    ${tw`text-[#E75757]`};
  }

  span:nth-of-type(2) {
    ${tw`text-[#3E7B8E]`}
  }
`;

const SearchBar = tw.div`w-[25rem] h-[3.6rem] rounded-[1.8rem] mt-[2rem] relative flex items-center`;
const SearchInput = tw.input`bg-[#dddddd] w-full h-full rounded-[1.8rem] outline-none px-[1.2rem] focus:bg-[#ffffff] transition-colors duration-300 px-[1.8rem]`;
const SearchIcon = tw(FaSearch)`text-[#3E7B8E] text-[1.8rem] absolute right-0 mr-[1rem] cursor-pointer`;
