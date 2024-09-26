import { auth as middleware } from '@/auth';
import { NextResponse } from 'next/server';

const protectedRoutes = ['/users', '/conversations'];
export default middleware((req) => {
  // req.auth
  const { nextUrl } = req;
  const isLoggedIn = !!req.auth;

  const isProtectedRoutes = protectedRoutes.some((route) =>
    nextUrl.pathname.startsWith(route),
  );

  if (isProtectedRoutes) {
    if (!isLoggedIn) {
      return NextResponse.redirect(new URL('/', nextUrl));
    }
  }
});

// Optionally, don't invoke Middleware on some paths
export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
};
