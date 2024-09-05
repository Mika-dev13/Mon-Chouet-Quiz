import DashboardNav from '@/components/dashboard-components/DashboardNav';
import NavMobileDashboard from '@/components/dashboard-components/NavMobileDashboard';

import { getUserName } from '@/data-access/user';

const layout = async ({ children }: { children: React.ReactNode }) => {
  const userName = await getUserName();

  const fisrtName = userName?.name?.split(' ')[0] ?? '';
  return (
    <>
      <div className='lg:flex'>
        <header className='lg:block lg:min-h-screen lg:min-w-48 bg-violet-100'>
          <DashboardNav />
          <NavMobileDashboard />
        </header>
        <main className='mt-12 px-4 lg:px-12 flex-1'>
          <div className='mb-8'>
            <h1 className='font-semibold lg:text-xl uppercase'>
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
