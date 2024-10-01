import 'server-only';

import { auth } from '../../auth';
import { redirect } from 'next/navigation';
import { cache } from 'react';

export const verifySession = cache(async () => {
  const session = await auth();

  // if (!session?.user.id) redirect('/');
  // if (!session?.user.id) return { isAuth: false };
  if (!session?.user) return { isAuth: false, userId: undefined };

  return { isAuth: true, userId: session?.user.id };
});
