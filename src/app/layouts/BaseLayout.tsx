import React from 'react';
import Layout from 'shared/ui/components/Layout/Layout';
import styles from './BaseLayout.module.css';
import Contacts from 'shared/ui/components/Contacts/Contacts';

const BaseLayout = () => {
  return (
    <Layout
      headerSlot={
        <header className={styles.header}>
          <h1 className='text text_size_l ml-6'>Тестовое задание от 18.02.2024</h1>
        </header>
      }
      footerSlot={
        <footer className={styles.footer}>
        <span className={styles.call}>
          Давайте работать вместе 😉
        </span>
        <Contacts all />
      </footer>
      }
    />
  )
}

export default BaseLayout;
