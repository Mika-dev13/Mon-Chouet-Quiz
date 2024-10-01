import { redirect } from 'next/navigation';
import { signOut } from '../../auth';
import { Button } from './ui/button';

const SignOutButton = () => {
  return (
    <form
      action={async () => {
        'use server';
        await signOut({ redirectTo: '/' });
      }}
    >
      <Button type='submit' className='w-full'>
        Déconnexion
      </Button>
    </form>
  );
};

export default SignOutButton;
