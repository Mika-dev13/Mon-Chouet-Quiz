import { signOut } from '../../auth';
import { Button } from './ui/button';

const SignOutButton = () => {
  return (
    <form
      action={async () => {
        'use server';
        await signOut();
      }}
    >
      <Button type='submit'>Déconnexion</Button>
    </form>
  );
};

export default SignOutButton;
