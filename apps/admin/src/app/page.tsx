import { Button } from 'shared';

import styles from './page.module.scss';

export default function Home() {
  return (
    <div>
      <h1 className={styles.title}>Admin</h1>

      <Button>Click Me!</Button>
    </div>
  );
}
