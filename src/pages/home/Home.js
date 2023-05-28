import React, { useEffect, useState } from 'react';
//styles
import './Home.css';
// components
import Recipelist from '../../components/Recipelist';
//firebase imports
import { projectFirestore, colRef, db } from '../../firebase/config';
import {
  collection,
  query,
  doc,
  onSnapshot,
  QuerySnapshot,
} from 'firebase/firestore';

export default function Home() {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState(false);
  // since fetching of documents is done inside a useEffects hook
  useEffect(() => {
    // setIsPending(true);
    // async function getDocument() {
    //   const snapshot = await getDocs(colRef);
    //   const recipes = [];
    //   if (snapshot.empty) {
    //     setError('no recipes to load');
    //     setIsPending(false);
    //   } else {
    //     snapshot.forEach((doc) => {
    //       recipes.push({ ...doc.data(), id: doc.id });
    //     });
    //     setData(recipes);
    //     setIsPending(false);
    //   }
    // }
    // getDocument();
    const q = query(colRef);
    const unsub = onSnapshot(q, (querySnapshot) => {
      const recipes = [];
      querySnapshot.forEach((doc) => {
        recipes.push({ ...doc.data(), id: doc.id });
      });
      setData(recipes);
    });
    return () => unsub();
  }, []);
  return (
    <div className='home'>
      {error && <p className='error'>{error}</p>}
      {isPending && <p className='loading'>Loading...</p>}
      {data && <Recipelist recipes={data} />}
    </div>
  );
}
