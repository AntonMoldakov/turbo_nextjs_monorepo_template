import { deleteCookie, getCookie, setCookie } from 'cookies-next';

export const StorageService = {
  setItem(key: string, value: any): void {
    setCookie(key, JSON.stringify({ value }));
  },

  getItem<T = string>(key: string): T | null {
    const data = getCookie(key);

    if (data) {
      return JSON.parse(data).value as T;
    }

    return null;
  },

  deleteItem(key: string) {
    deleteCookie(key);
  },
};
