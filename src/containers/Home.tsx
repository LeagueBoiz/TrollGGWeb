'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import tw, { styled } from 'twin.macro';

import BaseLayout from './Layout/BaseLayout';

import { FaSearch } from 'react-icons/fa';

import iconTroll from '@/assets/svg/icons/icon_troll.svg';
import BottomNavigation from '@/components/mobile/BottomNavigation';

const Home = () => {
  const router = useRouter();
  const [isLoad, setLoad] = useState(false);

  useEffect(() => {
    // setTimeout(() => {
    //   router.push('/home');
    // }, 500);
  }, [router]);

  useEffect(() => {
    setLoad(true);
  }, []);

  return (
    <BaseLayout bgColor="black">
      {isLoad && (
        <>
          <Image src={iconTroll} alt="troll" />
          <Logo>
            <span>Troll</span>.<span>GG</span>
          </Logo>
          <SearchBar>
            <SearchInput />
            <SearchIcon />
          </SearchBar>
        </>
      )}
    </BaseLayout>
  );
};

export default Home;

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
const SearchBar = tw.div`w-[25rem] h-[3.6rem] bg-white rounded-[1.8rem] mt-[2rem] relative flex items-center`;
const SearchInput = tw.input`w-full h-full rounded-[1.8rem] outline-none px-[1.2rem]`;
const SearchIcon = tw(FaSearch)`text-[#3E7B8E] text-[1.8rem] absolute right-0 mr-[1rem]`;
const OtherContent = tw.div`w-[25rem] mx-auto text-white mt-[1.6rem] text-center underline`;
