'use client';

import { TailSpin } from 'react-loader-spinner';
import tw from 'twin.macro';

const Loading = () => {
  return (
    <Wrapper>
      <TailSpin height="36" width="36" color="green" ariaLabel="loading" />
    </Wrapper>
  );
};

export default Loading;

const Wrapper = tw.div`w-full h-full flex items-center justify-center`;
