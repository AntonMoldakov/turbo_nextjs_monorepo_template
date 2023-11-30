import { StorageKey, StorageService } from '@shared/services';

import { client } from '../client';

export const signOut = async () => {
  await client.clearStore();
  StorageService.deleteItem(StorageKey.AccessToken);
};
