import { db } from '@/app/libs/db';
import { NextResponse } from 'next/server';
import bcrypt from 'bcryptjs';

export const POST = async (req: Request) => {
  try {
    const body = await req.json();
    const { name, email, password } = body;
    if (!name || !email || !password) {
      return new NextResponse('Missing info', { status: 400 });
    }

    const existingUser = await db.user.findUnique({ where: { email } });
    if (existingUser) {
      return new NextResponse('Email alredy in used', { status: 400 });
    }

    const hashedPassword = await bcrypt.hash(password, 12);

    const user = await db.user.create({
      data: { email, name, password: hashedPassword },
    });

    return NextResponse.json(user);
  } catch (error) {
    console.log('REGISTER_ERROR => ', error);
    return NextResponse.json('Internal server error', { status: 500 });
  }
};
