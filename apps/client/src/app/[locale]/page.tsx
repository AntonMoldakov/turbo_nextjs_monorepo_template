import { useTranslations } from 'next-intl';
import { Button, InputDefault, Select } from 'shared';

import styles from './page.module.scss';

export default function Home() {
  const t = useTranslations('shared');
  return (
    <>
      <div>
        <h1 className="page">{t('test.title')}</h1>
        <h1 className={styles.title}>Client</h1>
        <Button text="Click Me" />
      </div>
      <br />
      <div>
        <InputDefault />
      </div>
      <br />
      <div>
        <br />
        <Select
          options={[
            { label: 'Text', value: 'Text' },
            { label: 'Text', value: 'Text' },
            { label: 'Text', value: 'Text' },
            { label: 'Text', value: 'Text' },
            { label: 'Text', value: 'Text' },
          ]}
          placeholder="Placeholder"
        />
      </div>
      <br />
    </>
  );
}
