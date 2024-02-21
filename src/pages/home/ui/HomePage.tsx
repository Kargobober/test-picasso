import React from 'react';
import { useGetPostsQuery } from 'shared/api';
import { CardsList } from 'widgets/cardsList';

const HomePage = () => {
  const { data, isFetching } = useGetPostsQuery();

  return (
    <>
      <CardsList data={data} isFetching={isFetching} />
    </>
  )
}

export default HomePage;
