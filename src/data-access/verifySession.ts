import 'server-only';

import { auth } from '../../auth';
import { redirect } from 'next/navigation';
import { cache } from 'react';

export const verifySession = cache(async () => {
  const session = await auth();

  if (!session?.user.id) redirect('/');

  return { isAuth: true, userId: session.user.id };
});
