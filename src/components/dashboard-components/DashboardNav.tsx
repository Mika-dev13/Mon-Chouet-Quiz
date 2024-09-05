import Link from 'next/link';
import { Home, LayoutDashboard, SquareCheckBig, Users } from 'lucide-react';
import { Separator } from '@/components/ui/separator';
import { Button } from '@/components/ui/button';

const DashboardNav = () => {
  return (
    <nav className='hidden lg:flex flex-col items-center justify-between lg:min-h-screen lg:h-full pt-12'>
      <div className='space-y-2'>
        <Link
          href={`/dashboard`}
          className='flex items-center gap-2 hover:bg-violet-200 p-2 rounded-md transition-colors'
        >
          <Home width={20} strokeWidth={1} />
          <span className='text-sm'>Accueil</span>
        </Link>
        <Link
          href={`/dashboard/quizzes`}
          className='flex items-center gap-2 hover:bg-violet-200 p-2 rounded-md transition-colors'
        >
          <SquareCheckBig width={20} strokeWidth={1} />
          <span className='text-sm'>Quiz</span>
        </Link>
        <Link
          href={`/dashboard/themes`}
          className='flex items-center gap-2 hover:bg-violet-200 p-2 rounded-md transition-colors'
        >
          <LayoutDashboard width={20} strokeWidth={1} />
          <span className='text-sm'>Thèmes</span>
        </Link>
        <Link
          href={`/dashboard/spaces`}
          className='flex items-center gap-2 hover:bg-violet-200 p-2 rounded-md transition-colors'
        >
          <Users width={20} strokeWidth={1} />
          <span className='text-sm'>Spaces</span>
        </Link>
      </div>
      <div className='space-y-4 mb-4 w-full px-4'>
        <Separator decorative style={{ backgroundColor: '#c4b5fd' }} />
        <Button asChild className='w-full'>
          <Link href='/'>Quitter</Link>
        </Button>
      </div>
    </nav>
  );
};

export default DashboardNav;
