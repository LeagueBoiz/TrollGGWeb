import StackLayout from '@/containers/Layout/StackLayout';
import User from '@/containers/User';

const UserServer = () => {
  return (
    <StackLayout
      useHeader={true}
      headerOptions={{
        title: 'You Gosu',
      }}
    >
      <User />
    </StackLayout>
  );
};

export default UserServer;
