import { Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/home/Home';
import Create from './pages/create/Create';
import Recipe from './pages/recipe/Recipe';
import Search from './pages/search/Search';
import Navbar from './components/Navbar';
import ThemeSelector from './components/ThemeSelector';
import useTheme from './hooks/useTheme';

function App() {
  const { mode } = useTheme();
  return (
    <div className={`App ${mode}`}>
      <Navbar />
      <ThemeSelector />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/create' element={<Create />} />
        <Route path='/recipe/:recipeID' element={<Recipe />} />
        <Route path='/search' element={<Search />} />
      </Routes>
    </div>
  );
}

export default App;
