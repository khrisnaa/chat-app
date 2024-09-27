import { getCurrentUser } from '@/app/actions/getCurrentUser';
import { db } from '@/app/libs/db';
import { NextResponse } from 'next/server';

export const POST = async (req: Request) => {
  try {
    const currentUser = await getCurrentUser();
    const body = await req.json();

    const { name, image } = body;

    if (!currentUser?.id) {
      return new NextResponse('Unauthorized', { status: 401 });
    }

    const updatedUser = await db.user.update({
      where: { id: currentUser.id },
      data: {
        image: image,
        name: name,
      },
    });

    return NextResponse.json(updatedUser);
  } catch (error) {
    return new NextResponse('Internal server error', { status: 500 });
  }
};
