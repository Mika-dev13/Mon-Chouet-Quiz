import Link from 'next/link';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '../ui/sheet';
import {
  Home,
  LayoutDashboard,
  MenuIcon,
  SquareCheckBig,
  Users,
} from 'lucide-react';
import { Separator } from '../ui/separator';
import { Button } from '../ui/button';
import Image from 'next/image';
import logo from '../../../public/logo.svg';

const NavMobileDashboard = () => {
  return (
    <div className='lg:hidden flex justify-between px-4 py-2'>
      <Link href='/'>
        <Image src={logo} alt='logo' width={40} height={70} />
      </Link>
      <Sheet>
        <SheetTrigger>
          <MenuIcon />
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle className='mb-4'>Mon Chouet&apos; quiz</SheetTitle>
          </SheetHeader>
          <Separator className='mb-4' />
          <SheetDescription>
            <ul className='capitalize space-y-4'>
              <li>
                <Link
                  href={`/dashboard`}
                  className='flex items-center gap-2 hover:bg-violet-200  rounded-md transition-colors'
                >
                  <Home width={20} strokeWidth={1} />
                  <span className='text-sm'>Accueil</span>
                </Link>
              </li>
              <li>
                <Link
                  href={`/dashboard/quizzes`}
                  className='flex items-center gap-2 hover:bg-violet-200  rounded-md transition-colors'
                >
                  <Home width={20} strokeWidth={1} />
                  <span className='text-sm'>Quiz</span>
                </Link>
              </li>

              <li>
                <Link
                  href={`/dashboard/themes`}
                  className='flex items-center gap-2 hover:bg-violet-200  rounded-md transition-colors'
                >
                  <LayoutDashboard width={20} strokeWidth={1} />
                  <span className='text-sm'>Thèmes</span>
                </Link>
              </li>
              <li>
                <Link
                  href={`/dashboard/spaces`}
                  className='flex items-center gap-2 hover:bg-violet-200 rounded-md transition-colors'
                >
                  <Users width={20} strokeWidth={1} />
                  <span className='text-sm'>Spaces</span>
                </Link>
              </li>
            </ul>
            <div className='space-y-4 mb-4 w-full '>
              <Separator
                decorative
                style={{ backgroundColor: '#c4b5fd' }}
                className='my-4'
              />
              <Button asChild className='w-full'>
                <Link href='/'>Quitter</Link>
              </Button>
            </div>
          </SheetDescription>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default NavMobileDashboard;
