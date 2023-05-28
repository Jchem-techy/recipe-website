import { useContext, useReducer } from 'react';
import { ThemeContext } from '../context/themeContext';
export default function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useContext() must be used inside a ThemeProvider');
  }
  return context;
}
