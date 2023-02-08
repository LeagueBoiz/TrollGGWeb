import tw from 'twin.macro';

const Content = () => {
  return (
    <Container>
      <GameTypes>
        <GameTypeItem tw="bg-[#1c65be] text-[#ffffff] shadow-[0 0 2px 0 #2fa1cad0]">일반게임</GameTypeItem>
        <GameTypeItem>솔로랭크</GameTypeItem>
        <GameTypeItem>자유랭크</GameTypeItem>
      </GameTypes>
      <GamePlayerStatus>
        <div tw="w-[30rem] h-full border-r-1 border-[#dddddd] flex flex-col items-center justify-center relative">
          <span tw="text-[2rem] font-normal text-[#999999]">RANK</span>
          <div tw="text-[20rem] font-bold leading-[1] text-[#c8c8c8]">F</div>
        </div>
      </GamePlayerStatus>
    </Container>
  );
};

export default Content;

const Container = tw.div`w-full font-gmarketSans`;

const GameTypes = tw.ul`flex gap-[1rem]`;
const GameTypeItem = tw.li`p-5 px-10 rounded-5 text-12 cursor-pointer shadow-[0 0 2px 0 rgba(0,0,0,0.3)]`;

const GamePlayerStatus = tw.div`mt-[2rem] w-full h-[400px] bg-[#fafafa] shadow-[0 0 2px 0 rgba(0,0,0,0.3)] rounded-[1rem] flex`;
