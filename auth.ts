import NextAuth from 'next-auth';
import GitHub from 'next-auth/providers/github';
import Google from 'next-auth/providers/google';
import Credentials from 'next-auth/providers/credentials';
import { db } from '@/app/libs/db';
import bcrypt from 'bcryptjs';
import { PrismaAdapter } from '@auth/prisma-adapter';

export const { auth, handlers, signIn, signOut } = NextAuth({
  providers: [
    GitHub,
    Google,
    Credentials({
      credentials: {
        email: { label: 'Email', type: 'email' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
        const { email, password } = credentials;

        if (!email || !password) {
          throw new Error('Invalid credentials');
        }

        const user = await db.user.findUnique({
          where: { email: String(email) },
        });

        if (!user || !user.password) {
          throw new Error('Invalid credentials');
        }

        const passwordMatch = await bcrypt.compare(
          String(password),
          user.password,
        );

        if (!passwordMatch) {
          throw new Error('Invalid credentials');
        }

        return user;
      },
    }),
  ],
  adapter: PrismaAdapter(db),
  pages: {
    signIn: '/',
    signOut: '/',
  },
  session: {
    strategy: 'jwt',
  },
});
