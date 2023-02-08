'use client';

import { useLayoutEffect } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import tw, { styled } from 'twin.macro';

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
        <SearchIcon
          onClick={() => {
            router.push('/user');
          }}
        />
      </SearchBar>
    </Wrapper>
  );
};

export default Home;

const Wrapper = tw.div`w-full h-[100vh] flex flex-col justify-center items-center pb-50`;

const Logo = styled.div.attrs({
  className: 'font-gmarket',
})`
  ${tw`text-black text-[3.6rem] mt-[1rem]`};

  span:nth-of-type(1) {
    ${tw`text-[#E75757]`};
  }

  span:nth-of-type(2) {
    ${tw`text-[#3E7B8E]`}
  }
`;

const SearchBar = tw.div`w-[40rem] h-[5rem] rounded-[2.5rem] mt-[2rem] relative flex items-center`;

const SearchIcon = tw(
  FaSearch,
)`text-[#999999] text-[1.8rem] absolute right-5 mr-[1rem] cursor-pointer transition-colors duration-300`;
const SearchInput = styled.input`
  ${tw`
    bg-[#eeeeee] w-full h-full rounded-[1.8rem] outline-none px-[1.2rem] transition-colors duration-300 px-[1.8rem] border-[#ffffff]
    focus:bg-[#ffffff] focus:border-1 focus:border-[#dddddd]
  `}

  &:focus + svg {
    ${tw`text-[#3e7b8e]`}
  }
`;
