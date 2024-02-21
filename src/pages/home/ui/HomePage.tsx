import { useEffect, useMemo, useRef, useState } from 'react';
import { TPost, useGetPostsQuery } from 'shared/api';
import { CardsList } from 'widgets/cardsList';
import styles from './HomePage.module.css';

const HomePage = () => {
  const refList = useRef<HTMLOListElement>(null);

  const postHeight = 105;
  const limit = 6;
  const pageSize = postHeight * limit;
  const postsLength = 100;
  const postsPages = Math.ceil(postsLength / limit);
  const [currentPage, setCurrentPage] = useState(1);

  const lastResult = useGetPostsQuery({ page: currentPage - 1, limit }, { skip: currentPage === 1 }); // don't fetch pages before 0
  const currentResult = useGetPostsQuery({ page: currentPage, limit });
  const nextResult = useGetPostsQuery({ page: currentPage + 1, limit });

  const combined = useMemo(() => {
    const arr: TPost[] = new Array(limit * (currentPage + 1));
    for (const data of [lastResult.data, currentResult.data, nextResult.data]) {
      if (data) {
        arr.splice(data[0].id, data.length, ...data);
      }
    }
    return arr;
  }, [pageSize, currentPage, lastResult.data, currentResult.data, nextResult.data]);

  const handleScroll = (evt: any) => {
    if(evt.target.scrollTop === 0) {
      if (evt.target.children[0].textContent.indexOf('1:') === 1) return; // возможность просматривать первый элемент списка
      setCurrentPage(prev => prev > 1 ? prev - 1 : 1);
      setTimeout(() => refList.current!.scrollBy(0, 100));
    } else if (evt.target.scrollTop > 600) {
      setCurrentPage(prev => (prev + 1) < postsPages ? (prev + 1) : prev);
    }
  };

  useEffect(() => {
    refList.current?.addEventListener('scroll', handleScroll);
    return () => {
      refList.current?.removeEventListener('scroll', handleScroll);
    }
  }, []);

  return (
    <>
      <h2 className={styles.headingL2}>Главная</h2>
      <section className={`p-1 pl-2 pr-2 ${styles.section}`}>
        <h3 className={styles.headingL3}>Список постов</h3>
        <CardsList data={combined} isFetching={lastResult.isFetching && currentResult.isFetching && nextResult.isFetching} ref={refList} />
      </section>
    </>
  )
}

export default HomePage;
