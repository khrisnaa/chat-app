import { NextApiRequest, NextApiResponse } from 'next';
import { pusherServer } from '@/app/libs/pusher';
import { auth } from '@/auth';

export const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const session = await auth();

  if (session?.user?.email) {
    return res.status(401);
  }

  const socketId = req.body.socket_id;
  const channel = req.body.channel_name;
  const data = {
    user_id: session?.user?.email as string,
  };

  const authResponse = pusherServer.authorizeChannel(socketId, channel, data);

  return res.send(authResponse);
};
