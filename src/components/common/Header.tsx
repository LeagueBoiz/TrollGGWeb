import tw, { styled } from 'twin.macro';
import { FaSearch } from 'react-icons/fa';
import { useRouter } from 'next/router';

const Header: React.FC<HeaderProps> = ({ options }) => {
  const router = useRouter();

  return (
    <Container>
      <Wrap>
        <div tw="text-white font-bold text-[3.6rem] font-gmarketSans">Troll.GG</div>

        <SearchBar>
          <SearchInput />
          <SearchIcon
            onClick={() => {
              router.push('/user');
            }}
          />
        </SearchBar>
      </Wrap>
    </Container>
  );
};

export default Header;

const Container = tw.div`w-full h-[7rem] bg-[#CF586D]`;
const Wrap = tw.div`w-[120rem] h-full mx-auto flex items-center justify-between`;

const SearchBar = tw.div`w-[40rem] h-[4rem] rounded-[1.rem] relative flex items-center`;

const SearchIcon = tw(
  FaSearch,
)`text-[#999999] text-[1.4rem] absolute right-5 mr-[1rem] cursor-pointer transition-colors duration-300`;
const SearchInput = styled.input`
  ${tw`
    bg-[#eeeeee] w-full h-full rounded-[1rem] outline-none px-[1.2rem] transition-colors duration-300 px-[1.8rem] border-[#ffffff]
    focus:bg-[#ffffff] focus:border-1 focus:border-[#dddddd]
  `}

  &:focus + svg {
    ${tw`text-[#3e7b8e]`}
  }
`;
