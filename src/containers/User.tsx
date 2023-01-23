'use client';

import tw, { styled } from 'twin.macro';

import profile from '@/assets/images/sample/profile.png';
import Image from 'next/image';

const User = () => {
  return (
    <Wrapper>
      <TopView>
        <Item isActive>Solo</Item>
        <Item>Duo</Item>
      </TopView>
      <CoreInfo>
        <TierBox>
          <CircleBox>
            <ProfileImage src={profile} alt="profile" />
          </CircleBox>
        </TierBox>
        <StatBox>
          <LastTier>
            <span className="bronze">S22 Bronze 2</span>
            <span className="silver">S21 Silver 2</span>
          </LastTier>
          <TierText>UNRANKED</TierText>
          <div>0LP</div>
          <div>승률 0% (0승 0패)</div>
        </StatBox>
      </CoreInfo>
    </Wrapper>
  );
};

export default User;

const Wrapper = tw.div`p-20`;
const CoreInfo = styled.div`
  ${tw`w-full h-[24rem] rounded-[1rem] flex items-center overflow-hidden text-[#666666]`};
  box-shadow: 0px 0px 5px 1px rgba(0, 0, 0, 0.1);
`;
const TopView = tw.div`w-full h-[4rem] flex items-center justify-center mb-10`;
const Item = styled.div<{
  isActive?: boolean;
}>`
  ${tw`p-5 px-10 mx-5 cursor-pointer rounded-5 text-[#666666] border-1 border-grey-700 box-border`};

  ${({ isActive }) => isActive && tw`bg-[#E75757] text-white border-0`}
`;

const TierBox = styled.div`
  ${tw`w-[40%] h-full border-r-1 border-grey-700`}
  font-family: 'GmarketSans';
  font-weight: 600;
`;

const CircleBox = tw.div`w-[100%] h-full overflow-hidden bg-[#ffffff]`;
const ProfileImage = tw(Image)`w-full h-full object-cover`;

const StatBox = tw.div`w-[50%] h-full flex flex-col justify-center px-20`;

const LastTier = styled.div`
  ${tw`flex mb-10`}

  span {
    ${tw`text-[1.6rem] text-12 py-5 px-10 border-1 rounded-5`};
  }

  span + span {
    ${tw`ml-5`};
  }

  .bronze {
    ${tw`text-[#B68B5B]`};
  }

  .silver {
    ${tw`text-[#B6B6B6]`};
  }

  .gold {
    ${tw`text-[#B6B68B]`};
  }

  .platinum {
    ${tw`text-[#8BB6B6]`};
  }

  .diamond {
    ${tw`text-[#8B8BB6]`};
  }

  .master {
    ${tw`text-[#B68B8B]`};
  }

  .grandmaster {
    ${tw`text-[#B68B8B]`};
  }

  .challenger {
    ${tw`text-[#B68B8B]`};
  }
`;

const TierText = styled.div`
  ${tw`font-[700] text-[2.4rem]`};
  font-family: 'GmarketSans';
`;
