/* eslint-disable turbo/no-undeclared-env-vars -- temp solution*/

import { validateDefaultLocale, validateEnvironment } from './validators';

// TODO: need to add to turbo config
export const AppConfig = {
  ENVIRONMENT: validateEnvironment(process.env.ENVIRONMENT)
    ? process.env.ENVIRONMENT
    : 'dev',

  DEFAULT_LOCALE: validateDefaultLocale(process.env.DEFAULT_LOCALE)
    ? process.env.DEFAULT_LOCALE
    : 'en',
};
