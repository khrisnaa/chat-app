'use server';

import { db } from '@/app/libs/db';
import { auth } from '@/auth';

export const getUsers = async () => {
  const session = await auth();

  if (!session?.user?.email) {
    return [];
  }

  try {
    const users = await db.user.findMany({
      orderBy: { createdAt: 'desc' },
      where: {
        NOT: {
          email: session.user.email,
        },
      },
    });

    return users;
  } catch (error) {
    return [];
  }
};
