import React from 'react';
import { useLocation, useParams } from 'react-router-dom';
import useFetch from '../../hooks/useFetch';
import Recipelist from '../../components/Recipelist';

export default function Search() {
  const queryString = useLocation().search;
  const queryParams = new URLSearchParams(queryString);
  const query = queryParams.get('q');
  const url = 'http://localhost:3000/recipes?q=' + query;
  const { error, data, isPending } = useFetch(url);
  // if (data.length === 0) {
  //   return <div className='error'>No recipes to load...</div>;
  // }
  return (
    <div>
      <h2 className='page-title'>Recipes Including "{query}"</h2>
      {error && <p className='error'>{error}</p>}
      {isPending && <p className='loading'>Loading...</p>}
      {data && <Recipelist recipes={data} />}
    </div>
  );
}
