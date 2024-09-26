'use server';

import { db } from '@/app/libs/db';

export const getMessages = async (conversationId: string) => {
  try {
    const messages = await db.message.findMany({
      where: { conversationId },
      include: {
        sender: true,
        seen: true,
      },
      orderBy: {
        createdAt: 'asc',
      },
    });

    return messages;
  } catch (error) {
    return [];
  }
};
