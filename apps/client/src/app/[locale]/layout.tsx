import 'shared/src/assets/styles/base/base.scss';

import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import type { FC, ReactNode } from 'react';

import { locales } from '../../i18n';

export const metadata: Metadata = {
  title: 'ERP-School',
  description:
    'EPG, formerly known as the English Playgroup, provides British international education to early years and primary school students.',
};

interface RootLayoutProps {
  children: ReactNode;
  params: {
    locale: string;
  };
}

const RootLayout: FC<RootLayoutProps> = ({ children, params: { locale } }) => {
  if (!locales.includes(locale)) notFound();

  return (
    // TODO: add theme selector
    <html className="theme-light" lang={locale}>
      <body>{children}</body>
    </html>
  );
};

export default RootLayout;
