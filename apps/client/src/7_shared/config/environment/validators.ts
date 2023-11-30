import type { AppLocaleType, EnvironmentType } from './types';

export const validateEnvironment = (value: any): value is EnvironmentType => {
  const validEnvironments: EnvironmentType[] = ['dev', 'prod', 'stage'];

  if (validEnvironments.includes(value)) {
    return true;
  }

  throw new Error('ENV: Invalid environment');
};

export const validateDefaultLocale = (value: any): value is AppLocaleType => {
  const validLocales: AppLocaleType[] = ['en', 'ar'];

  if (validLocales.includes(value)) {
    return true;
  }

  throw new Error('ENV: Invalid default locale');
};

export const validateBaseApiUrl = (value: any) => {
  if (typeof value === 'string' && value) {
    return true;
  }

  throw new Error('ENV: Invalid base api url');
};
