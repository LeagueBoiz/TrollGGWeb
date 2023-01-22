'use client';

import { setSelectedMenu } from '@/redux/slice/commonSlice';
import { useLayoutEffect } from 'react';
import { useDispatch } from 'react-redux';
import tw from 'twin.macro';

const Board = () => {
  const dispatch = useDispatch();

  useLayoutEffect(() => {
    dispatch(setSelectedMenu(0));
  }, [dispatch]);

  return <Wrapper>Board</Wrapper>;
};

export default Board;

const Wrapper = tw.div`w-full h-full`;
