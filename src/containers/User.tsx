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
          <UserName>You Gosu</UserName>
          <div>0LP</div>
          <div>승률 0% (0승 0패)</div>
        </StatBox>
      </CoreInfo>
      <Spec>
        <Title>STATUS</Title>
        <Box></Box>
      </Spec>
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
  ${tw`p-5 px-15 mx-5 cursor-pointer rounded-5 text-[#666666] border-1 border-grey-700 box-border`};

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
    ${tw`text-[#67a1c6]`};
  }

  .master {
    ${tw`text-[#b38bb6]`};
  }

  .grandmaster {
    ${tw`text-[#7936ac]`};
  }

  .challenger {
    ${tw`text-[#2d35cf]`};
  }
`;

const TierText = tw.div`font-gmarketSans`;
const UserName = tw.div`font-[700] text-[2.4rem] font-gmarketSans`;
const Spec = styled.div``;
const Title = tw.div`font-gmarketSans my-20 mb-10 text-24`;
const Box = tw.div`border-1 border-grey-300 h-[20rem]`;
