/* eslint-disable turbo/no-undeclared-env-vars -- local variables are injected by Vercel */
import {
  validateBaseApiUrl,
  validateDefaultLocale,
  validateEnvironment,
} from './validators';

export const AppConfig = {
  ENVIRONMENT: validateEnvironment(process.env.ENVIRONMENT)
    ? process.env.ENVIRONMENT
    : 'dev',
  DEFAULT_LOCALE: validateDefaultLocale(process.env.DEFAULT_LOCALE)
    ? process.env.DEFAULT_LOCALE
    : 'en',
  BASE_API_URL: validateBaseApiUrl(process.env.BASE_API_URL)
    ? process.env.BASE_API_URL
    : 'en',
};
