import 'shared/src/assets/styles/base/base.scss';

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'ERP-School',
  description: 'Admin Panel',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    // TODO: add theme selector
    <html className="theme-light" lang="en">
      <body>{children}</body>
    </html>
  );
}
