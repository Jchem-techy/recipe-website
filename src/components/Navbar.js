import React, { useContext } from 'react';
import { ThemeContext } from '../context/themeContext';
import useTheme from '../hooks/useTheme';
// styles
import './Navbar.css';
// components
import { Link } from 'react-router-dom';
import SearchBar from './SearchBar';
export default function Navbar() {
  const { color } = useTheme();

  return (
    <div className='navbar' style={{ background: color }}>
      <nav>
        <Link to='/' className='brand'>
          <h1>Cooking Ninja</h1>
        </Link>
        <SearchBar />
        <Link to='/create'>Create Recipe</Link>
      </nav>
    </div>
  );
}
