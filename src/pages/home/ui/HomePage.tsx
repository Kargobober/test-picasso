import React from 'react';
import { useGetPostsQuery } from 'shared/api';
import { CardsList } from 'widgets/cardsList';
import styles from './HomePage.module.css';

const HomePage = () => {
  const { data, isFetching } = useGetPostsQuery();

  return (
    <>
      <h2 className={styles.headingL2}>Главная</h2>
      <section className='p-1 pl-2 pr-2'>
        <h3 className={styles.headingL3}>Список постов</h3>
        <CardsList data={data} isFetching={isFetching} />
      </section>
    </>
  )
}

export default HomePage;
