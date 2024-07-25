import Link from 'next/link';
import { Button } from './ui/button';

const MainNav = () => {
  return (
    <nav className='hidden lg:block'>
      <ul className='flex gap-4 items-center uppercase'>
        <li>
          <Link href='/'>Accueil</Link>
        </li>
        <li>
          <Link href='/'>Quiz</Link>
        </li>
        <li>
          <Link href='/'>Tarifs</Link>
        </li>
        <li className='pl-8'>
          <Button className='bg-yellow-300 hover:bg-yellow-200 text-stone-900 font-bold'>
            Se connecter
          </Button>
        </li>
      </ul>
    </nav>
  );
};

export default MainNav;
