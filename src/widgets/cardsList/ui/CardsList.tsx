import React from 'react';
import styles from './CardsList.module.css';
import { TPost } from 'shared/api';
import { StringCard } from 'entities/stringCard';

type TProps = {
  data: TPost[] | undefined;
  isFetching: boolean;
};

const CardsList = (props: TProps): JSX.Element => {
  const { data, isFetching } = props;
  return (
    <>
      {props.isFetching && (<h4>Загрузка...</h4>)}
      <ol className={styles.list}>
        {!isFetching && data && data.length && data.map(el => (
          <StringCard
            key={el.id}
            number={el.id}
            heading={el.title}
            description={el.body}
            to={`${el.id}`}
          />
        ))}
      </ol>
    </>
  )
}

export default CardsList;
