import { useTranslations } from 'next-intl';
import { Button } from 'shared';

import styles from './page.module.scss';

export default function Home() {
  const t = useTranslations('shared');
  return (
    <div>
      <h1 className="page">{t('test.title')}</h1>
      <h1 className={styles.title}>Client</h1>
      <Button>Click Me!</Button>
    </div>
  );
}
