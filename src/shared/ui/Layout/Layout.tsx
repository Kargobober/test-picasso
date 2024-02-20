import { ReactNode } from 'react';
import styles from './Layout.module.css';
import { Outlet } from 'react-router';
import Contacts from '../Contacts/Contacts';

type TProps = {
  headerSlot?: ReactNode;
};

const Layout = (props: TProps) => {
  return (
    <div className={styles.root}>
      {props.headerSlot}
      <div className={styles.container}>
        <div className={styles.content}>
          <Outlet />
        </div>
      </div>
      <footer className={styles.footer}>
        <span className={styles.call}>
          Let's work together!
        </span>
        <Contacts all />
      </footer>
    </div>
  )
}

export default Layout;
