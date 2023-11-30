import type { EnvironmentType } from './types';

export const validateEnvironment = (value: any): value is EnvironmentType => {
  const validEnvironments: EnvironmentType[] = ['dev', 'prod', 'stage'];

  if (validEnvironments.includes(value)) {
    return true;
  }

  throw new Error('ENV: Invalid environment');
};

export const validateBaseApiUrl = (value: any) => {
  if (typeof value === 'string' && value) {
    return true;
  }

  throw new Error('ENV: Invalid base api url');
};
