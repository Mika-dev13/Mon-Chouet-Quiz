import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from './ui/dropdown-menu';

import { CircleUserIcon, User } from 'lucide-react';

import { Separator } from './ui/separator';
import Link from 'next/link';
import SignOutButton from './SignOutButton';
import { auth } from '../../auth';
import UserAvatar from './UserAvatar';

const UserNameMenu = async () => {
  const session = await auth();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className='flex items-center gap-2 hover:text-orange-600 p-1 transition-colors'>
        {/* <CircleUserIcon className='text-stone-600' width={24} /> */}
        <UserAvatar />
        <span className='capitalize'>{session && session.user?.name}</span>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem className='hover:bg-transparent'></DropdownMenuItem>
        <DropdownMenuItem className='hover:bg-transparent'>
          <Link
            href='/user-profile'
            className='font-bold hover:text-orange-600 transition-colors block w-full'
          >
            Mon profil
          </Link>
        </DropdownMenuItem>
        <Separator />
        <DropdownMenuItem>
          {/* <Button className='flex flex-1' onClick={() => logout()}>
            Déconnexion
          </Button> */}
          <SignOutButton />
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default UserNameMenu;
