import { links } from '@shared/lib/constants';
import { Sidebar } from '@shared/ui/sidebar';
import type { FC, ReactNode } from 'react';
import { TextButton } from 'shared/src/ui/buttons/text-button/text-button';

import styles from './layout.module.scss';

interface LayoutProps {
  title: string;
  children: ReactNode;
  titleButton?: string;
  iconButton?: ReactNode;
  onClick?: () => void;
}

export const Layout: FC<LayoutProps> = ({ children, title, titleButton, iconButton, onClick }) => {
  return (
    <div className={styles.layout_wrapper}>
      <div className={styles.layout}>
        <div className={styles.sidebarWrapper}>
          <Sidebar sidebarLinks={links} />
        </div>
        <div className={styles.main_wrapper}>
          <header className={styles.header}>
            <h1 className={styles.header_title}>{title}</h1>
            {onClick && titleButton ? (
              <TextButton rightIcon={iconButton} size="large" text={titleButton} />
            ) : null}
          </header>
          <main className={styles.main}>{children}</main>
        </div>
      </div>
    </div>
  );
};
