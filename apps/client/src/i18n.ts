import type { IntlConfig } from 'next-intl';
import { getRequestConfig } from 'next-intl/server';

export const locales = ['en', 'ar'];

type RequestConfig = Omit<IntlConfig, 'locale'>;

interface GetRequestConfigParams {
  locale: string;
}

type GetRequestConfigCallback = (
  params: GetRequestConfigParams,
) => RequestConfig | Promise<RequestConfig>;

const requestConfig: GetRequestConfigCallback = getRequestConfig(async ({ locale }) => ({
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access -- import
  messages: (await import(`../public/locales/${locale}/index.ts`)).default,
}));

export default requestConfig;
