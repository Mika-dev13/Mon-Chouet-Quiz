import { auth } from '../../auth';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';

const UserAvatar = async () => {
  const session = await auth();

  if (!session) return null;

  return (
    <div className='flex items-center gap-2 ml-8 capitalize'>
      <Avatar>
        <AvatarImage src='https://github.com/shadcn.png' />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
      {session.user?.name}
    </div>
  );
};

export default UserAvatar;
