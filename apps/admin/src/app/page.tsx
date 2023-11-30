'use client';
import { Layout } from '@widgets/layout';
import React, { useState } from 'react';
import { Button, Modal } from 'shared';

import styles from './page.module.scss';

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Layout title="Platform settings" titleButton="View history">
      <div>
        <Modal
          close={() => {
            setIsOpen(false);
          }}
          isOpen={isOpen}
          title="My title">
          <>
            <div
              style={{
                width: '100%',
                maxWidth: '512px',
                backgroundColor: 'black',
                marginBottom: '10px',
              }}>
              My content
            </div>
            <div
              style={{
                width: '100%',
                maxWidth: '512px',
                backgroundColor: 'black',
                marginBottom: '10px',
              }}>
              My content
            </div>
          </>
        </Modal>
        <h1 className={styles.title}>Admin</h1>
        <Button
          onClick={() => {
            setIsOpen(true);
          }}
          text="Open Modal!"
        />
      </div>

      <div />
    </Layout>
  );
}
