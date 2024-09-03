import { getUserImage, getUserName } from '@/data-access/user';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';

const UserAvatar = async () => {
  const userName = await getUserName();
  const userImage = await getUserImage();

  return (
    <div className='ml-8 flex items-center gap-2 hover:text-orange-600 p-1 transition-colors'>
      <Avatar>
        <AvatarImage src={userImage} />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
      <span className='capitalize'>{userName}</span>
    </div>
  );
};

export default UserAvatar;
