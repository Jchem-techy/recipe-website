import React, { useEffect } from 'react';
import { useState } from 'react';
// styles
import './Recipe.css';
// hooks
import { useParams } from 'react-router-dom';
// theme
import useTheme from '../../hooks/useTheme';
// firebase imports
import { doc, getDoc, updateDoc, onSnapshot } from 'firebase/firestore';
import { db, colRef } from '../../firebase/config';
export default function Recipe() {
  const { recipeID } = useParams();
  const { mode } = useTheme();
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    setIsPending(true);
    console.log(recipeID);
    const unsub = onSnapshot(doc(db, 'recipes', recipeID), (doc) => {
      console.log('Current data: ', doc.data());
      setData(doc.data());
      setIsPending(false);
    });
  }, []);
  function handleClick(id) {
    const recipe = doc(db, 'recipes', id);
    updateDoc(recipe, { title: 'vegie stew' });
  }
  return (
    <div className={`recipe ${mode}`}>
      {error && <p className='error'>{error}</p>}
      {isPending && <p className='loading'>Loading...</p>}
      {data && (
        <>
          <h2 className='page-title'>{data.title}</h2>
          <p>Takes {data.cookingTime} to cook</p>
          <ul>
            {data.ingredients.map((ingredient) => {
              return <li key={ingredient}>{ingredient}</li>;
            })}
          </ul>
          <p className='method'>{data.method}</p>
          <button
            onClick={() => {
              handleClick(recipeID);
            }}
          >
            update me
          </button>
        </>
      )}
    </div>
  );
}
