import * as AuthUtils from '../../auth';
import { Button } from './ui/button';
import googleIcon from '../../public/google-icon.svg';
import Image from 'next/image';

const GoogleSingInButton = () => {
  return (
    <form
      action={async () => {
        'use server';
        console.log(typeof AuthUtils.signIn);
        await AuthUtils.signIn('google', { redirectTo: '/' });
      }}
    >
      <Button type='submit' variant={'outline'} className='mt-6 w-full'>
        <Image src={googleIcon} alt='' width={20} className='mr-2' />
        Google
      </Button>
    </form>
  );
};

export default GoogleSingInButton;
