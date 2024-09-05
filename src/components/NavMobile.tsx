import Link from 'next/link';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from './ui/sheet';
import { MenuIcon } from 'lucide-react';
import { Separator } from './ui/separator';
import { Button } from './ui/button';

const NavMobile = () => {
  return (
    <div className='md:hidden'>
      <Sheet>
        <SheetTrigger>
          <MenuIcon />
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
            {/* <span className='flex gap-4 items-center'>
            <CircleUserRound />
            John Doe
          </span> */}
            <SheetTitle className='mb-8'>Mon Chouet&apos; quiz</SheetTitle>
          </SheetHeader>
          <Separator className='mb-4' />
          <SheetDescription>
            <ul className='capitalize space-y-4 text-center'>
              <li>
                <Link href='/'>Accueil</Link>
              </li>
              <li>
                <Link href='/themes'>Quiz</Link>
              </li>
              <li>
                <Link href='/'>Tarifs</Link>
              </li>
            </ul>
            <Separator className='my-4' />
            <Button className='w-full'>Connexion</Button>
          </SheetDescription>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default NavMobile;
