import { ReactNode } from 'react';
import styles from './Layout.module.css';
import { Outlet } from 'react-router';
import Contacts from '../Contacts/Contacts';

type TProps = {
  headerSlot?: ReactNode;
  footerSlot?: ReactNode;
};

const Layout = (props: TProps) => {
  return (
    <>
      {props.headerSlot}
      <main className={styles.main}>
        <Outlet />
      </main>
      {props.footerSlot}
    </>
  )
}

export default Layout;
