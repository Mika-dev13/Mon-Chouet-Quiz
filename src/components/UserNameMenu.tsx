import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from './ui/dropdown-menu';

import { Separator } from './ui/separator';
import Link from 'next/link';
import SignOutButton from './SignOutButton';
import { auth } from '../../auth';
import UserAvatar from './UserAvatar';

const UserNameMenu = async () => {
  const session = await auth();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <UserAvatar />
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem className='hover:bg-transparent'>
          <Link
            href='/user-profile'
            className='font-bold hover:text-orange-600 transition-colors block w-full'
          >
            Mon profil
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem className='hover:bg-transparent'>
          <Link
            href={session ? `/dashboard/${session.user?.id}` : '/'}
            className='font-bold hover:text-orange-600 transition-colors block w-full'
          >
            Mon tableau de bord
          </Link>
        </DropdownMenuItem>
        <Separator />
        {/* <Button className='flex flex-1' onClick={() => logout()}>
            Déconnexion
          </Button> */}
        <div className='mt-4'>
          <SignOutButton />
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default UserNameMenu;
