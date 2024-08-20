import { auth } from '../../auth';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';

const UserAvatar = async () => {
  const session = await auth();

  if (!session) return null;

  return (
    <div className='ml-8'>
      <Avatar>
        {/* <AvatarImage src='https://github.com/shadcn.png' /> */}
        <AvatarImage src={session.user?.image ?? ''} />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
    </div>
  );
};

export default UserAvatar;
