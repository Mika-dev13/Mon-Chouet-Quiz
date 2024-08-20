import Link from 'next/link';
import { Button } from './ui/button';
import { auth } from '../../auth';
import UserNameMenu from './UserNameMenu';

const MainNav = async () => {
  const session = await auth();

  return (
    <nav className='hidden lg:block'>
      <ul className='flex gap-4 items-center uppercase'>
        <li>
          <Link href='/'>Accueil</Link>
        </li>
        <li>
          <Link href='/themes'>Quiz</Link>
        </li>
        <li>
          <Link href='/'>Tarifs</Link>
        </li>
        <li className='pl-8'>
          {!session ? (
            <Button
              asChild
              className='bg-yellow-300 hover:bg-yellow-200 text-stone-900 font-bold'
            >
              <Link href='/login'>Connexion</Link>
            </Button>
          ) : (
            <UserNameMenu />
          )}
        </li>
      </ul>
    </nav>
  );
};

export default MainNav;
