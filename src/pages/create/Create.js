// styles
import './Create.css';
//hooks
import React, { useEffect, useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
// firebase imports
import { colRef } from '../../firebase/config';
import { addDoc } from 'firebase/firestore';
export default function Create() {
  const navigate = useNavigate();
  const [title, setTitle] = useState('');
  const [method, setMethod] = useState('');
  const [cookingTime, setCookingTime] = useState('');
  const [newIngredient, setNewIngredient] = useState('');
  const [ingredients, setIngredients] = useState([]);

  // handle the submit event
  // function handleSubmit(e) {
  //   e.preventDefault();
  //   postData({
  //     title,
  //     ingredients,
  //     method,
  //     cookingTime: cookingTime + 'minutes',
  //   });
  //   console.log(data);
  // }
  // using promise format
  async function addData() {
    const docRef = await addDoc(colRef, {
      title,
      ingredients,
      method,
      cookingTime: cookingTime + 'minutes',
    });
  }
  function handleSubmit(e) {
    addData();
    navigate('/');
  }
  function handleAdd(e) {
    e.preventDefault();

    let ing = newIngredient.trim();
    if (ing && !ingredients.includes(ing)) {
      ingredients.push(ing);
      setIngredients(ingredients);
    }
    setNewIngredient('');
  }

  return (
    <div className='create'>
      <h2 className='page-title'>Add a New Recipe</h2>
      <form onSubmit={handleSubmit}>
        <label>
          <span>Recipe Title:</span>
          <input
            type='text'
            onChange={(e) => {
              setTitle(e.target.value);
            }}
            value={title}
            required
          />
        </label>
        {/* ingredients goes here */}
        <label>
          <span>
            Recipe Inredients:
            <div className='ingredients'>
              <input
                type='text'
                value={newIngredient}
                onChange={(e) => setNewIngredient(e.target.value)}
              />
              <button className='btn' onClick={handleAdd}>
                add
              </button>
            </div>
          </span>
        </label>
        <p>
          Current Ingredients:{' '}
          {ingredients.map((i) => (
            <em key={i}>{i},</em>
          ))}
        </p>
        <label>
          <span>Recipe Method:</span>
          <textarea
            onChange={(e) => {
              setMethod(e.target.value);
            }}
            value={method}
            required
          />
        </label>
        <label>
          <span>Cooking time(minutes):</span>
          <input
            type='number'
            onChange={(e) => {
              setCookingTime(e.target.value);
            }}
            value={cookingTime}
            required
          />
        </label>
        <button className='btn' type='submit'>
          submit
        </button>
      </form>
    </div>
  );
}
