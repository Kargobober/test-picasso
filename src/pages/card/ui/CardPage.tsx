import { useEffect } from 'react';
import { SingleCard } from 'entities/singleCard';
import { Link, Navigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'shared/model/hooks';
import styles from './CardPage.module.css';
import { useGetPostByIdQuery } from 'shared/api';
import { NAME_FOR_404 } from 'shared/router';

const CardPage = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const { data, isUninitialized, isLoading, isFetching } = useGetPostByIdQuery(Number(id));

  if (isFetching) {
    return (<div>Загрузка</div>)
  } else {
    return (
      <section className={styles.section}>
        <Link to='/' className='text mt-4'> ← Назад</Link>
        {data ? (
          <SingleCard
            number={data.id}
            heading={data.title}
            description={data.body}
          />
        ) : (
          <Navigate to={NAME_FOR_404} />
        )}
      </section>
    )
  }
}

export default CardPage;
