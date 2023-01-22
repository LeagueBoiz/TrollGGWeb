'use client';

import { setSelectedMenu } from '@/redux/slice/commonSlice';
import { useLayoutEffect } from 'react';
import { useDispatch } from 'react-redux';
import tw from 'twin.macro';

const Profile = () => {
  const dispatch = useDispatch();

  useLayoutEffect(() => {
    dispatch(setSelectedMenu(2));
  }, [dispatch]);

  return <Wrapper>Profile</Wrapper>;
};

export default Profile;

const Wrapper = tw.div`w-full h-full`;
