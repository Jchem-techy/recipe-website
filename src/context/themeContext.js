import { createContext, useReducer } from 'react';
export const ThemeContext = createContext();
// reducer function
const themeReducer = (state, action) => {
  if (action.type === 'CHANGE_COLOR') {
    return { ...state, color: action.payload };
  }
  if (action.type === 'CHANGE_MODE') {
    return { ...state, mode: action.payload };
  }
  return state;
};
export function ThemeProvider({ children }) {
  const [state, dispatch] = useReducer(themeReducer, {
    color: '#58249c',
    mode: 'light',
  });
  const changeColor = (color) => {
    dispatch({ type: 'CHANGE_COLOR', payload: color });
  };
  const changeMode = function (mode) {
    dispatch({ type: 'CHANGE_MODE', payload: mode });
  };
  return (
    <ThemeContext.Provider value={{ ...state, changeColor, changeMode }}>
      {children}
    </ThemeContext.Provider>
  );
}
