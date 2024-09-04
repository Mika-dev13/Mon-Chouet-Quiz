import prisma from '@/lib/db';
import { verifySession } from './verifySession';
import { cache } from 'react';

// get user id from session
export const getUserId = cache(async () => {
  const session = await verifySession();
  try {
    const userId = prisma.user.findUnique({
      where: {
        id: session.userId,
      },
      select: {
        id: true,
      },
    });
    return userId;
  } catch (error) {
    console.log('Error in getUserId', error);
    return null;
  }
});

// get user name from session

export const getUserName = cache(async () => {
  const session = await verifySession();
  try {
    const userName = prisma.user.findUnique({
      where: {
        id: session.userId,
      },
      select: {
        name: true,
      },
    });
    return userName;
  } catch (error) {
    console.log('Error in getUserName', error);
    return null;
  }
});

// get user image from session
export const getUserImage = cache(async () => {
  const session = await verifySession();
  try {
    const userImage = prisma.user.findUnique({
      where: {
        id: session.userId,
      },
      select: {
        image: true,
      },
    });
    return userImage;
  } catch (error) {
    console.log('Error in getUserImage', error);
    return null;
  }
});
