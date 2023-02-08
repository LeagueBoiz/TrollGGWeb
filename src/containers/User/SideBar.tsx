import Image from 'next/image';
import tw, { styled, TwStyle } from 'twin.macro';

import profile from '@/assets/images/sample/profile.png';

interface SideBarProps {
  options: {
    containerStyle: TwStyle;
  };
}

const SideBar: React.FC<SideBarProps> = ({ options }) => {
  return (
    <Container css={[options?.containerStyle]}>
      <Info>
        <div tw="w-[40%] h-full border-r-1 border-grey-700 font-gmarketSans font-[600]">
          <div tw="w-[100%] h-full overflow-hidden bg-[#ffffff]">
            <Image src={profile} alt="profile" tw="w-full h-full object-cover" />
          </div>
        </div>
        <div tw="w-[50%] h-full flex flex-col justify-center px-20">
          <div tw="font-gmarketSans">UNRANKED</div>
          <div tw="font-[700] text-[2.4rem] font-gmarketSans">You Gosu</div>
          <div>0LP</div>
          <div>승률 0% (0승 0패)</div>
        </div>
      </Info>
      <Status></Status>
    </Container>
  );
};

export default SideBar;

const Container = tw.div``;
const Info = tw.div`h-[14rem] rounded-[1rem] flex items-center overflow-hidden text-[#666666] shadow-[0px 0px 5px 1px rgba(0,0,0,0.1)]`;
const Status = tw.div`mt-[3rem] h-[20rem] bg-[#FAFAFA] rounded-[1rem] flex items-center overflow-hidden text-[#666666] shadow-[0px 0px 5px 1px rgba(0,0,0,0.1)]`;
