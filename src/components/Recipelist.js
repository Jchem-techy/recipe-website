//styles
import { Link } from 'react-router-dom';
import './Recipelist.css';
import React from 'react';
import useTheme from '../hooks/useTheme';
import Delete from '../assets/delete.svg';
// firebase imports
import { doc, deleteDoc } from 'firebase/firestore';
import { db } from '../firebase/config';
export default function Recipelist({ recipes }) {
  const { mode } = useTheme();
  if (recipes.length === 0) {
    return <div className='error'>No recipes to load...</div>;
  }
  async function deleteRecipe(id) {
    await deleteDoc(doc(db, 'recipes', id));
  }
  return (
    <div className='recipe-list'>
      {recipes.map((recipe) => {
        const { id, title, cookingTime, method } = recipe;
        return (
          <div key={id} className={`card ${mode}`}>
            <h3>{title}</h3>
            <p>{cookingTime} to make</p>
            <Link to={`/recipe/${(recipe, id)}`}>Cook This</Link>
            <img
              src={Delete}
              alt=''
              className='delete'
              onClick={() => deleteRecipe(id)}
            />
          </div>
        );
      })}
    </div>
  );
}
