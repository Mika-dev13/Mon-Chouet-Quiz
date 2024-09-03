import { auth } from '../../auth';

// get user id from session
export const getUserId = async () => {
  const session = await auth();
  return session?.user?.id;
};

// get user name from session
export const getUserName = async () => {
  const session = await auth();
  return session?.user?.name;
};

// get user image from session

export const getUserImage = async () => {
  const session = await auth();
  return session?.user?.image;
};
