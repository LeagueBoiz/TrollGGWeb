import BaseLayout from '@/containers/Layout/BaseLayout';
import User from '@/containers/User';
import Head from 'next/head';

const UserPage = () => {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <BaseLayout
        headerOptions={{
          isShow: true,
        }}
      >
        <User />
      </BaseLayout>
    </>
  );
};

export default UserPage;
