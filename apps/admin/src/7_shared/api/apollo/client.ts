import { ApolloClient, createHttpLink, from, InMemoryCache } from '@apollo/client';
import { AppConfig } from '@shared/config/environment';
import { StorageKey, StorageService } from '@shared/services';

import { cacheOption } from './options.ts/cache-option';

const customFetch = async (uri: string, options?: any) => {
  const accessToken = StorageService.getItem(StorageKey.AccessToken);
  const language = 'en';

  if (accessToken && !options.headers.authorization) {
    options.headers.authorization = `Bearer ${accessToken}`;
  }

  options.headers.locale = language.toLowerCase() || 'en';

  const response = await fetch(uri, options);

  return response;
};

const httpLink = createHttpLink({
  uri: AppConfig.BASE_API_URL,
  fetch: customFetch,
});

export const client = new ApolloClient({
  link: from([httpLink]),
  cache: new InMemoryCache(cacheOption),
  name: 'erp-school',
});
