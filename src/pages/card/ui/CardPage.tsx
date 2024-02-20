import { useEffect } from 'react';
import { SingleCard } from 'entities/singleCard';
import { Link, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'shared/model/hooks';
import { singleCardSelectors, singleCardSlice } from 'entities/stringCard';
import styles from './CardPage.module.css';

const CardPage = () => {
  const dispatch = useDispatch();
  const { id } = useParams();

  const singleCard = useSelector(singleCardSelectors.getSingleCard);

  useEffect(() => {
    dispatch(singleCardSlice.actions.findCard( Number(id) ));
  }, [id]);

  return (
    <section className={styles.section}>
      <Link to='/' className='text'> ← Назад</Link>
      <SingleCard
        number={singleCard?.number || '...'}
        heading={singleCard?.heading || '...'}
        description={singleCard?.description || '...'}
      />
    </section>
  )
}

export default CardPage;
