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
          <Link href='/quizzes'>Quiz</Link>
        </li>
        <li>
          <Link href='/'>Tarifs</Link>
        </li>
        <li className='pl-8'>
          <Button
            asChild
            className='bg-yellow-300 hover:bg-yellow-200 text-stone-900 font-bold'
          >
            <Link href='/login'>Connexion</Link>
          </Button>
        </li>
      </ul>
    </nav>
  );
};

export default MainNav;
