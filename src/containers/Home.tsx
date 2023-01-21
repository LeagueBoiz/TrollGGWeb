'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import tw, { styled } from 'twin.macro';

import iconTroll from '@/assets/svg/icons/icon_troll.svg';

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
    <Wrapper>
      {isLoad && (
        <>
          <Image src={iconTroll} alt="troll" />
          <Logo>
            <span>Troll</span>.<span>GG</span>
          </Logo>
          <SearchBar>
            <SearchInput />
          </SearchBar>
          <OtherContent>
            <span>Go to other content</span>
          </OtherContent>
        </>
      )}
    </Wrapper>
  );
};

export default Home;

const Wrapper = tw.div`w-full h-full bg-grey-100 flex flex-col items-center justify-center`;
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
const SearchBar = tw.div`w-[30rem] h-[3.6rem] bg-white rounded-[1.8rem] mt-[2rem]`;
const SearchInput = tw.input`w-full h-full rounded-[1.8rem] outline-none px-[1.2rem]`;
const OtherContent = tw.div`w-[30rem] mx-auto text-white mt-[1.6rem] text-center underline`;
