import Image from 'next/image';
import logo from '../logo.svg';
import LoginForm from '@/forms/loginForm';
import { Button } from '@/components/ui/button';
import googleIcon from '../../../public/google-icon.svg';

const LoginPage = () => {
  return (
    <main className='grid grid-cols-2 h-screen'>
      <div className='bg-sky-300 h-full w-full flex flex-col gap-8 items-center justify-center'>
        <Image src={logo} alt='logo chouet quiz' width={450} />
        <h2 className='font-cursive text-5xl uppercase'>Chouet&apos; Quizz</h2>
      </div>
      <div className='grid place-content-center'>
        <div className='text-center mb-8'>
          <h1 className='text-2xl font-bold'>Créez votre compte</h1>
          <p>Remplissez le formulaire pour créer votre compte</p>
        </div>
        <LoginForm />
        <div className='relative mt-8'>
          <div className='absolute inset-0 flex items-center'>
            <span className='w-full border-t-2'></span>
          </div>
          <div className='relative flex justify-center text-xs uppercase'>
            <span className='bg-background px-2 text-muted-foreground'>
              ou continuez avec
            </span>
          </div>
        </div>
        <Button variant={'outline'} className='mt-6'>
          <Image src={googleIcon} alt='' width={20} className='mr-2' />
          Google
        </Button>
      </div>
    </main>
  );
};

export default LoginPage;
