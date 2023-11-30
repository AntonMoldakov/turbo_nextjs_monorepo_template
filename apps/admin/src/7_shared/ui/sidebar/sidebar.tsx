'use client';
import type { FC } from 'react';

import type { PageLink } from '../../types';
import { Logo, Navigation } from './components';
import styles from './sidebar.module.scss';

interface SidebarProps {
  sidebarLinks: PageLink[];
}

export const Sidebar: FC<SidebarProps> = ({ sidebarLinks }) => {
  return (
    <aside className={styles.sidebar}>
      <Logo />
      <Navigation links={sidebarLinks} />
    </aside>
  );
};
