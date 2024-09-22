import { db } from '@/app/libs/db';
import { auth } from '@/auth';

export const getCurrentUser = async () => {
  try {
    const session = await auth();
    if (!session?.user?.email) {
      return null;
    }

    const currentUser = await db.user.findUnique({
      where: { email: session.user.email },
    });
    if (!currentUser) {
      return null;
    }

    return currentUser;
  } catch (error) {
    return null;
  }
};
