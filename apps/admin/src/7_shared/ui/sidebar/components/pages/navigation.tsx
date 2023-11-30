import type { PageLink } from '@shared/types';
import classNames from 'classnames';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import type { FC } from 'react';

import styles from './pages.module.scss';

interface PagesProps {
  links: PageLink[];
}

export const Navigation: FC<PagesProps> = ({ links }) => {
  const pathname = usePathname();

  return (
    <ul className={styles.navigation}>
      {links.map((link, index) => {
        const isActive = pathname === link.href;

        return (
          <Link href={link.href} key={index}>
            <li className={classNames(styles.navigation_link, isActive && styles.active)}>
              {link.icon}
              {link.title}
            </li>
          </Link>
        );
      })}
    </ul>
  );
};
