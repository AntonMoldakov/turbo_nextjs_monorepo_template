/* eslint-disable turbo/no-undeclared-env-vars -- local variables are injected by Vercel */
import { validateBaseApiUrl, validateEnvironment } from './validators';

export const AppConfig = {
  ENVIRONMENT: validateEnvironment(process.env.ENVIRONMENT) ? process.env.ENVIRONMENT : 'dev',

  BASE_API_URL: validateBaseApiUrl(process.env.BASE_API_URL) ? process.env.BASE_API_URL : 'en',
};
