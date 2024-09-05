import DashboardNav from '@/components/dashboard-components/DashboardNav';
import { getUserName } from '@/data-access/user';

const layout = async ({ children }: { children: React.ReactNode }) => {
  const userName = await getUserName();

  const fisrtName = userName?.name?.split(' ')[0] ?? '';
  return (
    <>
      <div className='flex'>
        <header className='lg:min-h-screen lg:min-w-48 bg-violet-100'>
          <DashboardNav />
        </header>
        <main className='mt-12 px-12 flex-1'>
          <div className='mb-8'>
            <h1 className='font-semibold text-xl uppercase'>
              Mon tableau de board
            </h1>
            <p>
              Content de te voir{' '}
              <span className='capitalize'>{fisrtName} !</span> 🎉{' '}
            </p>
          </div>
          <>{children}</>
        </main>
      </div>
    </>
  );
};

export default layout;
