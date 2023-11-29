import { AppConfig } from '@shared/config';
import createMiddleware from 'next-intl/middleware';

import { locales } from './i18n';

export default createMiddleware({
  locales,
  defaultLocale: AppConfig.DEFAULT_LOCALE,
});

export const config = {
  // Skip all paths that should not be internationalized. This example skips
  // certain folders and all pathnames with a dot (e.g. favicon.ico)
  matcher: ['/', '/(ar|en)/:path*'],
};
