'use client';

import tw, { styled } from 'twin.macro';
import Content from './User/Content';
import SideBar from './User/SideBar';

const User = () => {
  return (
    <Container>
      <Wrap>
        <SideBar
          options={{
            containerStyle: tw`w-[400px] shrink-0`,
          }}
        />
        <Content />
      </Wrap>
    </Container>
  );
};

export default User;

const Container = tw.div`w-full p-[3rem]`;
const Wrap = tw.div`flex w-[120rem] mx-auto gap-[3rem]`;
