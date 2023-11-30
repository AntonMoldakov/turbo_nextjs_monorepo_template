import { ROUTES_PATHS, UNAUTHORIZED_ROUTES_PATHS } from '@shared/config';
import { StorageKey } from '@shared/services';
import { type NextRequest, NextResponse } from 'next/server';

const getHasAccess = (pathname: string, accessToken?: string): boolean => {
  if (accessToken) {
    return true;
  }

  return UNAUTHORIZED_ROUTES_PATHS.some((path) => pathname.startsWith(path));
};

export const middleware = (request: NextRequest) => {
  const accessToken = request.cookies.get(StorageKey.AccessToken)?.value;
  const { pathname } = request.nextUrl;

  const hasAccess = getHasAccess(pathname, accessToken);

  if (!hasAccess) {
    return NextResponse.redirect(new URL(ROUTES_PATHS.authentication.signIn, request.url));
  }

  return NextResponse.next();
};

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
};
