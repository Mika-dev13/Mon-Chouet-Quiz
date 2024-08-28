import DashboardNav from '@/components/DashboardNav';
import { auth } from '../../../auth';

const layout = async ({ children }: { children: React.ReactNode }) => {
  const session = await auth();

  if (!session?.user) return null;

  const fisrtName = session?.user?.name?.split(' ')[0] ?? '';
  return (
    <>
      <div className='flex'>
        <header className='lg:min-h-screen lg:min-w-48 bg-violet-100'>
          <DashboardNav session={session} />
        </header>
        <main className='mt-12 px-12 flex-1'>
          <div className='mb-8'>
            <h1 className='font-semibold text-xl '>Mon tableau de board</h1>
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
