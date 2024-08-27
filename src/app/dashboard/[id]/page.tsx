import Header from '@/components/Header';
import { auth } from '../../../../auth';

const UserDashboardPage = async () => {
  const session = await auth();
  return (
    <>
      <Header />
      <main className='lg:w-[1080px] mx-auto mt-16'>
        <h1>Mon tableau de board</h1>
        <section></section>
      </main>
    </>
  );
};

export default UserDashboardPage;
