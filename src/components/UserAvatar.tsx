import { auth } from '../../auth';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';

const UserAvatar = async () => {
  const session = await auth();

  if (!session) return null;

  return (
    <div className='ml-8 flex items-center gap-2 hover:text-orange-600 p-1 transition-colors'>
      <Avatar>
        <AvatarImage src={session.user?.image ?? ''} />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
      <span className='capitalize'>{session && session.user?.name}</span>
    </div>
  );
};

export default UserAvatar;
