import { AppConfig, ROUTES_PATHS, UNAUTHORIZED_ROUTES_PATHS } from '@shared/config';
import { StorageKey } from '@shared/services';
import { type NextRequest } from 'next/server';
import createIntlMiddleware from 'next-intl/middleware';

import { locales } from './i18n';

const getLocaleFromPathname = (pathname: string) => {
  const locale = pathname.split('/')[1];
  const hasLocale = locales.some((availableLocale) => availableLocale === locale);
  const localePath = hasLocale ? `/${locale}` : null;

  return localePath;
};

const getHasAccess = (pathname: string, accessToken?: string): boolean => {
  if (accessToken) {
    return true;
  }

  return UNAUTHORIZED_ROUTES_PATHS.some((path) => pathname.startsWith(path));
};

export default (request: NextRequest) => {
  const accessToken = request.cookies.get(StorageKey.AccessToken)?.value;
  const { pathname } = request.nextUrl;

  const localePath = getLocaleFromPathname(pathname);

  if (localePath) {
    const hasAccess = getHasAccess(pathname.replace(localePath, ''), accessToken);

    if (!hasAccess) {
      request.nextUrl.pathname = ROUTES_PATHS.authentication.signIn;
    }
  }
  return createIntlMiddleware({
    locales,
    defaultLocale: AppConfig.DEFAULT_LOCALE,
  })(request);
};

export const config = {
  // Skip all paths that should not be internationalized. This example skips
  // certain folders and all pathnames with a dot (e.g. favicon.ico)
  matcher: ['/', '/(ar|en)/:path*'],
};
